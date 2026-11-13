import React, { useState } from 'react';
import { 
  X, 
  Laptop, 
  Monitor, 
  Headphones, 
  Key, 
  CreditCard, 
  Download, 
  Check,
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  HelpCircle, 
  Info, 
  LogOut,
  Calendar,
  DollarSign,
  User,
  Briefcase,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function PersonalDataSheet({ onClose, onEdit }) {
  return (
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-3 sm:p-4 animate-ios-fade"
    >
      <div className="w-full max-w-[370px] bg-white rounded-3xl p-5 text-left shadow-elevated border border-slate-100 max-h-[85dvh] flex flex-col animate-ios-sheet">
        <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" />

        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-brand-600" />
            <h3 className="font-bold text-slate-900 text-sm">Personal Data</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-3 space-y-3 no-scrollbar text-xs">
          <div className="flex items-center gap-3 p-3 bg-brand-50/50 rounded-2xl border border-brand-100">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
              alt="Avatar"
              className="w-12 h-12 rounded-full object-cover border-2 border-brand-500 shadow-sm"
            />
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-slate-900 text-sm">Tonald Drump</span>
                <span className="w-3.5 h-3.5 rounded-full bg-brand-600 text-white text-[8px] flex items-center justify-center font-bold">✓</span>
              </div>
              <p className="text-[11px] text-brand-600 font-medium">Junior Full Stack Developer</p>
            </div>
          </div>

          <div className="space-y-2.5 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <div>
              <span className="text-[10px] text-slate-400 font-medium block">Full Name</span>
              <span className="font-semibold text-slate-800 text-xs">Tonald Drump</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-medium block">Date of Birth</span>
              <span className="font-semibold text-slate-800 text-xs">10 December 1997 (28 Years)</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-medium block">Work Email</span>
              <span className="font-semibold text-slate-800 text-xs">Tonald@work.com</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-medium block">Phone</span>
              <span className="font-semibold text-slate-800 text-xs">+62 82150005000</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-medium block">Current Domicile</span>
              <span className="font-semibold text-slate-800 text-xs">Taman Anggrek, Jakarta Barat</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-medium block">Company ID</span>
              <span className="font-semibold text-slate-800 text-xs font-mono">1015015</span>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => {
              onClose();
              if (onEdit) onEdit();
            }}
            className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow transition-all"
          >
            Edit Personal Data
          </button>
        </div>
      </div>
    </div>
  );
}

