import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ChevronLeft, 
  UploadCloud, 
  Receipt, 
  Calendar, 
  DollarSign, 
  FileText, 
  Check, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export default function SubmitExpenseModal() {
  const { setActiveModal, handleSubmitExpense } = useApp();

  const [formData, setFormData] = useState({
    category: 'Business Trip',
    date: '2024-09-29',
    amount: '120',
    description: '',
    hasReceipt: true
  });

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmitExpense(formData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#F9FAFB] flex flex-col max-w-[420px] mx-auto overflow-hidden animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="px-4 py-3 bg-white border-b border-slate-100 flex items-center justify-between">
        <button
          onClick={() => setActiveModal(null)}
          className="p-1.5 -ml-1 rounded-full text-slate-700 hover:bg-slate-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="font-bold text-slate-900 text-sm">Submit Expense</h3>
        <div className="w-7" />
      </div>

      {/* Form Area */}
      <div className="flex-1 overflow-y-auto p-5 no-scrollbar">
        {/* Banner with Avatars */}
        <div className="bg-brand-600 rounded-2xl p-4 text-white shadow-purple-glow mb-5 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-xs leading-snug">Ensure All Document Well Prepared</h4>
            <p className="text-[10px] text-brand-100 mt-0.5">1000+ Expenses already approved</p>
          </div>
          <div className="flex items-center -space-x-1.5">
            <span className="w-6 h-6 rounded-full bg-white/30 border border-white flex items-center justify-center text-[10px]">👩‍💼</span>
            <span className="w-6 h-6 rounded-full bg-white/30 border border-white flex items-center justify-center text-[10px]">👨‍💻</span>
            <span className="w-6 h-6 rounded-full bg-white/30 border border-white flex items-center justify-center text-[10px]">👩‍🎨</span>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <h4 className="font-bold text-xs text-slate-900">Fill Claim Information</h4>
            <p className="text-[11px] text-slate-400">Information about claim details</p>
          </div>

          {/* Upload Area */}
          <div>
            <div className="border-2 border-dashed border-brand-200 rounded-2xl p-4 bg-[#F4F3FF]/40 text-center flex flex-col items-center justify-center cursor-pointer hover:border-brand-500 transition-colors">
              <UploadCloud className="w-6 h-6 text-brand-600 mb-1" />
              <span className="font-bold text-xs text-brand-700">Upload Claim Document</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Format should be in .pdf, .jpeg, .png less than 5MB</span>
            </div>
          </div>

          {/* Receipt Preview Box matching Figma */}
          <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                <Receipt className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xs text-slate-900 block">SHOP RECEIPT #8492</span>
                <span className="text-[10px] text-slate-400">Cash receipt • Verified attachment</span>
              </div>
            </div>
            <span className="text-emerald-600 text-xs font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Ready
            </span>
          </div>

          {/* Expense Category */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Expense Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
            >
              <option value="Business Trip">Business Trip</option>
              <option value="E-Learning">E-Learning & Training</option>
              <option value="Office Supplies">Office Supplies</option>
              <option value="Meals & Entertainment">Meals & Client Entertainment</option>
            </select>
          </div>

          {/* Transaction Date */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Transaction Date
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-3 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
            />
          </div>

          {/* Expense Amount ($USD) */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Expense Amount ($USD)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <DollarSign className="w-4 h-4 text-brand-600" />
              </div>
              <input
                type="number"
                required
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                placeholder="Enter Amount"
                className="w-full pl-9 pr-3 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Expense Description
            </label>
            <textarea
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter Expense Description"
              className="w-full p-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-xs shadow-purple-glow transition-all"
            >
              Submit Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function ExpenseSuccessModal() {
  const { setActiveModal, setActiveTab } = useApp();

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-[360px] bg-white rounded-3xl p-6 text-center shadow-elevated border border-slate-100 animate-in slide-in-from-bottom-4 duration-300">
        <div className="mx-auto w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-purple-glow mb-4">
          <Receipt className="w-7 h-7" />
        </div>

        <h3 className="font-bold text-slate-900 text-base mb-1.5">Expense Submitted!</h3>
        <p className="text-xs text-slate-500 mb-6 leading-relaxed">
          Your expense report is in! You'll receive your reimbursement with your payroll.
        </p>

        <button
          onClick={() => {
            setActiveModal(null);
            setActiveTab('expenses');
          }}
          className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow transition-all"
        >
          View Expense History
        </button>
      </div>
    </div>
  );
}

