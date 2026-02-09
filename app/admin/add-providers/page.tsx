"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { createProvider } from "@/lib/firestore";
import Link from "next/link";

// Dummy providers data
const dummyProviders = [
  {
    name: "Ahmed Al Mansoori",
    phone: "+971 50 111 1111",
    email: "ahmed@provider.com",
    serviceTypes: ["towing", "recovery"],
    maxCapacity: 5,
  },
  {
    name: "Mohammed Hassan",
    phone: "+971 50 222 2222",
    email: "mohammed@provider.com",
    serviceTypes: ["roadside", "battery"],
    maxCapacity: 5,
  },
  {
    name: "Khalid Al Zaabi",
    phone: "+971 50 333 3333",
    email: "khalid@provider.com",
    serviceTypes: ["towing", "recovery", "roadside"],
    maxCapacity: 5,
  },
  {
    name: "Omar Abdullah",
    phone: "+971 50 444 4444",
    email: "omar@provider.com",
    serviceTypes: ["flat-tire", "battery", "roadside"],
    maxCapacity: 5,
  },
  {
    name: "Youssef Al Marri",
    phone: "+971 50 555 5555",
    email: "youssef@provider.com",
    serviceTypes: ["towing", "recovery"],
    maxCapacity: 5,
  },
  {
    name: "Saeed Al Dhaheri",
    phone: "+971 50 666 6666",
    email: "saeed@provider.com",
    serviceTypes: ["roadside", "battery", "flat-tire"],
    maxCapacity: 5,
  },
  {
    name: "Hamad Al Suwaidi",
    phone: "+971 50 777 7777",
    email: "hamad@provider.com",
    serviceTypes: ["towing", "recovery", "roadside"],
    maxCapacity: 5,
  },
  {
    name: "Rashid Al Nuaimi",
    phone: "+971 50 888 8888",
    email: "rashid@provider.com",
    serviceTypes: ["battery", "flat-tire"],
    maxCapacity: 5,
  },
  {
    name: "Majid Al Shamsi",
    phone: "+971 50 999 9999",
    email: "majid@provider.com",
    serviceTypes: ["towing", "recovery", "roadside", "battery"],
    maxCapacity: 5,
  },
  {
    name: "Sultan Al Qasimi",
    phone: "+971 50 000 0000",
    email: "sultan@provider.com",
    serviceTypes: ["towing", "recovery", "flat-tire"],
    maxCapacity: 5,
  },
];

export default function AddProviders() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState<string[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      router.push("/admin/login");
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

  const addAllProviders = async () => {
    setAdding(true);
    setError("");
    setAdded([]);

    try {
      for (const provider of dummyProviders) {
        try {
          await createProvider({
            name: provider.name,
            phone: provider.phone,
            email: provider.email,
            serviceTypes: provider.serviceTypes,
            currentLoad: 0,
            maxCapacity: provider.maxCapacity,
            isActive: true,
            rating: 0,
            totalLeads: 0,
            completedLeads: 0,
          });
          setAdded((prev) => [...prev, provider.name]);
        } catch (err: any) {
          console.error(`Error adding ${provider.name}:`, err);
          // Continue with next provider even if one fails
        }
      }

      setTimeout(() => {
        router.push("/admin");
      }, 2000);
    } catch (err: any) {
      setError(err.message || "Failed to add providers");
    } finally {
      setAdding(false);
    }
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
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-gray-900">
              Add Dummy Providers
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

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Add 10 Dummy Providers
            </h2>
            <p className="text-gray-600">
              This will add 10 sample providers to your Firestore database for testing.
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          {added.length > 0 && (
            <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
              <p className="font-semibold mb-2">Successfully added:</p>
              <ul className="list-disc list-inside space-y-1">
                {added.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Providers to be added:
            </h3>
            <div className="space-y-3">
              {dummyProviders.map((provider, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">
                        {provider.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {provider.phone} • {provider.email}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Services: {provider.serviceTypes.join(", ")} • Capacity: {provider.maxCapacity}
                      </div>
                    </div>
                    {added.includes(provider.name) && (
                      <span className="text-green-600 text-sm font-medium">
                        ✓ Added
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={addAllProviders}
              disabled={adding || added.length === dummyProviders.length}
              className="bg-accent-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {adding
                ? "Adding Providers..."
                : added.length === dummyProviders.length
                ? "All Providers Added"
                : "Add All 10 Providers"}
            </button>
            <Link
              href="/admin"
              className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
