import React from 'react';
import { useApp } from '../../context/AppContext';
import { Plus, Calendar, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export default function ExpensesMain() {
  const { expenses, expenseFilter, setExpenseFilter, setActiveModal } = useApp();

  const totalAmount = expenses.reduce((sum, item) => sum + item.amount, 0);
  const reviewAmount = expenses.filter(e => e.status === 'Review').reduce((sum, item) => sum + item.amount, 0);
  const approvedAmount = expenses.filter(e => e.status === 'Approved').reduce((sum, item) => sum + item.amount, 0);

  const reviewCount = expenses.filter(e => e.status === 'Review').length;
  const approvedCount = expenses.filter(e => e.status === 'Approved').length;
  const rejectedCount = expenses.filter(e => e.status === 'Rejected').length;

  const filteredExpenses = expenses.filter(e => e.status === expenseFilter);

  return (
    <div className="flex flex-col">
      {/* Top Banner with 3D Credit Card Graphic */}
      <div className="px-5 pt-1 pb-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 via-brand-600 to-brand-700 p-5 text-white shadow-purple-glow">
          <div className="relative z-10 max-w-[70%]">
            <h2 className="font-bold text-xl sm:text-2xl tracking-tight leading-snug">
              Expense Summary
            </h2>
            <p className="text-xs text-brand-100 mt-1 font-normal opacity-90">
              Claim your expenses here.
            </p>
          </div>

          {/* 3D Credit Card with Rainbow Graphic */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-20 h-20">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]">
              {/* Rainbow arc */}
              <path d="M40 70 A 30 30 0 0 1 85 45" stroke="#F43F5E" strokeWidth="3" fill="none" />
              <path d="M44 72 A 30 30 0 0 1 87 49" stroke="#F59E0B" strokeWidth="3" fill="none" />
              <path d="M48 74 A 30 30 0 0 1 89 53" stroke="#10B981" strokeWidth="3" fill="none" />
              
              {/* Credit Card angled */}
              <g transform="rotate(-15 50 50)">
                <rect x="20" y="32" width="60" height="38" rx="6" fill="#1E1B4B" />
                <rect x="20" y="40" width="60" height="8" fill="#312E81" />
                {/* Chip */}
                <rect x="28" y="52" width="10" height="8" rx="2" fill="#FBBF24" />
                {/* Card lines */}
                <circle cx="65" cy="56" r="5" fill="#EF4444" opacity="0.9" />
                <circle cx="71" cy="56" r="5" fill="#F59E0B" opacity="0.9" />
              </g>

              {/* Sparkles */}
              <circle cx="85" cy="25" r="2" fill="#FDE047" />
            </svg>
          </div>
        </div>
      </div>

      {/* Total Expense Metrics Card */}
      <div className="px-5 mb-5">
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-card">
          <h3 className="font-bold text-slate-900 text-sm tracking-tight mb-0.5">Total Expense</h3>
          <p className="text-[11px] text-slate-400 mb-4">Period 1 Jan 2024 - 30 Dec 2024</p>

          <div className="grid grid-cols-3 gap-3">
            {/* Total */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <span className="w-2 h-2 rounded-full bg-brand-600" />
                <span>Total</span>
              </div>
              <span className="text-xl font-bold text-slate-900 font-mono">${totalAmount}</span>
            </div>

            {/* Review */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Review</span>
              </div>
              <span className="text-xl font-bold text-slate-900 font-mono">${reviewAmount}</span>
            </div>

            {/* Approved */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Approved</span>
              </div>
              <span className="text-xl font-bold text-slate-900 font-mono">${approvedAmount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-5 mb-4">
        <div className="flex items-center gap-2">
          {[
            { id: 'Review', label: 'Review', count: reviewCount },
            { id: 'Approved', label: 'Approved', count: approvedCount },
            { id: 'Rejected', label: 'Rejected', count: rejectedCount },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setExpenseFilter(tab.id)}
              className={`flex-1 py-2 px-3 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                expenseFilter === tab.id
                  ? 'bg-brand-600 text-white shadow-purple-glow'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                expenseFilter === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Expense List */}
      <div className="px-5 mb-6 space-y-3">
        {filteredExpenses.length === 0 ? (
          <div className="bg-white rounded-2xl p-6 text-center border border-slate-100 text-slate-400 text-xs">
            No expenses found in {expenseFilter} status.
          </div>
        ) : (
          filteredExpenses.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl p-4 border border-slate-100 shadow-card"
            >
              {/* Date Header */}
              <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-slate-100 text-xs font-semibold text-slate-800">
                <Calendar className="w-3.5 h-3.5 text-brand-600" />
                <span>{exp.date}</span>
              </div>

              {/* Data Row */}
              <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                <div>
                  <span className="text-[11px] text-slate-400 block mb-0.5">Type</span>
                  <span className="font-bold text-slate-900">{exp.category}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block mb-0.5">Total Expense</span>
                  <span className="font-bold text-slate-900 font-mono">${exp.amount}</span>
                </div>
              </div>

              {/* Status and Approver footer */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100/80 text-xs">
                {exp.status === 'Approved' ? (
                  <span className="inline-flex items-center gap-1 text-emerald-600 font-medium text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                    Approved at {exp.approvedAt}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-amber-600 font-medium text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    Under Review
                  </span>
                )}

                <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                  <span>By</span>
                  <img
                    src={exp.approver.avatar}
                    alt={exp.approver.name}
                    className="w-4 h-4 rounded-full object-cover"
                  />
                  <span className="font-medium text-slate-700">{exp.approver.name}</span>
                </div>
              </div>
            </div>
          ))
        )}

        {/* Submit Expense Button */}
        <button
          onClick={() => setActiveModal('submitExpense')}
          className="w-full py-3.5 px-4 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-sm shadow-purple-glow transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Submit Expense</span>
        </button>
      </div>
    </div>
  );
}

