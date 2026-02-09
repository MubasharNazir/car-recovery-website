"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { createLead } from "@/lib/firestore";
import { assignLeadToProvider } from "@/lib/leadAssignment";
import Link from "next/link";

export default function QuickEntry() {
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    serviceType: "",
    location: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      router.push("/admin/login");
      return;
    }
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push("/admin/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!formData.customerName || !formData.customerPhone || !formData.serviceType) {
        setError("Please fill in all required fields");
        setLoading(false);
        return;
      }

      // Create lead in Firebase
      const leadRef = await createLead({
        customerName: formData.customerName,
        customerPhone: formData.customerPhone,
        serviceType: formData.serviceType,
        location: formData.location || "Abu Dhabi",
        source: "phone",
        notes: formData.notes
      });

      // Auto-assign provider
      await assignLeadToProvider(leadRef.id, formData.serviceType);

      setSubmitted(true);
      setFormData({
        customerName: "",
        customerPhone: "",
        serviceType: "",
        location: "",
        notes: "",
      });

      setTimeout(() => {
        setSubmitted(false);
        router.push("/admin");
      }, 2000);
    } catch (err) {
      console.error("Error creating lead:", err);
      setError("Failed to create lead. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-gray-900">
              Quick Lead Entry (Phone Call)
            </h1>
            <Link
              href="/admin"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-4">
                <p className="font-semibold">Lead created successfully!</p>
                <p className="mt-2">Provider has been assigned and notified.</p>
              </div>
              <p className="text-sm text-gray-600">Redirecting to dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label
                  htmlFor="customerName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Customer Name *
                </label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  required
                  value={formData.customerName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                  placeholder="Enter customer name"
                />
              </div>

              <div>
                <label
                  htmlFor="customerPhone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="customerPhone"
                  name="customerPhone"
                  required
                  value={formData.customerPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                  placeholder="+971 557540296"
                />
              </div>

              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="towing">Vehicle Towing</option>
                  <option value="recovery">Car Recovery</option>
                  <option value="roadside">Roadside Assistance</option>
                  <option value="flat-tire">Flat Tire Service</option>
                  <option value="battery">Battery Service</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                  placeholder="Abu Dhabi City, Al Ain, etc."
                />
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                  placeholder="Any additional information from the call..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-accent-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Creating Lead..." : "Create Lead"}
                </button>
                <Link
                  href="/admin"
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
