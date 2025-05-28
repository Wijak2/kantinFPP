import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import AOS from 'aos';
import 'aos/dist/aos.css';
import defaultImg from '../assets/kantin.JPG'; // fallback gambar jika tidak ada image_url

export default function TenantList() {
  const [tenants, setTenants] = useState([]);
  const [allMenus, setAllMenus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 1000, // kamu bisa sesuaikan durasi di sini
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      anchorPlacement: 'top-center',
    });

    const fetchData = async () => {
      const { data: tenantData } = await supabase.from('tenants').select().order('name');
      const { data: menuData } = await supabase.from('menus').select();
      setTenants(tenantData || []);
      setAllMenus(menuData || []);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 mb-20 min-h-screen">
      <h1 className="text-2xl font-bold text-[#5C4033] mb-6">Pilih Kantin</h1>

      <div className="flex flex-wrap gap-4">
        {tenants.map(t => {
          const menuCount = allMenus.filter(m => m.tenant_id === t.id).length;
          const imageSrc = t.image_url || defaultImg;

          return (
            <div
              key={t.id}
              onClick={() => navigate(`/menu/${t.id}`)}
              className="cursor-pointer relative w-full sm:w-48 bg-white border rounded-[20px] shadow transition transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top"
            >
              <div className="h-39">
                <img
                  src={imageSrc}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-center font-semibold">{t.name}</p>
                <p className="text-center text-sm text-gray-500">{menuCount} Menu</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
