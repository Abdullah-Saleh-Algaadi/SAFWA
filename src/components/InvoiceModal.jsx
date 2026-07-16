import { Wrench, Users, Download, X } from 'lucide-react';
import { useEffect } from 'react';

export default function InvoiceModal({ isOpen, onClose }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}`} 
      dir="rtl"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-navy/40 backdrop-blur-xl transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className={`glass-bespoke shadow-[0_40px_80px_rgba(21,33,54,0.15)] rounded-[3rem] overflow-hidden relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}>
        
        {/* Abstract Ambient Lights inside modal */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-navy/5 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Header */}
        <div className="px-10 pt-10 pb-6 flex justify-between items-start relative z-10 shrink-0 border-b border-gray-100/50">
          <div className="text-right">
            <h1 className="text-5xl font-black text-navy mb-4 tracking-tighter">فاتورة صيانة</h1>
            <p className="text-teal font-black uppercase tracking-[0.2em] text-[10px]">Elite Auto Service Center</p>
          </div>
          
          <div className="text-left flex flex-col items-end">
            <button 
              onClick={onClose}
              className="mb-8 w-12 h-12 rounded-full bg-gray-100/50 hover:bg-white text-gray-500 flex items-center justify-center transition-colors shadow-sm"
            >
              <X size={20} />
            </button>
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Invoice No.</p>
            <p className="text-3xl font-black text-navy font-sans tracking-tighter">#INV-2023-089</p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 relative z-10 custom-scrollbar">
          <div className="p-10 pt-8">
            
            {/* Info section (Bento style) */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-white/40 rounded-[2rem] p-8 border border-white/50">
                <p className="text-teal text-[10px] font-black uppercase tracking-[0.2em] mb-4">Client Details</p>
                <p className="text-2xl font-black text-navy mb-1">أحمد عبدالله</p>
                <p className="text-gray-500 font-sans font-bold tracking-wide" dir="ltr">+966 50 123 4567</p>
              </div>
              <div className="bg-white/40 rounded-[2rem] p-8 border border-white/50">
                <p className="text-teal text-[10px] font-black uppercase tracking-[0.2em] mb-4">Vehicle Details</p>
                <p className="text-2xl font-black text-navy mb-1">تويوتا لاندكروزر</p>
                <p className="text-gray-500 font-sans font-bold tracking-widest">A B C 123</p>
              </div>
            </div>

            {/* Parts Table */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal border border-teal/20">
                  <Wrench size={18} />
                </div>
                <h2 className="text-2xl font-black text-navy">قطع الغيار</h2>
              </div>
              <div className="space-y-3">
                {[
                  { id: 1, desc: 'فلاتر زيت أصلية', qty: 2, price: '120.00', total: '240.00' },
                  { id: 2, desc: 'طقم فرامل أمامي', qty: 1, price: '850.00', total: '850.00' }
                ].map((item) => (
                  <div key={item.id} className="bg-white/50 rounded-2xl p-4 px-6 flex items-center justify-between border border-white/30 hover:bg-white transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-300 font-black font-sans w-6">{item.id}</span>
                      <div>
                        <h4 className="font-bold text-navy">{item.desc}</h4>
                        <p className="text-gray-400 text-xs font-bold font-sans tracking-wide mt-1">QTY: {item.qty} &bull; SAR {item.price}</p>
                      </div>
                    </div>
                    <div className="text-right" dir="ltr">
                      <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] block mb-1">SAR</span>
                      <span className="text-xl font-black text-navy font-sans">{item.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Labor Table */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy border border-navy/10">
                  <Users size={18} />
                </div>
                <h2 className="text-2xl font-black text-navy">أجور العمل</h2>
              </div>
              <div className="space-y-3">
                {[
                  { id: 1, desc: 'تغيير زيت وفلاتر', total: '150.00' },
                  { id: 2, desc: 'تركيب طقم فرامل أمامي وفحص النظام', total: '300.00' }
                ].map((item) => (
                  <div key={item.id} className="bg-white/50 rounded-2xl p-4 px-6 flex items-center justify-between border border-white/30 hover:bg-white transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-300 font-black font-sans w-6">{item.id}</span>
                      <h4 className="font-bold text-navy">{item.desc}</h4>
                    </div>
                    <div className="text-right" dir="ltr">
                      <span className="text-xl font-black text-navy font-sans">{item.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Summary */}
          <div className="bg-navy p-10 flex flex-col md:flex-row justify-between items-end gap-10 relative shrink-0">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-bl-full blur-[60px] pointer-events-none"></div>
            
            <div className="w-full md:w-1/2 relative z-10 hidden sm:block">
              <div className="bg-white/5 p-6 rounded-3xl text-gray-300 text-sm border border-white/10 backdrop-blur-md">
                <span className="text-teal-light font-black uppercase tracking-[0.2em] text-[10px] mb-2 block">Tech Notes</span>
                <p className="leading-relaxed">تم فحص ضغط الإطارات وتعبئتها. يوصى بفحص البطارية في الزيارة القادمة.</p>
              </div>
            </div>
            
            <div className="w-full sm:w-1/3 text-right relative z-10">
              <div className="flex justify-between items-center py-2 text-gray-300">
                <span className="font-bold">قطع الغيار</span>
                <span className="font-black font-sans">1,090.00</span>
              </div>
              <div className="flex justify-between items-center py-2 text-gray-300 border-b border-white/10 mb-4 pb-4">
                <span className="font-bold">أجور العمل والضريبة</span>
                <span className="font-black font-sans">681.00</span>
              </div>
              <div className="flex justify-between items-end mb-8">
                <span className="text-sm font-black text-teal-light uppercase tracking-widest">Total</span>
                <div dir="ltr" className="text-left">
                  <span className="text-sm text-teal-light font-black uppercase tracking-[0.2em] block mb-1">SAR</span>
                  <span className="text-5xl font-black text-white font-sans tracking-tighter">1,771</span>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-black rounded-2xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                <Download size={20} />
                تحميل الفاتورة PDF
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
