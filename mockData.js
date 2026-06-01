export const routes = [
  { id: "overview", label: "Overview" },
  { id: "clinic", label: "Clinic Dashboard" },
  { id: "record", label: "Child Record" },
  { id: "growth", label: "Growth & Care" },
  { id: "parent", label: "Parent App" },
  { id: "analytics", label: "Analytics" },
  { id: "data-flow", label: "Data Flow" },
  { id: "privacy", label: "Privacy" },
];

export const clinicMetrics = [
  { label: "Children enrolled", value: "1,284", detail: "Across active care journeys", tone: "purple" },
  { label: "Overdue follow-ups", value: "42", detail: "Needs care team review", tone: "rose" },
  { label: "Vaccine reminders", value: "118", detail: "Due in next 30 days", tone: "teal" },
  { label: "Growth alerts", value: "16", detail: "Flagged for provider follow-up", tone: "amber" },
  { label: "Screening due", value: "73", detail: "Developmental checklist pending", tone: "indigo" },
];

export const careJourneys = [
  { title: "Well-baby visits", progress: 78, count: "312 active", state: "On track" },
  { title: "Vaccine catch-up", progress: 64, count: "86 active", state: "Needs outreach" },
  { title: "Asthma plans", progress: 82, count: "49 active", state: "Active monitoring" },
  { title: "Developmental screening", progress: 58, count: "121 active", state: "Due soon" },
];

export const stakeholderSignals = [
  { label: "Buyer", value: "Clinics, insurers, provider groups" },
  { label: "Deployment", value: "White-label SaaS" },
  { label: "Core asset", value: "Unified Pediatric Health Record" },
  { label: "Data posture", value: "Consent-driven, de-identified analytics" },
];

export const platformConnections = [
  {
    title: "Parent engagement",
    text: "Families submit updates and receive clinic-configured reminders.",
    route: "parent",
  },
  {
    title: "Unified PHR Core",
    text: "Authorized parent and provider inputs create a longitudinal pediatric record.",
    route: "record",
  },
  {
    title: "Clinic operations",
    text: "Care teams act on reminders, follow-ups, screening queues, and care journeys.",
    route: "clinic",
  },
  {
    title: "Analytics outputs",
    text: "De-identified trends support program planning and care gap monitoring.",
    route: "analytics",
  },
];

export const patients = [
  {
    name: "Emma Wilson",
    age: "2 years",
    lastVisit: "May 10, 2026",
    nextReminder: "Vaccine overdue",
    riskFlag: "Overdue",
    journey: "Vaccine catch-up",
  },
  {
    name: "Noah Patel",
    age: "4 years",
    lastVisit: "Apr 22, 2026",
    nextReminder: "Growth follow-up due",
    riskFlag: "Follow-up",
    journey: "Growth monitoring",
  },
  {
    name: "Olivia Chen",
    age: "6 months",
    lastVisit: "May 24, 2026",
    nextReminder: "Well-baby visit scheduled",
    riskFlag: "Low",
    journey: "Infant preventive care",
  },
  {
    name: "Liam Brown",
    age: "7 years",
    lastVisit: "May 02, 2026",
    nextReminder: "Asthma care plan check-in",
    riskFlag: "Active plan",
    journey: "Asthma care plan active",
  },
];

export const childRecord = {
  name: "Olivia Chen",
  age: "6 months",
  pronouns: "She/her",
  guardian: "Maya Chen",
  clinic: "Maple Kids Clinic",
  consent: "Parent consent active for clinic care team sharing",
  demographics: [
    { label: "Date of birth", value: "Nov 21, 2025" },
    { label: "Care team", value: "Pediatrician, nurse, dietitian" },
    { label: "Primary language", value: "English" },
    { label: "Province", value: "Ontario" },
  ],
  summaries: [
    { title: "Growth summary", value: "Tracking consistently", source: "Clinic Visit" },
    { title: "Vaccine status", value: "6-month reminders scheduled", source: "Clinic Visit" },
    { title: "Development milestones", value: "Parent checklist submitted", source: "Parent App" },
    { title: "Dental/therapy notes", value: "Placeholder for authorized provider notes", source: "Provider Note" },
  ],
  timeline: [
    { label: "Parent-reported feeding update", date: "May 27, 2026", source: "Parent App" },
    { label: "Well-baby visit summary", date: "May 24, 2026", source: "Clinic Visit" },
    { label: "Provider note: monitor sleep routine", date: "May 24, 2026", source: "Provider Note" },
    { label: "Developmental checklist completed", date: "May 18, 2026", source: "Parent App" },
  ],
};

export const growthData = {
  percentiles: [
    { label: "Weight percentile", value: "54th", width: 54 },
    { label: "Height percentile", value: "61st", width: 61 },
    { label: "BMI percentile", value: "48th", width: 48 },
    { label: "Head circumference", value: "57th", width: 57 },
  ],
  checklist: [
    "6-month wellness visit",
    "Nutrition discussion",
    "Sleep and routine guidance",
    "Developmental screening",
    "Dental home conversation",
  ],
  vaccines: ["Routine immunization reminder", "Follow-up confirmation", "Parent education prompt"],
  guidance: ["Feeding transitions", "Safe sleep routines", "Responsive play", "Oral health basics"],
};

export const parentPreview = {
  child: "Olivia",
  status: "6-month care journey",
  reminders: [
    { title: "Vaccination due", detail: "Reminder prepared by Maple Kids Clinic" },
    { title: "Growth update", detail: "Add current weight before next visit" },
    { title: "Secure message", detail: "Care team response placeholder" },
  ],
  progress: 68,
  tip: "Small routines can help make preventive visits easier for families.",
};

export const analytics = [
  { label: "Vaccine completion rate", value: "86%", trend: "+4% vs last quarter" },
  { label: "Growth monitoring coverage", value: "91%", trend: "1,168 children included" },
  { label: "Follow-up adherence", value: "74%", trend: "+9% after reminders" },
  { label: "Screening completion", value: "69%", trend: "Developmental checks completed" },
];

export const careGaps = [
  { label: "Preventive visit overdue", value: 34 },
  { label: "Vaccine reminder pending", value: 28 },
  { label: "Growth follow-up due", value: 19 },
  { label: "Screening checklist open", value: 22 },
];

export const privacyItems = [
  "Consent-driven sharing configured by care organization",
  "Role-based access for clinic and provider users",
  "Audit log trail for access and administrative review",
  "Canada-only hosting placeholder for stakeholder review",
  "PHIPA/PIPEDA-aware design language without claiming certification",
  "Parent permissions for authorized sharing workflows",
  "De-identified analytics only for aggregate insights",
  "No sale of raw child health data",
];
