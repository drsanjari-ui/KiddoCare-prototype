# KiddoCare Interactive Prototype

This is a local, high-fidelity web prototype for **KiddoCare**, a Canadian pediatric digital health SaaS concept.

KiddoCare is positioned as a B2B-first, white-labeled pediatric care platform for clinics, pediatric providers, dental and therapy providers, insurers, and health organizations. The parent app is one part of the ecosystem, alongside a provider portal, Unified Pediatric Health Record Core, analytics, and care coordination outputs.

## How to Run

This prototype has no package dependencies.

From this folder, run the included static server:

```powershell
node server.mjs
```

Then open:

```text
http://127.0.0.1:8787
```

You can also use Python if it is installed:

```powershell
python -m http.server 8787
```

Any static file server can serve `index.html`.

## Screens Included

- Overview / Product Overview
- Clinic Dashboard
- Child Record / Unified Pediatric Record
- Growth & Preventive Care
- Parent App Preview
- Analytics Dashboard
- Data Flow / Architecture
- Consent & Privacy

Navigation uses URL hashes, so each screen is clickable from the sidebar and call-to-action buttons.

## Prototype Notes

- This is not production-ready software.
- All child, clinic, and health data is fake and for demonstration only.
- The prototype is not a clinical decision support system.
- Growth charts, reminders, alerts, analytics, and care gap data are illustrative only and are not for clinical use.
- Privacy language is intentionally cautious. The prototype says KiddoCare is designed with Canadian privacy principles in mind; it does not claim completed regulatory compliance.
- Analytics views are labeled as de-identified analytics only and do not show raw patient data.

## File Structure

```text
index.html
server.mjs      # dependency-free local static server
src/
  app.js       # hash routing and screen components
  mockData.js  # mock clinic, child record, parent app, analytics, and privacy data
  styles.css   # responsive presentation styling
README.md
```
