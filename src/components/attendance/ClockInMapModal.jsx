import React from 'react';
import { useApp } from '../../context/AppContext';
import { ChevronLeft, MapPin, Navigation, Info, Clock, Check } from 'lucide-react';

export default function ClockInMapModal() {
  const { currentUser, setActiveModal, handleConfirmLocation } = useApp();

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
        <h3 className="font-bold text-slate-900 text-sm">Clock In Area</h3>
        <div className="w-7" />
      </div>

      {/* Map Area with Geofence Circle */}
      <div className="relative flex-1 bg-slate-200 overflow-hidden min-h-[300px]">
        {/* Interactive Stylized Vector Map */}
        <svg className="w-full h-full object-cover" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
          {/* Land / base */}
          <rect width="400" height="400" fill="#EAEFF5" />
          
          {/* Roads */}
          <path d="M-50 120 L450 150" stroke="#FFFFFF" strokeWidth="16" />
          <path d="M-50 280 L450 250" stroke="#FFFFFF" strokeWidth="20" />
          <path d="M120 -50 L150 450" stroke="#FFFFFF" strokeWidth="18" />
          <path d="M280 -50 L250 450" stroke="#FFFFFF" strokeWidth="24" />
          <path d="M-50 50 L450 350" stroke="#FFFFFF" strokeWidth="10" />

          {/* Secondary Street names */}
          <text x="30" y="140" fill="#94A3B8" fontSize="9" fontWeight="600">Jalan Taman Sirih</text>
          <text x="60" y="270" fill="#94A3B8" fontSize="9" fontWeight="600">Jalan Kebon Sirih</text>
          <text x="240" y="60" fill="#94A3B8" fontSize="9" fontWeight="600">Masjid Istiqlal</text>

          {/* Geofence Perimeter Area */}
          <circle cx="200" cy="190" r="95" fill="#7A5AF8" fillOpacity="0.15" stroke="#6938EF" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="200" cy="190" r="55" fill="#7A5AF8" fillOpacity="0.25" />

          {/* User Location Pulse */}
          <circle cx="200" cy="190" r="16" fill="#6938EF" fillOpacity="0.3" className="animate-ping" />
        </svg>

        {/* User Marker Center */}
        <div className="absolute top-[190px] left-[200px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="relative">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-10 h-10 rounded-full border-2 border-white shadow-elevated object-cover ring-2 ring-brand-600"
            />
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
          </div>
        </div>

        {/* Map Geofence Status Pill */}
        <div className="absolute top-4 inset-x-4">
          <div className="bg-brand-600/95 backdrop-blur-md text-white rounded-2xl p-3 shadow-lg flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold leading-tight">You are in the clock-in area!</p>
              <p className="text-[11px] text-brand-100">Now you can press clock in in this area</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sheet Details */}
      <div className="bg-white p-5 rounded-t-3xl shadow-elevated border-t border-slate-100">
        {/* Profile Card */}
        <div className="mb-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">My Profile</span>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-1">
                  <h4 className="font-bold text-slate-900 text-xs">{currentUser.name}</h4>
                  <span className="w-3.5 h-3.5 rounded-full bg-brand-600 text-white flex items-center justify-center text-[8px]">✓</span>
                </div>
                <p className="text-[10px] text-slate-400">29 September 2024</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-brand-600 font-medium block">
                {currentUser.coordinates}
              </span>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="mb-5 bg-[#F9FAFB] p-3 rounded-2xl border border-slate-100">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Schedule</span>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-[10px] text-slate-400 block">Clock In</span>
              <span className="font-bold text-slate-900">{currentUser.schedule.clockIn}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">Clock Out</span>
              <span className="font-bold text-slate-900">{currentUser.schedule.clockOut}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleConfirmLocation}
          className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-sm shadow-purple-glow transition-all flex items-center justify-center gap-2"
        >
          <span>Selfie Clock In</span>
          <Navigation className="w-4 h-4 fill-current" />
        </button>
      </div>
    </div>
  );
}

