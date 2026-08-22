const drugsData = [
  {
    category: "Pressors, Inotropes, and Chronotropes",
    name: "Norepinephrine",
    class: "α1 > β1",
    doseText: "5–40 μg/min",
    prepText: "16mg (4 amps) in D5W 500ml",
    unit: "μg/min",
    doseMin: 5, doseMax: 40,
    concentration: 32,
    concentrationUnit: "μg/ml",
    weightBased: false,
    note: "10 μg/min 以上才比較有升血壓的效果；30 μg/min 以上通常不會再有額外反應，應考慮加上第二線升壓藥。",
    refDose: { value: 30, label: "效果天花板" }
  },
  {
    category: "Pressors, Inotropes, and Chronotropes",
    name: "Vasopressin",
    class: "V1",
    doseText: "0.01–0.1 U/min",
    prepText: "40U (2 amps) in 0.9% NaCl 100ml",
    unit: "U/min",
    doseMin: 0.01, doseMax: 0.1,
    concentration: 0.4,
    concentrationUnit: "U/ml",
    weightBased: false,
    note: "Norepinephrine 已用到 0.25–0.5 μg/kg/min 仍有低血壓時，考慮加上 Vasopressin。",
    noteList: ["Septic shock 使用劑量為 0.03–0.04 U/min（固定劑量，一般不滴定）。"],
    refRange: { min: 0.03, max: 0.04, label: "Septic shock 劑量" },
    thresholdPerKg: { value: 0.25, max: 0.5, unit: "μg/min", label: "NE 閾值換算（依目前體重）" }
  },
  {
    category: "Pressors, Inotropes, and Chronotropes",
    name: "Epinephrine",
    class: "α1, α2, β1, β2",
    doseText: "2–20 μg/min",
    prepText: "1mg (1 amp) in 0.9% NaCl 100ml",
    unit: "μg/min",
    doseMin: 2, doseMax: 20,
    concentration: 10,
    concentrationUnit: "μg/ml",
    weightBased: false
  },
  {
    category: "Pressors, Inotropes, and Chronotropes",
    name: "Dopamine (Renal)",
    class: "D (作用在腎臟)",
    doseText: "0.5–2 μg/kg/min",
    prepText: "600mg in 200ml",
    unit: "μg/kg/min",
    doseMin: 0.5, doseMax: 2,
    concentration: 3000,
    concentrationUnit: "μg/ml",
    weightBased: true
  },
  {
    category: "Pressors, Inotropes, and Chronotropes",
    name: "Dopamine (Inotrope)",
    class: "β, D (提升心跳)",
    doseText: "2–10 μg/kg/min",
    prepText: "600mg in 200ml",
    unit: "μg/kg/min",
    doseMin: 2, doseMax: 10,
    concentration: 3000,
    concentrationUnit: "μg/ml",
    weightBased: true
  },
  {
    category: "Pressors, Inotropes, and Chronotropes",
    name: "Dopamine (Vasopressor)",
    class: "α, β, D (升高血壓)",
    doseText: ">10 μg/kg/min (Max: 20)",
    prepText: "600mg in 200ml",
    unit: "μg/kg/min",
    doseMin: 10, doseMax: 20,
    concentration: 3000,
    concentrationUnit: "μg/ml",
    weightBased: true
  },
  {
    category: "Pressors, Inotropes, and Chronotropes",
    name: "Dobutamine",
    class: "β1 > β2",
    doseText: "2–20 μg/kg/min",
    prepText: "20ml(250mg) in 100ml (Total 120ml)",
    unit: "μg/kg/min",
    doseMin: 2, doseMax: 20,
    concentration: 2083.3,
    concentrationUnit: "μg/ml",
    weightBased: true
  },
  {
    category: "Vasodilators",
    name: "Nitroglycerin",
    class: "NO",
    doseText: "5–500 μg/min",
    prepText: "50mg/250ml",
    unit: "μg/min",
    doseMin: 5, doseMax: 500,
    concentration: 200,
    concentrationUnit: "μg/ml",
    weightBased: false
  },
  {
    category: "Vasodilators",
    name: "Labetalol",
    class: "α1, β1, β2 blocker",
    doseText: "10–120 mg/h",
    prepText: "8amp + D5W 160 ml (Total 200mg/200ml)",
    unit: "mg/h",
    doseMin: 10, doseMax: 120,
    concentration: 1,
    concentrationUnit: "mg/ml",
    weightBased: false
  },
  {
    category: "Antiarrhythmics",
    name: "Amiodarone",
    class: "Class III",
    doseText: "1 mg/min (6h) then 0.5 mg/min (18h)",
    prepText: "6 amps (900mg) in 500ml D5W",
    unit: "mg/min",
    concentration: 1.8,
    concentrationUnit: "mg/ml",
    weightBased: false,
    fixedRateText: "前6小時 34 ml/hr，後18小時 17 ml/hr"
  },
  {
    category: "Antiarrhythmics",
    name: "Diltiazem",
    class: "CCB",
    doseText: "5–15 mg/h",
    prepText: "2 amps (100mg) in D5W 100 ml",
    unit: "mg/h",
    doseMin: 5, doseMax: 15,
    concentration: 1,
    concentrationUnit: "mg/ml",
    weightBased: false
  },
  {
    category: "Sedation",
    name: "Morphine",
    class: "opioid",
    doseText: "1–30 mg/h",
    prepText: "1 amp (10mg) in 0.9% NaCl 10ml",
    unit: "mg/h",
    doseMin: 1, doseMax: 30,
    concentration: 1,
    concentrationUnit: "mg/ml",
    weightBased: false
  },
  {
    category: "Sedation",
    name: "Fentanyl",
    class: "opioid",
    doseText: "50–800 μg/h",
    prepText: "不需稀釋",
    unit: "μg/h",
    concentration: 50,
    concentrationUnit: "μg/ml",
    weightBased: false,
    fixedRateText: "1 - 2 ml/hr"
  },
  {
    category: "Sedation",
    name: "Propofol",
    class: "anesthetic",
    doseText: "0.3–5 mg/kg/h",
    prepText: "不需稀釋 (200mg/20ml)",
    unit: "mg/kg/h",
    doseMin: 0.3, doseMax: 5,
    concentration: 10,
    concentrationUnit: "mg/ml",
    weightBased: true
  },
  {
    category: "Sedation",
    name: "Midazolam",
    class: "BDZ",
    doseText: "0.02–0.1 mg/kg/h",
    prepText: "5 amps (60mg) in 0.9% NaCl 48ml",
    unit: "mg/kg/h",
    doseMin: 0.02, doseMax: 0.1,
    concentration: 1.25,
    concentrationUnit: "mg/ml",
    weightBased: true
  },
  {
    category: "Sedation",
    name: "Lorazepam",
    class: "BDZ",
    doseText: "0.01–0.1 mg/kg/h",
    prepText: "10 amps (20mg) in 0.9% NaCl 10ml",
    unit: "mg/kg/h",
    doseMin: 0.01, doseMax: 0.1,
    concentration: 2,
    concentrationUnit: "mg/ml",
    weightBased: true
  },
  {
    category: "Diuretics",
    name: "Furosemide",
    class: "loop diuretic",
    doseText: "80 mg IV bolus，續 5–40 mg/hr infusion",
    prepText: "不需稀釋 (20mg/2ml)",
    unit: "mg/h",
    doseMin: 5, doseMax: 40,
    concentration: 10,
    concentrationUnit: "mg/ml",
    weightBased: false,
    note: "使用時機：massive fluid overload（大量體液過載）。先給 80 mg IV bolus，再接續 infusion。",
    noteList: [
      "eGFR ≥ 30 mL/min/1.73 m²：infusion 從 5 mg/hr 開始。若反應不佳（urine output 未達 ≥ 100 mL/hr），再補一次 bolus 並將速率提高到 10 mg/hr；之後可視需要繼續上調，最高 40 mg/hr。",
      "eGFR < 30 mL/min/1.73 m²：infusion 從 20 mg/hr 開始。若反應不佳，再補一次 bolus 並將速率提高到 40 mg/hr。",
      "反應目標：urine output ≥ 100 mL/hr。"
    ],
    refPoints: [
      { value: 5, label: "起始（eGFR ≥ 30）" },
      { value: 20, label: "起始（eGFR < 30）" }
    ]
  },
  {
    category: "Corticosteroids",
    name: "Hydrocortisone",
    class: "glucocorticoid",
    doseText: "50 mg Q6H",
    prepText: "IV push，不需稀釋（每日總量 200 mg）",
    bolus: true,
    bolusText: "50 mg Q6H",
    note: "Norepinephrine 或 Epinephrine 劑量 ≥ 0.25 μg/kg/min 時考慮使用。",
    thresholdPerKg: { value: 0.25, unit: "μg/min", label: "以目前體重換算" }
  }
];

