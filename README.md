# Work Mate — UI HR Management & Task Management Mobile App

A high-fidelity, responsive implementation of the **Work Mate UI Kit & Design System for Human Resource & Task Management** based on the Figma design specifications.

---

## 🎨 Design System & Color Tokens

Built strictly in accordance with the official **Work Mate** design tokens:

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Purple Primary** | `#6938EF` | Primary buttons, active indicators, brand badges |
| **Purple Dark** | `#5925DC` | Gradient banners, header elevations |
| **Purple Light** | `#7A5AF8` | Highlights, geofence zones, badge rings |
| **Purple Deep** | `#4A1FB8` | Active states, pressed buttons |
| **Brand Surface 50** | `#F4F3FF` | Subdued tag backgrounds, pill containers |
| **Brand Surface 100** | `#EBE9FE` | Subtle border accents |
| **Black / Obsidian** | `#101828` | Deep slate contrast, docked bottom navigation |
| **Neutral White** | `#F9FAFB` | Primary background neutral |
| **Neutral Gray** | `#F1F3F8` | Card backgrounds, icon circles, inputs |
| **Typography** | `Inter` | Regular (400), Medium (500), Semibold (600), Bold (700) |

---

## 📱 Implemented Core Modules & Interactive User Flows

### 1. Home Screen (Daily Briefing)
- **User Header**: Avatar, verified badge, `Tonald Drump`, `Junior Full Stack Developer`, chat bubble, and notifications bell with unread indicator.
- **Work Summary Banner**: Purple gradient banner with 3D security scanner & sparkles graphic (`My Work Summary - Today task & presence activity`).
- **Today Meeting (2)**:
  - Meeting cards with time slots (`01:30 AM - 02:00 AM`), schedule info, overlapping attendee avatars (`+3`), and interactive **"Join Meet"** buttons.
- **Today Task (1)**:
  - `Wiring Dashboard Analytics` card with `In Progress` and `High` priority tags, 72% progress bar, deadline (`27 April`), and comments counter.
- **Empty State Switcher**: One-click toggle in the top bar to preview Figma empty states (`No Meeting Available`, `No Tasks Assigned`).

### 2. Attendance & Presence ("Let's Get To Work!")
- **Total Working Hours Card**: Today live timer (`04:10:25 Hrs`) and pay period counter (`32:00 Hrs`).
- **End-to-End Clock-In Flow**:
  1. **Clock In Area**: Map view with interactive geofence circle radius, office address (`Jalan Kebon Sirih`, `Masjid Istiqlal`), GPS coordinates (`Lat -6.1834 Long 106.8283`), and schedule review.
  2. **Biometric Selfie Camera**: Simulated camera viewport with face oval guide, flash toggle, and shutter capture button.
  3. **Clock-In Success Dialog**: Confirmation popup with purple check avatar and confetti celebration.
  4. **Active Clocked-In State**: Live counting timer, `Take A Break` toggle, and `Clock Out` actions.
  5. **On-Break State**: `Back To Work` and `Clock Out` actions.
  6. **Confirm Clockout Dialog**: Time verification with overtime summary.
  7. **Clockout Successful Dialog**: Friendly sign-off message.
- **Attendance History Log**: Detailed log for past dates with total hours and clock in/out timestamps.

### 3. Task Management ("Challenges Awaiting")
- **Header**: Purple gradient card with 3D clipboard & checklist graphic.
- **Summary of Your Work**: Live counters for `To Do (5)`, `In Progress (2)`, and `Done (1)`.
- **Burnout Stats**: `Poor` badge with workload meter alert (`You've completed 8 more tasks than usual, maintain your task with your supervisor`).
- **Task Filtering**: Filter by `All`, `In Progress`, `To Do`, `Done`.
- **Interactive Task Subtasks**: Modal to check off checklist items, dynamically updating progress percentage and status.
- **Create New Task Flow**:
  - File upload dropzones (`.pdf, .jpeg, .png < 5MB`).
  - Task title, description, assignee dropdown, priority (`High`, `Medium`, `Low`), and difficulty (`Easy`, `Medium`, `Hard`).
  - Confirmation bottom sheet (`Yes, Proceed Now`).
  - Dynamically appends new task to the backlog with confetti.

### 4. Expense Management ("Expense Summary")
- **Header**: Purple gradient card with 3D credit card & rainbow graphic.
- **Metric Highlights**: Total (`$1,010`), Review (`$455`), Approved (`$555`).
- **Status Tabs**: Filter by `Review (3)`, `Approved (2)`, and `Rejected (1)`.
- **Expense Records**: Category, dates, amounts, approver badge (`By Elaine`), and receipt attachment preview.
- **Submit Expense Flow**: Document upload, category selector, transaction date, amount ($USD), description, and success confirmation modal.

### 5. Leave Management ("Leave Summary")
- **Header**: Purple gradient card with 3D suitcase & rainbow graphic.
- **Leave Balances**: Available (`20`), Paid Leave (`2`), Sick Leave (`0`).
- **Submit Leave Flow**: Date range picker, leave type selection, reason input, and supervisor routing.

### 6. Profile & Employee Settings
- User identity card, email, and employee ID.
- Sections: Personal Work Profile, Office Assets (MacBook Pro 16", 4K Monitor), Payroll & Tax (Payslip PDF download), and App Feature Tour.

### 7. Onboarding & Registration (Auth Flow)
- 3-step value onboarding carousel with real product previews.
- Full Registration / Sign Up screen with Company ID and Country Selector (`INA +62`).
- Terms & Privacy Policy sheet with `I Agree` / `Decline`.
- 6-digit OTP verification modal (`1 1 2 2 4 4`).
- Welcome modal (`Set Up My Profile` / `Explore The App First`).

---

## 💻 Responsive Presentation Modes

The application features a responsive presentation toolbar at the top:
1. **Mobile Frame Mode**: An authentic iPhone 15 Pro titanium frame mockup with Dynamic Island, camera cutout, speaker slit, status bar (`08:15`, Signal, Battery), and curved bezel. Perfect for presenting the mobile app UI 1:1.
2. **Full Responsive Mode**: Seamlessly expands into an enterprise-grade responsive layout adapting across tablet, laptop, and desktop viewport sizes.

---

## 🚀 Running the Project

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Server is currently running live at: **`http://localhost:3000`**

