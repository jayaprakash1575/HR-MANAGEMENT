import React from 'react';
import { useApp } from '../../context/AppContext';
import { Check, Clock, UserCheck, AlertCircle } from 'lucide-react';

export function ClockInSuccessModal() {
  const { setActiveModal, setActiveTab } = useApp();

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-[360px] bg-white rounded-3xl p-6 text-center shadow-elevated border border-slate-100 animate-in slide-in-from-bottom-4 duration-300">
        {/* Purple Check Avatar Graphic */}
        <div className="relative mx-auto w-16 h-16 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-purple-glow mb-4">
          <UserCheck className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-white">
            <Check className="w-3 h-3 stroke-[3]" />
          </span>
        </div>

        <h3 className="font-bold text-slate-900 text-lg mb-1.5">Clock-In Successful!</h3>
        <p className="text-xs text-slate-500 mb-6 leading-relaxed">
          You're all set! Your clock-in was successful. Head over to your dashboard to see your assigned tasks.
        </p>

        <div className="space-y-2.5">
          <button
            onClick={() => {
              setActiveModal(null);
              setActiveTab('attendance');
            }}
            className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow transition-all"
          >
            Go To Attendance Page
          </button>
          <button
            onClick={() => {
              setActiveModal(null);
              setActiveTab('home');
            }}
            className="w-full py-3 rounded-2xl bg-[#F1F3F8] hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export function ClockOutConfirmModal() {
  const { setActiveModal, handleConfirmClockOut, elapsedSeconds, formatTime } = useApp();

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-[360px] bg-white rounded-3xl p-6 text-center shadow-elevated border border-slate-100 animate-in slide-in-from-bottom-4 duration-300">
        {/* Clock Icon Badge */}
        <div className="mx-auto w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-purple-glow mb-4">
          <Clock className="w-7 h-7" />
        </div>

        <h3 className="font-bold text-slate-900 text-base mb-1.5">Confirm Clockout</h3>
        <p className="text-xs text-slate-500 mb-5 leading-relaxed">
          Once you clock out, you won't be able to edit this time. Please double-check your hours before proceeding.
        </p>

        {/* Working Hours Summary */}
        <div className="grid grid-cols-2 gap-3 bg-[#F9FAFB] p-3.5 rounded-2xl border border-slate-100 mb-5 text-left text-xs">
          <div>
            <span className="text-[10px] text-slate-400 block mb-0.5">Today</span>
            <span className="font-bold text-slate-900 font-mono">{formatTime(elapsedSeconds)}</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 block mb-0.5">Overtime</span>
            <span className="font-bold text-slate-900 font-mono">00:00:00 Hrs</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={handleConfirmClockOut}
            className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow transition-all"
          >
            Yes, Clock Out
          </button>
          <button
            onClick={() => setActiveModal(null)}
            className="w-full py-3 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
          >
            No, Let me check
          </button>
        </div>
      </div>
    </div>
  );
}

export function ClockOutSuccessModal() {
  const { setActiveModal, setActiveTab } = useApp();

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-[360px] bg-white rounded-3xl p-6 text-center shadow-elevated border border-slate-100 animate-in slide-in-from-bottom-4 duration-300">
        <div className="mx-auto w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg mb-4">
          <Check className="w-7 h-7 stroke-[3]" />
        </div>

        <h3 className="font-bold text-slate-900 text-base mb-1.5">Clockout Successful!</h3>
        <p className="text-xs text-slate-500 mb-6 leading-relaxed">
          You've officially clocked out for the day. Thank you for your hard work! Time to relax and enjoy your break.
        </p>

        <button
          onClick={() => {
            setActiveModal(null);
            setActiveTab('attendance');
          }}
          className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow transition-all"
        >
          Close Message
        </button>
      </div>
    </div>
  );
}