function formatThreshold(v) {
    return v < 10 ? Number(v.toFixed(1)).toString() : Math.round(v).toString();
}

function formatBand(lo, hi) {
    return hi === undefined ? `${lo}` : `${lo}–${hi}`;
}

function weighThreshold(t, weight) {
    const lo = formatThreshold(t.value * weight);
    return t.max === undefined ? lo : `${lo} – ${formatThreshold(t.max * weight)}`;
}

function calculateRate(drug, weight, overrideConc) {
    let conc = overrideConc !== undefined ? overrideConc : drug.concentration;
    if (conc <= 0) return { min: 0, max: 0 };

    let factor = 1;
    
    // Time factor to get to per hour
    if (drug.unit.includes("/min")) {
        factor *= 60; // convert min to hour
    }
    
    // Weight factor
    if (drug.weightBased) {
        factor *= weight;
    }

    let minRate = (drug.doseMin * factor) / conc;
    let maxRate = (drug.doseMax * factor) / conc;

    return {
        min: minRate < 10 ? minRate.toFixed(1) : Math.round(minRate),
        max: maxRate < 10 ? maxRate.toFixed(1) : Math.round(maxRate)
    };
}

// Rate (ml/hr) for one specific dose — used by the reference-dose hint on a card
function calculateDoseRate(drug, weight, dose, overrideConc) {
    const conc = overrideConc !== undefined ? overrideConc : drug.concentration;
    if (conc <= 0) return '—';

    let factor = 1;
    if (drug.unit.includes("/min")) factor *= 60;
    if (drug.weightBased) factor *= weight;

    const rate = (dose * factor) / conc;
    return rate < 10 ? rate.toFixed(1) : Math.round(rate);
}

