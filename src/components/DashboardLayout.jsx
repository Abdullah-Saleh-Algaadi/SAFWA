import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardLayout() {
  return (
    <>
      <div className="ambient-bg">
        <div className="ambient-orb-1"></div>
        <div className="ambient-orb-2"></div>
      </div>
      
      <div className="min-h-screen flex p-4 sm:p-8 gap-8 max-w-[1920px] mx-auto relative z-10">
        <Sidebar />
        
        <div className="flex-1 flex flex-col min-w-0 mr-0 lg:mr-[280px]">
          <Header />
          <main className="flex-1 py-8 relative">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
