export const currentUser = {
  name: "Tonald Drump",
  handle: "@tonalddrump",
  role: "Junior Full Stack Developer",
  verified: true,
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  email: "Tonald@work.com",
  phone: "+62 82150005000",
  companyId: "1015015",
  location: "Jalan Kebon Sirih, Jakarta",
  coordinates: "Lat -6.1834 Long 106.8283",
  schedule: {
    clockIn: "09:00 AM",
    clockOut: "05:00 PM"
  }
};

export const initialMeetings = [
  {
    id: "m-1",
    title: "Townhall Meeting",
    time: "01:30 AM - 02:00 AM",
    type: "All Hands",
    iconType: "document",
    participants: [
      { name: "Sarah", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" },
      { name: "Alex", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
      { name: "Michael", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" }
    ],
    extraParticipants: 3,
    link: "https://meet.google.com/xyz-workmate"
  },
  {
    id: "m-2",
    title: "Dashboard Report",
    time: "01:30 AM - 02:00 AM",
    type: "Sprint Review",
    iconType: "video",
    participants: [
      { name: "Elena", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" },
      { name: "David", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80" },
      { name: "Jessica", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" }
    ],
    extraParticipants: 0,
    link: "https://meet.google.com/abc-workmate"
  }
];

export const initialTasks = [
  {
    id: "t-1",
    title: "Wiring Dashboard Analytics",
    description: "Connect front-end metric charts with GraphQL API and configure real-time webhooks.",
    status: "In Progress", // "To Do", "In Progress", "Done"
    priority: "High",       // "High", "Medium", "Low"
    difficulty: "Medium",
    progress: 72,
    dueDate: "27 April",
    commentsCount: 2,
    assignees: [
      { name: "Tonald", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Sarah", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" },
      { name: "Alex", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: "t-2",
    title: "API Dashboard Analytics Integration",
    description: "Write unit tests for authentication endpoint and update Swagger schema documentation.",
    status: "To Do",
    priority: "Medium",
    difficulty: "Easy",
    progress: 25,
    dueDate: "29 April",
    commentsCount: 4,
    assignees: [
      { name: "Tonald", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Elaine", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: "t-3",
    title: "Mobile App Navigation Optimization",
    description: "Optimize bottom navigation bar animations and transitions across mobile views.",
    status: "Done",
    priority: "Low",
    difficulty: "Hard",
    progress: 100,
    dueDate: "24 April",
    commentsCount: 6,
    assignees: [
      { name: "Tonald", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: "t-4",
    title: "Geo-fencing Clock In Verification",
    description: "Implement 100m radius check around head office location with GPS fallback.",
    status: "To Do",
    priority: "High",
    difficulty: "Medium",
    progress: 0,
    dueDate: "02 May",
    commentsCount: 1,
    assignees: [
      { name: "Sarah", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" },
      { name: "Tonald", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" }
    ]
  }
];

export const initialAttendanceHistory = [
  {
    id: "att-1",
    date: "27 September 2024",
    totalHours: "08:00:00 Hrs",
    clockIn: "09:00 AM",
    clockOut: "05:00 PM",
    status: "On Time"
  },
  {
    id: "att-2",
    date: "26 September 2024",
    totalHours: "08:00:00 Hrs",
    clockIn: "09:00 AM",
    clockOut: "05:00 PM",
    status: "On Time"
  },
  {
    id: "att-3",
    date: "25 September 2024",
    totalHours: "08:10:00 Hrs",
    clockIn: "09:00 AM",
    clockOut: "05:10 PM",
    status: "Overtime"
  },
  {
    id: "att-4",
    date: "24 September 2024",
    totalHours: "07:55:00 Hrs",
    clockIn: "09:05 AM",
    clockOut: "05:00 PM",
    status: "On Time"
  }
];

export const initialExpenses = [
  {
    id: "exp-1",
    date: "18 September 2024",
    category: "E-Learning",
    amount: 55,
    status: "Approved",
    approvedAt: "19 Sept 2024",
    approver: {
      name: "Elaine",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
    },
    receiptUrl: "https://images.unsplash.com/photo-1554415707-9e4201938061?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "exp-2",
    date: "15 September 2024",
    category: "Business Trip",
    amount: 500,
    status: "Approved",
    approvedAt: "16 Sept 2024",
    approver: {
      name: "Elaine",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
    },
    receiptUrl: "https://images.unsplash.com/photo-1554415707-9e4201938061?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "exp-3",
    date: "22 September 2024",
    category: "Office Supplies",
    amount: 125,
    status: "Review",
    approvedAt: null,
    approver: {
      name: "Pending HR Review",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
    },
    receiptUrl: "https://images.unsplash.com/photo-1554415707-9e4201938061?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "exp-4",
    date: "28 September 2024",
    category: "Meals & Client Meeting",
    amount: 330,
    status: "Review",
    approvedAt: null,
    approver: {
      name: "Pending Manager",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80"
    },
    receiptUrl: "https://images.unsplash.com/photo-1554415707-9e4201938061?w=400&auto=format&fit=crop&q=80"
  }
];

export const initialLeaves = [
  {
    id: "lv-1",
    date: "27 September 2024",
    type: "Paid Leave",
    duration: "4 Days",
    dateRange: "27 Sept - 30 Sept 2024",
    status: "Approved",
    reason: "Family gathering & personal recharge"
  },
  {
    id: "lv-2",
    date: "21 July 2024",
    type: "Paid Leave",
    duration: "2 Days",
    dateRange: "21 July - 22 July 2024",
    status: "Approved",
    reason: "Health checkup & medical consultation"
  },
  {
    id: "lv-3",
    date: "25 September 2024",
    type: "Sick Leave",
    duration: "1 Day",
    dateRange: "25 Sept 2024",
    status: "Approved",
    reason: "Flu & fever recovery"
  }
];

