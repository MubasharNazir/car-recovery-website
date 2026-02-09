import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  query, 
  where, 
  orderBy,
  onSnapshot,
  Timestamp,
  getDoc
} from 'firebase/firestore';
import { db } from './firebase';

// Lead operations
export interface LeadData {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  serviceType: string;
  location: string;
  source: 'website' | 'phone' | 'whatsapp';
  notes?: string;
}

export async function createLead(leadData: LeadData) {
  return await addDoc(collection(db, 'leads'), {
    ...leadData,
    status: 'pending',
    createdAt: Timestamp.now(),
    assignedProviderId: null,
    assignedProviderName: null,
    assignedAt: null,
    completedAt: null
  });
}

export async function getAllLeads() {
  const leadsRef = collection(db, 'leads');
  const q = query(leadsRef, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function getLead(leadId: string) {
  const leadRef = doc(db, 'leads', leadId);
  const leadSnap = await getDoc(leadRef);
  if (!leadSnap.exists()) return null;
  return { id: leadSnap.id, ...leadSnap.data() };
}

export async function updateLeadStatus(
  leadId: string, 
  status: string, 
  providerId?: string,
  providerName?: string
) {
  const leadRef = doc(db, 'leads', leadId);
  const updateData: any = { status };
  
  if (providerId && providerName) {
    updateData.assignedProviderId = providerId;
    updateData.assignedProviderName = providerName;
    updateData.assignedAt = Timestamp.now();
  }
  
  if (status === 'completed') {
    updateData.completedAt = Timestamp.now();
  }
  
  return await updateDoc(leadRef, updateData);
}

// Provider operations
export interface ProviderData {
  name: string;
  phone: string;
  email?: string;
  serviceTypes: string[];
  currentLoad: number;
  maxCapacity: number;
  isActive: boolean;
  rating?: number;
  totalLeads?: number;
  completedLeads?: number;
}

export async function getAllProviders() {
  const providersRef = collection(db, 'providers');
  const snapshot = await getDocs(providersRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function getProvider(providerId: string) {
  const providerRef = doc(db, 'providers', providerId);
  const providerSnap = await getDoc(providerRef);
  if (!providerSnap.exists()) return null;
  return { id: providerSnap.id, ...providerSnap.data() };
}

export async function getAvailableProviders(serviceType: string) {
  const providersRef = collection(db, 'providers');
  const q = query(
    providersRef,
    where('isActive', '==', true),
    where('serviceTypes', 'array-contains', serviceType)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs
    .map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    .filter((p: any) => (p.currentLoad || 0) < (p.maxCapacity || 5));
}

export async function updateProviderLoad(providerId: string, increment: number) {
  const providerRef = doc(db, 'providers', providerId);
  const provider = await getProvider(providerId);
  if (!provider) return;
  
  const newLoad = Math.max(0, ((provider.currentLoad as number) || 0) + increment);
  return await updateDoc(providerRef, {
    currentLoad: newLoad
  });
}

export async function createProvider(providerData: ProviderData) {
  return await addDoc(collection(db, 'providers'), {
    ...providerData,
    totalLeads: 0,
    completedLeads: 0,
    rating: 0,
    createdAt: Timestamp.now()
  });
}

// Real-time listeners
export function subscribeToLeads(callback: (leads: any[]) => void) {
  const leadsRef = collection(db, 'leads');
  const q = query(leadsRef, orderBy('createdAt', 'desc'));
  
  return onSnapshot(q, (snapshot) => {
    const leads = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(leads);
  });
}

export function subscribeToProviders(callback: (providers: any[]) => void) {
  const providersRef = collection(db, 'providers');
  
  return onSnapshot(providersRef, (snapshot) => {
    const providers = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(providers);
  });
}