function renderDrugs() {
    const container = document.getElementById('drug-list');
    container.innerHTML = '';
    
    const weightInput = document.getElementById('weight');
    const weight = parseFloat(weightInput.value) || 60;

    const categories = [...new Set(drugsData.map(d => d.category))];

    categories.forEach(category => {
        const catDrugs = drugsData.filter(d => d.category === category);
        
        const catSection = document.createElement('div');
        catSection.innerHTML = `<h2 class="category-header">${category}</h2>`;
        
        const grid = document.createElement('div');
        grid.className = 'drug-grid';

        catDrugs.forEach(drug => {
            const index = drugsData.indexOf(drug);
            const card = document.createElement('div');
            card.className = 'drug-card';
            
            // Generate unique ID for concentration input
            const concId = `conc-${index}`;
            
            let rateDisplayHtml = '';
            let concInputHtml = '';
            let noteHtml = '';
            if (drug.note || drug.refDose) {
                let noteBody = drug.note ? `<span>${drug.note}</span>` : '';
                (drug.noteList || []).forEach(line => { noteBody += `<span>${line}</span>`; });
                (drug.refPoints || []).forEach((pt, i) => {
                    const r = calculateDoseRate(drug, weight, pt.value);
                    noteBody += `<span class="drug-note-ref">${pt.label}：<strong>${pt.value} ${drug.unit}</strong> ≈ <strong id="refpoint-${index}-${i}">${r}</strong> ml/hr</span>`;
                });
                if (drug.refRange) {
                    const r = drug.refRange;
                    const lo = calculateDoseRate(drug, weight, r.min);
                    const hi = calculateDoseRate(drug, weight, r.max);
                    noteBody += `<span class="drug-note-ref">${r.label}：<strong>${r.min}–${r.max} ${drug.unit}</strong> ≈ <strong id="refrange-${index}">${lo} – ${hi}</strong> ml/hr</span>`;
                }
                if (drug.refDose) {
                    const refRate = calculateDoseRate(drug, weight, drug.refDose.value);
                    noteBody += `<span class="drug-note-ref">${drug.refDose.label ? drug.refDose.label + '：' : ''}<strong>${drug.refDose.value} ${drug.unit}</strong> ≈ <strong id="refrate-${index}">${refRate}</strong> ml/hr</span>`;
                }
                if (drug.thresholdPerKg) {
                    const t = drug.thresholdPerKg;
                    noteBody += `<span class="drug-note-ref">${t.label}：<strong>${formatBand(t.value, t.max)} μg/kg/min</strong> ≈ <strong id="threshold-${index}">${weighThreshold(t, weight)}</strong> ${t.unit}</span>`;
                }
                noteHtml = `<div class="drug-note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><div class="drug-note-body">${noteBody}</div></div>`;
            }

            if (drug.bolus) {
                rateDisplayHtml = `<span class="rate-value rate-fixed" id="rate-${index}">${drug.bolusText}</span>`;
                concInputHtml = '';
            } else if (drug.fixedRateText) {
                rateDisplayHtml = `<span class="rate-value rate-fixed" id="rate-${index}">${drug.fixedRateText}</span>`;
                // Disable concentration input for fixed rate drugs to avoid confusion
                concInputHtml = `
                    <div class="concentration-input">
                        <label>濃度</label>
                        <input type="number" value="${drug.concentration}" disabled aria-label="${drug.name} 濃度（固定）">
                        <span class="conc-unit">${drug.concentrationUnit}</span>
                    </div>
                `;
            } else {
                const rates = calculateRate(drug, weight);
                rateDisplayHtml = `<span class="rate-value" id="rate-${index}">${rates.min} - ${rates.max}</span>
                                   <span class="rate-unit">ml/hr</span>`;
                concInputHtml = `
                    <div class="concentration-input">
                        <label for="${concId}">濃度</label>
                        <input type="number" id="${concId}" value="${drug.concentration}" step="0.1" inputmode="decimal">
                        <span class="conc-unit">${drug.concentrationUnit}</span>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="drug-header">
                    <span class="drug-name">${drug.name}</span>
                    <span class="drug-class">${drug.class}</span>
                </div>
                <div class="calculation-result">
                    <div class="rate-display">
                        ${rateDisplayHtml}
                    </div>
                </div>
                <div class="drug-details">
                    <div class="dose-line"><strong>Dose</strong><span>${drug.doseText}</span></div>
                    <div class="prep-info"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg><span>${drug.prepText}</span></div>
                    ${concInputHtml}
                    ${noteHtml}
                </div>
            `;
            
            grid.appendChild(card);
        });

        catSection.appendChild(grid);
        container.appendChild(catSection);
    });

    // Add listeners to concentration inputs
    drugsData.forEach((drug, index) => {
        if (!drug.fixedRateText && !drug.bolus) {
            const concInput = document.getElementById(`conc-${index}`);
            if(concInput) {
                concInput.addEventListener('input', (e) => {
                    const newConc = parseFloat(e.target.value) || 0;
                    updateSpecificDrug(index, drug, weightInput.value, newConc);
                });
            }
        }
    });
}

function updateSpecificDrug(index, drug, weightVal, newConc) {
    if (drug.fixedRateText || drug.bolus) return; // Neither has a rate to recompute

    const rateElement = document.getElementById(`rate-${index}`);
    if(!rateElement) return;
    
    const weight = parseFloat(weightVal) || 60;
    const rates = calculateRate(drug, weight, newConc);
    
    rateElement.innerText = `${rates.min} - ${rates.max}`;

    if (drug.refDose) {
        const refElement = document.getElementById(`refrate-${index}`);
        if (refElement) {
            refElement.innerText = calculateDoseRate(drug, weight, drug.refDose.value, newConc);
        }
    }

    (drug.refPoints || []).forEach((pt, i) => {
        const el = document.getElementById(`refpoint-${index}-${i}`);
        if (el) el.innerText = calculateDoseRate(drug, weight, pt.value, newConc);
    });

    if (drug.refRange) {
        const bandElement = document.getElementById(`refrange-${index}`);
        if (bandElement) {
            const lo = calculateDoseRate(drug, weight, drug.refRange.min, newConc);
            const hi = calculateDoseRate(drug, weight, drug.refRange.max, newConc);
            bandElement.innerText = `${lo} – ${hi}`;
        }
    }

    // Brief highlight to signal the value changed
    rateElement.style.color = 'var(--color-secondary)';
    setTimeout(() => {
        rateElement.style.color = '';
    }, 200);
}

/* =========================================================================
 *  ABG Analyzer — Acid–Base compensation + Respiratory failure workup
 *  References:
 *   - Acid–base primary disorders & compensation formulas (NEJM 2014;371:1434)
 *   - Figure 2-5, Workup of acute hypoxemia (A–a gradient decision tree)
 *   - Figure 4-2, Approach to metabolic acidosis
 * ========================================================================= */

const ABG_NORMAL = { paco2: 40, hco3: 24 };
const ATM = 760, PH2O = 47, RQ = 0.8; // for alveolar gas equation

function fmt(x, d = 1) {
    if (!isFinite(x)) return "—";
    return Number(x.toFixed(d)).toString();
}

function block(tone, title, badge, badgeTone, items) {
    const lis = items.map(t => `<li>${t}</li>`).join("");
    return `
        <div class="abg-block tone-${tone}">
            <div class="abg-block-head">
                <span class="abg-block-title">${title}</span>
                <span class="abg-badge tone-${badgeTone}">${badge}</span>
            </div>
            <ul class="abg-block-list">${lis}</ul>
        </div>`;
}

// ---- Visual helpers -------------------------------------------------------

// Headline verdict banner — the single most important line of the read-out.
function verdict(tone, main, sub, tag) {
    return `
        <div class="abg-verdict tone-${tone}">
            <div class="abg-verdict-tag">${tag}</div>
            <div class="abg-verdict-main">${main}</div>
            ${sub ? `<div class="abg-verdict-sub">${sub}</div>` : ""}
        </div>`;
}

// Horizontal gauge: normal band shaded, marker shows where the patient sits.
function gauge(label, value, unit, min, max, lo, hi, digits) {
    const span = max - min;
    const pct = v => Math.max(0, Math.min(100, ((v - min) / span) * 100));
    const state = value < lo ? "low" : value > hi ? "high" : "ok";
    const arrow = state === "low" ? "↓" : state === "high" ? "↑" : "✓";
    return `
        <div class="gauge is-${state}">
            <div class="gauge-top">
                <span class="gauge-label">${label}</span>
                <span class="gauge-value">${fmt(value, digits)}<span class="gauge-unit">${unit}</span><span class="gauge-arrow">${arrow}</span></span>
            </div>
            <div class="gauge-track">
                <span class="gauge-band" style="left:${pct(lo)}%;width:${pct(hi) - pct(lo)}%"></span>
                <span class="gauge-marker" style="left:${pct(value)}%"></span>
            </div>
            <div class="gauge-scale"><span>${min}</span><span class="gauge-norm">${lo}–${hi}</span><span>${max}</span></div>
        </div>`;
}

// ---- Acid–base interpretation ---------------------------------------------
function analyzeAcidBase(ph, paco2, hco3, na, cl, uNa, uCl, uK, measuredOsm, glucose, bun, k, uPh, feHco3) {
    const highCO2 = paco2 > 45, lowCO2 = paco2 < 35;
    const highHCO3 = hco3 > 26, lowHCO3 = hco3 < 22;

    // pH status
    let phStatus, phTone;
    if (ph < 7.35) { phStatus = "Acidemia 酸血症"; phTone = "danger"; }
    else if (ph > 7.45) { phStatus = "Alkalemia 鹼血症"; phTone = "danger"; }
    else { phStatus = "pH 正常範圍"; phTone = "normal"; }

    // Determine primary disorder(s)
    const primaries = [];
    if (ph < 7.35) {
        if (lowHCO3) primaries.push("MA");
        if (highCO2) primaries.push("RA");
        if (!primaries.length) primaries.push(hco3 < 24 ? "MA" : "RA");
    } else if (ph > 7.45) {
        if (highHCO3) primaries.push("MAl");
        if (lowCO2) primaries.push("RAl");
        if (!primaries.length) primaries.push(hco3 > 24 ? "MAl" : "RAl");
    } else {
        // pH within normal band — look for compensated / mixed pictures
        if (highCO2 && highHCO3) primaries.push(ph <= 7.40 ? "RA" : "MAl");
        else if (lowCO2 && lowHCO3) primaries.push(ph >= 7.40 ? "RAl" : "MA");
        else if (lowCO2 && highHCO3) { primaries.push("MAl"); primaries.push("RAl"); }
        else if (highCO2 && lowHCO3) { primaries.push("RA"); primaries.push("MA"); }
    }

    const LABEL = {
        MA: "Metabolic acidosis 代謝性酸中毒",
        MAl: "Metabolic alkalosis 代謝性鹼中毒",
        RA: "Respiratory acidosis 呼吸性酸中毒",
        RAl: "Respiratory alkalosis 呼吸性鹼中毒",
    };
    const SHORT = {
        MA: "代謝性酸中毒",
        MAl: "代謝性鹼中毒",
        RA: "呼吸性酸中毒",
        RAl: "呼吸性鹼中毒",
    };

    // Anion gap is computed up-front: it feeds both the verdict and the DDx tree.
    let agState = "unknown", ag = NaN;
    if (isFinite(na) && isFinite(cl)) {
        ag = na - cl - hco3;
        agState = ag > 12 ? "high" : "normal";
    }

    const uniq = [...new Set(primaries)];
    const comps = uniq.map(p => compensationCheck(p, paco2, hco3));

    const blocks = [];

    // ---- Headline verdict ----
    const dxParts = uniq.map(p => {
        if (p === "MA" && agState === "high") return "High AG " + SHORT[p];
        if (p === "MA" && agState === "normal") return "Normal AG " + SHORT[p];
        return SHORT[p];
    });
    // A compensation that overshoots/undershoots reveals a further disorder.
    const extra = comps.length ? comps[0].extra : null;
    if (extra && !dxParts.some(d => d.includes(extra))) dxParts.push(extra);

    const vTone = uniq.length ? (ph < 7.35 || ph > 7.45 ? "danger" : "warn") : "normal";
    const vMain = uniq.length
        ? dxParts.join(" ＋ ")
        : "無明顯酸鹼異常";
    const vSubBits = [phStatus];
    if (comps.length && comps[0].tag) vSubBits.push(comps[0].tag);
    if (dxParts.length > 1) vSubBits.push("Mixed disorder 混合型");
    blocks.push(verdict(vTone, vMain, vSubBits.join(" · "), `pH ${fmt(ph, 2)}`));

    // ---- Value gauges ----
    const gauges = [
        gauge("pH", ph, "", 6.9, 7.7, 7.35, 7.45, 2),
        gauge("PaCO₂", paco2, " mmHg", 10, 90, 35, 45, 0),
        gauge("HCO₃⁻", hco3, " mEq/L", 4, 44, 22, 26, 0),
    ];
    if (isFinite(ag)) gauges.push(gauge("Anion gap", ag, " mEq/L", 0, 36, 8, 12, 0));
    blocks.push(`<div class="abg-gauges">${gauges.join("")}</div>`);

    if (!uniq.length) {
        blocks.push(block("normal", "Primary disorder", "無明顯酸鹼異常", "normal", [
            "pH、PaCO₂、HCO₃⁻ 皆在正常範圍。"
        ]));
    }

    // Primary + compensation analysis (drive off the first / dominant primary)
    uniq.forEach((p, idx) => {
        const isPrimary = idx === 0;
        blocks.push(block(
            isPrimary ? "danger" : "warn",
            isPrimary ? "Primary disorder" : "Concurrent disorder",
            LABEL[p],
            isPrimary ? "danger" : "warn",
            comps[idx].items
        ));
    });

    // Anion gap detail (optional)
    if (isFinite(ag)) {
        const high = agState === "high";
        const agItems = [
            `Anion gap = Na⁺ − Cl⁻ − HCO₃⁻ = <strong>${fmt(ag)}</strong> mEq/L (正常 8–12)`
        ];
        if (high) {
            agItems.push("→ <strong>High anion gap 代謝性酸中毒 (HAGMA)</strong>");
            agItems.push("<em>鑑別 MUDPILES：Methanol / Uremia / DKA / Propylene glycol / Iron·INH / Lactate / Ethylene glycol / Salicylate</em>");
            // Delta-delta / corrected HCO3
            const corrected = hco3 + (ag - 12);
            if (corrected > 26) agItems.push(`Corrected HCO₃⁻ ≈ ${fmt(corrected)} (>26) → 併存 <strong>代謝性鹼中毒</strong>`);
            else if (corrected < 22) agItems.push(`Corrected HCO₃⁻ ≈ ${fmt(corrected)} (<22) → 併存 <strong>正常 AG 代謝性酸中毒</strong>`);
        } else {
            agItems.push("→ Normal anion gap（若有代酸則為 NAGMA，鑑別：腹瀉、RTA 等）");
        }
        blocks.push(block(high ? "warn" : "info", "Anion gap", high ? "High AG" : "Normal AG", high ? "warn" : "info", agItems));
    }

    // Urine anion gap (optional) — drives the NAGMA branch
    let uag = { known: false };
    if (isFinite(uNa) && isFinite(uCl) && isFinite(uK)) {
        const value = uNa + uK - uCl;
        uag = { known: true, value, positive: value > 0 };
    }

    // Osmolar gap (optional) — drives the AGMA ingestions branch
    // Calculated osm = 2×Na + Glucose/18 + BUN/2.8 (conventional units, mg/dL)
    let og = { known: false };
    if (isFinite(measuredOsm) && isFinite(na) && isFinite(glucose) && isFinite(bun)) {
        const calc = 2 * na + glucose / 18 + bun / 2.8;
        const value = measuredOsm - calc;
        og = { known: true, value, calc, high: value > 10 };
    }

    // Metabolic acidosis differential diagnosis (Fig 4-2)
    if (uniq.includes("MA") || agState === "high") {
        blocks.push(renderMetAcidosisDDx(agState, uag, og, resolveRTA(k, uPh, feHco3)));
    }

    return blocks.join("");
}

// Renal (⊕ UAG) sub-typing — Figure 4-2. Serum K splits Type IV from the
// hypokalaemic pair; Fe_HCO3 is what separates Type I from Type II, so without
// it the tree stops at "hypokalemia" rather than guessing (urine pH is raised
// in both distal RTA and proximal RTA above its bicarbonate threshold).
function resolveRTA(k, uPh, feHco3) {
    const hasK = isFinite(k);
    if (!hasK && !isFinite(uPh) && !isFinite(feHco3)) return { known: false };

    const hyperK = hasK && k > 5.0;
    const hypoK = hasK && k < 3.5;
    let type = null, need = null;

    if (hyperK) {
        type = "IV";
    } else if (hypoK) {
        if (isFinite(feHco3)) {
            if (feHco3 > 15) type = "II";
            else if (feHco3 < 3) type = "I";
            else need = "Fe<sub>HCO₃</sub> 落在 3–15% 的灰帶，無法明確分型";
        } else {
            need = "再測 <strong>Fe<sub>HCO₃</sub></strong> 才能區分 Type I（&lt;3%）與 Type II（&gt;15%）";
        }
    } else if (hasK) {
        need = "K⁺ 在正常範圍（3.5–5.0），不符典型 RTA 分型，請結合臨床";
    } else {
        need = "再測 <strong>血鉀</strong> 才能開始分型";
    }

    return { known: true, k, uPh, feHco3, hasK, hyperK, hypoK, type, need };
}

// One-line derivation of the RTA type, shown as a 計算推論 box.
function rtaLine(rta) {
    if (!rta.known) return "";
    const bits = [];
    if (rta.hasK) {
        const tag = rta.hyperK ? "&gt;5.0 高血鉀" : rta.hypoK ? "&lt;3.5 低血鉀" : "3.5–5.0 正常";
        bits.push(`K⁺ <strong>${fmt(rta.k)}</strong> mEq/L（${tag}）`);
    }
    if (isFinite(rta.uPh)) {
        bits.push(`urine pH <strong>${fmt(rta.uPh)}</strong>（${rta.uPh > 5.3 ? "&gt;5.3" : "&lt;5.3"}）`);
    }
    if (isFinite(rta.feHco3)) {
        bits.push(`Fe<sub>HCO₃</sub> <strong>${fmt(rta.feHco3)}</strong>%`);
    }

    const NAME = {
        IV: "Hypoaldosteronism RTA (Type IV)",
        I: "Distal RTA (Type I)",
        II: "Proximal RTA (Type II)",
    };
    let tail;
    if (rta.type) {
        tail = `→ <strong>${NAME[rta.type]}</strong>`;
        // urine pH that argues against the split the potassium made
        if (rta.type === "IV" && isFinite(rta.uPh) && rta.uPh > 5.3)
            tail += "（註：urine pH &gt;5.3 與典型 Type IV 不符，請一併考慮 distal RTA）";
        if (rta.type === "I" && isFinite(rta.uPh) && rta.uPh <= 5.3)
            tail += "（註：urine pH &le;5.3 與典型 Type I 不符）";
    } else {
        tail = `→ ${rta.need}`;
    }

    return `<div class="ddx-uag"><span class="ddx-uag-tag">計算推論</span><br>${bits.join(" · ")}${bits.length ? " " : ""}${tail}</div>`;
}

// Metabolic acidosis differential tree — Figure 4-2, Approach to metabolic acidosis
function renderMetAcidosisDDx(agState, uag, og, rta) {
    // agState: "high" | "normal" | "unknown"
    uag = uag || { known: false };
    og = og || { known: false };
    rta = rta || { known: false };
    const agHigh = agState === "high";
    const agNormal = agState === "normal";

    let badge, badgeTone;
    if (agHigh) { badge = "High AG (AGMA)"; badgeTone = "danger"; }
    else if (agNormal) { badge = "Normal AG (NAGMA)"; badgeTone = "info"; }
    else { badge = "輸入 Na⁺/Cl⁻ 自動分流"; badgeTone = "muted"; }

    const pill = state => state === "on"
        ? `<span class="ddx-pill on">✓ 符合</span>`
        : state === "off"
            ? `<span class="ddx-pill off">✕ 排除</span>`
            : `<span class="ddx-pill idle">待資料</span>`;
    const agPill = pill(agHigh ? "on" : agNormal ? "off" : "idle");
    const nagPill = pill(agNormal ? "on" : agHigh ? "off" : "idle");

    const FLAG = `<span class="ddx-flag">最可能</span>`;

    // Sub-branch highlights only fire inside a branch AG has not already excluded,
    // otherwise the dimmed branch would still show a "最可能" marker.
    const agLive = !agNormal, nagLive = !agHigh;

    // Urine anion gap → renal vs GI sub-branch within NAGMA
    const renalLive = nagLive && uag.known && uag.positive;
    const giHit = nagLive && uag.known && !uag.positive ? "ddx-hit" : "";

    // Inside the renal arm the typing can go two levels deeper; the flag belongs
    // on the deepest node the data actually resolves, not on every node above it.
    const rtaLive = renalLive && rta.known;
    const t4Hit = rtaLive && rta.type === "IV" ? "ddx-hit" : "";
    const t1Hit = rtaLive && rta.type === "I" ? "ddx-hit" : "";
    const t2Hit = rtaLive && rta.type === "II" ? "ddx-hit" : "";
    // hypokalaemia narrows it to the Type I / II pair but cannot pick between them
    const hypoKHit = rtaLive && rta.hypoK && !rta.type ? "ddx-hit" : "";
    const renalHit = renalLive && !(t4Hit || t1Hit || t2Hit || hypoKHit) ? "ddx-hit" : "";
    let uagLine = "";
    if (nagLive && uag.known) {
        const dir = uag.positive
            ? "正值 → <strong>腎性 (RTA)</strong>，往下依 K⁺／urine pH／Fe<sub>HCO₃</sub> 分型"
            : "負值 → <strong>腸胃道/其他流失</strong>（腹瀉等，NH₄⁺ 排出正常）";
        uagLine = `<div class="ddx-uag"><span class="ddx-uag-tag">計算推論</span><br>Urine anion gap = U<sub>Na</sub> + U<sub>K</sub> − U<sub>Cl</sub> = <strong>${fmt(uag.value)}</strong> mEq/L → ${dir}</div>`;
    }

    // Osmolar gap → highlight OG>10 vs OG<10 leaf within AGMA ingestions
    const ogHighHit = agLive && og.known && og.high ? "ddx-hit" : "";
    const ogLowHit = agLive && og.known && !og.high ? "ddx-hit" : "";
    let ogLine = "";
    if (agLive && og.known) {
        const dir = og.high
            ? "&gt;10 → 提示 <strong>toxic alcohol</strong>（Methanol / Ethylene glycol / Propylene glycol / Ethanol）"
            : "&lt;10 → 較不支持 toxic alcohol（考慮 Salicylates、5-oxoproline 等）";
        ogLine = `<div class="ddx-uag"><span class="ddx-uag-tag">計算推論</span><br>Osmolar gap = 實測 − 計算(2×Na + Glu/18 + BUN/2.8 = ${fmt(og.calc)}) = <strong>${fmt(og.value)}</strong> mOsm/kg → ${dir}</div>`;
    }

    // branch state classes: highlight the applicable branch, dim the other.
    // `has-top` means one leaf won outright — everything else in that branch
    // fades back so the answer is the only thing carrying colour.
    const agClass = [
        agHigh ? "is-active" : (agNormal ? "is-dim" : ""),
        (ogHighHit || ogLowHit) ? "has-top" : ""
    ].filter(Boolean).join(" ");
    const nagClass = [
        agNormal ? "is-active" : (agHigh ? "is-dim" : ""),
        (renalHit || giHit || t4Hit || t1Hit || t2Hit || hypoKHit) ? "has-top" : ""
    ].filter(Boolean).join(" ");

    const html = `
        <div class="abg-block tone-warn abg-ddx">
            <div class="abg-block-head">
                <span class="abg-block-title">Metabolic acidosis 鑑別診斷 · Fig 4-2</span>
                <span class="abg-badge tone-${badgeTone}">${badge}</span>
            </div>
            <div class="ddx-note">
                AG = Na⁺ − Cl⁻ − HCO₃⁻（&gt;12 為高）；
                UAG = U<sub>Na</sub> + U<sub>K</sub> − U<sub>Cl</sub>（<strong>正值→腎性 RTA</strong>；<strong>負值→腸胃道流失</strong>）；
                OG（osmolar gap）&gt;10 提示 toxic alcohol。
            </div>
            <div class="ddx-tree">
                <div class="ddx-branch tone-agma ${agClass}">
                    <div class="ddx-branch-title"><span>↑ AG — High-AG Metabolic Acidosis</span>${agPill}</div>
                    ${ogLine}
                    <ul class="ddx-list">
                        <li><span class="ddx-clue pos">⊕ ketones</span> → <strong>DKA、AKA、Starvation</strong>（Salicylates）</li>
                        <li><span class="ddx-clue neg">⊖ ketones</span>
                            <ul>
                                <li><span class="ddx-clue pos">⊕ lactate</span> → <strong>Lactic acidosis</strong>（休克、缺氧、metformin…）</li>
                                <li><span class="ddx-clue">uremia</span> → <strong>Renal failure</strong>（晚期腎衰竭）</li>
                                <li><span class="ddx-clue pos">⊕ tox screen → Ingestions</span>
                                    <ul>
                                        <li class="${ogHighHit}"><span class="ddx-clue">OG &gt;10</span> → Ethanol、Methanol、Ethylene glycol、Propylene glycol${ogHighHit ? FLAG : ""}</li>
                                        <li class="${ogLowHit}"><span class="ddx-clue">OG &lt;10</span> → Salicylates、5-oxoprolinuria${ogLowHit ? FLAG : ""}</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="ddx-branch tone-nagma ${nagClass}">
                    <div class="ddx-branch-title"><span>normal AG — Non-AG Metabolic Acidosis</span>${nagPill}</div>
                    ${uagLine}
                    <ul class="ddx-list">
                        <li class="${renalHit}"><span class="ddx-clue pos">⊕ UAG（腎性 Renal causes）</span>${renalHit ? FLAG : ""}
                            ${rtaLive ? rtaLine(rta) : ""}
                            <ul>
                                <li class="${t4Hit}"><span class="ddx-clue">hyperkalemia · urine pH &lt;5.3</span> → <strong>Hypoaldo RTA (Type IV)</strong>${t4Hit ? FLAG : ""}</li>
                                <li class="${hypoKHit}"><span class="ddx-clue">hypokalemia</span>${hypoKHit ? FLAG : ""}
                                    <ul>
                                        <li class="${t1Hit}"><span class="ddx-clue">Fe<sub>HCO₃</sub> &lt;3% · urine pH &gt;5.3</span> → <strong>Distal RTA (Type I)</strong>${t1Hit ? FLAG : ""}</li>
                                        <li class="${t2Hit}"><span class="ddx-clue">Fe<sub>HCO₃</sub> &gt;15% · urine pH 變動</span> → <strong>Proximal RTA (Type II)</strong>${t2Hit ? FLAG : ""}</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="${giHit}"><span class="ddx-clue neg">⊖ UAG（腸胃道/其他，clinical hx）</span> → <strong>Diarrhea、Fistulas、Ingestions、Dilutional、Posthypocapnia</strong>${giHit ? FLAG : ""}</li>
                    </ul>
                </div>
            </div>
        </div>`;
    return html;
}

// Returns { items, extra, tag } — `extra` names a further disorder revealed by
// an over/under-shooting compensation; `tag` is the one-line compensation verdict.
function compensationCheck(type, paco2, hco3) {
    const items = [];
    const round2 = v => fmt(v, 1);
    let extra = null, tag = null;

    if (type === "MA" || type === "MAl") {
        const isMA = type === "MA";
        const exp = isMA ? 1.5 * hco3 + 8 : 40 + 0.7 * (hco3 - 24);
        const lo = exp - 2, hi = exp + 2;
        items.push(isMA
            ? `Winters 預期 PaCO₂ = (1.5 × HCO₃⁻) + 8 ± 2 = <strong>${round2(lo)}–${round2(hi)}</strong> mmHg`
            : `預期 PaCO₂ = 40 + 0.7 × (HCO₃⁻ − 24) = <strong>${round2(lo)}–${round2(hi)}</strong> mmHg`);
        items.push(`實測 PaCO₂ = ${round2(paco2)} mmHg`);
        if (paco2 > hi) {
            extra = "呼吸性酸中毒"; tag = "呼吸代償不足";
            items.push("→ PaCO₂ 高於預期 → 併存 <strong>呼吸性酸中毒</strong>");
        } else if (paco2 < lo) {
            extra = "呼吸性鹼中毒"; tag = "過度換氣";
            items.push("→ PaCO₂ 低於預期 → 併存 <strong>呼吸性鹼中毒</strong>");
        } else {
            tag = "呼吸代償適當";
            items.push(`→ 呼吸代償適當（單純${isMA ? "代謝性酸中毒" : "代謝性鹼中毒"}）`);
        }
    } else if (type === "RA" || type === "RAl") {
        const isRA = type === "RA";
        const d = isRA ? paco2 - 40 : 40 - paco2;
        const acute = isRA ? 24 + 0.1 * d : 24 - 0.2 * d;
        const chronic = isRA ? 24 + 0.35 * d : 24 - 0.4 * d;
        items.push(`ΔPaCO₂ = ${isRA ? "" : "−"}${round2(d)} mmHg`);
        items.push(isRA
            ? `預期 HCO₃⁻：急性 ≈ <strong>${round2(acute)}</strong>（+0.1×Δ）、慢性 ≈ <strong>${round2(chronic)}</strong>（+0.35×Δ）`
            : `預期 HCO₃⁻：急性 ≈ <strong>${round2(acute)}</strong>（−0.2×Δ）、慢性 ≈ <strong>${round2(chronic)}</strong>（−0.4×Δ）`);
        items.push(`實測 HCO₃⁻ = ${round2(hco3)} mEq/L`);
        const r = interpretRespComp(hco3, acute, chronic, !isRA);
        items.push(r.text);
        extra = r.extra; tag = r.tag;
    }
    return { items, extra, tag };
}

// For respiratory disorders: classify acute / chronic / mixed from measured HCO3
function interpretRespComp(hco3, acute, chronic, isAlkalosis) {
    const tol = 2;
    const loExp = Math.min(acute, chronic) - tol;
    const hiExp = Math.max(acute, chronic) + tol;
    if (hco3 < loExp) {
        return {
            text: "→ HCO₃⁻ 低於代償範圍 → 併存 <strong>代謝性酸中毒</strong>",
            extra: "代謝性酸中毒", tag: "代償不符"
        };
    }
    if (hco3 > hiExp) {
        return {
            text: "→ HCO₃⁻ 高於代償範圍 → 併存 <strong>代謝性鹼中毒</strong>",
            extra: "代謝性鹼中毒", tag: "代償不符"
        };
    }
    // within range — determine acute vs chronic
    if (Math.abs(hco3 - acute) <= tol && Math.abs(hco3 - chronic) > tol)
        return { text: "→ 符合 <strong>急性 (acute)</strong> 代償", extra: null, tag: "急性 acute" };
    if (Math.abs(hco3 - chronic) <= tol && Math.abs(hco3 - acute) > tol)
        return { text: "→ 符合 <strong>慢性 (chronic，已代償)</strong>", extra: null, tag: "慢性 chronic" };
    return { text: "→ 介於急慢性之間 → 可能為 <strong>acute-on-chronic</strong>", extra: null, tag: "acute-on-chronic" };
}

// ---- Oxygenation / respiratory failure workup (Figure 2-5) ----------------
function analyzeOxygenation(pao2, fio2Input, paco2, age) {
    const fio2 = fio2Input > 1 ? fio2Input / 100 : fio2Input; // accept 21 or 0.21
    const pAO2 = fio2 * (ATM - PH2O) - paco2 / RQ;            // alveolar gas equation
    const aa = pAO2 - pao2;                                    // A–a gradient
    const pf = pao2 / fio2;                                    // P/F ratio
    const roomAir = fio2 <= 0.22;
    const expectedAa = isFinite(age) ? (age / 4 + 4) : 15;    // room-air normal (approx)
    const aaHigh = aa > expectedAa + (roomAir ? 0 : 10);      // loosen threshold on supplemental O2
    const highCO2 = paco2 > 45;
    const hypoxemic = pao2 < 60;

    const blocks = [];

    // ---- Headline verdict ----
    let oMain, oTone;
    if (hypoxemic && highCO2) { oMain = "Type I + II 呼吸衰竭（低血氧併換氣衰竭）"; oTone = "danger"; }
    else if (highCO2) { oMain = "Type II 呼吸衰竭（高碳酸血症型）"; oTone = "danger"; }
    else if (hypoxemic) { oMain = "Type I 呼吸衰竭（低血氧型）"; oTone = "danger"; }
    else if (aaHigh) { oMain = "尚未達呼吸衰竭，但氣體交換異常"; oTone = "warn"; }
    else { oMain = "氧合與氣體交換大致正常"; oTone = "normal"; }
    const oSub = `A–a gradient ${aaHigh ? "升高" : "正常"} · P/F ${fmt(pf, 0)}`;
    blocks.push(verdict(oTone, oMain, oSub, `PaO₂ ${fmt(pao2, 0)}`));

    // ---- Value gauges ----
    const aaMax = Math.max(60, Math.ceil(aa / 20) * 20 + 20);
    blocks.push(`<div class="abg-gauges">${[
        gauge("PaO₂", pao2, " mmHg", 30, 300, 60, 300, 0),
        gauge("A–a gradient", aa, " mmHg", 0, aaMax, 0, Math.round(expectedAa + (roomAir ? 0 : 10)), 0),
        gauge("P/F ratio", pf, "", 0, 500, 300, 500, 0),
    ].join("")}</div>`);

    // Computed values chips
    const chips = [
        `PAO₂ <strong>${fmt(pAO2)}</strong> mmHg`,
        `A–a 預期 ≤ <strong>${fmt(expectedAa)}</strong>${roomAir ? "（room air）" : "（供氧下上調 +10）"}`,
        `FiO₂ <strong>${fmt(fio2 * 100, 0)}%</strong>`
    ];
    blocks.push(`<div class="abg-values">${chips.map(c => `<span class="abg-chip">${c}</span>`).join("")}</div>`);

    // Respiratory failure type
    let typeItems = [];
    if (highCO2) typeItems.push("PaCO₂ > 45 → <strong>Type II（高碳酸血症型）呼吸衰竭</strong>");
    if (hypoxemic && !highCO2) typeItems.push("PaO₂ < 60 且 PaCO₂ 不高 → <strong>Type I（低血氧型）呼吸衰竭</strong>");
    if (hypoxemic && highCO2) typeItems.push("PaO₂ < 60 併 PaCO₂ 上升 → 低血氧合併換氣衰竭");
    if (!hypoxemic && !highCO2) typeItems.push(`PaO₂ ${fmt(pao2)} mmHg，尚未達呼吸衰竭標準（PaO₂ < 60）`);
    // ARDS severity by P/F (assume PEEP ≥ 5)
    if (pf < 300) {
        let sev = pf >= 200 ? "Mild" : pf >= 100 ? "Moderate" : "Severe";
        typeItems.push(`P/F = ${fmt(pf, 0)} → 氧合障礙（Berlin：${sev}，需 PEEP ≥ 5 確認 ARDS）`);
    }
    blocks.push(block(hypoxemic ? "danger" : "info", "Respiratory failure type", hypoxemic ? "呼吸衰竭" : "氧合評估", hypoxemic ? "danger" : "info", typeItems));

    // A–a gradient decision tree (Figure 2-5)
    let treeTitle, treeBadge, treeTone, treeItems;
    if (!aaHigh) {
        if (highCO2) {
            treeTitle = "病因（A–a 正常）"; treeBadge = "Hypoventilation 換氣不足"; treeTone = "warn";
            treeItems = [
                "A–a gradient 正常 + PaCO₂ 上升 → 純粹 <strong>換氣不足 (hypoventilation)</strong>",
                "<em>常見：鎮靜/麻醉藥物、COPD、OSA、橫膈或神經肌肉疾病 (NM disease)</em>",
                "處置方向：確保呼吸道與換氣（拮抗鎮靜、支持通氣）"
            ];
        } else {
            treeTitle = "病因（A–a 正常）"; treeBadge = "↓FiO₂ / ↓PiO₂ 吸入氧不足"; treeTone = "warn";
            treeItems = [
                "A–a gradient 正常 + PaCO₂ 不高 → <strong>吸入氧分壓過低 (↓FiO₂/↓PiO₂)</strong>",
                "<em>常見：氧氣鋼瓶用盡、管路脫落/阻塞、高海拔</em>",
                "處置方向：檢查供氧設備與管路"
            ];
        }
    } else {
        treeTitle = "病因（A–a 升高）"; treeBadge = "氣體交換異常"; treeTone = "danger";
        treeItems = [
            "A–a gradient 升高 → 氣體交換障礙，床邊給 <strong>100% O₂</strong> 鑑別：",
            "① 可矯正 → <strong>V/Q mismatch</strong>：airway（asthma、COPD）、alveolar（PNA、CHF）、vascular（<strong>PE</strong>）",
            "② 無法矯正 → <strong>True shunt</strong>：肺泡塌陷（atelectasis）、肺泡填充（PNA、CHF）、R→L cardiac shunt、pulmonary AVM",
            "③ 僅運動時明顯 → <strong>Impaired diffusion</strong>（如 ILD）"
        ];
        if (highCO2) treeItems.push("<em>註：PaCO₂ 亦上升，提示同時合併換氣不足</em>");
    }
    blocks.push(block(treeTone, treeTitle, treeBadge, treeTone, treeItems));

    return blocks.join("");
}

function runABG() {
    const results = document.getElementById("abg-results");
    if (!results) return;

    const num = id => {
        const el = document.getElementById(id);
        if (!el || el.value.trim() === "") return NaN;
        return parseFloat(el.value);
    };

    const ph = num("abg-ph");
    const paco2 = num("abg-paco2");
    const hco3 = num("abg-hco3");
    const pao2 = num("abg-pao2");
    const fio2 = num("abg-fio2");
    const age = num("abg-age");
    const na = num("abg-na");
    const cl = num("abg-cl");
    const k = num("abg-k");
    const uNa = num("abg-una");
    const uCl = num("abg-ucl");
    const uK = num("abg-uk");
    const measuredOsm = num("abg-osm");
    const glucose = num("abg-glu");
    const bun = num("abg-bun");
    const uPh = num("abg-uph");
    const feHco3 = num("abg-fehco3");

    let html = "";

    const hasAB = isFinite(ph) && isFinite(paco2) && isFinite(hco3);
    if (hasAB) {
        html += `<div class="abg-section-title">酸鹼分析 · Acid–Base</div>`;
        html += analyzeAcidBase(ph, paco2, hco3, na, cl, uNa, uCl, uK, measuredOsm, glucose, bun, k, uPh, feHco3);
    }

    const hasOxy = isFinite(pao2) && isFinite(fio2) && isFinite(paco2);
    if (hasOxy) {
        html += `<div class="abg-section-title">氧合 / 呼吸衰竭 · Oxygenation</div>`;
        html += analyzeOxygenation(pao2, fio2, paco2, age);
    } else if (isFinite(pao2) && !isFinite(fio2)) {
        html += `<p class="abg-error">分析呼吸衰竭需一併輸入 FiO₂（%）。</p>`;
    } else if (isFinite(pao2) && !isFinite(paco2)) {
        html += `<p class="abg-error">分析呼吸衰竭需一併輸入 PaCO₂。</p>`;
    }

    if (!html) {
        results.innerHTML = `<p class="abg-placeholder">填入 pH、PaCO₂、HCO₃⁻ 進行酸鹼分析；再加入 PaO₂ 與 FiO₂ 分析呼吸衰竭原因。</p>`;
    } else {
        results.innerHTML = html;
    }
}

const ABG_INPUT_IDS = ["abg-ph", "abg-paco2", "abg-hco3", "abg-pao2", "abg-fio2", "abg-age", "abg-na", "abg-cl", "abg-k", "abg-una", "abg-ucl", "abg-uk", "abg-uph", "abg-fehco3", "abg-osm", "abg-glu", "abg-bun"];

function clearABG() {
    ABG_INPUT_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
    });
    runABG();
    const first = document.getElementById("abg-ph");
    if (first) first.focus();
}

