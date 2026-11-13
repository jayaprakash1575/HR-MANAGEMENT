import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  currentUser,
  initialMeetings,
  initialTasks,
  initialAttendanceHistory,
  initialExpenses,
  initialLeaves
} from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Navigation & View Mode
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'attendance' | 'tasks' | 'expenses' | 'leave' | 'profile'
  const [deviceMode, setDeviceMode] = useState('phone'); // 'phone' | 'desktop'
  const [showEmptyStates, setShowEmptyStates] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'clockInMap', 'selfieCamera', etc.

  // Attendance State
  const [attendanceStatus, setAttendanceStatus] = useState('out'); // 'out' | 'in' | 'break'
  const [clockInTimestamp, setClockInTimestamp] = useState(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(4 * 3600 + 10 * 60 + 25); // Starts with 04:10:25 as in Figma design
  const [attendanceHistory, setAttendanceHistory] = useState(initialAttendanceHistory);
  const [capturedSelfie, setCapturedSelfie] = useState(null);

  // Live timer when clocked in
  useEffect(() => {
    let interval = null;
    if (attendanceStatus === 'in') {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [attendanceStatus]);

  // Tasks State
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState(null);

  // Expenses State
  const [expenses, setExpenses] = useState(initialExpenses);
  const [expenseFilter, setExpenseFilter] = useState('Approved'); // 'Review' | 'Approved' | 'Rejected'

  // Leaves State
  const [leaves, setLeaves] = useState(initialLeaves);
  const [leaveFilter, setLeaveFilter] = useState('Approved'); // 'Review' | 'Approved' | 'Rejected'

  // Meetings State
  const [meetings, setMeetings] = useState(initialMeetings);

  // Notifications & Unread
  const [unreadNotifications, setUnreadNotifications] = useState(2);
  const [unreadMessages, setUnreadMessages] = useState(3);

  // Helper formatting for time
  const formatTime = (totalSecs) => {
    const hours = Math.floor(totalSecs / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSecs % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSecs % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds} Hrs`;
  };

  // Actions
  const handleStartClockInFlow = () => {
    setActiveModal('clockInMap');
  };

  const handleConfirmLocation = () => {
    setActiveModal('selfieCamera');
  };

  const handleCaptureSelfie = (selfieSrc) => {
    setCapturedSelfie(selfieSrc);
    setActiveModal('clockInSuccess');
    setAttendanceStatus('in');
    setClockInTimestamp(new Date());
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleTakeBreak = () => {
    setAttendanceStatus('break');
  };

  const handleBackToWork = () => {
    setAttendanceStatus('in');
  };

  const handleStartClockOut = () => {
    setActiveModal('clockOutConfirm');
  };

  const handleConfirmClockOut = () => {
    const todayRecord = {
      id: `att-${Date.now()}`,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      totalHours: formatTime(elapsedSeconds),
      clockIn: "09:00 AM",
      clockOut: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      status: elapsedSeconds > 8 * 3600 ? "Overtime" : "On Time"
    };

    setAttendanceHistory([todayRecord, ...attendanceHistory]);
    setAttendanceStatus('out');
    setElapsedSeconds(0);
    setActiveModal('clockOutSuccess');
  };

  const handleCreateTask = (newTaskData) => {
    const newTask = {
      id: `t-${Date.now()}`,
      title: newTaskData.title || "New Task",
      description: newTaskData.description || "Task description details...",
      status: "To Do",
      priority: newTaskData.priority || "High",
      difficulty: newTaskData.difficulty || "Medium",
      progress: 0,
      dueDate: newTaskData.dueDate || "30 April",
      commentsCount: 0,
      assignees: [
        { name: currentUser.name, avatar: currentUser.avatar }
      ]
    };
    setTasks([newTask, ...tasks]);
    setActiveModal('taskSuccess');
    confetti({
      particleCount: 70,
      spread: 50,
      origin: { y: 0.7 }
    });
  };

  const handleSubmitExpense = (newExpData) => {
    const newExpense = {
      id: `exp-${Date.now()}`,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      category: newExpData.category || "General Expense",
      amount: parseFloat(newExpData.amount) || 50,
      status: "Review",
      approvedAt: null,
      approver: {
        name: "Pending HR Review",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
      },
      receiptUrl: newExpData.receiptUrl || "https://images.unsplash.com/photo-1554415707-9e4201938061?w=400&auto=format&fit=crop&q=80"
    };
    setExpenses([newExpense, ...expenses]);
    setActiveModal('expenseSuccess');
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const handleSubmitLeave = (newLeaveData) => {
    const newLeave = {
      id: `lv-${Date.now()}`,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      type: newLeaveData.type || "Paid Leave",
      duration: `${newLeaveData.days || 1} Day${(newLeaveData.days || 1) > 1 ? 's' : ''}`,
      dateRange: newLeaveData.dateRange || "Upcoming",
      status: "Review",
      reason: newLeaveData.reason || "Personal Leave"
    };
    setLeaves([newLeave, ...leaves]);
    setActiveModal('leaveSuccess');
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        activeTab,
        setActiveTab,
        deviceMode,
        setDeviceMode,
        showEmptyStates,
        setShowEmptyStates,
        activeModal,
        setActiveModal,
        attendanceStatus,
        setAttendanceStatus,
        elapsedSeconds,
        formatTime,
        attendanceHistory,
        capturedSelfie,
        handleStartClockInFlow,
        handleConfirmLocation,
        handleCaptureSelfie,
        handleTakeBreak,
        handleBackToWork,
        handleStartClockOut,
        handleConfirmClockOut,
        tasks,
        setTasks,
        selectedTask,
        setSelectedTask,
        handleCreateTask,
        expenses,
        expenseFilter,
        setExpenseFilter,
        handleSubmitExpense,
        leaves,
        leaveFilter,
        setLeaveFilter,
        handleSubmitLeave,
        meetings,
        unreadNotifications,
        setUnreadNotifications,
        unreadMessages,
        setUnreadMessages
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

