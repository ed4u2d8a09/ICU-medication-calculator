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
}

document.addEventListener('DOMContentLoaded', init);
