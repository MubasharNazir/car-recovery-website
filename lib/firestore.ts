// Firebase functionality removed - static website only
// This file is kept for compatibility but functions are stubbed

export interface LeadData {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  serviceType: string;
  location: string;
  source: 'website' | 'phone' | 'whatsapp';
  notes?: string;
}

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

// Stub functions - no Firebase functionality
export async function createLead(leadData: LeadData) {
  return { id: 'stub' };
}

export async function getAllLeads() {
  return [];
}

export async function getLead(leadId: string) {
  return null;
}

export async function updateLeadStatus(
  leadId: string, 
  status: string, 
  providerId?: string,
  providerName?: string
) {
  return null;
}

export async function getAllProviders() {
  return [];
}

export async function getProvider(providerId: string) {
  return null;
}

export async function getAvailableProviders(serviceType: string) {
  return [];
}

export async function updateProviderLoad(providerId: string, increment: number) {
  return null;
}

export async function createProvider(providerData: ProviderData) {
  return { id: 'stub' };
}

export function subscribeToLeads(callback: (leads: any[]) => void) {
  return () => {};
}

export function subscribeToProviders(callback: (providers: any[]) => void) {
  return () => {};
}
