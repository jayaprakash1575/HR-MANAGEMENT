import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Check, Calendar, Flag, MessageSquare, CheckCircle, Clock, Trash2, X } from 'lucide-react';

export function TaskSuccessModal() {
  const { setActiveModal, setActiveTab } = useApp();

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-[360px] bg-white rounded-3xl p-6 text-center shadow-elevated border border-slate-100 animate-in slide-in-from-bottom-4 duration-300">
        <div className="mx-auto w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-purple-glow mb-4">
          <Calendar className="w-7 h-7" />
        </div>

        <h3 className="font-bold text-slate-900 text-base mb-1.5">Task Has Been Created!</h3>
        <p className="text-xs text-slate-500 mb-6 leading-relaxed">
          Congratulations! Task has been successfully assigned and added to your daily backlog.
        </p>

        <button
          onClick={() => {
            setActiveModal(null);
            setActiveTab('tasks');
          }}
          className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow transition-all"
        >
          View Task Manager
        </button>
      </div>
    </div>
  );
}

export function TaskDetailModal() {
  const { selectedTask, setSelectedTask, setActiveModal, tasks, setTasks } = useApp();

  if (!selectedTask) return null;

  const [checklist, setChecklist] = useState([
    { id: 1, text: "Review technical documentation & requirements", done: true },
    { id: 2, text: "Configure endpoints and API contracts", done: selectedTask.progress > 50 },
    { id: 3, text: "Write unit tests and verify edge cases", done: selectedTask.status === 'Done' },
  ]);

  const toggleCheck = (id) => {
    const updated = checklist.map(item => item.id === id ? { ...item, done: !item.done } : item);
    setChecklist(updated);
    
    // update task progress
    const doneItems = updated.filter(i => i.done).length;
    const newProgress = Math.round((doneItems / updated.length) * 100);
    const newStatus = newProgress === 100 ? 'Done' : newProgress > 0 ? 'In Progress' : 'To Do';

    const updatedTasks = tasks.map(t => t.id === selectedTask.id ? { ...t, progress: newProgress, status: newStatus } : t);
    setTasks(updatedTasks);
    setSelectedTask({ ...selectedTask, progress: newProgress, status: newStatus });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-[380px] bg-white rounded-3xl p-5 text-left shadow-elevated border border-slate-100 animate-in slide-in-from-bottom-4 duration-300">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Task Details</span>
          <button
            onClick={() => setActiveModal(null)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="py-3">
          <h3 className="font-bold text-slate-900 text-base mb-1.5 leading-snug">
            {selectedTask.title}
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            {selectedTask.description}
          </p>

          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-brand-50 text-brand-600">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
              {selectedTask.status}
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
              selectedTask.priority === 'High' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-700'
            }`}>
              <Flag className="w-2.5 h-2.5 fill-current" />
              {selectedTask.priority}
            </span>
          </div>

          {/* Checklist */}
          <div className="space-y-2 mb-4">
            <span className="text-xs font-bold text-slate-700 block">Checklist Subtasks</span>
            {checklist.map(item => (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 hover:bg-slate-100 cursor-pointer text-xs transition-colors"
              >
                <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                  item.done ? 'bg-brand-600 border-brand-600 text-white' : 'border-slate-300'
                }`}>
                  {item.done && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className={item.done ? 'line-through text-slate-400' : 'text-slate-700 font-medium'}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Progress */}
          <div>
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>Overall Progress</span>
              <span className="font-bold text-brand-600">{selectedTask.progress}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div
                className="bg-brand-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${selectedTask.progress}%` }}
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => setActiveModal(null)}
          className="w-full mt-2 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-all shadow-purple-glow"
        >
          Save & Close
        </button>
      </div>
    </div>
  );
}

