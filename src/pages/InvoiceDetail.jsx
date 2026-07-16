import { ArrowRight, Wrench, Users, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InvoiceDetail() {
  return (
    <div className="max-w-4xl mx-auto pb-24">
      <div className="mb-8 flex justify-end">
        <Link to="/invoices" className="flex items-center gap-2 text-gray-500 hover:text-navy font-bold transition-colors">
          العودة إلى الفواتير
          <ArrowRight size={20} />
        </Link>
      </div>

      <div className="bg-white border-0 shadow-[0_20px_60px_rgb(0,0,0,0.08)] rounded-[2rem] overflow-hidden relative">
        {/* Header section */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-bl-[100px] -z-0"></div>
        <div className="p-12 flex justify-between items-start relative z-10">
          <div className="text-right">
            <h1 className="text-5xl font-black text-navy mb-3 tracking-tight">فاتورة صيانة</h1>
            <p className="text-gray-500 font-bold">مركز صيانة النخبة للسيارات</p>
            <p className="text-gray-400 text-sm">الرياض، المملكة العربية السعودية</p>
          </div>
          
          <div className="text-left flex flex-col items-end">
            <div className="mb-6 flex items-center justify-center">
              <span className="text-navy font-black text-3xl tracking-widest">SAFWA</span>
            </div>
            <p className="text-teal text-xs font-bold uppercase tracking-widest mb-1">INVOICE NO.</p>
            <p className="text-2xl font-black text-navy mb-4 font-sans tracking-wide">#INV-2023-089</p>
            
            <p className="text-teal text-xs font-bold uppercase tracking-widest mb-1">DATE</p>
            <p className="text-gray-600 font-bold text-sm mb-6 font-sans">15 أكتوبر 2023</p>
            
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-bold bg-teal/10 text-teal border border-teal/20">
              <span className="w-2 h-2 rounded-full bg-teal"></span>
              مدفوعة
            </span>
          </div>
        </div>

        {/* Info section */}
        <div className="border-y border-gray-100 bg-gray-50/50 p-12 grid grid-cols-2 gap-12 relative z-10">
          <div className="text-right">
            <p className="text-teal text-xs font-bold mb-3 tracking-wide">معلومات العميل</p>
            <p className="text-xl font-black text-navy mb-2">أحمد عبدالله</p>
            <p className="text-gray-500 text-sm font-sans font-medium mb-1" dir="ltr">+966 50 123 4567</p>
            <p className="text-gray-500 text-sm font-sans font-medium">ahmed.abdullah@email.com</p>
          </div>
          <div className="text-right">
            <p className="text-teal text-xs font-bold mb-3 tracking-wide">معلومات المركبة</p>
            <p className="text-xl font-black text-navy mb-2">تويوتا لاندكروزر 2022</p>
            <p className="text-gray-500 text-sm font-medium mb-1">اللوحة: أ ب ح 123</p>
            <p className="text-gray-500 text-sm font-medium">العداد: 45,000 كم</p>
          </div>
        </div>

        {/* Parts Table */}
        <div className="p-12 pb-8 relative z-10">
          <div className="flex items-center gap-3 mb-6 text-navy">
            <div className="bg-navy/5 p-2 rounded-xl">
              <Wrench size={22} className="text-teal" />
            </div>
            <h2 className="text-2xl font-black">قطع الغيار</h2>
          </div>
          <table className="w-full text-right border-0 rounded-2xl overflow-hidden bg-gray-50/50">
            <thead className="bg-gray-100/80 text-gray-400 text-sm">
              <tr>
                <th className="py-4 px-6 font-bold rounded-tr-2xl">الرقم</th>
                <th className="py-4 px-6 font-bold">الوصف</th>
                <th className="py-4 px-6 font-bold">الكمية</th>
                <th className="py-4 px-6 font-bold">سعر الوحدة</th>
                <th className="py-4 px-6 font-bold rounded-tl-2xl">المجموع</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/50 text-navy font-medium">
              <tr className="hover:bg-white transition-colors">
                <td className="py-5 px-6 text-gray-400 font-bold">1</td>
                <td className="py-5 px-6 font-bold">فلاتر زيت أصلية</td>
                <td className="py-5 px-6 text-gray-500 font-sans">2</td>
                <td className="py-5 px-6 text-gray-500 font-sans">120.00 ر.س</td>
                <td className="py-5 px-6 font-black font-sans">240.00 ر.س</td>
              </tr>
              <tr className="hover:bg-white transition-colors">
                <td className="py-5 px-6 text-gray-400 font-bold">2</td>
                <td className="py-5 px-6 font-bold">طقم فرامل أمامي</td>
                <td className="py-5 px-6 text-gray-500 font-sans">1</td>
                <td className="py-5 px-6 text-gray-500 font-sans">850.00 ر.س</td>
                <td className="py-5 px-6 font-black font-sans">850.00 ر.س</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Labor Table */}
        <div className="p-12 pt-0 relative z-10">
          <div className="flex items-center gap-3 mb-6 text-navy">
            <div className="bg-navy/5 p-2 rounded-xl">
              <Users size={22} className="text-teal" />
            </div>
            <h2 className="text-2xl font-black">أجور العمل</h2>
          </div>
          <table className="w-full text-right border-0 rounded-2xl overflow-hidden bg-gray-50/50">
            <thead className="bg-gray-100/80 text-gray-400 text-sm">
              <tr>
                <th className="py-4 px-6 font-bold rounded-tr-2xl">الرقم</th>
                <th className="py-4 px-6 font-bold w-1/2">الوصف</th>
                <th className="py-4 px-6 font-bold rounded-tl-2xl">المجموع</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/50 text-navy font-medium">
              <tr className="hover:bg-white transition-colors">
                <td className="py-5 px-6 text-gray-400 font-bold">1</td>
                <td className="py-5 px-6 font-bold">تغيير زيت وفلاتر</td>
                <td className="py-5 px-6 font-black font-sans">150.00 ر.س</td>
              </tr>
              <tr className="hover:bg-white transition-colors">
                <td className="py-5 px-6 text-gray-400 font-bold">2</td>
                <td className="py-5 px-6 font-bold">تركيب طقم فرامل أمامي وفحص النظام</td>
                <td className="py-5 px-6 font-black font-sans">300.00 ر.س</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Summary */}
        <div className="p-12 flex flex-col md:flex-row justify-between items-end gap-12 bg-navy text-white rounded-t-[3rem] relative overflow-hidden mt-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-bl-full blur-3xl -z-0"></div>
          
          <div className="w-full md:w-1/2 relative z-10">
            <p className="text-teal-light text-sm mb-3 font-bold">ملاحظات:</p>
            <div className="bg-white/5 p-6 rounded-2xl text-gray-300 text-sm border border-white/10 backdrop-blur-sm leading-relaxed">
              تم فحص ضغط الإطارات وتعبئتها. يوصى بفحص البطارية في الزيارة القادمة.
            </div>
          </div>
          
          <div className="w-full md:w-1/3 text-right relative z-10">
            <div className="flex justify-between items-center py-3 text-gray-300 border-b border-white/10">
              <span className="font-medium">المجموع الفرعي (قطع الغيار):</span>
              <span className="font-bold font-sans">1,090.00 ر.س</span>
            </div>
            <div className="flex justify-between items-center py-3 text-gray-300 border-b border-white/10">
              <span className="font-medium">المجموع الفرعي (أجور العمل):</span>
              <span className="font-bold font-sans">450.00 ر.س</span>
            </div>
            <div className="flex justify-between items-center py-3 text-gray-300 border-b border-white/10 mb-6">
              <span className="font-medium">ضريبة القيمة المضافة (15%):</span>
              <span className="font-bold font-sans">231.00 ر.س</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-xl font-bold text-teal-light mb-1.5">الإجمالي النهائي:</span>
              <span className="text-4xl font-black text-white font-sans tracking-tight">1,771.00 ر.س</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 glass-dark p-5 flex justify-end gap-4 z-50">
        <Link to="/invoices" className="px-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-md">
          إغلاق
        </Link>
        <button className="flex items-center gap-2 px-8 py-3 bg-teal text-white font-bold rounded-xl hover:bg-teal-light transition-all shadow-lg shadow-teal/30">
          <Download size={20} />
          تحميل PDF
        </button>
      </div>
    </div>
  );
}
