import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Bell, MessageSquare, Check, Calendar, Zap, AlertCircle } from 'lucide-react';

export function NotificationsDrawer() {
  const { setActiveModal } = useApp();

  const notifications = [
    {
      id: 1,
      title: "Clock In Reminder",
      desc: "Good morning! Don't forget to record your presence for today.",
      time: "08:00 AM",
      unread: true,
      icon: Calendar
    },
    {
      id: 2,
      title: "Task Assigned",
      desc: "Sarah Jenkins assigned you 'Wiring Dashboard Analytics'.",
      time: "Yesterday",
      unread: true,
      icon: Zap
    },
    {
      id: 3,
      title: "Expense Report Approved",
      desc: "Your expense of $500 for Business Trip has been approved by Elaine.",
      time: "2 days ago",
      unread: false,
      icon: Check
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-[380px] bg-white rounded-3xl p-5 text-left shadow-elevated border border-slate-100 animate-in slide-in-from-bottom-4 duration-300">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-brand-600" />
            <h3 className="font-bold text-slate-900 text-sm">Notifications</h3>
          </div>
          <button
            onClick={() => setActiveModal(null)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="py-3 space-y-2.5 max-h-[60vh] overflow-y-auto no-scrollbar">
          {notifications.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.id}
                className={`p-3 rounded-2xl border transition-colors flex items-start gap-3 ${
                  n.unread ? 'bg-brand-50/40 border-brand-100' : 'bg-slate-50 border-slate-100'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 text-xs">{n.title}</h4>
                    <span className="text-[10px] text-slate-400">{n.time}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{n.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setActiveModal(null)}
          className="w-full mt-2 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow transition-all"
        >
          Mark All As Read
        </button>
      </div>
    </div>
  );
}

export function ChatDrawer() {
  const { setActiveModal } = useApp();

  const chats = [
    {
      id: 1,
      name: "Elaine Watson",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
      lastMsg: "Let's review the analytics dashboard sprint today!",
      time: "08:12 AM",
      unread: 2
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Frontend Lead",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      lastMsg: "Pushed the latest design tokens into Figma.",
      time: "Yesterday",
      unread: 1
    },
    {
      id: 3,
      name: "Alex Morgan",
      role: "Backend Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      lastMsg: "API webhooks deployed to staging.",
      time: "2 days ago",
      unread: 0
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-[380px] bg-white rounded-3xl p-5 text-left shadow-elevated border border-slate-100 animate-in slide-in-from-bottom-4 duration-300">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-brand-600" />
            <h3 className="font-bold text-slate-900 text-sm">Team Messages</h3>
          </div>
          <button
            onClick={() => setActiveModal(null)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="py-3 space-y-2 max-h-[60vh] overflow-y-auto no-scrollbar">
          {chats.map((c) => (
            <div
              key={c.id}
              onClick={() => alert(`Opening chat with ${c.name}...`)}
              className="p-3 rounded-2xl hover:bg-slate-50 border border-slate-100 transition-colors flex items-center justify-between gap-3 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">{c.name}</h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{c.lastMsg}</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[10px] text-slate-400 block mb-1">{c.time}</span>
                {c.unread > 0 && (
                  <span className="w-4 h-4 rounded-full bg-brand-600 text-white text-[9px] font-bold inline-flex items-center justify-center">
                    {c.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setActiveModal(null)}
          className="w-full mt-2 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow transition-all"
        >
          Close Messages
        </button>
      </div>
    </div>
  );
}

