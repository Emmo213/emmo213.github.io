/**
 * ============================================================================
 * MONTHLY CORRIDOR TRAFFIC & VOLUME DATA
 * ============================================================================
 * Update the numbers below once a month, save this file, and commit/push.
 * Everything in the "Corridor Traffic & Volume Analytics" section of
 * index.html reads from this configuration automatically.
 */
window.CORRIDOR_TRAFFIC_DATA = {
  // Subtitle shown under the bar chart title
  chartSubtitle: "Highlighted bars denote peak and quietest hourly windows across the 24-day sample.",

  // Y-axis ceiling for the 24-hour bar chart (set slightly above the highest hourly value)
  chartMaxVal: 3.8,

  // 4th KPI card ("Avg. Hourly Trains")
  avgHourlyCard: {
    label: "Avg. Hourly Trains",
    value: "~2.0 / hr",
    sub: "All-train corridor average",
  },

  modes: {
    all: {
      chartTitle: "Average Trains per Hour by Time of Day (EST) — All Trains",
      peakHours: [4],      // Hour(s) 0-23 highlighted in gold
      quietHour: 18,       // Hour 0-23 highlighted in gray
      kpis: [
        {
          label: "Daily Train Average",
          value: "48.63",
          sub: "1,167 total logged movements (24 days)",
        },
        {
          label: "Busiest Hour (EST)",
          value: "04:00 - 04:59",
          sub: "3.58 trains/hr avg. (peak window)",
        },
        {
          label: "Traffic Composition",
          value: "8.4% Amtrak",
          sub: "Lake Shore Limited & Floridian + 91.6% Freight",
        },
      ],
      // 24 values: average trains/hr for 00:00 through 23:00 EST
      hourly: [
        2.13, 2.08, 2.25, 2.42, 3.58, 2.67,
        2.58, 2.17, 1.88, 1.79, 1.75, 1.71,
        1.67, 1.63, 1.54, 1.46, 1.38, 1.17,
        0.83, 1.33, 1.79, 2.04, 2.25, 2.54,
      ],
    },

    freight: {
      chartTitle: "Average Freight Trains per Hour (EST) — Excluding Amtrak",
      peakHours: [6, 23],  // Hour(s) 0-23 highlighted in gold
      quietHour: 18,       // Hour 0-23 highlighted in gray
      kpis: [
        {
          label: "Daily Freight Average",
          value: "44.71",
          sub: "Freight movements/day (excluding Amtrak)",
        },
        {
          label: "Busiest Freight Hour",
          value: "06:00 - 06:59",
          sub: "2.46 freight trains/hr (2nd: 23:00 at 2.42/hr)",
        },
        {
          label: "24-Hour Freight Cadence",
          value: "Steady 24/7",
          sub: "Balanced intermodal, manifest & unit traffic",
        },
      ],
      // 24 values: average freight trains/hr for 00:00 through 23:00 EST
      hourly: [
        2.04, 1.96, 1.92, 1.96, 2.13, 2.21,
        2.46, 2.08, 1.83, 1.75, 1.71, 1.67,
        1.63, 1.58, 1.50, 1.42, 1.33, 1.13,
        0.83, 1.29, 1.75, 2.00, 2.13, 2.42,
      ],
    },
  },
};
