import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { MessageCircle } from "lucide-react";

export default function AdminDashboard() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const { data, error } = await supabase
      .from("feedback")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Gagal mengambil data:", error.message);
    } else {
      setFeedbackList(data);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 min-h-screen bg-[#f4f6f8]">
      <div className="flex items-center gap-2 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Daftar Feedback</h2>
        <p className="text-sm text-gray-500">
          Masukan dari pengguna untuk pengembangan layanan
        </p>
      </div>

      {loading ? (
        <p className="text-gray-600">Memuat data...</p>
      ) : feedbackList.length === 0 ? (
        <p className="text-gray-500">Tidak ada feedback yang tersedia.</p>
      ) : (
        <div className="space-y-4">
          {feedbackList.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <p className="text-gray-800 mb-2">
                <strong>Pesan:</strong> {item.message}
              </p>
              {item.name && (
                <p className="text-gray-600 text-sm">
                  <strong>Nama:</strong> {item.name}
                </p>
              )}
              {item.email && (
                <p className="text-gray-600 text-sm">
                  <strong>Email:</strong> {item.email}
                </p>
              )}
              <p className="text-xs text-gray-400 mt-2">
                {new Date(item.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
