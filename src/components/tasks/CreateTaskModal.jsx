import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ChevronLeft, 
  UploadCloud, 
  FileText, 
  User, 
  Flag, 
  Sparkles, 
  Layers, 
  Check, 
  Calendar 
} from 'lucide-react';

export default function CreateTaskModal() {
  const { setActiveModal, handleCreateTask } = useApp();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignee: 'Tonald Drump',
    priority: 'High',
    difficulty: 'Medium',
    dueDate: '29 April',
    attachments: [null, null, null]
  });

  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;
    setShowConfirm(true);
  };

  const handleFinalProceed = () => {
    handleCreateTask(formData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#F9FAFB] flex flex-col max-w-[420px] mx-auto overflow-hidden animate-in fade-in duration-200">
      {/* Header */}
      <div className="px-4 py-3 bg-white border-b border-slate-100 flex items-center justify-between">
        <button
          onClick={() => setActiveModal(null)}
          className="p-1.5 -ml-1 rounded-full text-slate-700 hover:bg-slate-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="font-bold text-slate-900 text-sm">Create New Task</h3>
        <div className="w-7" />
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-5 no-scrollbar">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Attachments Section */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Attachment
            </label>
            <p className="text-[11px] text-slate-400 mb-2.5">
              Format should be in .pdf, .jpeg, .png less than 5MB
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-2xl border-2 border-dashed border-brand-200 hover:border-brand-500 bg-[#F4F3FF]/40 flex flex-col items-center justify-center p-2 cursor-pointer transition-colors group"
                >
                  <UploadCloud className="w-5 h-5 text-brand-500 group-hover:scale-110 transition-transform mb-1" />
                  <span className="text-[10px] text-brand-600 font-medium">Upload</span>
                </div>
              ))}
            </div>
          </div>

          {/* Task Title */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Task Title
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <FileText className="w-4 h-4 text-brand-600" />
              </div>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter Task Title"
                className="w-full pl-9 pr-3 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              />
            </div>
          </div>

          {/* Task Description */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Task Description
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter Task Description"
              className="w-full p-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 resize-none"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Assign To
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4 text-brand-600" />
              </div>
              <select
                value={formData.assignee}
                onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
                className="w-full pl-9 pr-8 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 appearance-none"
              >
                <option value="Tonald Drump">Tonald Drump (You)</option>
                <option value="Sarah Jenkins">Sarah Jenkins (Frontend Lead)</option>
                <option value="Alex Morgan">Alex Morgan (Backend Engineer)</option>
                <option value="Elaine Watson">Elaine Watson (Product Manager)</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                ▼
              </div>
            </div>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Priority
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Flag className="w-4 h-4 text-brand-600" />
              </div>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full pl-9 pr-8 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 appearance-none"
              >
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                ▼
              </div>
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Difficulty
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Layers className="w-4 h-4 text-brand-600" />
              </div>
              <select
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                className="w-full pl-9 pr-8 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 appearance-none"
              >
                <option value="Easy">Easy (1 - 2 hours)</option>
                <option value="Medium">Medium (Half day)</option>
                <option value="Hard">Hard (Multiple days)</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                ▼
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow transition-all"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>

      {/* Confirmation Bottom Sheet */}
      {showConfirm && (
        <div className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-[360px] bg-white rounded-3xl p-6 text-center shadow-elevated border border-slate-100 animate-in slide-in-from-bottom-4 duration-300">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-purple-glow mb-4">
              <Calendar className="w-7 h-7" />
            </div>

            <h3 className="font-bold text-slate-900 text-base mb-1.5">Create New Task</h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Double-check your task details to ensure everything is correct. Do you want to proceed?
            </p>

            <div className="space-y-2.5">
              <button
                onClick={handleFinalProceed}
                className="w-full py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-purple-glow transition-all"
              >
                Yes, Proceed Now
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="w-full py-3 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
              >
                No, Let me check
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

