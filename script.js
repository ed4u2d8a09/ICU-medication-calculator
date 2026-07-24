const drugsData = [
  {
    category: "Pressors, Inotropes, and Chronotropes",
    name: "Norepinephrine",
    class: "α1 > β1",
    doseText: "1–40 μg/min",
    prepText: "16mg (4 amps) in D5W 500ml",
    unit: "μg/min",
    doseMin: 1, doseMax: 40,
    concentration: 32,
    concentrationUnit: "μg/ml",
    weightBased: false
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
    weightBased: false
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
  }
];

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

            if (drug.fixedRateText) {
                rateDisplayHtml = `<span class="rate-value rate-fixed" id="rate-${index}">${drug.fixedRateText}</span>`;
                // Disable concentration input for fixed rate drugs to avoid confusion
                concInputHtml = `
                    <div class="concentration-input">
                        <label>Conc:</label>
                        <input type="number" value="${drug.concentration}" disabled style="opacity: 0.5;">
                        <span>${drug.concentrationUnit}</span>
                    </div>
                `;
            } else {
                const rates = calculateRate(drug, weight);
                rateDisplayHtml = `<span class="rate-value" id="rate-${index}">${rates.min} - ${rates.max}</span>
                                   <span class="rate-unit">ml/hr</span>`;
                concInputHtml = `
                    <div class="concentration-input">
                        <label for="${concId}">Conc:</label>
                        <input type="number" id="${concId}" value="${drug.concentration}" step="0.1">
                        <span>${drug.concentrationUnit}</span>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="drug-header">
                    <span class="drug-name">${drug.name}</span>
                    <span class="drug-class">${drug.class}</span>
                </div>
                <div class="drug-details">
                    <div><strong>Dose:</strong> ${drug.doseText}</div>
                    <div class="prep-info"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg><span>${drug.prepText}</span></div>
                    ${concInputHtml}
                </div>
                <div class="calculation-result">
                    <div class="rate-display">
                        ${rateDisplayHtml}
                    </div>
                </div>
            `;
            
            grid.appendChild(card);
        });

        catSection.appendChild(grid);
        container.appendChild(catSection);
    });

    // Add listeners to concentration inputs
    drugsData.forEach((drug, index) => {
        if (!drug.fixedRateText) {
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
    if (drug.fixedRateText) return; // Do not update fixed rates

    const rateElement = document.getElementById(`rate-${index}`);
    if(!rateElement) return;
    
    const weight = parseFloat(weightVal) || 60;
    const rates = calculateRate(drug, weight, newConc);
    
    rateElement.innerText = `${rates.min} - ${rates.max}`;
    
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

// ---- Acid–base interpretation ---------------------------------------------
function analyzeAcidBase(ph, paco2, hco3, na, cl, uNa, uCl, uK, measuredOsm, glucose, bun) {
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

    const blocks = [];

    // pH summary block
    blocks.push(block(phTone, "pH Status", `pH ${fmt(ph, 2)} · ${phStatus}`, phTone, [
        `PaCO₂ <strong>${fmt(paco2)}</strong> mmHg (35–45) · HCO₃⁻ <strong>${fmt(hco3)}</strong> mEq/L (22–26)`
    ]));

    if (!primaries.length) {
        blocks.push(block("normal", "Primary disorder", "無明顯酸鹼異常", "normal", [
            "pH、PaCO₂、HCO₃⁻ 皆在正常範圍。"
        ]));
    }

    // Primary + compensation analysis (drive off the first / dominant primary)
    const seen = new Set();
    primaries.forEach((p, idx) => {
        if (seen.has(p)) return; seen.add(p);
        const isPrimary = idx === 0;
        const comp = compensationCheck(p, paco2, hco3);
        blocks.push(block(
            isPrimary ? "danger" : "warn",
            isPrimary ? "Primary disorder" : "Concurrent disorder",
            LABEL[p],
            isPrimary ? "danger" : "warn",
            comp
        ));
    });

    // Anion gap (optional)
    let agState = "unknown";
    if (isFinite(na) && isFinite(cl)) {
        const ag = na - cl - hco3;
        const high = ag > 12;
        agState = high ? "high" : "normal";
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
    if (primaries.includes("MA") || agState === "high") {
        blocks.push(renderMetAcidosisDDx(agState, uag, og));
    }

    return blocks.join("");
}

// Metabolic acidosis differential tree — Figure 4-2, Approach to metabolic acidosis
function renderMetAcidosisDDx(agState, uag, og) {
    // agState: "high" | "normal" | "unknown"
    uag = uag || { known: false };
    og = og || { known: false };
    const agHigh = agState === "high";
    const agNormal = agState === "normal";

    let badge, badgeTone;
    if (agHigh) { badge = "High AG (AGMA)"; badgeTone = "warn"; }
    else if (agNormal) { badge = "Normal AG (NAGMA)"; badgeTone = "info"; }
    else { badge = "輸入 Na⁺/Cl⁻ 自動分流"; badgeTone = "info"; }

    // branch state classes: highlight the applicable branch, dim the other
    const agClass = agHigh ? "is-active" : (agNormal ? "is-dim" : "");
    const nagClass = agNormal ? "is-active" : (agHigh ? "is-dim" : "");

    // Urine anion gap → highlight renal vs GI sub-branch within NAGMA
    const renalHit = uag.known && uag.positive ? "ddx-hit" : "";
    const giHit = uag.known && !uag.positive ? "ddx-hit" : "";
    let uagLine = "";
    if (uag.known) {
        const dir = uag.positive
            ? "正值 → <strong>腎性 (RTA)</strong>，往下依 K⁺／urine pH／Fe<sub>HCO₃</sub> 分型"
            : "負值 → <strong>腸胃道/其他流失</strong>（腹瀉等，NH₄⁺ 排出正常）";
        uagLine = `<div class="ddx-uag">Urine anion gap = U<sub>Na</sub> + U<sub>K</sub> − U<sub>Cl</sub> = <strong>${fmt(uag.value)}</strong> mEq/L → ${dir}</div>`;
    }

    // Osmolar gap → highlight OG>10 vs OG<10 leaf within AGMA ingestions
    const ogHighHit = og.known && og.high ? "ddx-hit" : "";
    const ogLowHit = og.known && !og.high ? "ddx-hit" : "";
    let ogLine = "";
    if (og.known) {
        const dir = og.high
            ? "&gt;10 → 提示 <strong>toxic alcohol</strong>（Methanol / Ethylene glycol / Propylene glycol / Ethanol）"
            : "&lt;10 → 較不支持 toxic alcohol（考慮 Salicylates、5-oxoproline 等）";
        ogLine = `<div class="ddx-uag">Osmolar gap = 實測 − 計算(2×Na + Glu/18 + BUN/2.8 = ${fmt(og.calc)}) = <strong>${fmt(og.value)}</strong> mOsm/kg → ${dir}</div>`;
    }

    const html = `
        <div class="abg-block tone-warn">
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
                <div class="ddx-branch ${agClass}">
                    <div class="ddx-branch-title">↑ AG — High-AG Metabolic Acidosis</div>
                    ${ogLine}
                    <ul class="ddx-list">
                        <li><span class="ddx-clue pos">⊕ ketones</span> → <strong>DKA、AKA、Starvation</strong>（Salicylates）</li>
                        <li><span class="ddx-clue neg">⊖ ketones</span>
                            <ul>
                                <li><span class="ddx-clue pos">⊕ lactate</span> → <strong>Lactic acidosis</strong>（休克、缺氧、metformin…）</li>
                                <li><span class="ddx-clue">uremia</span> → <strong>Renal failure</strong>（晚期腎衰竭）</li>
                                <li><span class="ddx-clue pos">⊕ tox screen → Ingestions</span>
                                    <ul>
                                        <li class="${ogHighHit}"><span class="ddx-clue">OG &gt;10</span> → Ethanol、Methanol、Ethylene glycol、Propylene glycol</li>
                                        <li class="${ogLowHit}"><span class="ddx-clue">OG &lt;10</span> → Salicylates、5-oxoprolinuria</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="ddx-branch ${nagClass}">
                    <div class="ddx-branch-title">normal AG — Non-AG Metabolic Acidosis</div>
                    ${uagLine}
                    <ul class="ddx-list">
                        <li class="${renalHit}"><span class="ddx-clue pos">⊕ UAG（腎性 Renal causes）</span>
                            <ul>
                                <li><span class="ddx-clue">hyperkalemia · urine pH &lt;5.3</span> → <strong>Hypoaldo RTA (Type IV)</strong></li>
                                <li><span class="ddx-clue">hypokalemia</span>
                                    <ul>
                                        <li><span class="ddx-clue">Fe<sub>HCO₃</sub> &lt;3% · urine pH &gt;5.3</span> → <strong>Distal RTA (Type I)</strong></li>
                                        <li><span class="ddx-clue">Fe<sub>HCO₃</sub> &gt;15% · urine pH 變動</span> → <strong>Proximal RTA (Type II)</strong></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="${giHit}"><span class="ddx-clue neg">⊖ UAG（腸胃道/其他，clinical hx）</span> → <strong>Diarrhea、Fistulas、Ingestions、Dilutional、Posthypocapnia</strong></li>
                    </ul>
                </div>
            </div>
        </div>`;
    return html;
}

function compensationCheck(type, paco2, hco3) {
    const items = [];
    const round2 = v => fmt(v, 1);

    if (type === "MA") {
        const exp = 1.5 * hco3 + 8;               // Winters' formula
        const lo = exp - 2, hi = exp + 2;
        items.push(`Winters 預期 PaCO₂ = (1.5 × HCO₃⁻) + 8 ± 2 = <strong>${round2(lo)}–${round2(hi)}</strong> mmHg`);
        items.push(`實測 PaCO₂ = ${round2(paco2)} mmHg`);
        if (paco2 > hi) items.push("→ PaCO₂ 高於預期 → 併存 <strong>呼吸性酸中毒</strong>");
        else if (paco2 < lo) items.push("→ PaCO₂ 低於預期 → 併存 <strong>呼吸性鹼中毒</strong>");
        else items.push("→ 呼吸代償適當（單純代謝性酸中毒）");
    } else if (type === "MAl") {
        const exp = 40 + 0.7 * (hco3 - 24);       // expected PaCO2 rise
        const lo = exp - 2, hi = exp + 2;
        items.push(`預期 PaCO₂ = 40 + 0.7 × (HCO₃⁻ − 24) = <strong>${round2(lo)}–${round2(hi)}</strong> mmHg`);
        items.push(`實測 PaCO₂ = ${round2(paco2)} mmHg`);
        if (paco2 > hi) items.push("→ PaCO₂ 高於預期 → 併存 <strong>呼吸性酸中毒</strong>");
        else if (paco2 < lo) items.push("→ PaCO₂ 低於預期 → 併存 <strong>呼吸性鹼中毒</strong>");
        else items.push("→ 呼吸代償適當（單純代謝性鹼中毒）");
    } else if (type === "RA") {
        const d = paco2 - 40;
        const acute = 24 + 0.1 * d;
        const chronic = 24 + 0.35 * d;
        items.push(`ΔPaCO₂ = ${round2(d)} mmHg`);
        items.push(`預期 HCO₃⁻：急性 ≈ <strong>${round2(acute)}</strong>（+0.1×Δ）、慢性 ≈ <strong>${round2(chronic)}</strong>（+0.35×Δ）`);
        items.push(`實測 HCO₃⁻ = ${round2(hco3)} mEq/L`);
        items.push(interpretRespComp(hco3, acute, chronic, false));
    } else if (type === "RAl") {
        const d = 40 - paco2;
        const acute = 24 - 0.2 * d;
        const chronic = 24 - 0.4 * d;
        items.push(`ΔPaCO₂ = −${round2(d)} mmHg`);
        items.push(`預期 HCO₃⁻：急性 ≈ <strong>${round2(acute)}</strong>（−0.2×Δ）、慢性 ≈ <strong>${round2(chronic)}</strong>（−0.4×Δ）`);
        items.push(`實測 HCO₃⁻ = ${round2(hco3)} mEq/L`);
        items.push(interpretRespComp(hco3, acute, chronic, true));
    }
    return items;
}

// For respiratory disorders: classify acute / chronic / mixed from measured HCO3
function interpretRespComp(hco3, acute, chronic, isAlkalosis) {
    const tol = 2;
    const loExp = Math.min(acute, chronic) - tol;
    const hiExp = Math.max(acute, chronic) + tol;
    if (hco3 < loExp) {
        return isAlkalosis
            ? "→ HCO₃⁻ 低於預期 → 併存 <strong>代謝性酸中毒</strong>"
            : "→ HCO₃⁻ 低於代償範圍 → 併存 <strong>代謝性酸中毒</strong>";
    }
    if (hco3 > hiExp) {
        return isAlkalosis
            ? "→ HCO₃⁻ 高於代償範圍 → 併存 <strong>代謝性鹼中毒</strong>"
            : "→ HCO₃⁻ 高於預期 → 併存 <strong>代謝性鹼中毒</strong>";
    }
    // within range — determine acute vs chronic
    if (Math.abs(hco3 - acute) <= tol && Math.abs(hco3 - chronic) > tol)
        return "→ 符合 <strong>急性 (acute)</strong> 代償";
    if (Math.abs(hco3 - chronic) <= tol && Math.abs(hco3 - acute) > tol)
        return "→ 符合 <strong>慢性 (chronic，已代償)</strong>";
    return "→ 介於急慢性之間 → 可能為 <strong>acute-on-chronic</strong>";
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

    const blocks = [];

    // Computed values chips
    const chips = [
        `PAO₂ <strong>${fmt(pAO2)}</strong> mmHg`,
        `A–a gradient <strong>${fmt(aa)}</strong> mmHg（預期 ≤ ${fmt(expectedAa)}${roomAir ? "" : "，供氧下上調"}）`,
        `P/F ratio <strong>${fmt(pf, 0)}</strong>`,
        `FiO₂ ${fmt(fio2 * 100, 0)}%`
    ];
    blocks.push(`<div class="abg-values">${chips.map(c => `<span class="abg-chip">${c}</span>`).join("")}</div>`);

    // Respiratory failure type
    const hypoxemic = pao2 < 60;
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
    const uNa = num("abg-una");
    const uCl = num("abg-ucl");
    const uK = num("abg-uk");
    const measuredOsm = num("abg-osm");
    const glucose = num("abg-glu");
    const bun = num("abg-bun");

    let html = "";

    const hasAB = isFinite(ph) && isFinite(paco2) && isFinite(hco3);
    if (hasAB) {
        html += `<div class="abg-section-title">酸鹼分析 · Acid–Base</div>`;
        html += analyzeAcidBase(ph, paco2, hco3, na, cl, uNa, uCl, uK, measuredOsm, glucose, bun);
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

const ABG_INPUT_IDS = ["abg-ph", "abg-paco2", "abg-hco3", "abg-pao2", "abg-fio2", "abg-age", "abg-na", "abg-cl", "abg-una", "abg-ucl", "abg-uk", "abg-osm", "abg-glu", "abg-bun"];

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
            if (!drug.fixedRateText) {
                const concInput = document.getElementById(`conc-${index}`);
                const currentConc = concInput ? parseFloat(concInput.value) : drug.concentration;
                updateSpecificDrug(index, drug, weight, currentConc);
            }
        });
    });

    renderDrugs();
    initABG();
    initViews();
}

document.addEventListener('DOMContentLoaded', init);
