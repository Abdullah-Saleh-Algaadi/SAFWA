import { Download, Filter, FileText, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import InvoiceModal from '../components/InvoiceModal';

export default function Invoices() {
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (invoice) => {
    setSelectedInvoice(invoice);
    setIsModalOpen(true);
  };

  const invoices = [
    { id: 'INV-2023-089', date: '15 أكتوبر 2023', carMake: 'Toyota Camry', carPlate: 'ABC-1234', amount: '850', status: 'unpaid' },
    { id: 'INV-2023-088', date: '02 أكتوبر 2023', carMake: 'Ford F-150', carPlate: 'XYZ-9876', amount: '1,200', status: 'paid' },
    { id: 'INV-2023-085', date: '28 سبتمبر 2023', carMake: 'Honda Accord', carPlate: 'LMN-4567', amount: '450', status: 'paid' },
    { id: 'INV-2023-082', date: '15 سبتمبر 2023', carMake: 'Toyota Camry', carPlate: 'ABC-1234', amount: '3,400', status: 'unpaid' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-12">
      {/* Header */}
      <div className="flex justify-between items-end px-2">
        <div>
          <h1 className="text-5xl font-black text-navy mb-4 tracking-tighter">الفواتير</h1>
          <p className="text-gray-400 font-bold text-lg">
            سجل مالي شفاف ومفصل
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 glass-bespoke text-navy hover:bg-white px-6 py-4 rounded-2xl font-black transition-all shadow-sm tracking-wide">
            <Download size={20} className="text-teal" />
            تصدير
          </button>
          <button className="flex items-center gap-2 bg-navy text-white hover:bg-navy-light px-6 py-4 rounded-2xl font-black transition-all shadow-[0_10px_30px_rgba(21,33,54,0.3)] tracking-wide">
            <Filter size={20} className="text-teal-light" />
            تصفية
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main List Column */}
        <div className="lg:col-span-8 space-y-4">
          {invoices.map((inv) => (
            <button 
              key={inv.id} 
              onClick={() => openModal(inv)}
              className="w-full glass-bespoke rounded-[2rem] p-4 sm:p-6 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(21,33,54,0.08)] transition-all duration-500 group flex flex-col sm:flex-row items-start sm:items-center justify-between text-right gap-4 sm:gap-0"
            >
              <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white transition-colors duration-500 shadow-inner">
                  <FileText size={24} className={inv.status === 'unpaid' ? "text-amber-500 group-hover:text-amber-400" : "text-gray-400 group-hover:text-teal-light"} />
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-sans font-black text-navy text-lg tracking-wide">{inv.id}</span>
                    {inv.status === 'unpaid' ? (
                      <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                        Unpaid
                      </span>
                    ) : (
                      <span className="bg-teal/10 text-teal px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                        Paid
                      </span>
                    )}
                  </div>
                  <div className="text-gray-400 font-bold text-sm">
                    {inv.date} &bull; <span className="font-sans tracking-wide">{inv.carMake}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto border-t border-gray-100/50 sm:border-0 pt-4 sm:pt-0">
                <div className="text-left" dir="ltr">
                  <span className="text-xs text-teal font-black uppercase tracking-[0.2em] block mb-1">SAR</span>
                  <span className="text-3xl font-sans font-black text-navy tracking-tighter">{inv.amount}</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 group-hover:bg-teal group-hover:border-teal group-hover:text-white transition-all duration-500">
                  <ChevronLeft size={20} />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Stats Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-navy rounded-[2.5rem] p-8 text-white relative overflow-hidden bento-hover shadow-[0_20px_40px_rgba(21,33,54,0.3)]">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-amber-500/20 rounded-full blur-[40px]"></div>
            
            <div className="relative z-10">
              <p className="text-amber-400 text-xs font-black uppercase tracking-[0.2em] mb-4">Pending Dues</p>
              <div className="flex items-baseline gap-2 mb-2" dir="ltr">
                <span className="text-xl font-bold text-gray-400">SAR</span>
                <span className="text-6xl font-black font-sans tracking-tighter">4,250</span>
              </div>
              <p className="text-gray-400 font-bold text-sm border-t border-white/10 pt-4 mt-6">
                3 فواتير غير مدفوعة
              </p>
            </div>
          </div>

          <div className="glass-bespoke rounded-[2.5rem] p-8 relative overflow-hidden bento-hover">
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-teal/20 rounded-full blur-[40px]"></div>
            
            <div className="relative z-10">
              <p className="text-teal text-xs font-black uppercase tracking-[0.2em] mb-4">Paid This Month</p>
              <div className="flex items-baseline gap-2 mb-2" dir="ltr">
                <span className="text-xl font-bold text-gray-400">SAR</span>
                <span className="text-5xl font-black text-navy font-sans tracking-tighter">1,800</span>
              </div>
              <p className="text-gray-400 font-bold text-sm border-t border-gray-100/50 pt-4 mt-6 flex items-center gap-2">
                <span className="text-teal">+12%</span> عن الشهر الماضي
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <InvoiceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        invoice={selectedInvoice} 
      />
    </div>
  );
}
