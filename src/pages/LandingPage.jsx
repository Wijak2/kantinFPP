import { Link } from "react-router-dom";
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>


function LandingPage() {
  return (
    <div
      className="min-h-screen w-full px-4 py-10 flex flex-col items-center justify-start"
    >
      {/* Hero Image + Overlay Text */}
      <div className="w-full max-w-4xl relative mb-10 rounded-3xl overflow-hidden shadow-lg">
        <img
          src="https://ptnzchpzjbzjxvvswzzp.supabase.co/storage/v1/object/sign/tenantimg/IMG_8140%20(1).JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yZDA5OWU0Ni0wZmFmLTRjNjgtYjBjZS04NDU2MmJiM2UyNDAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0ZW5hbnRpbWcvSU1HXzgxNDAgKDEpLkpQRyIsImlhdCI6MTc1MTU2NDE5NiwiZXhwIjoxNzgzMTAwMTk2fQ.XsnCO9J5VKaK4y-am4DnSxjcrUCgCfIM70_XMMDpRY4"
          alt="Kantin FPP"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <p className="text-white text-3xl font-bold drop-shadow">
            Selamat Datang di Kantin FPP Undip
          </p>
        </div>
      </div>

      {/* Deskripsi */}
      <div className="max-w-2xl text-center text-gray-700 mb-8 px-4">
        <p className="text-lg mb-4 leading-relaxed">
          Kantin Fakultas Peternakan dan Pertanian menyediakan beragam pilihan makanan
          dan minuman dari 5 tenant terpercaya. 
        </p>
        <p className="text-md mb-6 leading-relaxed">
          Beberapa tenant telah tersertifikasi halal dan menjamin kualitas serta
          kebersihan makanan. Nikmati makanan enak dengan harga terjangkau!
        </p>
      </div>

      {/* Info Card Ringan */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl w-full mt-2 mb-10">
        <div className="bg-[#ffefe6] rounded-xl shadow-sm p-4 text-center">
          <h3 className="text-[#8B4513] font-semibold text-lg">5 Tenant</h3>
          <p className="text-sm text-gray-600">Beragam pilihan makanan</p>
        </div>
        <div className="bg-[#ffefe6] rounded-xl shadow-sm p-4 text-center">
          <h3 className="text-[#8B4513] font-semibold text-lg">Halal & Bersih</h3>
          <p className="text-sm text-gray-600">Tersertifikasi & higienis</p>
        </div>
        <div className="bg-[#ffefe6] rounded-xl shadow-sm p-4 text-center">
          <h3 className="text-[#8B4513] font-semibold text-lg">Untuk Semua</h3>
          <p className="text-sm text-gray-600">Mahasiswa, staf, dan dosen</p>
        </div>
      </div>
    </div>
  );
}


<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

export default LandingPage;
