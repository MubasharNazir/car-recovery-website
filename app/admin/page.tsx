"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { subscribeToLeads, subscribeToProviders, updateLeadStatus } from "@/lib/firestore";
import { completeLead } from "@/lib/leadAssignment";
import { createWhatsAppLink } from "@/lib/whatsappSender";
import Link from "next/link";

export default function AdminDashboard() {
  const [leads, setLeads] = useState<any[]>([]);
  const [providers, setProviders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [filter, setFilter] = useState<string>("all");
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        router.push("/admin/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    if (!user) return;

    // Subscribe to real-time leads
    const unsubscribeLeads = subscribeToLeads((updatedLeads) => {
      setLeads(updatedLeads);
    });

    // Subscribe to real-time providers
    const unsubscribeProviders = subscribeToProviders((updatedProviders) => {
      setProviders(updatedProviders);
    });

    return () => {
      unsubscribeLeads();
      unsubscribeProviders();
    };
  }, [user]);

  const handleLogout = async () => {
    if (!auth) {
      router.push("/admin/login");
      return;
    }
    
    try {
      await signOut(auth);
      router.push("/admin/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleStatusUpdate = async (leadId: string, newStatus: string) => {
    try {
      if (newStatus === "completed") {
        await completeLead(leadId);
      } else {
        await updateLeadStatus(leadId, newStatus);
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    }
  };

  const handleSendWhatsApp = (lead: any, provider: any) => {
    if (!provider || !provider.phone) {
      alert("Provider phone number not available");
      return;
    }

    const message = `🚗 *New Lead Assigned!*\n\n` +
      `*Lead ID:* #${lead.id.slice(0, 8)}\n` +
      `*Customer:* ${lead.customerName}\n` +
      `*Phone:* ${lead.customerPhone}\n` +
      `*Service:* ${lead.serviceType || 'N/A'}\n` +
      `*Location:* ${lead.location || 'Abu Dhabi'}\n` +
      `\n⏰ Please contact customer within 5 minutes.`;

    const whatsappLink = createWhatsAppLink(provider.phone, message);
    window.open(whatsappLink, '_blank');
  };

  const filteredLeads = filter === "all" 
    ? leads 
    : leads.filter((lead: any) => lead.status === filter);

  const stats = {
    pending: leads.filter((l: any) => l.status === "pending").length,
    assigned: leads.filter((l: any) => l.status === "assigned").length,
    inProgress: leads.filter((l: any) => l.status === "in_progress").length,
    completed: leads.filter((l: any) => l.status === "completed").length,
    total: leads.length,
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-gray-900">
              Lead Management Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <Link
                href="/admin/quick-entry"
                className="bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-700 transition-colors"
              >
                Phone Entry
              </Link>
              <Link
                href="/admin/whatsapp-entry"
                className="bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#20BA5A] transition-colors"
              >
                WhatsApp Entry
              </Link>
              <Link
                href="/admin/add-providers"
                className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                Add Providers
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Leads</div>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow-sm border border-yellow-200">
            <div className="text-3xl font-bold text-yellow-700 mb-1">{stats.pending}</div>
            <div className="text-sm text-yellow-600">Pending</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200">
            <div className="text-3xl font-bold text-blue-700 mb-1">{stats.assigned}</div>
            <div className="text-sm text-blue-600">Assigned</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-sm border border-purple-200">
            <div className="text-3xl font-bold text-purple-700 mb-1">{stats.inProgress}</div>
            <div className="text-sm text-purple-600">In Progress</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-200">
            <div className="text-3xl font-bold text-green-700 mb-1">{stats.completed}</div>
            <div className="text-sm text-green-600">Completed</div>
          </div>
        </div>

        {/* Provider Status */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Provider Status</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {providers.map((provider: any) => (
              <div key={provider.id} className="border border-gray-200 rounded-lg p-4">
                <div className="font-medium text-gray-900 mb-1">{provider.name}</div>
                <div className="text-sm text-gray-600">
                  Load: {provider.currentLoad || 0}/{provider.maxCapacity || 5}
                </div>
                <div className={`text-xs mt-1 ${provider.isActive ? 'text-green-600' : 'text-red-600'}`}>
                  {provider.isActive ? 'Active' : 'Inactive'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "all"
                ? "bg-accent-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "pending"
                ? "bg-accent-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter("assigned")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "assigned"
                ? "bg-accent-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Assigned
          </button>
          <button
            onClick={() => setFilter("in_progress")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "in_progress"
                ? "bg-accent-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "completed"
                ? "bg-accent-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Completed
          </button>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Provider
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-8 text-center text-gray-500">
                      No leads found
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead: any) => (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                        #{lead.id.slice(0, 8)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {lead.customerName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <a href={`tel:${lead.customerPhone}`} className="text-accent-600 hover:text-accent-700">
                          {lead.customerPhone}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {lead.serviceType || "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <span>{lead.assignedProviderName || "-"}</span>
                          {lead.assignedProviderName && providers.find((p: any) => p.name === lead.assignedProviderName) && (
                            <button
                              onClick={() => {
                                const provider = providers.find((p: any) => p.name === lead.assignedProviderName);
                                if (provider) handleSendWhatsApp(lead, provider);
                              }}
                              className="bg-[#25D366] text-white p-1.5 rounded hover:bg-[#20BA5A] transition-colors"
                              title="Send WhatsApp to provider"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                              </svg>
                            </button>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            lead.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : lead.status === "in_progress"
                              ? "bg-blue-100 text-blue-800"
                              : lead.status === "assigned"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {lead.status || "pending"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {lead.createdAt
                          ? new Date(lead.createdAt.seconds * 1000).toLocaleString()
                          : "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {lead.status !== "completed" && (
                          <select
                            value={lead.status || "pending"}
                            onChange={(e) => handleStatusUpdate(lead.id, e.target.value)}
                            className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-accent-600"
                          >
                            <option value="pending">Pending</option>
                            <option value="assigned">Assigned</option>
                            <option value="in_progress">In Progress</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
