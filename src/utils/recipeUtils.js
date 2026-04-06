export const formatFraction = (val) => {
  if (val === 0) return "0";
  const whole = Math.floor(val);
  const remainder = val - whole;

  if (remainder < 0.05) return whole > 0 ? `${whole}` : "0";
  if (remainder > 0.95) return `${whole + 1}`;

  const commonFractions = [
    { v: 0.125, s: "1/8" },
    { v: 0.25, s: "1/4" },
    { v: 0.333, s: "1/3" },
    { v: 0.5, s: "1/2" },
    { v: 0.625, s: "5/8" },
    { v: 0.666, s: "2/3" },
    { v: 0.75, s: "3/4" },
    { v: 0.875, s: "7/8" }
  ];

  let closest = commonFractions[0];
  let minDiff = Math.abs(remainder - closest.v);
  for (const f of commonFractions) {
    if (Math.abs(remainder - f.v) < minDiff) {
      minDiff = Math.abs(remainder - f.v);
      closest = f;
    }
  }
  return whole > 0 ? `${whole} ${closest.s}` : closest.s;
};

export const scaleValue = (amount, unit, originalServings, targetServings, isMetric) => {
  const scaled = (amount / (originalServings || 2)) * targetServings;
  if (isMetric) return `${Math.round(scaled)} ${unit}`;

  if (unit === 'g') {
    if (scaled >= 450) return `${formatFraction(scaled / 453.59)} lb`;
    return `${formatFraction(scaled / 28.35)} oz`;
  }

  if (unit === 'ml') {
    if (scaled <= 10) return `${formatFraction(scaled / 4.93)} tsp`;
    if (scaled <= 30) return `${formatFraction(scaled / 14.79)} tbsp`;
    if (scaled <= 100) return `${formatFraction(scaled / 29.57)} fl oz`;
    const cups = scaled / 240;
    return `${formatFraction(cups)} cup${cups > 1.1 ? 's' : ''}`;
  }
  return Math.round(scaled) + " " + unit;
};

export const formatText = (text, isMetric) => {
  if (!text) return "";
  if (isMetric) return text;
  return text
    .replace(/(\d+)\s*°C/gi, (m, p1) => `${Math.round(p1 * 1.8 + 32)}°F`)
    .replace(/(\d+)\s*cm/gi, (m, p1) => `${(p1 / 2.54).toFixed(1)}-inch`);
};

export const getPantryInfo = (level) => {
  const levels = {
    1: { label: "Level 1: The Explorer", desc: "Local mart ingredients only!", color: "#3498db" },
    2: { label: "Level 2: K-Foodie", desc: "Basic K-pantry items needed.", color: "#e67e22" },
    3: { label: "Level 3: Master Disciple", desc: "Authentic K-ingredients required.", color: "#c0392b" }
  };
  return levels[level] || levels[1];
};
