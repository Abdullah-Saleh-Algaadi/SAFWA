import { NavLink } from 'react-router-dom';
import { 
  CarFront, 
  ReceiptText, 
  History, 
  HelpCircle, 
  LogOut,
  Wrench,
  X
} from 'lucide-react';

export default function Sidebar({ isOpen, setIsOpen }) {
  const navItems = [
    { name: 'تتبع حالة السيارة', path: '/', icon: History },
    { name: 'سياراتي', path: '/vehicles', icon: CarFront },
    { name: 'استعراض الفواتير', path: '/invoices', icon: ReceiptText },
  ];

  return (
    <aside className={`w-[280px] glass-dark-bespoke h-full sm:h-[calc(100vh-4rem)] rounded-l-[32px] sm:rounded-[32px] fixed top-0 sm:top-8 right-0 sm:right-8 flex flex-col py-8 z-50 overflow-hidden shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : 'translate-x-[150%] lg:translate-x-0'}`}>
      {/* Brand */}
      <div className="flex items-center px-8 mb-12 relative z-10">
        <div className="ml-4 text-right flex-1">
          <h1 className="text-3xl font-black text-white tracking-widest leading-none mb-1 font-sans">SAFWA</h1>
          <p className="text-[9px] text-teal/80 tracking-[0.2em] font-bold uppercase">Smart Workshop</p>
        </div>
        
        {/* Mobile Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white lg:hidden hover:bg-white/20 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Desktop Icon */}
        <div className="w-12 h-12 rounded-2xl hidden lg:flex items-center justify-center text-white shrink-0 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-teal to-teal-dark opacity-50 blur-lg group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative w-full h-full bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
            <Wrench size={22} className="opacity-90 group-hover:rotate-12 transition-transform duration-500" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 space-y-2 relative z-10">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center px-5 py-4 rounded-2xl transition-all duration-500 relative group overflow-hidden ${
                isActive
                  ? 'text-white bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] border border-white/5'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-teal rounded-r-full shadow-[0_0_15px_rgba(13,124,134,1)]"></div>
                )}
                <item.icon 
                  size={20} 
                  className={`ml-4 shrink-0 transition-transform duration-500 ${isActive ? 'text-teal scale-110 drop-shadow-[0_0_8px_rgba(13,124,134,0.8)]' : 'group-hover:scale-110'}`} 
                />
                <span className={`font-bold text-[15px] tracking-wide relative z-10 transition-colors duration-500 ${isActive ? 'text-white' : ''}`}>
                  {item.name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer Navigation */}
      <div className="px-4 space-y-2 mt-auto relative z-10">
        <button className="w-full flex items-center px-5 py-4 text-gray-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-500 group">
          <HelpCircle size={20} className="ml-4 shrink-0 group-hover:rotate-12 transition-transform duration-500" />
          <span className="font-bold text-[15px] tracking-wide">مركز المساعدة</span>
        </button>
        <button className="w-full flex items-center px-5 py-4 text-gray-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-500 group">
          <LogOut size={20} className="ml-4 shrink-0 group-hover:-translate-x-1 transition-transform duration-500" />
          <span className="font-bold text-[15px] tracking-wide">تسجيل الخروج</span>
        </button>
      </div>

      {/* Background Ornaments */}
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-teal/20 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-teal-light/10 blur-[80px] rounded-full pointer-events-none"></div>
    </aside>
  );
}
