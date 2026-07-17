import { Check, Car, UserCircle2, Clock } from 'lucide-react';

export default function LiveTracking() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div className="mb-8 px-2">
        <h1 className="text-4xl font-black text-navy mb-3 tracking-tighter">الحالة المباشرة</h1>
        <p className="text-gray-500 font-bold text-lg">تابع حالة مركبتك لحظة بلحظة داخل الورشة.</p>
      </div>

      <div className="glass-bespoke rounded-[2.5rem] p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-bl-[100px] -z-0"></div>
        <h2 className="text-2xl font-black text-navy mb-16 relative z-10">مسار الصيانة</h2>

        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center px-2 md:px-6 z-10 gap-8 md:gap-0">
          {/* Progress Line */}
          <div className="absolute top-6 bottom-6 right-9 w-1.5 md:w-auto md:h-1.5 md:top-6 md:bottom-auto md:left-12 md:right-12 bg-gray-100 -z-10 rounded-full"></div>
          <div className="absolute top-6 right-9 w-1.5 h-[60%] md:h-1.5 md:w-[60%] md:bottom-auto md:right-12 bg-gradient-to-b md:bg-gradient-to-l from-teal to-teal-light -z-10 rounded-full shadow-[0_0_10px_rgba(13,124,134,0.3)]"></div>

          {/* Step 1 */}
          <div className="flex flex-row md:flex-col items-center z-10 w-full md:w-36 text-right md:text-center group gap-6 md:gap-0">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal to-teal-dark text-white flex items-center justify-center md:mb-5 shadow-lg shadow-teal/30 transition-transform group-hover:scale-110 border border-teal/20 shrink-0">
              <Check size={24} />
            </div>
            <div className="flex-1 md:flex-none">
              <h3 className="font-bold text-navy text-base mb-1.5">استلام السيارة</h3>
              <div className="flex items-center gap-1.5 text-gray-400 text-sm font-medium">
                <Clock size={14} />
                09:00 ص
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-row md:flex-col items-center z-10 w-full md:w-36 text-right md:text-center group gap-6 md:gap-0">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal to-teal-dark text-white flex items-center justify-center md:mb-5 shadow-lg shadow-teal/30 transition-transform group-hover:scale-110 border border-teal/20 shrink-0">
              <Check size={24} />
            </div>
            <div className="flex-1 md:flex-none">
              <h3 className="font-bold text-navy text-base mb-1.5">الفحص والتشخيص</h3>
              <div className="flex items-center gap-1.5 text-gray-400 text-sm font-medium">
                <Clock size={14} />
                10:30 ص
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-row md:flex-col items-center z-10 w-full md:w-36 text-right md:text-center group gap-6 md:gap-0">
            <div className="w-14 h-14 rounded-full bg-white border-4 border-teal flex items-center justify-center md:mb-5 relative shadow-[0_0_20px_rgba(13,124,134,0.4)] shrink-0">
              <div className="w-4 h-4 bg-teal rounded-full animate-pulse"></div>
              <div className="absolute inset-[-4px] rounded-full border-4 border-teal animate-ping opacity-20"></div>
            </div>
            <div className="flex-1 md:flex-none">
              <h3 className="font-black text-teal text-lg mb-1">جاري الإصلاح</h3>
              <p className="inline-block text-teal-light font-bold text-sm bg-teal/10 px-3 py-1 rounded-full border border-teal/20">يتم العمل حالياً</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-row md:flex-col items-center z-10 w-full md:w-36 text-right md:text-center group gap-6 md:gap-0">
            <div className="w-14 h-14 rounded-full bg-gray-50 border-2 border-gray-200 text-gray-300 flex items-center justify-center md:mb-5 transition-transform group-hover:scale-110 shrink-0">
              <Car size={24} />
            </div>
            <div className="flex-1 md:flex-none">
              <h3 className="font-bold text-gray-400 text-base mb-1.5">جاهزة للاستلام</h3>
              <p className="text-gray-300 font-medium text-sm">قريباً</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-bespoke rounded-[2.5rem] p-8 relative overflow-hidden bento-hover">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-bl-full blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal/5 rounded-tr-full blur-2xl pointer-events-none"></div>
          
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div>
              <h2 className="text-3xl font-black text-navy mb-2 tracking-tighter">تفاصيل المركبة</h2>
              <p className="font-bold text-gray-400">معلومات أساسية عن المركبة تحت الصيانة.</p>
            </div>
            <div className="bg-gray-50/50 backdrop-blur-md border border-gray-200 px-5 py-3 rounded-2xl text-center min-w-[120px] shadow-sm">
              <div className="text-sm text-teal font-bold tracking-widest mb-1">أ ب ت</div>
              <div className="text-navy font-black text-xl tracking-widest font-sans">1234</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 text-center border border-gray-200 hover:bg-white transition-colors shadow-sm">
              <p className="text-sm font-bold text-teal mb-2">المصنع</p>
              <p className="font-black text-navy text-lg">Toyota</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 text-center border border-gray-200 hover:bg-white transition-colors shadow-sm">
              <p className="text-sm font-bold text-teal mb-2">الموديل</p>
              <p className="font-black text-navy text-lg">Land Cruiser</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 text-center border border-gray-200 hover:bg-white transition-colors shadow-sm">
              <p className="text-sm font-bold text-teal mb-2">السنة</p>
              <p className="font-black text-navy text-lg font-sans">2023</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 text-center border border-gray-200 hover:bg-white transition-colors shadow-sm">
              <p className="text-sm font-bold text-teal mb-2">رقم الهيكل</p>
              <p className="font-black text-navy text-lg font-sans">...JTMHT</p>
            </div>
          </div>
        </div>

        <div className="bg-navy rounded-[2.5rem] shadow-[0_20px_40px_rgba(21,33,54,0.3)] text-white p-8 relative overflow-hidden flex flex-col bento-hover">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal/20 rounded-bl-full blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal/10 rounded-tr-full blur-2xl pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md border border-white/10">
              <UserCircle2 size={24} className="text-teal-light" />
            </div>
            <h2 className="text-xl font-black tracking-wide">ملاحظة الفني</h2>
          </div>

          <div className="flex-1 relative z-10">
            <p className="text-gray-300 text-[15px] leading-relaxed font-medium">
              "تم الانتهاء من فحص نظام التعليق وتغيير المساعدات الأمامية بنجاح. جاري العمل حالياً على وزن الأذرعة وبرمجة الحساسات لضمان أفضل أداء."
            </p>
          </div>

          <div className="flex justify-between items-center relative z-10 border-t border-white/10 pt-5 mt-8">
            <span className="bg-teal/20 text-teal-light px-4 py-2 rounded-xl font-bold text-xs border border-teal/30">
              تحديث قبل 15 دقيقة
            </span>
            <span className="font-bold text-sm text-gray-300">الفني: أحمد محمد</span>
          </div>
        </div>
      </div>
    </div>
  );
}
