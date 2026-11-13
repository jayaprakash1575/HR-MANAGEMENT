import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Zap, 
  Calendar, 
  MessageSquare, 
  Flag, 
  Plus, 
  Frown, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  Layers
} from 'lucide-react';

export default function TasksMain() {
  const { tasks, setActiveModal, setSelectedTask } = useApp();
  const [filter, setFilter] = useState('All'); // 'All' | 'To Do' | 'In Progress' | 'Done'

  const filteredTasks = tasks.filter(t => {
    if (filter === 'All') return true;
    return t.status === filter;
  });

  const todoCount = tasks.filter(t => t.status === 'To Do').length;
  const inProgressCount = tasks.filter(t => t.status === 'In Progress').length;
  const doneCount = tasks.filter(t => t.status === 'Done').length;

  return (
    <div className="flex flex-col">
      {/* Top Banner with 3D Checklist Graphic */}
      <div className="px-5 pt-1 pb-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 via-brand-600 to-brand-700 p-5 text-white shadow-purple-glow">
          <div className="relative z-10 max-w-[70%]">
            <h2 className="font-bold text-xl sm:text-2xl tracking-tight leading-snug">
              Challenges Awaiting
            </h2>
            <p className="text-xs text-brand-100 mt-1 font-normal opacity-90">
              Let's tackle your to do list
            </p>
          </div>

          {/* 3D Clipboard & Checklist Graphic */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-20 h-20">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]">
              {/* Clipboard Base */}
              <rect x="22" y="16" width="56" height="74" rx="8" fill="#F4F3FF" />
              <rect x="36" y="8" width="28" height="14" rx="4" fill="#3E1C96" />
              <circle cx="50" cy="14" r="3" fill="#FFFFFF" />

              {/* Checklist Lines & Ticks */}
              <rect x="30" y="30" width="10" height="10" rx="3" fill="#6938EF" />
              <line x1="33" y1="35" x2="35" y2="38" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="35" y1="38" x2="38" y2="33" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="44" y="32" width="28" height="6" rx="3" fill="#D9D6FE" />

              <rect x="30" y="46" width="10" height="10" rx="3" fill="#6938EF" />
              <line x1="33" y1="51" x2="35" y2="54" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="35" y1="54" x2="38" y2="49" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="44" y="48" width="22" height="6" rx="3" fill="#D9D6FE" />

              <rect x="30" y="62" width="10" height="10" rx="3" fill="#E0E7FF" />
              <rect x="44" y="64" width="26" height="6" rx="3" fill="#E0E7FF" />

              {/* Pen Floating */}
              <g transform="rotate(35 70 70)">
                <rect x="68" y="40" width="6" height="30" rx="2" fill="#7A5AF8" />
                <path d="M68 40 L71 34 L74 40 Z" fill="#FDE047" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Summary of Your Work Card */}
      <div className="px-5 mb-4">
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-card">
          <h3 className="font-bold text-slate-900 text-sm tracking-tight mb-0.5">
            Summary of Your Work
          </h3>
          <p className="text-[11px] text-slate-400 mb-4">Your current task progress</p>

          <div className="grid grid-cols-3 gap-3">
            {/* To Do */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <span className="w-2 h-2 rounded-full bg-brand-600" />
                <span>To Do</span>
              </div>
              <span className="text-xl font-bold text-slate-900 font-mono">{todoCount}</span>
            </div>

            {/* In Progress */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>In Progress</span>
              </div>
              <span className="text-xl font-bold text-slate-900 font-mono">{inProgressCount}</span>
            </div>

            {/* Done */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Done</span>
              </div>
              <span className="text-xl font-bold text-slate-900 font-mono">{doneCount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Burnout Stats Card matching Figma */}
      <div className="px-5 mb-5">
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="font-bold text-slate-900 text-sm">Burnout Stats</h3>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-50 text-red-600 border border-red-100">
              <Frown className="w-3 h-3" />
              Poor
            </span>
          </div>
          <p className="text-xs text-slate-500 mb-3 leading-relaxed">
            You've completed <strong className="text-slate-800">8 more tasks than usual</strong>, maintain your task with your supervisor
          </p>

          {/* Workload Indicator Meter */}
          <div className="relative pt-1">
            <div className="w-full h-2 rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-red-500" />
            {/* Needle indicator positioned at the Poor/High end */}
            <div className="absolute top-0 right-10 -translate-y-1 flex flex-col items-center">
              <span className="w-3.5 h-3.5 bg-red-600 rounded-full border-2 border-white shadow-sm" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-medium">
              <span>Healthy</span>
              <span>Moderate</span>
              <span className="text-red-500 font-semibold">Overloaded</span>
            </div>
          </div>
        </div>
      </div>

      {/* Task to Tackle Section */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-slate-900 text-sm tracking-tight">Task to Tackle</h3>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-brand-100 text-brand-700">
              {filteredTasks.length}
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 text-[11px]">
            {['All', 'In Progress', 'To Do', 'Done'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-2 py-0.5 rounded-full font-medium transition-colors ${
                  filter === f
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 text-slate-500 hover:text-slate-800'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <p className="text-xs text-slate-500 mb-3">The tasks assigned to you for today</p>

        {/* Task Cards List */}
        <div className="space-y-3 mb-6">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              onClick={() => {
                setSelectedTask(task);
                setActiveModal('taskDetail');
              }}
              className="bg-white rounded-2xl p-4 border border-slate-100 shadow-card hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 fill-brand-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 text-sm tracking-tight leading-snug group-hover:text-brand-600 transition-colors">
                    {task.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {task.description}
                  </p>
                </div>
              </div>

              {/* Status & Priority Badges */}
              <div className="flex items-center gap-2 mb-3 pl-11">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-brand-50 text-brand-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  {task.status}
                </span>

                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                  task.priority === 'High' 
                    ? 'bg-red-50 text-red-600' 
                    : task.priority === 'Medium' 
                    ? 'bg-amber-50 text-amber-700' 
                    : 'bg-emerald-50 text-emerald-700'
                }`}>
                  <Flag className="w-2.5 h-2.5 fill-current" />
                  {task.priority}
                </span>

                <span className="text-[10px] font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                  {task.difficulty}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-1.5 mb-3 overflow-hidden">
                <div
                  className="bg-brand-600 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${task.progress}%` }}
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-1 text-slate-400 text-xs">
                <div className="flex items-center -space-x-2">
                  {task.assignees.map((a, idx) => (
                    <img
                      key={idx}
                      src={a.avatar}
                      alt={a.name}
                      className="w-6 h-6 rounded-full object-cover ring-2 ring-white"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3 text-[11px]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{task.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{task.commentsCount}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Create Task Button */}
        <button
          onClick={() => setActiveModal('createTask')}
          className="w-full py-3.5 px-4 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-semibold text-sm shadow-purple-glow transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Create Task</span>
        </button>
      </div>
    </div>
  );
}

