
Hate Crime Dashboard (2014–2023)
---

## Project Overview
🔗 **Live Demo:** https://ayseguldahi.github.io/canada-hate-crime-dashboard/

Hate crimes are criminal offenses motivated by bias, prejudice, or hate against a person's race, religion, gender, sexual orientation, or other identity. These acts target not just individuals but the social groups they represent, and they can deeply affect entire communities. In Canada, hate crimes are a serious and growing concern. According to Statistics Canada, police-reported hate crimes increased by over 269% between 2014 (1,295 incidents) and 2023 (4,777 incidents). The most commonly targeted groups include race or ethnicity, religion, and sexual orientation.

What to do if you or someone you know experiences a hate crime: In Canada, victims are encouraged to report hate crimes to local police services. Provincial and local organizations also provide support for trauma, legal help, and community safety.

This dashboard explores Canada's police-reported hate crimes from 2014 to 2023. You can view trends over time, compare motivations by region and year, and interact with a geospatial map. The data comes from Statistics Canada's Table 35-10-0191-01. This interactive D3.js project visualizes, police-reported hate crime data across Canadian provinces from 2014 to 2023. The dashboard is split across three pages:

- **Line Chart:** View national and regional hate crime trends over time.
- **Comparative Bar Chart:** Compare hate crime motivations between years or cities.
- **Geospatial Map:** Explore hate crimes by province, year, and type of motivation.

The project allows users to interactively filter, explore, and analyze hate crime patterns using dropdown menus, map clicks, and tooltips.

---

## Folder Structure

```
📁 Proj_Aysegul_D_536
├── index.html               – Home page with intro & navigation
├── map.html                 – Geospatial map of hate crimes
├── line_chart.html          – Time-series trends
├── compare_chart.html       – Motivation comparisons
├── script.js                – Logic for chart rendering & filtering
├── style.css                – Layout, themes, tooltip styles
├── ca.json                  – GeoJSON of Canadian provinces
├── hate_speech_dataset.csv  – Raw data from Statistics Canada
├── hate crime.jpg           – Background image
├── README.pdf               – Final report with explanations
```

---

## How to Run

1. Open folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` → **Open with Live Server**.
4. Use navigation buttons to explore the dashboard.

**Or:** Host locally using Python or Node.js for CSV/JSON file loading.

---

## Dataset Source

- **Title:** Police-reported hate crime by type of motivation  
- **Source:** Statistics Canada (https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510006601&cubeTimeFrame.startYear=2014&cubeTimeFrame.endYear=2023&referencePeriods=20140101%2C20230101)
- **Years Covered:** 2014–2023  
- **Total Records:** 300+

### Data Cleaning:
- Columns used: `REF_DATE`, `GEO`, `Type of motivation`, `VALUE`
- Filtered rows with missing or non-numeric values using D3.js

---

## Page Descriptions

### Line Chart

- **Chart 1:** Trends by motivation in a selected province
- **Chart 2:** National totals vs. specific motivation
- **Features:** Tooltip, percent change, dropdown filters, stroke-draw animation

### Comparative Bar Chart

- **Mode 1:** Compare 2 cities in the same year
- **Mode 2:** Compare the same city across 2 years
- **Features:** Hover tooltips, transition bars, label fades, side-by-side comparison

### Geospatial Map

- **Interactive Map** of Canada for a selected year
- **Click a Province:** Horizontal bar chart shows motivation distribution
- **Features:** SVG transitions, hover effects, region-specific logic

#### Region Handling:
- Aggregated "Atlantic" & "Territories" regions are split by population:
```js
if (region === "atlantic") {
  regionCounts["nova scotia"] = count * 0.29;
  regionCounts["new brunswick"] = count * 0.24;
  regionCounts["newfoundland and labrador"] = count * 0.30;
  regionCounts["prince edward island"] = count * 0.17;
} else if (region === "territories") {
  regionCounts["northwest territories"] = count * 0.47;
  regionCounts["nunavut"] = count * 0.29;
  regionCounts["yukon"] = count * 0.24;
}
```

---

## Insights to Explore

- Which provinces have persistently high hate crime counts?
- Do certain motivations dominate in specific regions?
- How do motivations evolve over time?

---

## Dashboard UX Design

- **Navigation:** Index links to all pages with return buttons
- **Responsive Layout:** Adapts to browser sizes (desktop, tablet)
- **Tooltip & Interactivity:** Hover for detailed values
- **Dropdowns:** Year, region, motivation filters
- **Transitions:** Animated bars, paths, fills
- **Export Button:** Download map as SVG

---
