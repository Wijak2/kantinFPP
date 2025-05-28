import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function FeedbackForm() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setStatus('Pesan tidak boleh kosong.');
      return;
    }

    const { error } = await supabase.from('feedback').insert([
      { message, name, email }
    ]);

    if (error) {
      setStatus('Gagal mengirim feedback.');
    } else {
      setStatus('Feedback berhasil dikirim!');
      setMessage('');
      setName('');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#5C4033]">Kirim Feedback</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-[#5C4033]">Pesan*</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              className="w-full border border-gray-300 p-3 rounded-xl resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
              rows={4}
              placeholder="Tulis pesan Anda di sini..."
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-[#5C4033]">Nama</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
              placeholder="Opsional"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-[#5C4033]">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
              placeholder="Opsional"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#8B4513] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#6f3613] transition"
          >
            Kirim
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-sm text-gray-700">{status}</p>
        )}

        <hr className="my-8" />

        <div className="text-center">
          <button
            onClick={() => navigate('/login')}
            className="text-[#8B4513] font-medium hover:underline"
          >
            Login sebagai Admin
          </button>
        </div>
      </div>
    </div>
  );
}