function initABG() {
    ABG_INPUT_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener("input", runABG);
    });
    const clearBtn = document.getElementById("abg-clear");
    if (clearBtn) clearBtn.addEventListener("click", clearABG);
}

function initViews() {
    const tabs = [
        { tab: "tab-drugs", view: "view-drugs" },
        { tab: "tab-abg", view: "view-abg" },
    ];

    function activate(activeTabId) {
        tabs.forEach(({ tab, view }) => {
            const tabEl = document.getElementById(tab);
            const viewEl = document.getElementById(view);
            const isActive = tab === activeTabId;
            if (tabEl) {
                tabEl.classList.toggle("is-active", isActive);
                tabEl.setAttribute("aria-selected", isActive ? "true" : "false");
            }
            if (viewEl) viewEl.classList.toggle("is-hidden", !isActive);
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    tabs.forEach(({ tab }) => {
        const tabEl = document.getElementById(tab);
        if (tabEl) tabEl.addEventListener("click", () => activate(tab));
    });
}

function init() {
    const weightInput = document.getElementById('weight');
    weightInput.addEventListener('input', () => {
        const weight = parseFloat(weightInput.value) || 60;
        
        drugsData.forEach((drug, index) => {
            if (!drug.fixedRateText && !drug.bolus) {
                const concInput = document.getElementById(`conc-${index}`);
                const currentConc = concInput ? parseFloat(concInput.value) : drug.concentration;
                updateSpecificDrug(index, drug, weight, currentConc);
            }
            if (drug.thresholdPerKg) {
                const el = document.getElementById(`threshold-${index}`);
                if (el) el.innerText = weighThreshold(drug.thresholdPerKg, weight);
            }
        });
    });

    renderDrugs();
    initABG();
    initViews();
}

document.addEventListener('DOMContentLoaded', init);
