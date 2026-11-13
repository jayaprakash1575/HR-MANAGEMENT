import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Zap, RefreshCw, Camera } from 'lucide-react';

export default function SelfieCameraModal() {
  const { setActiveModal, handleCaptureSelfie, currentUser } = useApp();
  const [flashOn, setFlashOn] = useState(false);
  const [zoomLevel, setZoomLevel] = useState('1x');

  const onCapture = () => {
    // Pass user photo as captured selfie
    handleCaptureSelfie(currentUser.avatar);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col max-w-[420px] mx-auto overflow-hidden animate-in fade-in duration-200 text-white">
      {/* Top Header */}
      <div className="px-5 py-4 flex items-center justify-between z-10">
        <button
          onClick={() => setFlashOn(!flashOn)}
          className={`p-2 rounded-full ${flashOn ? 'bg-yellow-400 text-slate-900' : 'bg-white/10 text-white'}`}
        >
          <Zap className="w-4 h-4 fill-current" />
        </button>
        <span className="text-xs font-semibold tracking-wide">Camera</span>
        <button
          onClick={() => setActiveModal(null)}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Camera Viewport with Face Oval Guide */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Sample Camera Feed Mockup */}
        <img
          src={currentUser.avatar}
          alt="Selfie Preview"
          className="w-full h-full object-cover filter brightness-95"
        />

        {/* Face Oval Overlay Guide */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-56 h-72 border-2 border-dashed border-white/60 rounded-[100px] flex items-center justify-center shadow-[0_0_0_9999px_rgba(0,0,0,0.35)]">
            <span className="text-[11px] font-medium text-white/90 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm -mt-44">
              Center your face here
            </span>
          </div>
        </div>

        {/* Flash animation layer if on */}
        {flashOn && (
          <div className="absolute inset-0 bg-yellow-100/10 pointer-events-none" />
        )}
      </div>

      {/* Bottom Controls */}
      <div className="bg-black/90 px-6 py-6 flex items-center justify-between">
        {/* Zoom Button */}
        <button
          onClick={() => setZoomLevel(zoomLevel === '1x' ? '2x' : '1x')}
          className="w-10 h-10 rounded-full bg-white/15 text-white font-medium text-xs flex items-center justify-center hover:bg-white/25 transition-colors"
        >
          {zoomLevel}
        </button>

        {/* Shutter Button */}
        <button
          onClick={onCapture}
          className="relative w-18 h-18 rounded-full border-4 border-white p-1 hover:scale-105 active:scale-95 transition-transform"
        >
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
            <Camera className="w-6 h-6 text-brand-700" />
          </div>
        </button>

        {/* Flip Camera Button */}
        <button
          onClick={() => {}}
          className="w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

