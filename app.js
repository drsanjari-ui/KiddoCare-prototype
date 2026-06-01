import {
  analytics,
  careGaps,
  careJourneys,
  childRecord,
  clinicMetrics,
  growthData,
  parentPreview,
  patients,
  platformConnections,
  privacyItems,
  routes,
  stakeholderSignals,
} from "./mockData.js";

const app = document.querySelector("#app");

const routeTitles = {
  overview: "Connected Care for Every Child",
  clinic: "Maple Kids Clinic",
  record: "Unified Pediatric Record",
  growth: "Growth & Preventive Care",
  parent: "Parent App Preview",
  analytics: "Population Health Analytics",
  "data-flow": "KiddoCare Data Flow",
  privacy: "Consent & Privacy",
};

const routeSubtitles = {
  overview:
    "A pediatric care coordination platform that connects parents, clinics, and care teams through a unified child health record.",
  clinic: "Clinic-facing workflows for pediatric care coordination, reminders, and follow-up visibility.",
  record: "A single child health record core informed by authorized parent, clinic, and provider inputs.",
  growth: "Pediatric-specific preventive care views with mock growth and reminder data.",
  parent: "A mobile-style parent experience that supports reminders, updates, and secure engagement.",
  analytics: "De-identified analytics only for care gap trends and clinic-level program insight.",
  "data-flow": "The approved architecture: sources enter the Unified PHR Core, then analytics generates outputs.",
  privacy: "Designed with Canadian privacy principles in mind.",
};

function currentRoute() {
  const hash = window.location.hash.replace("#/", "");
  return routes.some((route) => route.id === hash) ? hash : "overview";
}

function setRoute(route) {
  window.location.hash = `/${route}`;
}

function badge(text, tone = "purple") {
  return `<span class="badge badge-${tone}">${text}</span>`;
}

function metricCard(item) {
  return `
    <article class="metric-card tone-${item.tone}">
      <p>${item.label}</p>
      <strong>${item.value}</strong>
      <span>${item.detail}</span>
    </article>
  `;
}

function progressBar(value, label = "") {
  return `
    <div class="progress-wrap" ${label ? `aria-label="${label}"` : ""}>
      <span style="width:${value}%"></span>
    </div>
  `;
}

function panelHeader(title, eyebrow) {
  return `
    <div class="panel-header">
      ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ""}
      <h2>${title}</h2>
    </div>
  `;
}

function architectureStrip() {
  return `
    <div class="flow-strip" aria-label="KiddoCare platform architecture">
      <span>Parent App</span>
      <i>+</i>
      <span>Provider/Clinic Portal</span>
      <b>to</b>
      <span>Unified PHR Core</span>
      <b>to</b>
      <span>Analytics</span>
      <b>to</b>
      <span>Outputs</span>
    </div>
  `;
}

function renderShell(active) {
  return `
    <aside class="sidebar">
      <a class="brand" href="#/overview" aria-label="KiddoCare overview">
        <span class="brand-mark">K</span>
        <span><strong>KiddoCare</strong><small>Pediatric Health SaaS</small></span>
      </a>
      <nav class="nav" aria-label="Prototype navigation">
        ${routes
          .map(
            (route) => `
              <button class="${active === route.id ? "active" : ""}" data-route="${route.id}">
                <span class="nav-dot"></span>${route.label}
              </button>
            `,
          )
          .join("")}
      </nav>
      <div class="sidebar-note">
        <strong>White-label platform</strong>
        <span>B2B pediatric infrastructure for Canadian care organizations</span>
      </div>
    </aside>
    <main class="main">
      <header class="topbar">
        <div>
          <span class="eyebrow">KiddoCare prototype</span>
          <h1>${routeTitles[active]}</h1>
          <p>${routeSubtitles[active]}</p>
        </div>
        <div class="topbar-actions">
          ${badge("B2B-first", "purple")}
          ${badge("Canada-focused", "teal")}
          ${badge("Mock data", "lavender")}
        </div>
      </header>
      <section class="screen">
        ${renderRoute(active)}
      </section>
    </main>
  `;
}

