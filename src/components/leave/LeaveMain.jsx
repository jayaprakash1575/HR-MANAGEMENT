import React from 'react';
import { useApp } from '../../context/AppContext';
import { Plus, Calendar, CheckCircle2, Clock, Briefcase } from 'lucide-react';

export default function LeaveMain() {
  const { leaves, leaveFilter, setLeaveFilter, setActiveModal } = useApp();

  const reviewCount = leaves.filter(l => l.status === 'Review').length;
  const approvedCount = leaves.filter(l => l.status === 'Approved').length;
  const rejectedCount = leaves.filter(l => l.status === 'Rejected').length;

  const filteredLeaves = leaves.filter(l => l.status === leaveFilter);

  return (
    <div className="flex flex-col">
      {/* Top Banner with 3D Suitcase & Rainbow Graphic */}
      <div className="px-5 pt-1 pb-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 via-brand-600 to-brand-700 p-5 text-white shadow-purple-glow">
          <div className="relative z-10 max-w-[70%]">
            <h2 className="font-bold text-xl sm:text-2xl tracking-tight leading-snug">
              Leave Summary
            </h2>
            <p className="text-xs text-brand-100 mt-1 font-normal opacity-90">
              Submit Leave
            </p>
          </div>

          {/* 3D Suitcase & Rainbow Graphic */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-20 h-20">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]">
              {/* Rainbow arc */}
              <path d="M35 70 A 28 28 0 0 1 82 45" stroke="#F43F5E" strokeWidth="3" fill="none" />
              <path d="M39 72 A 28 28 0 0 1 84 49" stroke="#F59E0B" strokeWidth="3" fill="none" />
              <path d="M43 74 A 28 28 0 0 1 86 53" stroke="#10B981" strokeWidth="3" fill="none" />
              
              {/* Suitcase */}
              <g transform="rotate(10 50 50)">
                <rect x="30" y="38" width="40" height="48" rx="6" fill="#FFFFFF" />
                {/* Handle */}
                <path d="M42 38 L42 28 C42 26 44 24 46 24 L54 24 C56 24 58 26 58 28 L58 38" stroke="#3E1C96" strokeWidth="3" fill="none" />
                {/* Wheels */}
                <circle cx="38" cy="88" r="3" fill="#1E1B4B" />
                <circle cx="62" cy="88" r="3" fill="#1E1B4B" />
                {/* Grooves */}
                <line x1="40" y1="44" x2="40" y2="80" stroke="#EBE9FE" strokeWidth="2" />
                <line x1="50" y1="44" x2="50" y2="80" stroke="#EBE9FE" strokeWidth="2" />
                <line x1="60" y1="44" x2="60" y2="80" stroke="#EBE9FE" strokeWidth="2" />
              </g>

              {/* Sparkle */}
              <circle cx="85" cy="25" r="2" fill="#FDE047" />
            </svg>
          </div>
        </div>
      </div>

      {/* Total Leave Metrics Card */}
      <div className="px-5 mb-5">
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-card">
          <h3 className="font-bold text-slate-900 text-sm tracking-tight mb-0.5">Total Leave</h3>
          <p className="text-[11px] text-slate-400 mb-4">Period 1 Jan 2024 - 30 Dec 2024</p>

          <div className="grid grid-cols-3 gap-3">
            {/* Available */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Available</span>
              </div>
              <span className="text-xl font-bold text-slate-900 font-mono">20</span>
            </div>

            {/* Paid Leave */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <span className="w-2 h-2 rounded-full bg-brand-600" />
                <span>Paid Leave</span>
              </div>
              <span className="text-xl font-bold text-slate-900 font-mono">2</span>
            </div>

            {/* Sick Leave */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                <span>Sick Leave</span>
              </div>
              <span className="text-xl font-bold text-slate-900 font-mono">0</span>
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
              onClick={() => setLeaveFilter(tab.id)}
              className={`flex-1 py-2 px-3 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                leaveFilter === tab.id
                  ? 'bg-brand-600 text-white shadow-purple-glow'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                leaveFilter === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Leave Items List */}
      <div className="px-5 mb-6 space-y-3">
        {filteredLeaves.length === 0 ? (
          <div className="bg-white rounded-2xl p-6 text-center border border-slate-100 text-slate-400 text-xs">
            No leave records in {leaveFilter} status.
          </div>
        ) : (
          filteredLeaves.map((lv) => (
            <div
              key={lv.id}
              className="bg-white rounded-2xl p-4 border border-slate-100 shadow-card"
            >
              {/* Date Header */}
              <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-slate-100 text-xs font-semibold text-slate-800">
                <Calendar className="w-3.5 h-3.5 text-brand-600" />
                <span>{lv.date}</span>
              </div>

              {/* Data Row */}
              <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                <div>
                  <span className="text-[11px] text-slate-400 block mb-0.5">Type</span>
                  <span className="font-bold text-slate-900">{lv.type}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block mb-0.5">Total Leave</span>
                  <span className="font-bold text-slate-900 font-mono">{lv.duration}</span>
                </div>
              </div>

              {/* Reason / Subtext */}
              <div className="pt-2 border-t border-slate-100/80 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Reason: {lv.reason}</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {lv.status}
                </span>
              </div>
            </div>
          ))
        )}

        {/* Submit Leave Button */}
        <button
          onClick={() => setActiveModal('submitLeave')}
          className="w-full py-3.5 px-4 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-sm shadow-purple-glow transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Submit Leave</span>
        </button>
      </div>
    </div>
  );
}

