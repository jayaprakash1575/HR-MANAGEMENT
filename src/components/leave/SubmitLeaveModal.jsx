import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ChevronLeft, 
  Calendar, 
  Briefcase, 
  FileText, 
  Check, 
  HeartHandshake, 
  Sparkles 
} from 'lucide-react';

export default function SubmitLeaveModal() {
  const { setActiveModal, handleSubmitLeave } = useApp();

  const [formData, setFormData] = useState({
    type: 'Paid Leave',
    startDate: '2024-10-05',
    endDate: '2024-10-07',
    days: 3,
    reason: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmitLeave({
      ...formData,
      dateRange: `${formData.startDate} - ${formData.endDate}`
    });
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
        <h3 className="font-bold text-slate-900 text-sm">Submit Leave Request</h3>
        <div className="w-7" />
      </div>

      {/* Form Area */}
      <div className="flex-1 overflow-y-auto p-5 no-scrollbar">
        {/* Banner */}
        <div className="bg-brand-600 rounded-2xl p-4 text-white shadow-purple-glow mb-5">
          <h4 className="font-bold text-xs">Plan Your Well-Deserved Time Off</h4>
          <p className="text-[10px] text-brand-100 mt-0.5">
            You have 20 Available Paid Leave balance days remaining this year.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Leave Type */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Leave Type
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-3 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
            >
              <option value="Paid Leave">Paid Annual Leave</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Compassionate Leave">Compassionate Leave</option>
              <option value="Remote / WFH">Remote / WFH Request</option>
            </select>
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Start Date
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="w-full px-3 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                End Date
              </label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="w-full px-3 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              />
            </div>
          </div>

          {/* Number of Days */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Total Days
            </label>
            <input
              type="number"
              min="1"
              max="20"
              value={formData.days}
              onChange={(e) => setFormData({ ...formData, days: parseInt(e.target.value) || 1 })}
              className="w-full px-3 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
            />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Reason for Leave
            </label>
            <textarea
              rows={3}
              required
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              placeholder="Please provide details about your leave request..."
              className="w-full p-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-xs shadow-purple-glow transition-all"
            >
              Submit Leave Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function LeaveSuccessModal() {
  const { setActiveModal, setActiveTab } = useApp();

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-[360px] bg-white rounded-3xl p-6 text-center shadow-elevated border border-slate-100 animate-in slide-in-from-bottom-4 duration-300">
        <div className="mx-auto w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-purple-glow mb-4">
          <Briefcase className="w-7 h-7" />
        </div>

        <h3 className="font-bold text-slate-900 text-base mb-1.5">Leave Request Submitted!</h3>
        <p className="text-xs text-slate-500 mb-6 leading-relaxed">
          Your time-off request has been forwarded to your direct supervisor for approval. You will receive a notification once reviewed.
        </p>

        <button
          onClick={() => {
            setActiveModal(null);
            setActiveTab('leave');
          }}
          className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow transition-all"
        >
          View Leave Status
        </button>
      </div>
    </div>
  );
}