function overviewScreen() {
  const pillars = [
    {
      title: "Unified Pediatric Health Record",
      text: "A shared pediatric record core for authorized parent, clinic, and provider context.",
    },
    {
      title: "Automated Care Journeys & Reminders",
      text: "Care plans, follow-ups, vaccine prompts, and screening reminders coordinated across teams.",
    },
    {
      title: "Parent Engagement App",
      text: "A supportive app for families to view reminders, submit updates, and stay connected.",
    },
    {
      title: "De-identified Analytics & Population Health Insights",
      text: "Clinic-level and program-level trends without selling raw child health data.",
    },
  ];

  const audiences = ["Clinics", "Pediatric providers", "Dental/therapy providers", "Insurers", "Care organizations"];

  return `
    <div class="hero-layout">
      <section class="hero-copy">
        <span class="eyebrow">B2B-first pediatric health infrastructure</span>
        <h2>Connected Care for Every Child</h2>
        <p>
          KiddoCare is a white-labeled pediatric care SaaS platform for Canadian clinics,
          pediatric providers, dental and therapy providers, insurers, and health organizations.
          The parent app is one channel in a broader provider-led care coordination platform.
        </p>
        ${architectureStrip()}
        <div class="cta-row">
          <button class="primary" data-route="clinic">View Clinic Dashboard</button>
          <button class="secondary" data-route="parent">View Parent App</button>
          <button class="secondary" data-route="data-flow">View Data Flow</button>
        </div>
      </section>
      <section class="product-visual" aria-label="KiddoCare platform overview">
        <div class="visual-top">
          <div>
            <span>Unified Pediatric Health Record</span>
            <strong>The core record that connects family and provider workflows</strong>
          </div>
          ${badge("Consent-aware", "teal")}
        </div>
        <div class="visual-grid">
          <div class="visual-tile parent-tile">
            <span>Parent App</span>
            <strong>Reminders, updates, messages</strong>
          </div>
          <div class="visual-tile clinic-tile">
            <span>Provider Portal</span>
            <strong>Visits, notes, care journeys</strong>
          </div>
          <div class="visual-tile analytics-tile">
            <span>Analytics Engine</span>
            <strong>De-identified insights</strong>
          </div>
        </div>
        <div class="mini-chart">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </section>
    </div>

    <section class="executive-strip" aria-label="KiddoCare stakeholder positioning">
      ${stakeholderSignals
        .map(
          (signal) => `
            <div>
              <span>${signal.label}</span>
              <strong>${signal.value}</strong>
            </div>
          `,
        )
        .join("")}
    </section>

    <section class="section-grid two">
      <article class="panel">
        ${panelHeader("What KiddoCare Does", "Platform model")}
        <p class="lead">
          KiddoCare connects parent engagement, clinic workflows, pediatric record keeping,
          care journey automation, and analytics into one white-label platform.
        </p>
        <div class="ecosystem-strip">
          <span>Parent App</span>
          <span>Provider/Clinic Portal</span>
          <span>Unified PHR Core</span>
          <span>Analytics & Care Coordination Outputs</span>
        </div>
      </article>
      <article class="panel soft">
        ${panelHeader("Who It Is For", "Early partners")}
        <div class="chip-grid">
          ${audiences.map((item) => `<span class="chip">${item}</span>`).join("")}
        </div>
      </article>
    </section>

    <article class="panel">
      ${panelHeader("How the Product Lines Connect", "Stakeholder-ready story")}
      <div class="connection-grid">
        ${platformConnections
          .map(
            (item) => `
              <button class="connection-card" data-route="${item.route}">
                <strong>${item.title}</strong>
                <span>${item.text}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </article>

    <section class="pillar-grid">
      ${pillars
        .map(
          (pillar, index) => `
            <article class="pillar-card">
              <span class="pillar-number">0${index + 1}</span>
              <h3>${pillar.title}</h3>
              <p>${pillar.text}</p>
            </article>
          `,
        )
        .join("")}
    </section>
  `;
}

function clinicScreen() {
  return `
    <article class="panel platform-context">
      ${panelHeader("Clinic View in the KiddoCare Model", "B2B operator workflow")}
      <p class="lead">
        This dashboard is the provider-facing output of parent engagement, clinic activity,
        and the Unified PHR Core. Analytics turns that record context into care team queues,
        reminders, and population-level visibility.
      </p>
      ${architectureStrip()}
    </article>

    <div class="metric-grid clinic-metrics">
      ${clinicMetrics.map(metricCard).join("")}
    </div>

    <section class="section-grid two">
      <article class="panel">
        ${panelHeader("Care Journey Status", "Operational view")}
        <div class="journey-list">
          ${careJourneys
            .map(
              (journey) => `
                <div class="journey-row">
                  <div>
                    <strong>${journey.title}</strong>
                    <span>${journey.count} - ${journey.state}</span>
                  </div>
                  <div class="journey-progress">
                    ${progressBar(journey.progress, journey.title)}
                    <small>${journey.progress}%</small>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      </article>
      <article class="panel soft">
        ${panelHeader("Care Team Queue", "Analytics-generated outputs")}
        <div class="queue-list">
          <div>${badge("42 overdue", "rose")} <span>Follow-up outreach recommended</span></div>
          <div>${badge("118 reminders", "teal")} <span>Vaccine notifications prepared</span></div>
          <div>${badge("16 growth alerts", "amber")} <span>Provider review queue</span></div>
          <div>${badge("73 screenings", "lavender")} <span>Developmental checklist due</span></div>
        </div>
      </article>
    </section>

    <article class="panel table-panel">
      ${panelHeader("Patient List", "Mock children enrolled")}
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Child name</th>
              <th>Age</th>
              <th>Last visit</th>
              <th>Next reminder</th>
              <th>Risk flag</th>
              <th>Care journey status</th>
            </tr>
          </thead>
          <tbody>
            ${patients
              .map(
                (patient) => `
                  <tr>
                    <td><button class="link-button" data-route="record">${patient.name}</button></td>
                    <td>${patient.age}</td>
                    <td>${patient.lastVisit}</td>
                    <td>${patient.nextReminder}</td>
                    <td>${badge(patient.riskFlag, patient.riskFlag === "Low" ? "teal" : patient.riskFlag === "Overdue" ? "rose" : "amber")}</td>
                    <td>${patient.journey}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </article>
  `;
}

function recordScreen() {
  return `
    <section class="record-layout">
      <article class="panel profile-panel">
        <div class="profile-head">
          <div class="avatar">OC</div>
          <div>
            <span class="eyebrow">Child profile</span>
            <h2>${childRecord.name}</h2>
            <p>${childRecord.age} - ${childRecord.pronouns} - ${childRecord.clinic}</p>
          </div>
        </div>
        <div class="demographic-grid">
          ${childRecord.demographics
            .map(
              (item) => `
                <div>
                  <span>${item.label}</span>
                  <strong>${item.value}</strong>
                </div>
              `,
            )
            .join("")}
        </div>
        <div class="consent-box">
          ${badge("Consent status", "teal")}
          <strong>${childRecord.consent}</strong>
          <span>Role-based visibility is represented for prototype purposes only.</span>
        </div>
      </article>

      <article class="panel soft">
        ${panelHeader("Record Sources", "Unified PHR Core")}
        <p class="compact-copy">
          The record is not a standalone parent profile. It is the central pediatric record core
          that receives authorized inputs from parents, clinics, and providers.
        </p>
        <div class="source-map">
          <div>Source: Parent App</div>
          <div>Source: Clinic Visit</div>
          <div>Source: Provider Note</div>
        </div>
      </article>
    </section>

    <section class="pillar-grid record-cards">
      ${childRecord.summaries
        .map(
          (summary) => `
            <article class="pillar-card">
              ${badge(`Source: ${summary.source}`, summary.source === "Parent App" ? "teal" : summary.source === "Provider Note" ? "amber" : "lavender")}
              <h3>${summary.title}</h3>
              <p>${summary.value}</p>
            </article>
          `,
        )
        .join("")}
    </section>

    <article class="panel">
      ${panelHeader("Recent Visits, Updates, and Notes", "Longitudinal timeline")}
      <div class="timeline">
        ${childRecord.timeline
          .map(
            (event) => `
              <div class="timeline-item">
                <span></span>
                <div>
                  <strong>${event.label}</strong>
                  <p>${event.date} - Source: ${event.source}</p>
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
    </article>
  `;
}

function growthScreen() {
  return `
    <div class="notice">
      Prototype data only - not for clinical use.
    </div>
    <section class="section-grid two">
      <article class="panel">
        ${panelHeader("Mock Growth Chart", "Illustrative only")}
        <div class="growth-chart">
          <div class="chart-line line-one"></div>
          <div class="chart-line line-two"></div>
          <div class="chart-points">
            <span style="left:10%; bottom:28%"></span>
            <span style="left:28%; bottom:36%"></span>
            <span style="left:47%; bottom:46%"></span>
            <span style="left:67%; bottom:55%"></span>
            <span style="left:86%; bottom:62%"></span>
          </div>
        </div>
        <div class="percentile-list">
          ${growthData.percentiles
            .map(
              (item) => `
                <div>
                  <div><span>${item.label}</span><strong>${item.value}</strong></div>
                  ${progressBar(item.width, item.label)}
                </div>
              `,
            )
            .join("")}
        </div>
      </article>

      <article class="panel soft">
        ${panelHeader("Preventive Care Checklist", "Care journey")}
        <ul class="check-list">
          ${growthData.checklist.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    </section>

    <section class="section-grid two">
      <article class="panel">
        ${panelHeader("Vaccine Reminders", "Mock reminder workflow")}
        <div class="stacked-list">
          ${growthData.vaccines.map((item) => `<div>${badge("Reminder", "teal")}<span>${item}</span></div>`).join("")}
        </div>
      </article>
      <article class="panel">
        ${panelHeader("Anticipatory Guidance Topics", "Parent education")}
        <div class="chip-grid">
          ${growthData.guidance.map((item) => `<span class="chip">${item}</span>`).join("")}
        </div>
      </article>
    </section>
  `;
}

function parentScreen() {
  return `
    <section class="parent-layout">
      <article class="panel">
        ${panelHeader("Parent Engagement as Part of the Platform", "White-label family experience")}
        <p class="lead">
          The parent app keeps families connected to reminders, education, and secure care team
          touchpoints while the clinic portal and Unified PHR Core remain central to KiddoCare.
        </p>
        <div class="lineage-card">
          <strong>Parent app role</strong>
          <span>Collects family updates and presents care journey reminders. It does not replace the provider portal or the Unified PHR Core.</span>
        </div>
        <div class="ecosystem-strip">
          <span>Clinic-configured journeys</span>
          <span>Parent-reported updates</span>
          <span>Secure messaging placeholder</span>
          <span>Care team visibility</span>
        </div>
      </article>

      <article class="phone-frame" aria-label="Parent app preview">
        <div class="phone-status"><span></span><strong>KiddoCare</strong><span></span></div>
        <div class="phone-card child-card">
          <span>Child profile</span>
          <strong>${parentPreview.child}</strong>
          <p>${parentPreview.status}</p>
        </div>
        <div class="phone-section">
          <h3>Upcoming reminders</h3>
          ${parentPreview.reminders
            .map(
              (item) => `
                <div class="phone-row">
                  <span></span>
                  <div>
                    <strong>${item.title}</strong>
                    <p>${item.detail}</p>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
        <div class="phone-card">
          <span>Educational tip</span>
          <p>${parentPreview.tip}</p>
        </div>
        <div class="phone-card">
          <span>Care journey progress</span>
          ${progressBar(parentPreview.progress, "Care journey progress")}
          <strong>${parentPreview.progress}% complete</strong>
        </div>
      </article>
    </section>
  `;
}

function analyticsScreen() {
  return `
    <div class="notice privacy-notice">
      De-identified analytics only. This view does not expose raw patient data.
    </div>
    <article class="panel platform-context">
      ${panelHeader("Analytics in the KiddoCare Model", "PHR to analytics to outputs")}
      <p class="lead">
        The analytics layer receives data from the Unified PHR Core and generates aggregate
        clinic dashboards, care gap trends, and care coordination outputs. It is not a raw
        child data export.
      </p>
      ${architectureStrip()}
    </article>
    <div class="metric-grid">
      ${analytics
        .map(
          (item) => `
            <article class="metric-card tone-purple">
              <p>${item.label}</p>
              <strong>${item.value}</strong>
              <span>${item.trend}</span>
            </article>
          `,
        )
        .join("")}
    </div>

    <section class="section-grid two">
      <article class="panel">
        ${panelHeader("Care Gap Trends", "Clinic-level insight")}
        <div class="gap-chart">
          ${careGaps
            .map(
              (gap) => `
                <div>
                  <span>${gap.label}</span>
                  <strong>${gap.value}</strong>
                  <i style="height:${gap.value * 3}px"></i>
                </div>
              `,
            )
            .join("")}
        </div>
      </article>
      <article class="panel soft">
        ${panelHeader("Population Health Cards", "Program planning")}
        <div class="stacked-list">
          <div>${badge("Insight", "teal")}<span>Reminder workflows are associated with higher follow-up adherence in this mock dataset.</span></div>
          <div>${badge("Trend", "lavender")}<span>Developmental screening completion has room for targeted outreach.</span></div>
          <div>${badge("Privacy", "purple")}<span>Raw child health data is not sold or shown in this analytics view.</span></div>
        </div>
      </article>
    </section>
  `;
}

function dataFlowScreen() {
  const nodes = [
    ["Parent App", "source parent"],
    ["Provider / Clinic Portal", "source clinic"],
    ["Unified PHR Core", "core"],
    ["Analytics Engine", "engine"],
    ["Clinic Dashboard", "output"],
    ["Population Health Insights", "output"],
    ["Care Coordination Outputs", "output"],
  ];

  return `
    <article class="panel data-flow-panel">
      ${panelHeader("Approved KiddoCare Architecture", "Canonical data flow")}
      <div class="architecture" aria-label="KiddoCare data flow diagram">
        <div class="arch-sources">
          ${nodes
            .slice(0, 2)
            .map(([label, cls]) => `<div class="arch-node ${cls}">${label}</div>`)
            .join("")}
        </div>
        <div class="arch-arrow">-&gt;</div>
        <div class="arch-node core">${nodes[2][0]}</div>
        <div class="arch-arrow">-&gt;</div>
        <div class="arch-node engine">${nodes[3][0]}</div>
        <div class="arch-arrow">-&gt;</div>
        <div class="arch-outputs">
          ${nodes
            .slice(4)
            .map(([label, cls]) => `<div class="arch-node ${cls}">${label}</div>`)
            .join("")}
        </div>
      </div>
      <div class="architecture-notes">
        <div>
          <strong>Multiple data sources</strong>
          <span>Authorized parent and provider inputs enter the Unified PHR Core.</span>
        </div>
        <div>
          <strong>PHR feeds analytics</strong>
          <span>The analytics engine is the only path to dashboards, insights, and coordination outputs.</span>
        </div>
        <div>
          <strong>No direct external PHR outputs</strong>
          <span>The prototype keeps output generation downstream of analytics.</span>
        </div>
      </div>
    </article>
  `;
}

function privacyScreen() {
  return `
    <section class="section-grid two">
      <article class="panel">
        ${panelHeader("Canadian Privacy Principles", "Product posture")}
        <p class="lead">
          KiddoCare is designed with Canadian privacy principles in mind, including consent,
          role-based access, auditability, and careful handling of pediatric health information.
        </p>
        <div class="lineage-card">
          <strong>Careful wording</strong>
          <span>This prototype is prepared for privacy review and stakeholder discussion. It does not claim completed PHIPA or PIPEDA compliance certification.</span>
        </div>
        <div class="privacy-callout">
          <strong>No sale of raw child health data</strong>
          <span>Analytics in this prototype are de-identified and program-level only.</span>
        </div>
      </article>
      <article class="panel soft">
        ${panelHeader("Privacy Controls", "Prototype examples")}
        <ul class="check-list">
          ${privacyItems.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    </section>
    <article class="panel">
      ${panelHeader("Consent Workflow Placeholder", "Not legal advice")}
      <div class="consent-flow">
        <div>${badge("Parent permissions", "teal")}<strong>Guardian reviews sharing request</strong><span>Clinic-configured consent language placeholder</span></div>
        <div>${badge("Access control", "lavender")}<strong>Care team role is checked</strong><span>Provider visibility depends on authorized role</span></div>
        <div>${badge("Audit", "purple")}<strong>Access event is logged</strong><span>Audit log trail for administrative review</span></div>
      </div>
    </article>
  `;
}

function renderRoute(active) {
  const screens = {
    overview: overviewScreen,
    clinic: clinicScreen,
    record: recordScreen,
    growth: growthScreen,
    parent: parentScreen,
    analytics: analyticsScreen,
    "data-flow": dataFlowScreen,
    privacy: privacyScreen,
  };

  return screens[active]();
}

function render() {
  const active = currentRoute();
  app.innerHTML = renderShell(active);

  document.querySelectorAll("[data-route]").forEach((element) => {
    element.addEventListener("click", () => setRoute(element.dataset.route));
  });
}

window.addEventListener("hashchange", render);
render();
