import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`h-20 glass-bespoke rounded-[24px] sticky top-8 z-30 flex items-center justify-between px-8 mx-0 mb-12 shadow-sm transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-[150%] opacity-0'}`}>
      <div className="flex items-center">
        <h1 className="text-xl font-black text-gradient uppercase tracking-[0.3em] font-sans">
          SAFWA
        </h1>
      </div>
      
      <div className="flex items-center gap-5">
        <div className="text-left hidden md:block">
          <p className="font-black text-navy leading-none mb-1 text-[15px]">أحمد عبدالله</p>
          <p className="text-[11px] font-bold text-teal tracking-widest uppercase">Client Access</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-white p-1 shadow-[0_4px_15px_rgba(21,33,54,0.08)] border border-gray-100">
          <div className="w-full h-full rounded-[10px] overflow-hidden bg-gray-50">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="User profile" 
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
