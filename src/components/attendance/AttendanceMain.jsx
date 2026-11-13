import React from 'react';
import { useApp } from '../../context/AppContext';
import { Clock, Calendar, ChevronRight, CheckCircle2, Coffee, LogOut, ArrowRight } from 'lucide-react';

export default function AttendanceMain() {
  const { 
    currentUser, 
    attendanceStatus, 
    elapsedSeconds, 
    formatTime, 
    handleStartClockInFlow, 
    handleTakeBreak, 
    handleBackToWork, 
    handleStartClockOut,
    attendanceHistory 
  } = useApp();

  return (
    <div className="flex flex-col">
      {/* Top Banner with 3D Clock graphic */}
      <div className="px-5 pt-1 pb-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 via-brand-600 to-brand-700 p-5 text-white shadow-purple-glow">
          <div className="relative z-10 max-w-[70%]">
            <span className="text-brand-200 text-xs font-medium">
              {attendanceStatus === 'in' ? 'You are clocked-in' : attendanceStatus === 'break' ? 'Currently on break' : 'Morning Tonald!'}
            </span>
            <h2 className="font-bold text-xl sm:text-2xl tracking-tight leading-snug mt-0.5">
              {attendanceStatus === 'in' ? 'Keep Up The Focus!' : attendanceStatus === 'break' ? 'Rest Well & Recharge' : "Let's Get To Work!"}
            </h2>
            {attendanceStatus === 'in' && (
              <p className="text-[11px] text-brand-100 mt-1">Last Clocked-in at 09:00 AM</p>
            )}
          </div>

          {/* 3D Flying Clock with Wings Graphic */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-20 h-20">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]">
              {/* Left Wing */}
              <path d="M25 45 C15 35 10 25 5 15 C15 20 25 25 35 38 Z" fill="#EBE9FE" opacity="0.8" />
              <path d="M22 50 C12 45 8 35 5 25 C15 30 22 36 30 45 Z" fill="#D9D6FE" opacity="0.6" />
              {/* Right Wing */}
              <path d="M75 45 C85 35 90 25 95 15 C85 20 75 25 65 38 Z" fill="#EBE9FE" opacity="0.8" />
              <path d="M78 50 C88 45 92 35 95 25 C85 30 78 36 70 45 Z" fill="#D9D6FE" opacity="0.6" />
              
              {/* Clock Face Outer */}
              <circle cx="50" cy="50" r="28" fill="#FFFFFF" />
              <circle cx="50" cy="50" r="24" fill="#F4F3FF" />
              <circle cx="50" cy="50" r="2.5" fill="#6938EF" />
              {/* Clock Hands */}
              <line x1="50" y1="50" x2="50" y2="35" stroke="#6938EF" strokeWidth="3" strokeLinecap="round" />
              <line x1="50" y1="50" x2="62" y2="50" stroke="#7A5AF8" strokeWidth="2.5" strokeLinecap="round" />
              {/* Sparkles */}
              <circle cx="78" cy="22" r="2" fill="#FDE047" />
              <circle cx="20" cy="22" r="1.5" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
      </div>

      {/* Total Working Hour Card */}
      <div className="px-5 mb-6">
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold text-slate-900 text-sm tracking-tight">Total Working Hour</h3>
          </div>
          <p className="text-[11px] text-slate-400 mb-4">Paid Period 1 Sept 2024 - 30 Sept 2024</p>

          {/* Stats 2 Columns */}
          <div className="grid grid-cols-2 gap-4 pb-5 border-b border-slate-100">
            {/* Today */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>Today</span>
              </div>
              <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight font-mono">
                {attendanceStatus === 'in' ? formatTime(elapsedSeconds) : attendanceStatus === 'break' ? '04:10:25 Hrs' : '00:00 Hrs'}
              </span>
            </div>

            {/* This Pay Period */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                <span>This Pay Period</span>
              </div>
              <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight font-mono">
                32:00 Hrs
              </span>
            </div>
          </div>

          {/* Action Buttons depending on Attendance State */}
          <div className="pt-4">
            {attendanceStatus === 'out' && (
              <button
                onClick={handleStartClockInFlow}
                className="w-full py-3.5 px-4 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-sm shadow-purple-glow transition-all flex items-center justify-center gap-2"
              >
                <span>Clock In Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {attendanceStatus === 'in' && (
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleTakeBreak}
                  className="py-3 px-3 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Coffee className="w-4 h-4 text-amber-600" />
                  <span>Take A Break</span>
                </button>
                <button
                  onClick={handleStartClockOut}
                  className="py-3 px-3 rounded-2xl bg-[#101828] hover:bg-slate-800 text-white font-semibold text-xs shadow-sm transition-colors flex items-center justify-center gap-1.5"
                >
                  <LogOut className="w-4 h-4 text-red-400" />
                  <span>Clock Out</span>
                </button>
              </div>
            )}

            {attendanceStatus === 'break' && (
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleBackToWork}
                  className="py-3 px-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Back To Work</span>
                </button>
                <button
                  onClick={handleStartClockOut}
                  className="py-3 px-3 rounded-2xl bg-[#101828] hover:bg-slate-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <LogOut className="w-4 h-4 text-red-400" />
                  <span>Clock Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Attendance Log History Section */}
      <div className="px-5 mb-8">
        <h4 className="font-bold text-slate-900 text-sm mb-3">Attendance History</h4>
        <div className="space-y-3">
          {attendanceHistory.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 border border-slate-100 shadow-card"
            >
              {/* Date Header */}
              <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-slate-100 text-xs font-semibold text-slate-800">
                <Calendar className="w-3.5 h-3.5 text-brand-600" />
                <span>{item.date}</span>
              </div>

              {/* Data Row */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-[11px] text-slate-400 block mb-0.5">Total Hours</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.totalHours}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block mb-0.5">Clock In & Out</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.clockIn} — {item.clockOut}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

