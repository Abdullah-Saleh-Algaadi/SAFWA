import { Car, Truck, ChevronLeft, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MyVehicles() {
  const vehicles = [
    {
      id: 1,
      make: 'مرسيدس بنز S-Class',
      model: 'موديل 2023',
      plateStr: 'ب ح ر 1234',
      status: 'في الورشة',
      inWorkshop: true,
      icon: Car
    },
    {
      id: 2,
      make: 'تويوتا كامري',
      model: 'موديل 2021',
      plateStr: 'ا س د 9876',
      status: 'خارج الورشة',
      inWorkshop: false,
      icon: Car
    },
    {
      id: 3,
      make: 'فورد ترانزيت',
      model: 'موديل 2019',
      plateStr: 'م ن و 4567',
      status: 'في الورشة',
      inWorkshop: true,
      icon: Truck
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-12">

      {/* Header */}
      <div className="flex justify-between items-end px-2">
        <div>
          <h1 className="text-5xl font-black text-navy mb-4 tracking-tighter">سياراتي</h1>
          <p className="text-gray-400 font-bold text-lg">
            إدارة ومتابعة أسطول مركباتك
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <div key={v.id} className="group relative overflow-hidden rounded-[2.5rem] p-[2px] bento-hover">
            {/* Gradient Border Illusion */}
            <div className={`absolute inset-0 bg-gradient-to-br ${v.inWorkshop ? 'from-teal/40 via-transparent to-navy/40' : 'from-gray-200 via-transparent to-gray-200'} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>

            <div className="relative h-full bg-white/70 backdrop-blur-3xl rounded-[2.4rem] p-8 flex flex-col z-10 border border-gray-200">

              <div className="flex justify-between items-start mb-12">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner ${v.inWorkshop ? 'bg-gradient-to-br from-navy to-navy-dark text-teal-light' : 'bg-gray-100 text-gray-400'}`}>
                  <v.icon size={26} className={v.inWorkshop ? "drop-shadow-[0_0_8px_rgba(13,124,134,0.8)]" : ""} />
                </div>

                <div className="flex flex-col items-end gap-2">
                  {v.inWorkshop ? (
                    <div className="flex items-center gap-2 bg-teal/10 px-3 py-1.5 rounded-full border border-teal/20">
                      <span className="w-2 h-2 rounded-full bg-teal animate-pulse shadow-[0_0_8px_rgba(13,124,134,0.8)]"></span>
                      <span className="text-teal font-black text-xs tracking-widest uppercase">Active</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      <span className="text-gray-500 font-bold text-xs tracking-widest uppercase">Idle</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-3xl font-black text-navy mb-2 tracking-tight group-hover:-translate-y-1 transition-transform duration-500">{v.make}</h2>
                <p className="text-gray-400 font-bold">{v.model}</p>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-200/50 flex justify-between items-end">
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Plate</p>
                  <div className="font-sans font-black text-navy tracking-widest text-lg bg-gray-100/50 px-3 py-1 rounded-lg border border-gray-200/50">
                    {v.plateStr}
                  </div>
                </div>

                {v.inWorkshop ? (
                  <Link to="/" className="w-12 h-12 rounded-[1rem] bg-navy text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-navy/20">
                    <ChevronLeft size={20} />
                  </Link>
                ) : (
                  <button disabled className="w-12 h-12 rounded-[1rem] bg-gray-100 text-gray-300 flex items-center justify-center cursor-not-allowed">
                    <ChevronLeft size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
