import React, { useState } from 'react';
import { useApp } from './context/AppContext';
import { 
  ChevronLeft, 
  X, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  User, 
  Calendar, 
  Briefcase, 
  MapPin, 
  Check, 
  CheckCircle2, 
  UploadCloud, 
  ArrowRight,
  Sparkles,
  Award,
  Star,
  Trophy,
  Gem,
  MessageSquare,
  Bell,
  Clock,
  Video,
  FileText,
  Zap,
  Flag,
  Coffee,
  LogOut,
  Receipt,
  Layers,
  Home as HomeIcon,
  CalendarDays,
  ClipboardList
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Core Submodules
import AttendanceMain from './components/attendance/AttendanceMain';
import ClockInMapModal from './components/attendance/ClockInMapModal';
import SelfieCameraModal from './components/attendance/SelfieCameraModal';
import { ClockInSuccessModal, ClockOutConfirmModal, ClockOutSuccessModal } from './components/attendance/AttendanceModals';
import TasksMain from './components/tasks/TasksMain';
import CreateTaskModal from './components/tasks/CreateTaskModal';
import { TaskSuccessModal, TaskDetailModal } from './components/tasks/TaskModals';
import ExpensesMain from './components/expenses/ExpensesMain';
import SubmitExpenseModal, { ExpenseSuccessModal } from './components/expenses/SubmitExpenseModal';
import LeaveMain from './components/leave/LeaveMain';
import SubmitLeaveModal, { LeaveSuccessModal } from './components/leave/SubmitLeaveModal';
import { NotificationsDrawer, ChatDrawer } from './components/common/QuickDrawers';

// Account & Settings Sheets
import { 
  PersonalDataSheet, 
  OfficeAssetsSheet, 
  PayrollTaxSheet, 
  RolesSheet, 
  ChangePasswordSheet, 
  VersioningSheet, 
  FaqSheet 
} from './components/profile/AccountSheets';

export default function App() {
  const { 
    currentUser, 
    activeTab, 
    setActiveTab, 
    activeModal, 
    setActiveModal, 
    meetings, 
    tasks, 
    setSelectedTask,
    unreadMessages,
    unreadNotifications
  } = useApp();

  // Step-by-step Flow States matching exact Figma specification with URL hash & local sync
  const [currentScreen, _setCurrentScreen] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash) return hash;
      const saved = localStorage.getItem('workmate_current_screen');
      if (saved) return saved;
    }
    return 'onboard';
  });
  const [previousScreen, setPreviousScreen] = useState('home');

  const setCurrentScreen = (screen) => {
    _setCurrentScreen(screen);
    if (typeof window !== 'undefined') {
      window.location.hash = screen;
      localStorage.setItem('workmate_current_screen', screen);
    }
  };

  // Sync with browser back/forward or hash changes
  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== currentScreen) {
        _setCurrentScreen(hash);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [currentScreen]);

  // Interactive Account & Settings Sheets
  const [accountSheet, setAccountSheet] = useState(null); // 'personal' | 'assets' | 'payroll' | 'roles' | 'password' | 'version' | 'faq' | 'logoutConfirm'

  // Input states
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [otpDigits, setOtpDigits] = useState(['0', '0', '0', '0', '0', '0']);

  // Confetti trigger
  const triggerCelebration = () => {
    confetti({ particleCount: 75, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <div className="min-h-[100dvh] bg-[#0A0D17] text-[#101828] flex items-center justify-center font-sans select-none antialiased sm:py-6 sm:px-4">
      {/* iOS Device Viewport - 100% full-bleed on mobile phones, perfectly framed and centered on tablets & desktops */}
      <div className="w-full sm:max-w-[400px] h-[100dvh] sm:h-[860px] sm:max-h-[92vh] bg-[#F9FAFB] sm:rounded-[48px] sm:shadow-[0_25px_80px_rgba(0,0,0,0.8)] sm:border-[6px] sm:border-slate-800/90 flex flex-col overflow-hidden relative transition-all duration-300">

        {/* 1. iOS Status Bar (08:15, Dynamic Island, 5G, Battery) */}
        <header className="sticky top-0 z-40 bg-[#F9FAFB]/95 backdrop-blur-md px-6 pt-3 pb-2 flex items-center justify-between text-xs font-semibold shrink-0 select-none">
          <span className="font-semibold text-slate-900 tracking-tight text-[13px]">08:15</span>
          
          {/* iOS Dynamic Island */}
          <div className="w-24 h-5 bg-black rounded-full flex items-center justify-between px-2.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e]" />
          </div>

          <div className="flex items-center gap-1.5 text-slate-800">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9zm0 16.5l-5.32-3.32C5.64 15.01 5 13.58 5 12c0-3.87 3.13-7 7-7s7 3.13 7 7c0 1.58-.64 3.01-1.68 4.18L12 19.5z" />
            </svg>
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zm0 3.5c3.78 0 7.21 1.52 9.73 4L12 18.72 2.27 11.5C4.79 9.02 8.22 7.5 12 7.5z" />
            </svg>
            <div className="w-5 h-2.5 rounded-xs border border-slate-800 p-0.5 flex items-center">
              <div className="w-full h-full bg-slate-900 rounded-2xs" />
            </div>
          </div>
        </header>

        {/* 2. Responsive Screen Body */}
        <main className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col">

          {/* ======================================================== */}
          {/* STEP 1: OnboardFinal                                    */}
          {/* ======================================================== */}
          {currentScreen === 'onboard' && (
            <div className="flex-1 flex flex-col justify-between p-5 sm:p-6 animate-ios-fade">
              <div className="pt-2 flex flex-col items-center text-center">
                {/* 3D Dashboard Mockup Graphic */}
                <div className="w-full aspect-[4/3] rounded-3xl bg-gradient-to-tr from-brand-600 via-brand-500 to-indigo-400 p-4 flex items-center justify-center relative shadow-purple-glow overflow-hidden mb-6">
                  <div className="w-48 bg-white rounded-2xl p-3 shadow-xl transform -rotate-6 border border-white/80">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-slate-800">Today Task</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full mb-1">
                      <div className="bg-brand-600 h-1.5 rounded-full w-3/4" />
                    </div>
                    <div className="flex justify-between text-[8px] text-slate-400">
                      <span>Wiring Dashboard</span>
                      <span className="text-red-500 font-bold">High</span>
                    </div>
                  </div>

                  <div className="absolute right-4 bottom-4 w-44 bg-white rounded-2xl p-3 shadow-xl transform rotate-3 border border-white/80">
                    <span className="text-[9px] font-bold text-slate-800 block mb-1">Work Analytics</span>
                    <div className="h-10 flex items-end gap-1">
                      {[35, 60, 25, 80, 95, 55].map((h, i) => (
                        <div key={i} className="flex-1 bg-brand-500 rounded-t-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>

                <h2 className="font-bold text-slate-900 text-xl tracking-tight leading-snug mb-2">
                  Navigate Your Work Journey Efficient & Easy
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[270px]">
                  Increase your work management & career development radically
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4">
                <button
                  onClick={() => setCurrentScreen('signUp')}
                  className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-xs shadow-purple-glow transition-all"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setCurrentScreen('signUp')}
                  className="w-full py-3 rounded-2xl border border-brand-200 text-brand-600 hover:bg-brand-50 active:scale-[0.99] font-semibold text-xs transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 2, 3, 5: SignUp (Empty, Filled, Complete)           */}
          {/* ======================================================== */}
          {(currentScreen === 'signUp' || currentScreen === 'signUpFilled' || currentScreen === 'signUpComplete') && (
            <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between animate-ios-fade">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <button 
                    onClick={() => setCurrentScreen('onboard')} 
                    className="p-1 -ml-1 text-slate-600 hover:text-slate-900 active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-[11px] font-semibold text-slate-400">Step 1 of 4</span>
                  <div className="w-5" />
                </div>

                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-700 to-brand-500 flex items-center justify-center shadow-purple-glow mb-2">
                    <span className="text-white font-bold text-lg tracking-tighter">WM</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">Work Mate</h3>
                  <p className="text-[11px] text-slate-400">Register Using Your Credentials</p>
                </div>

                {/* Form Fields */}
                <div className="space-y-2.5">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-1">Email</label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="email"
                        value={currentScreen === 'signUp' ? '' : currentScreen === 'signUpFilled' ? 'Tonald@wo' : 'Tonald@work.com'}
                        readOnly
                        placeholder="Enter Your Email"
                        className={`w-full pl-8 pr-3 py-2 rounded-xl text-xs bg-white border ${
                          currentScreen === 'signUpFilled' ? 'border-brand-500 ring-2 ring-brand-500/20' : 'border-slate-200'
                        } text-slate-900 focus:outline-none`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-1">Phone Number</label>
                    <div className="flex gap-2">
                      <div className="px-2.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1">
                        <span>INA</span>
                        <span className="text-[8px] text-slate-400">▼</span>
                      </div>
                      <input
                        type="text"
                        value={currentScreen === 'signUp' ? '' : '+62 82150005000'}
                        readOnly
                        placeholder="+62 0000 0000 0000"
                        className="flex-1 px-3 py-2 rounded-xl text-xs bg-white border border-slate-200 text-slate-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-1">Company ID</label>
                    <div className="relative">
                      <ShieldCheck className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        value={currentScreen === 'signUp' ? '' : '1015015'}
                        readOnly
                        placeholder="Enter Company ID"
                        className="w-full pl-8 pr-3 py-2 rounded-xl text-xs bg-white border border-slate-200 text-slate-900 font-mono focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-1">Password</label>
                    <div className="relative">
                      <Lock className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={currentScreen === 'signUp' ? '' : '••••••••'}
                        readOnly
                        placeholder="My Password"
                        className="w-full pl-8 pr-8 py-2 rounded-xl text-xs bg-white border border-slate-200 text-slate-900 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2.5 top-2.5 text-slate-400"
                      >
                        {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-1">Confirm Password</label>
                    <div className="relative">
                      <Lock className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={currentScreen === 'signUp' ? '' : '••••••••'}
                        readOnly
                        placeholder="Confirm My Password"
                        className="w-full pl-8 pr-8 py-2 rounded-xl text-xs bg-white border border-slate-200 text-slate-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="signup-terms"
                      checked={currentScreen === 'signUpFilled' || currentScreen === 'signUpComplete'}
                      onChange={() => {}}
                      className="mt-0.5 rounded text-brand-600 focus:ring-brand-500"
                    />
                    <label htmlFor="signup-terms" className="text-[10px] text-slate-500 leading-tight">
                      I agree with{' '}
                      <button
                        type="button"
                        onClick={() => setCurrentScreen('tnc')}
                        className="text-brand-600 font-semibold underline"
                      >
                        terms & conditions
                      </button>{' '}
                      and{' '}
                      <button
                        type="button"
                        onClick={() => setCurrentScreen('tnc')}
                        className="text-brand-600 font-semibold underline"
                      >
                        privacy policy
                      </button>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                {currentScreen === 'signUp' ? (
                  <button
                    onClick={() => setCurrentScreen('signUpFilled')}
                    className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-xs shadow-purple-glow transition-all"
                  >
                    Fill The Information
                  </button>
                ) : currentScreen === 'signUpFilled' ? (
                  <button
                    onClick={() => setCurrentScreen('tnc')}
                    className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-xs shadow-purple-glow transition-all"
                  >
                    Check Agreement TnC & PP
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentScreen('otp')}
                    className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-xs shadow-purple-glow transition-all"
                  >
                    Tap the Sign Up Button
                  </button>
                )}

                <p className="text-center text-[10px] text-slate-400 mt-2.5">
                  Already have an account? <span className="text-brand-600 font-semibold">Sign in here</span>
                </p>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 4: Terms & Conditions and Privacy Policy Sheet      */}
          {/* ======================================================== */}
          {currentScreen === 'tnc' && (
            <div 
              onClick={(e) => { if (e.target === e.currentTarget) setCurrentScreen('signUpFilled'); }}
              className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-3 sm:p-4 animate-ios-fade"
            >
              <div className="w-full max-w-[370px] bg-white rounded-3xl p-5 text-left shadow-elevated border border-slate-100 max-h-[85dvh] flex flex-col animate-ios-sheet">
                <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" />

                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h3 className="font-bold text-slate-900 text-xs">Terms & Conditions and Privacy Policy</h3>
                  <button onClick={() => setCurrentScreen('signUpFilled')} className="text-slate-400 hover:text-slate-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto py-3 text-[11px] text-slate-500 space-y-2.5 leading-relaxed no-scrollbar">
                  <p>
                    <strong>Terms and Conditions:</strong> Acceptance: By using the Work Mate app, you agree to comply with all applicable terms and conditions.
                  </p>
                  <p>
                    <strong>Usage:</strong> This app is for personal workforce use only and may not be used for commercial purposes without permission.
                  </p>
                  <p>
                    <strong>Account:</strong> You are responsible for the security of your account and all activities that occur within it.
                  </p>
                  <p>
                    <strong>Privacy Policy:</strong> Data Collection: We collect personal data such as name, email, and location to process transactions and improve our services.
                  </p>
                  <p>
                    <strong>Security:</strong> We protect your data with appropriate security measures to prevent unauthorized access.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setAgreedToTerms(true);
                      setCurrentScreen('signUpComplete');
                    }}
                    className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow"
                  >
                    I Agree
                  </button>
                  <button
                    onClick={() => setCurrentScreen('signUpFilled')}
                    className="w-full py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 6: Email Verification                               */}
          {/* ======================================================== */}
          {currentScreen === 'otp' && (
            <div 
              onClick={(e) => { if (e.target === e.currentTarget) setCurrentScreen('signUpComplete'); }}
              className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-3 sm:p-4 animate-ios-fade"
            >
              <div className="w-full max-w-[370px] bg-white rounded-3xl p-6 text-center shadow-elevated border border-slate-100 animate-ios-sheet">
                <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" />

                <div className="mx-auto w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-purple-glow mb-3">
                  <Mail className="w-6 h-6" />
                </div>

                <h3 className="font-bold text-slate-900 text-sm mb-1">Email Verification Sent!</h3>
                <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">
                  A verification code will be sent to the email <strong className="text-slate-800">Tonald@work.com</strong> for your account verification process.
                </p>

                <div className="flex justify-center gap-1.5 mb-3">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      value={otpDigits[i]}
                      onChange={(e) => {
                        const copy = [...otpDigits];
                        copy[i] = e.target.value;
                        setOtpDigits(copy);
                      }}
                      className="w-9 h-11 text-center text-sm font-bold text-slate-900 bg-[#F4F3FF] border border-brand-200 rounded-lg focus:outline-none font-mono"
                    />
                  ))}
                </div>

                <p className="text-[10px] text-slate-400 mb-4">
                  Haven't received the verification code?{' '}
                  <span className="text-brand-600 font-semibold cursor-pointer">Resend it.</span>
                </p>

                <button
                  onClick={() => {
                    triggerCelebration();
                    setCurrentScreen('welcome');
                  }}
                  className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow"
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 7: Welcome To Work Mate (Branching Sheet)          */}
          {/* ======================================================== */}
          {currentScreen === 'welcome' && (
            <div 
              className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-3 sm:p-4 animate-ios-fade"
            >
              <div className="w-full max-w-[370px] bg-white rounded-3xl p-6 text-center shadow-elevated border border-slate-100 animate-ios-sheet">
                <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" />

                <div className="mx-auto w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-purple-glow mb-3">
                  <User className="w-6 h-6" />
                </div>

                <h3 className="font-bold text-slate-900 text-base mb-1.5">Welcome To Work Mate!</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  To enhance your user experience, please set up your profile first. This will help us tailor the app to your needs and ensure you get the most out of our features!
                </p>

                <div className="space-y-2.5">
                  <button
                    onClick={() => setCurrentScreen('completeProfile')}
                    className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow transition-all"
                  >
                    Set Up My Profile
                  </button>
                  <button
                    onClick={() => setCurrentScreen('emptyHome')}
                    className="w-full py-2.5 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
                  >
                    Explore The App First
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 8: CompleteProfile (Branch A)                       */}
          {/* ======================================================== */}
          {currentScreen === 'completeProfile' && (
            <div className="flex-1 flex flex-col bg-[#F9FAFB] animate-ios-fade">
              <div className="bg-brand-600 text-white px-5 pt-3 pb-8 rounded-b-3xl relative shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={() => setCurrentScreen('welcome')} className="p-1 -ml-1 text-white active:scale-95">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <h3 className="font-bold text-sm">My Profile</h3>
                  <div className="w-6" />
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-3xl bg-white/20 border-2 border-white/60 flex items-center justify-center text-3xl mb-2 text-white">
                    🙂
                  </div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-base text-white">Tonald Drump</h4>
                    <span className="w-3.5 h-3.5 rounded-full bg-white text-brand-600 text-[9px] font-bold flex items-center justify-center">✓</span>
                  </div>
                  <p className="text-xs text-brand-100">Tonald@work.com</p>
                </div>
              </div>

              {/* Account Options List */}
              <div className="p-5 space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Account</span>
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-100">
                    <button
                      onClick={() => setCurrentScreen('workProfileEmpty')}
                      className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 text-left text-xs font-semibold text-slate-800 active:scale-[0.99] transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <User className="w-4 h-4 text-brand-600" />
                        <span>My Work Profile</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button
                      onClick={() => setAccountSheet('assets')}
                      className="w-full p-3.5 flex items-center justify-between text-xs text-slate-700 hover:bg-slate-50 active:scale-[0.99] transition-all text-left"
                    >
                      <div className="flex items-center gap-2.5">
                        <Briefcase className="w-4 h-4 text-slate-400" />
                        <span>Office Assets</span>
                      </div>
                      <span className="text-slate-300">›</span>
                    </button>
                    <button
                      onClick={() => setAccountSheet('payroll')}
                      className="w-full p-3.5 flex items-center justify-between text-xs text-slate-700 hover:bg-slate-50 active:scale-[0.99] transition-all text-left"
                    >
                      <div className="flex items-center gap-2.5">
                        <Award className="w-4 h-4 text-slate-400" />
                        <span>Payroll & Tax</span>
                      </div>
                      <span className="text-slate-300">›</span>
                    </button>
                    <button
                      onClick={() => setAccountSheet('roles')}
                      className="w-full p-3.5 flex items-center justify-between text-xs text-slate-700 hover:bg-slate-50 active:scale-[0.99] transition-all text-left"
                    >
                      <div className="flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-slate-400" />
                        <span>Roles</span>
                      </div>
                      <span className="text-slate-300">›</span>
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentScreen('workProfileEmpty')}
                  className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-xs shadow-purple-glow"
                >
                  Set Up Work Profile
                </button>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 9 & 10: WorkProfile (Empty & Filled)                */}
          {/* ======================================================== */}
          {(currentScreen === 'workProfileEmpty' || currentScreen === 'workProfileFilled') && (
            <div className="flex-1 p-5 flex flex-col justify-between animate-ios-fade">
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                  <button onClick={() => setCurrentScreen('completeProfile')} className="p-1 -ml-1 text-slate-700 active:scale-95">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <h3 className="font-bold text-slate-900 text-sm">My Work Profile</h3>
                  <div className="w-6" />
                </div>

                <div className="mb-2">
                  <h4 className="font-bold text-xs text-slate-900">Personal Data Information</h4>
                  <p className="text-[10px] text-slate-400">Your personal data information</p>
                </div>

                {/* Upload Photo Area */}
                <div className="flex flex-col items-center mb-3">
                  {currentScreen === 'workProfileFilled' ? (
                    <div className="relative">
                      <img
                        src={currentUser.avatar}
                        alt="Profile avatar"
                        className="w-20 h-20 rounded-full object-cover border-2 border-brand-500 shadow-md"
                      />
                      <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center border-2 border-white text-xs">
                        📷
                      </span>
                    </div>
                  ) : (
                    <div 
                      onClick={() => setCurrentScreen('workProfileFilled')}
                      className="w-24 h-24 rounded-2xl border-2 border-dashed border-brand-200 bg-[#F4F3FF]/40 flex flex-col items-center justify-center p-2 text-center cursor-pointer hover:border-brand-500 transition-colors"
                    >
                      <UploadCloud className="w-5 h-5 text-brand-500 mb-1" />
                      <span className="text-[10px] font-bold text-brand-600">Upload Photo</span>
                      <span className="text-[8px] text-slate-400 mt-0.5">Format .jpeg, .png less than 2MB</span>
                    </div>
                  )}
                </div>

                {/* Form Fields */}
                <div className="space-y-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-0.5">First Name</label>
                    <input
                      type="text"
                      value={currentScreen === 'workProfileFilled' ? 'Tonald' : ''}
                      readOnly
                      placeholder="Tonald"
                      className="w-full px-3 py-2 rounded-xl text-xs bg-white border border-slate-200 text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-0.5">Last Name</label>
                    <input
                      type="text"
                      value={currentScreen === 'workProfileFilled' ? 'Drump' : ''}
                      readOnly
                      placeholder="Drump"
                      className="w-full px-3 py-2 rounded-xl text-xs bg-white border border-slate-200 text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-0.5">Date of Birth</label>
                    <div className="relative">
                      <Calendar className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                      <input
                        type="text"
                        value={currentScreen === 'workProfileFilled' ? '10 December 1997' : ''}
                        readOnly
                        placeholder="Date of Birth"
                        className="w-full pl-8 pr-3 py-2 rounded-xl text-xs bg-white border border-slate-200 text-slate-900"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-0.5">Position</label>
                    <div className="relative">
                      <Briefcase className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                      <input
                        type="text"
                        value={currentScreen === 'workProfileFilled' ? 'Junior Full Stack Developer' : ''}
                        readOnly
                        placeholder="Select Position"
                        className="w-full pl-8 pr-3 py-2 rounded-xl text-xs bg-white border border-slate-200 text-slate-900"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 mb-0.5">Address</label>
                    <input
                      type="text"
                      value={currentScreen === 'workProfileFilled' ? 'Taman Anggrek, Jakarta' : ''}
                      readOnly
                      placeholder="Your current domicile"
                      className="w-full px-3 py-2 rounded-xl text-xs bg-white border border-slate-200 text-slate-900"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                {currentScreen === 'workProfileEmpty' ? (
                  <button
                    onClick={() => setCurrentScreen('workProfileFilled')}
                    className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-xs shadow-purple-glow"
                  >
                    Fill The Information
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentScreen('workProfileConfirm')}
                    className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-xs shadow-purple-glow"
                  >
                    Update Profile
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 11: WorkProfile Update Confirm Modal                */}
          {/* ======================================================== */}
          {currentScreen === 'workProfileConfirm' && (
            <div 
              onClick={(e) => { if (e.target === e.currentTarget) setCurrentScreen('workProfileFilled'); }}
              className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-3 sm:p-4 animate-ios-fade"
            >
              <div className="w-full max-w-[370px] bg-white rounded-3xl p-6 text-center shadow-elevated border border-slate-100 animate-ios-sheet">
                <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" />

                <div className="mx-auto w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-purple-glow mb-3">
                  <User className="w-6 h-6" />
                </div>

                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Update Profile</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  Are you sure you want to update your profile? This will help us improve your experience and provide personalized features.
                </p>

                <div className="space-y-2">
                  <button
                    onClick={() => {
                      triggerCelebration();
                      setCurrentScreen('workProfileSuccess');
                    }}
                    className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow"
                  >
                    Yes, Update Profile
                  </button>
                  <button
                    onClick={() => setCurrentScreen('workProfileFilled')}
                    className="w-full py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs"
                  >
                    No, Let me check
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 12: WorkProfile Updated Success Modal               */}
          {/* ======================================================== */}
          {currentScreen === 'workProfileSuccess' && (
            <div 
              className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-3 sm:p-4 animate-ios-fade"
            >
              <div className="w-full max-w-[370px] bg-white rounded-3xl p-6 text-center shadow-elevated border border-slate-100 animate-ios-sheet">
                <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" />

                <div className="mx-auto w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg mb-3">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>

                <h3 className="font-bold text-slate-900 text-base mb-1.5">Profile Updated!</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  Your profile has been successfully updated. We're excited to see you take this step!
                </p>

                <button
                  onClick={() => {
                    setPreviousScreen('completeProfile');
                    setCurrentScreen('profileView');
                  }}
                  className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow"
                >
                  Visit My Profile
                </button>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 13 & 14: Profile View & Achievements                */}
          {/* EXACT SCREEN FROM USER'S SCREENSHOT                     */}
          {/* ======================================================== */}
          {(currentScreen === 'profileView' || currentScreen === 'profileAchievements') && (
            <div className="flex-1 flex flex-col bg-[#F9FAFB] animate-ios-fade">
              <div className="bg-brand-600 text-white px-5 pt-3 pb-6 rounded-b-3xl shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <button onClick={() => setCurrentScreen(previousScreen || 'home')} className="p-1 -ml-1 text-white active:scale-95">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <h3 className="font-bold text-sm">My Profile</h3>
                  <div className="w-6" />
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src={currentUser.avatar}
                    alt="Tonald Drump"
                    className="w-18 h-18 rounded-full object-cover border-2 border-white shadow-md mb-2"
                  />
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-base text-white">Tonald Drump</h4>
                    <span className="w-3.5 h-3.5 rounded-full bg-white text-brand-600 text-[9px] font-bold flex items-center justify-center">✓</span>
                  </div>
                  <p className="text-xs text-brand-100">Junior Full Stack Developer</p>
                </div>
              </div>

              <div className="p-5 space-y-3.5">
                {/* Contact Card */}
                <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm text-xs space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Contact</span>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Mail className="w-3.5 h-3.5 text-brand-600" />
                    <span>Tonald@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-brand-600" />
                    <span>Taman Anggrek</span>
                  </div>
                </div>

                {/* Achievement Card matching Figma Image 3 */}
                {currentScreen === 'profileAchievements' && (
                  <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm animate-ios-fade">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                      Achievement
                    </span>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-xs mb-1">
                          <Star className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                        </div>
                        <span className="text-[8px] font-bold text-slate-700 leading-tight">Inclusion Star</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 shadow-xs mb-1">
                          <Award className="w-5 h-5 fill-brand-500 text-brand-500" />
                        </div>
                        <span className="text-[8px] font-bold text-slate-700 leading-tight">Junior/Sr Standouts</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 shadow-xs mb-1">
                          <Trophy className="w-5 h-5 fill-amber-500 text-amber-500" />
                        </div>
                        <span className="text-[8px] font-bold text-slate-700 leading-tight">Employee Of The Year</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100 shadow-xs mb-1">
                          <Gem className="w-5 h-5 fill-rose-500 text-rose-500" />
                        </div>
                        <span className="text-[8px] font-bold text-slate-700 leading-tight">1st Performer</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* =================================================== */}
                {/* ACCOUNT SECTION: EXACT CARD FROM USER'S SCREENSHOT  */}
                {/* NOW FULLY INTERACTIVE & CLICKABLE!                 */}
                {/* =================================================== */}
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Account
                  </span>
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-100 text-xs">
                    {/* 1. Personal Data */}
                    <button
                      onClick={() => setAccountSheet('personal')}
                      className="w-full p-3.5 flex items-center justify-between text-slate-800 hover:bg-slate-50 active:scale-[0.99] transition-all text-left"
                    >
                      <span className="font-semibold text-slate-800">Personal Data</span>
                      <span className="text-slate-400 text-sm font-bold">›</span>
                    </button>

                    {/* 2. Office Assets */}
                    <button
                      onClick={() => setAccountSheet('assets')}
                      className="w-full p-3.5 flex items-center justify-between text-slate-800 hover:bg-slate-50 active:scale-[0.99] transition-all text-left"
                    >
                      <span className="font-semibold text-slate-800">Office Assets</span>
                      <span className="text-slate-400 text-sm font-bold">›</span>
                    </button>

                    {/* 3. Payroll & Tax */}
                    <button
                      onClick={() => setAccountSheet('payroll')}
                      className="w-full p-3.5 flex items-center justify-between text-slate-800 hover:bg-slate-50 active:scale-[0.99] transition-all text-left"
                    >
                      <span className="font-semibold text-slate-800">Payroll & Tax</span>
                      <span className="text-slate-400 text-sm font-bold">›</span>
                    </button>

                    {/* 4. Roles */}
                    <button
                      onClick={() => setAccountSheet('roles')}
                      className="w-full p-3.5 flex items-center justify-between text-slate-800 hover:bg-slate-50 active:scale-[0.99] transition-all text-left"
                    >
                      <span className="font-semibold text-slate-800">Roles</span>
                      <span className="text-slate-400 text-sm font-bold">›</span>
                    </button>
                  </div>
                </div>

                {/* SETTINGS SECTION */}
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Settings
                  </span>
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-100 text-xs">
                    <button
                      onClick={() => setAccountSheet('password')}
                      className="w-full p-3.5 flex items-center justify-between text-slate-800 hover:bg-slate-50 active:scale-[0.99] transition-all text-left"
                    >
                      <span>Change Password</span>
                      <span className="text-slate-400 text-sm">›</span>
                    </button>
                    <button
                      onClick={() => setAccountSheet('version')}
                      className="w-full p-3.5 flex items-center justify-between text-slate-800 hover:bg-slate-50 active:scale-[0.99] transition-all text-left"
                    >
                      <span>Versioning</span>
                      <span className="text-slate-400 text-sm">›</span>
                    </button>
                    <button
                      onClick={() => setAccountSheet('faq')}
                      className="w-full p-3.5 flex items-center justify-between text-slate-800 hover:bg-slate-50 active:scale-[0.99] transition-all text-left"
                    >
                      <span>FAQ and Help</span>
                      <span className="text-slate-400 text-sm">›</span>
                    </button>
                    <button
                      onClick={() => setAccountSheet('logoutConfirm')}
                      className="w-full p-3.5 flex items-center justify-between text-red-600 hover:bg-red-50 active:scale-[0.99] transition-all text-left"
                    >
                      <span className="font-semibold">Logout</span>
                      <span className="text-red-400 text-sm">›</span>
                    </button>
                  </div>
                </div>

                {currentScreen === 'profileView' ? (
                  <button
                    onClick={() => {
                      triggerCelebration();
                      setCurrentScreen('profileAchievements');
                    }}
                    className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-xs shadow-purple-glow"
                  >
                    When You Got Achievements
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setCurrentScreen('home');
                      setActiveTab('home');
                    }}
                    className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-xs shadow-purple-glow"
                  >
                    Go To Homepage
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 15: EmptyState Home (Branch B)                      */}
          {/* ======================================================== */}
          {currentScreen === 'emptyHome' && (
            <div className="flex-1 p-5 flex flex-col justify-between animate-ios-fade">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-lg">
                      🙂
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-slate-900 text-xs">Tonald Drump</span>
                        <span className="w-3.5 h-3.5 rounded-full bg-brand-600 text-white text-[8px] flex items-center justify-center font-bold">✓</span>
                      </div>
                      <span className="text-[10px] text-slate-400">Tonald@work.com</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                      <Bell className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-brand-600 p-4 text-white shadow-purple-glow mb-4">
                  <h4 className="font-bold text-xs">My Work Summary</h4>
                  <p className="text-[10px] text-brand-100">Today task & presence activity</p>
                </div>

                {/* Empty Today Meeting Card */}
                <div className="mb-4">
                  <h4 className="font-bold text-slate-900 text-xs mb-1">Today Meeting</h4>
                  <p className="text-[10px] text-slate-400 mb-2">Your schedule for the day</p>
                  <div className="bg-white rounded-2xl p-5 border border-slate-100 text-center flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-400 mb-2">
                      👥
                    </div>
                    <span className="font-bold text-slate-900 text-xs">No Meeting Available</span>
                    <p className="text-[10px] text-slate-400 mt-1 max-w-[200px]">
                      It looks like you don't have any meetings scheduled at the moment. This space will be updated as new meetings are added!
                    </p>
                  </div>
                </div>

                {/* Empty Today Task Card */}
                <div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">Today Task</h4>
                  <p className="text-[10px] text-slate-400 mb-2">The tasks assigned to you for today</p>
                  <div className="bg-white rounded-2xl p-5 border border-slate-100 text-center flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-400 mb-2">
                      📄
                    </div>
                    <span className="font-bold text-slate-900 text-xs">No Tasks Assigned</span>
                    <p className="text-[10px] text-slate-400 mt-1 max-w-[200px]">
                      It looks like you don't have any tasks assigned to you right now. Don't worry, this space will be updated as new tasks become available.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setCurrentScreen('home')}
                  className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-xs shadow-purple-glow"
                >
                  View Populated Dashboard ▶
                </button>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 16: Populated Home & Navigation                     */}
          {/* ======================================================== */}
          {currentScreen === 'home' && (
            <div className="flex-1 pb-24 animate-ios-fade">
              {/* App Header */}
              <div className="px-5 pt-2 pb-3 flex items-center justify-between">
                <div 
                  onClick={() => {
                    setPreviousScreen('home');
                    setCurrentScreen('profileView');
                  }}
                  className="flex items-center gap-2.5 cursor-pointer active:scale-95 transition-transform"
                >
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-100"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-slate-900 text-sm leading-tight">{currentUser.name}</span>
                      <span className="w-3.5 h-3.5 rounded-full bg-brand-600 text-white text-[8px] font-bold flex items-center justify-center">✓</span>
                    </div>
                    <p className="text-[11px] font-medium text-brand-600">{currentUser.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModal('chat')}
                    className="relative w-9 h-9 rounded-full bg-[#F1F3F8] text-slate-700 flex items-center justify-center active:scale-95 transition-transform"
                  >
                    <MessageSquare className="w-4 h-4" />
                    {unreadMessages > 0 && <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-600" />}
                  </button>
                  <button
                    onClick={() => setActiveModal('notifications')}
                    className="relative w-9 h-9 rounded-full bg-[#F1F3F8] text-slate-700 flex items-center justify-center active:scale-95 transition-transform"
                  >
                    <Bell className="w-4 h-4" />
                    {unreadNotifications > 0 && <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-600" />}
                  </button>
                </div>
              </div>

              {/* Tab Navigation Content */}
              {activeTab === 'home' && (
                <div>
                  <div className="px-5 mb-5">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 via-brand-600 to-brand-700 p-5 text-white shadow-purple-glow">
                      <div className="relative z-10 max-w-[65%]">
                        <h3 className="font-bold text-lg tracking-tight">My Work Summary</h3>
                        <p className="text-brand-100 text-xs mt-0.5">Today task & presence activity</p>
                      </div>
                      <div className="absolute right-3 bottom-2 w-20 h-20">
                        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                          <circle cx="70" cy="35" r="12" fill="#D9D6FE" />
                          <g transform="rotate(-15 50 50)">
                            <rect x="25" y="38" width="50" height="26" rx="8" fill="#FFFFFF" />
                            <circle cx="28" cy="51" r="5" fill="#6938EF" />
                          </g>
                          <circle cx="85" cy="20" r="2" fill="#FDE047" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Today Meeting (2) */}
                  <div className="px-5 mb-5">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="font-bold text-slate-900 text-sm">Today Meeting</h4>
                      <span className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-brand-100 text-brand-700">2</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mb-3">Your schedule for the day</p>

                    <div className="space-y-3">
                      {meetings.map((m) => (
                        <div key={m.id} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-card">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                              {m.iconType === 'video' ? <Video className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                            </div>
                            <div>
                              <h5 className="font-bold text-slate-900 text-xs">{m.title}</h5>
                              <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                                <Clock className="w-3 h-3" />
                                {m.time}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                            <div className="flex items-center -space-x-1.5">
                              {m.participants.map((p, idx) => (
                                <img key={idx} src={p.avatar} alt={p.name} className="w-6 h-6 rounded-full object-cover ring-2 ring-white" />
                              ))}
                              {m.extraParticipants > 0 && (
                                <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-700 text-[9px] font-bold flex items-center justify-center ring-2 ring-white">
                                  +{m.extraParticipants}
                                </div>
                              )}
                            </div>
                            <button
                              onClick={() => window.open(m.link, '_blank')}
                              className="px-3.5 py-1.5 rounded-full bg-brand-600 hover:bg-brand-700 active:scale-95 text-white text-[11px] font-semibold transition-transform"
                            >
                              Join Meet
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Today Task (1) */}
                  <div className="px-5 mb-5">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="font-bold text-slate-900 text-sm">Today Task</h4>
                      <span className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-brand-100 text-brand-700">1</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mb-3">The tasks assigned to you for today</p>

                    <div 
                      onClick={() => {
                        setSelectedTask(tasks[0]);
                        setActiveModal('taskDetail');
                      }}
                      className="bg-white rounded-2xl p-4 border border-slate-100 shadow-card cursor-pointer hover:shadow-md transition-shadow active:scale-[0.99]"
                    >
                      <div className="flex items-start gap-2.5 mb-2">
                        <div className="w-7 h-7 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                          <Zap className="w-3.5 h-3.5 fill-brand-600" />
                        </div>
                        <h5 className="font-bold text-slate-900 text-xs">{tasks[0].title}</h5>
                      </div>
                      <div className="flex items-center gap-2 mb-3 pl-9">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-brand-50 text-brand-600">
                          {tasks[0].status}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-red-50 text-red-600">
                          {tasks[0].priority}
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2 overflow-hidden">
                        <div className="bg-brand-600 h-1.5 rounded-full w-[72%]" />
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <div className="flex items-center -space-x-1.5">
                          {tasks[0].assignees.map((a, i) => (
                            <img key={i} src={a.avatar} alt={a.name} className="w-5 h-5 rounded-full object-cover ring-2 ring-white" />
                          ))}
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{tasks[0].dueDate}</span>
                          <span>💬 {tasks[0].commentsCount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'attendance' && <AttendanceMain />}
              {activeTab === 'tasks' && <TasksMain />}
              {activeTab === 'expenses' && <ExpensesMain />}
              {activeTab === 'leave' && <LeaveMain />}
            </div>
          )}

        </main>

        {/* 3. Docked 5-Tab iOS Bottom Navigation Bar */}
        {currentScreen === 'home' && (
          <nav className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 w-[90%] bg-[#101828]/95 backdrop-blur-md text-slate-400 rounded-full px-4 py-3 shadow-[0_12px_32px_rgba(16,24,40,0.5)] flex items-center justify-around border border-slate-800">
            {[
              { id: 'home', icon: HomeIcon, label: 'Home' },
              { id: 'attendance', icon: CalendarDays, label: 'Attendance' },
              { id: 'tasks', icon: ClipboardList, label: 'Tasks' },
              { id: 'expenses', icon: Receipt, label: 'Expenses' },
              { id: 'leave', icon: Layers, label: 'Leave' },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex flex-col items-center justify-center transition-all active:scale-90 ${
                    isActive ? 'text-white scale-110' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className={`p-1 rounded-full ${isActive ? 'bg-white/10' : ''}`}>
                    <Icon className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  {isActive && <span className="absolute -bottom-1 w-1.5 h-1.5 bg-brand-400 rounded-full shadow-[0_0_8px_#7A5AF8]" />}
                </button>
              );
            })}
          </nav>
        )}

        {/* 4. iOS Home Indicator Bar */}
        <div className="w-32 h-1 bg-slate-900/40 rounded-full mx-auto my-1.5 shrink-0 pointer-events-none" />

        {/* Interactive Account & Settings Sheets */}
        {accountSheet === 'personal' && (
          <PersonalDataSheet 
            onClose={() => setAccountSheet(null)} 
            onEdit={() => {
              setAccountSheet(null);
              setCurrentScreen('workProfileEmpty');
            }} 
          />
        )}
        {accountSheet === 'assets' && (
          <OfficeAssetsSheet onClose={() => setAccountSheet(null)} />
        )}
        {accountSheet === 'payroll' && (
          <PayrollTaxSheet onClose={() => setAccountSheet(null)} />
        )}
        {accountSheet === 'roles' && (
          <RolesSheet onClose={() => setAccountSheet(null)} />
        )}
        {accountSheet === 'password' && (
          <ChangePasswordSheet onClose={() => setAccountSheet(null)} />
        )}
        {accountSheet === 'version' && (
          <VersioningSheet onClose={() => setAccountSheet(null)} />
        )}
        {accountSheet === 'faq' && (
          <FaqSheet onClose={() => setAccountSheet(null)} />
        )}
        {accountSheet === 'logoutConfirm' && (
          <div 
            onClick={(e) => { if (e.target === e.currentTarget) setAccountSheet(null); }}
            className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-3 sm:p-4 animate-ios-fade"
          >
            <div className="w-full max-w-[370px] bg-white rounded-3xl p-6 text-center shadow-elevated border border-slate-100 animate-ios-sheet">
              <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" />
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <LogOut className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Confirm Logout</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Are you sure you want to sign out of your Work Mate session?
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setAccountSheet(null);
                    localStorage.removeItem('workmate_current_screen');
                    setCurrentScreen('onboard');
                  }}
                  className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition-colors"
                >
                  Yes, Log Out
                </button>
                <button
                  onClick={() => setAccountSheet(null)}
                  className="w-full py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Global Modals & Flow Overlays */}
        {activeModal === 'clockInMap' && <ClockInMapModal />}
        {activeModal === 'selfieCamera' && <SelfieCameraModal />}
        {activeModal === 'clockInSuccess' && <ClockInSuccessModal />}
        {activeModal === 'clockOutConfirm' && <ClockOutConfirmModal />}
        {activeModal === 'clockOutSuccess' && <ClockOutSuccessModal />}
        {activeModal === 'createTask' && <CreateTaskModal />}
        {activeModal === 'taskSuccess' && <TaskSuccessModal />}
        {activeModal === 'taskDetail' && <TaskDetailModal />}
        {activeModal === 'submitExpense' && <SubmitExpenseModal />}
        {activeModal === 'expenseSuccess' && <ExpenseSuccessModal />}
        {activeModal === 'submitLeave' && <SubmitLeaveModal />}
        {activeModal === 'leaveSuccess' && <LeaveSuccessModal />}
        {activeModal === 'notifications' && <NotificationsDrawer />}
        {activeModal === 'chat' && <ChatDrawer />}

      </div>
    </div>
  );
}
