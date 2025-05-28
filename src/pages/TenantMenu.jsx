import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TenantMenu() {
  const { id } = useParams();
  const [menus, setMenus] = useState({ makanan: [], minuman: [], lain: [] });
  const [tenantName, setTenantName] = useState('');

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
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      anchorPlacement: 'top-center',
    });

    const fetchMenu = async () => {
      const { data: tenantData } = await supabase.from('tenants').select().eq('id', id).single();
      const { data: menuData } = await supabase.from('menus').select().eq('tenant_id', id);

      setTenantName(tenantData?.name || '');
      setMenus({
        makanan: menuData.filter(m => m.category === 0),
        minuman: menuData.filter(m => m.category === 1),
        lain: menuData.filter(m => m.category === 2),
      });
    };
    fetchMenu();
  }, [id]);

  const renderList = (sectionId, label, items) =>
    items.length > 0 && (
      <div className="mb-8" id={sectionId}>
        <h2 className="text-xl font-semibold mb-2"
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top">{label}</h2>
        {items.map(item => (
          <div
            key={item.id}
            className="border p-3 rounded mb-1 flex justify-between bg-white"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <span>{item.name}</span>
            <span className="text-[#5C4033] font-semibold">Rp{item.price}</span>
          </div>
        ))}
      </div>
    );

  return (
    <div className="p-4 mb-20 scroll-smooth">
      <h1 className="text-2xl font-bold text-[#5C4033] mb-4">Kantin {tenantName}</h1>

      {/* Anchor buttons */}
      <div className="flex gap-2 mb-6">
        <a
          href="#makanan"
          className="px-4 py-2 rounded-full text-sm font-medium border bg-white text-[#5C4033] border-[#5C4033] hover:bg-[#5C4033] hover:text-white transition"
        >
          Makanan
        </a>
        <a
          href="#minuman"
          className="px-4 py-2 rounded-full text-sm font-medium border bg-white text-[#5C4033] border-[#5C4033] hover:bg-[#5C4033] hover:text-white transition"
        >
          Minuman
        </a>
        <a
          href="#lain"
          className="px-4 py-2 rounded-full text-sm font-medium border bg-white text-[#5C4033] border-[#5C4033] hover:bg-[#5C4033] hover:text-white transition"
        >
          Lain-lain
        </a>
      </div>

      {renderList('makanan', 'Makanan', menus.makanan)}
      {renderList('minuman', 'Minuman', menus.minuman)}
      {renderList('lain', 'Lain-lain', menus.lain)}
    </div>
  );
}