export function OfficeAssetsSheet({ onClose }) {
  const assets = [
    {
      id: "AST-01",
      name: "MacBook Pro 16\" M3 Max",
      category: "Laptop",
      serial: "C02G8492MD6R",
      assignedDate: "12 Jan 2024",
      status: "Assigned",
      icon: Laptop
    },
    {
      id: "AST-02",
      name: "Dell UltraSharp 27\" 4K",
      category: "External Display",
      serial: "CN-08492-71618",
      assignedDate: "15 Jan 2024",
      status: "Assigned",
      icon: Monitor
    },
    {
      id: "AST-03",
      name: "Sony WH-1000XM5 Headset",
      category: "Audio Peripheral",
      serial: "SN-92817412",
      assignedDate: "01 Feb 2024",
      status: "Assigned",
      icon: Headphones
    },
    {
      id: "AST-04",
      name: "Office Smart Access Key",
      category: "Access Pass",
      serial: "KEY-1015015",
      assignedDate: "10 Jan 2024",
      status: "Active",
      icon: Key
    }
  ];

  return (
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-3 sm:p-4 animate-ios-fade"
    >
      <div className="w-full max-w-[370px] bg-white rounded-3xl p-5 text-left shadow-elevated border border-slate-100 max-h-[85dvh] flex flex-col animate-ios-sheet">
        <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" />

        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Laptop className="w-4 h-4 text-brand-600" />
            <h3 className="font-bold text-slate-900 text-sm">Office Assets (4)</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] text-slate-400 mt-2 mb-3">
          Hardware and accessories officially registered under your account.
        </p>

        <div className="flex-1 overflow-y-auto space-y-2.5 no-scrollbar pr-0.5">
          {assets.map((ast) => {
            const Icon = ast.icon;
            return (
              <div
                key={ast.id}
                className="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-100 transition-colors flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 text-xs truncate">{ast.name}</h4>
                    <span className="text-[9px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full shrink-0">
                      {ast.status}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {ast.category} • S/N: <span className="font-mono">{ast.serial}</span>
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Assigned on: {ast.assignedDate}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-3 border-t border-slate-100 mt-2">
          <button
            onClick={() => {
              alert("Asset maintenance request submitted to IT Support.");
              onClose();
            }}
            className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors"
          >
            Request Asset Support / Repair
          </button>
        </div>
      </div>
    </div>
  );
}

export function PayrollTaxSheet({ onClose }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      confetti({ particleCount: 50, spread: 60 });
      alert("Payslip PDF for September 2024 downloaded successfully!");
      onClose();
    }, 1200);
  };

  return (
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-3 sm:p-4 animate-ios-fade"
    >
      <div className="w-full max-w-[370px] bg-white rounded-3xl p-5 text-left shadow-elevated border border-slate-100 max-h-[85dvh] flex flex-col animate-ios-sheet">
        <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" />

        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-brand-600" />
            <h3 className="font-bold text-slate-900 text-sm">Payroll & Tax</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-3 space-y-3 no-scrollbar text-xs">
          {/* Main Net Pay Card */}
          <div className="bg-gradient-to-r from-brand-600 to-brand-700 p-4 rounded-2xl text-white shadow-purple-glow">
            <span className="text-[10px] text-brand-100 font-medium block">Latest Net Salary (September 2024)</span>
            <span className="text-2xl font-bold font-mono tracking-tight block mt-0.5">$4,850.00</span>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] text-emerald-300 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Transferred on 28 Sept 2024 • Bank BCA</span>
            </div>
          </div>

          {/* Breakdown Items */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Earnings & Deductions</span>
            
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-600">Basic Monthly Pay</span>
              <span className="font-bold text-slate-900 font-mono">$4,200.00</span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-600">Performance Bonus</span>
              <span className="font-bold text-emerald-600 font-mono">+$850.00</span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-600">Income Tax (PPH 21)</span>
              <span className="font-bold text-red-500 font-mono">-$160.00</span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-600">Health & BPJS Insurance</span>
              <span className="font-bold text-red-500 font-mono">-$40.00</span>
            </div>

            <div className="pt-2 border-t border-slate-200 flex justify-between items-center font-bold text-slate-900">
              <span>Total Take-Home Pay</span>
              <span className="text-brand-600 font-mono text-sm">$4,850.00</span>
            </div>
          </div>

          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100 text-[11px] text-amber-800 leading-snug">
            💡 <strong>Tax Filing Year 2024:</strong> Your annual 1721-A1 tax form will be issued by HR in January 2025.
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>{downloading ? "Generating PDF..." : "Download Payslip PDF (Sept 2024)"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function RolesSheet({ onClose }) {
  return (
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-3 sm:p-4 animate-ios-fade"
    >
      <div className="w-full max-w-[370px] bg-white rounded-3xl p-5 text-left shadow-elevated border border-slate-100 max-h-[85dvh] flex flex-col animate-ios-sheet">
        <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" />

        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-600" />
            <h3 className="font-bold text-slate-900 text-sm">Role & Permissions</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-3 space-y-3 no-scrollbar text-xs">
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <div>
              <span className="text-[10px] text-slate-400 block font-medium">Job Title</span>
              <span className="font-bold text-slate-900 text-xs">Junior Full Stack Developer</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-medium">Department</span>
              <span className="font-semibold text-slate-800 text-xs">Core Product Engineering</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-medium">Direct Supervisor</span>
              <span className="font-semibold text-slate-800 text-xs">Elaine Watson (Product Lead)</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-medium">Employment Tier</span>
              <span className="font-semibold text-slate-800 text-xs">Full-Time Staff (Permanent)</span>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Granted Access Rights</span>
            <ul className="space-y-1.5 text-slate-700">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Git Source Repositories (Frontend / Mobile)</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> CI/CD Staging Deployment Pipelines</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Jira & Linear Task Board Creation</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Employee Expense Reimbursement Submission</li>
            </ul>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function ChangePasswordSheet({ onClose }) {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-3 sm:p-4 animate-ios-fade"
    >
      <div className="w-full max-w-[370px] bg-white rounded-3xl p-5 text-left shadow-elevated border border-slate-100 max-h-[85dvh] flex flex-col animate-ios-sheet">
        <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" />

        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-brand-600" />
            <h3 className="font-bold text-slate-900 text-sm">Change Password</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        {success ? (
          <div className="py-8 text-center space-y-2">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Password Updated!</h4>
            <p className="text-xs text-slate-500">Your password was changed successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="py-3 space-y-3 text-xs">
            <div>
              <label className="block text-[10px] font-bold text-slate-700 mb-1">Current Password</label>
              <input
                type="password"
                required
                defaultValue="secretpass123"
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-700 mb-1">New Password</label>
              <input
                type="password"
                required
                placeholder="At least 8 characters"
                className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-700 mb-1">Confirm New Password</label>
              <input
                type="password"
                required
                placeholder="Repeat new password"
                className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow"
              >
                Update Password
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function VersioningSheet({ onClose }) {
  return (
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-3 sm:p-4 animate-ios-fade"
    >
      <div className="w-full max-w-[370px] bg-white rounded-3xl p-5 text-center shadow-elevated border border-slate-100 max-h-[85dvh] flex flex-col animate-ios-sheet">
        <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" />

        <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center mx-auto mb-3 shadow-purple-glow">
          <span className="font-bold text-base">WM</span>
        </div>

        <h3 className="font-bold text-slate-900 text-base mb-0.5">Work Mate Mobile</h3>
        <p className="text-[11px] text-slate-400 mb-4 font-mono">Version 2.4.1 (Build 20240928)</p>

        <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-left text-xs space-y-2 mb-4">
          <span className="font-bold text-slate-800 block text-[11px]">What's New in this Version:</span>
          <p className="text-slate-500 text-[11px] leading-relaxed">
            • Accurate Geofenced Attendance clock-in with live GPS confirmation.<br/>
            • Automatic workload & burnout fatigue monitoring.<br/>
            • Instant expense receipts upload with status tracking.<br/>
            • 4 Career Recognition Achievement badges.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow"
        >
          Got It
        </button>
      </div>
    </div>
  );
}

export function FaqSheet({ onClose }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "How does the geofenced clock-in work?",
      a: "When you are within the 100m perimeter of Jalan Kebon Sirih office, the app marks you as inside the clock-in zone. You can take a quick selfie to confirm attendance."
    },
    {
      q: "When are submitted expenses reimbursed?",
      a: "Approved expenses are disbursed directly with your monthly payroll on the 28th of every month."
    },
    {
      q: "How do I request emergency leave?",
      a: "Go to the Leave tab and select 'Compassionate Leave' or 'Sick Leave'. Your direct supervisor is notified immediately."
    }
  ];

  return (
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-3 sm:p-4 animate-ios-fade"
    >
      <div className="w-full max-w-[370px] bg-white rounded-3xl p-5 text-left shadow-elevated border border-slate-100 max-h-[85dvh] flex flex-col animate-ios-sheet">
        <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3" />

        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-brand-600" />
            <h3 className="font-bold text-slate-900 text-sm">FAQ & Help</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-3 space-y-2 no-scrollbar text-xs">
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              className="p-3 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer"
            >
              <h4 className="font-bold text-slate-900 text-xs flex justify-between items-center">
                <span>{faq.q}</span>
                <span className="text-slate-400">{openIdx === i ? "▲" : "▼"}</span>
              </h4>
              {openIdx === i && (
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed border-t border-slate-200/60 pt-2">
                  {faq.a}
                </p>
              )}
            </div>
          ))}

          <div className="p-3 bg-brand-50 rounded-2xl text-[11px] text-brand-700 leading-snug">
            Need urgent HR assistance? Contact our HR Helpdesk at <strong className="underline">hr@workmate.com</strong>.
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
