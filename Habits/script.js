const checkboxes =
    document.querySelectorAll(".habit-check");


const completedCount =
    document.getElementById("completedCount");

const totalCount =
    document.getElementById("totalCount");

const percentage =
    document.getElementById("percentage");

const weeklyPercent =
    document.getElementById("weeklyPercent");

const progressFill =
    document.getElementById("progressFill");

const resetButton =
    document.getElementById("resetButton");

const syncCodeInput =
    document.getElementById("syncCodeInput");

const syncSaveButton =
    document.getElementById("syncSaveButton");

const syncApplyButton =
    document.getElementById("syncApplyButton");

const syncStatus =
    document.getElementById("syncStatus");


const weekName =
    document.getElementById("weekName");

const codingTopic =
    document.getElementById("codingTopic");

const codingProject =
    document.getElementById("codingProject");

const codingFeature =
    document.getElementById("codingFeature");


const biggestWin =
    document.getElementById("biggestWin");

const learned =
    document.getElementById("learned");

const slowedDown =
    document.getElementById("slowedDown");

const bestHabit =
    document.getElementById("bestHabit");

const improveHabit =
    document.getElementById("improveHabit");

const nextGoal =
    document.getElementById("nextGoal");


const days = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun"
];

const HABITS_KEY = "weeklyHabits";
const TEXT_KEY = "habitTrackerText";
const UPDATED_KEY = "habitTrackerUpdatedAt";


/* -------------------------
   CHECKBOX KEY
------------------------- */

function getCheckboxKey(checkbox) {

    const habit =
        checkbox.dataset.habit;

    const day =
        checkbox.dataset.day;

    return `${habit}-${day}`;

}


function setSyncStatus(message) {
    if (syncStatus) {
        syncStatus.textContent = message;
    }
}


function getTextData() {
    return {
        weekName: weekName.value,
        codingTopic: codingTopic.value,
        codingProject: codingProject.value,
        codingFeature: codingFeature.value,
        biggestWin: biggestWin.value,
        learned: learned.value,
        slowedDown: slowedDown.value,
        bestHabit: bestHabit.value,
        improveHabit: improveHabit.value,
        nextGoal: nextGoal.value
    };
}


function setTextData(text = {}) {
    weekName.value = text.weekName || "";
    codingTopic.value = text.codingTopic || "";
    codingProject.value = text.codingProject || "";
    codingFeature.value = text.codingFeature || "";
    biggestWin.value = text.biggestWin || "";
    learned.value = text.learned || "";
    slowedDown.value = text.slowedDown || "";
    bestHabit.value = text.bestHabit || "";
    improveHabit.value = text.improveHabit || "";
    nextGoal.value = text.nextGoal || "";
}


function collectPayload() {
    const bits = Array.from(checkboxes)
        .map(checkbox => (checkbox.checked ? "1" : "0"))
        .join("");

    return {
        v: 1,
        u: Date.now(),
        b: bits,
        t: getTextData()
    };
}


function applyPayload(payload) {
    if (!payload || typeof payload !== "object") {
        return false;
    }

    // New compact format
    if (typeof payload.b === "string" && payload.b.length) {
        const bits = payload.b;
        checkboxes.forEach((checkbox, index) => {
            checkbox.checked = bits[index] === "1";
        });
    }
    // Older full habits format
    else if (payload.habits && typeof payload.habits === "object") {
        checkboxes.forEach(checkbox => {
            const key = getCheckboxKey(checkbox);
            checkbox.checked = Boolean(payload.habits[key]);
        });
    } else {
        return false;
    }

    const habits = {};
    checkboxes.forEach(checkbox => {
        habits[getCheckboxKey(checkbox)] = checkbox.checked;
    });
    localStorage.setItem(HABITS_KEY, JSON.stringify(habits));

    const text = payload.t || payload.text || {};
    setTextData(text);
    localStorage.setItem(TEXT_KEY, JSON.stringify(getTextData()));

    if (payload.u || payload.updatedAt) {
        localStorage.setItem(
            UPDATED_KEY,
            String(payload.u || payload.updatedAt)
        );
    }

    updateProgress();
    refreshSyncCodeField();
    return true;
}


function encodeSyncCode(payload) {
    const json = JSON.stringify(payload);
    const bytes = new TextEncoder().encode(json);
    let binary = "";
    bytes.forEach(byte => {
        binary += String.fromCharCode(byte);
    });
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}


function decodeSyncCode(code) {
    const cleaned = String(code || "").trim().replace(/\s+/g, "");
    if (!cleaned) {
        throw new Error("Empty sync code");
    }

    let base64 = cleaned.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4) {
        base64 += "=";
    }

    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    const json = new TextDecoder().decode(bytes);
    return JSON.parse(json);
}


function refreshSyncCodeField() {
    if (!syncCodeInput) return;
    if (document.activeElement === syncCodeInput) return;
    syncCodeInput.value = encodeSyncCode(collectPayload());
}


async function copyText(text) {
    if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
    }

    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    if (!ok) {
        throw new Error("Copy failed");
    }
    return true;
}


function buildPhoneLink(code) {
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = `h=${code}`;
    return url.toString();
}


function getCodeFromLocation() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("h")) return params.get("h");

    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return "";

    if (hash.startsWith("h=")) {
        return decodeURIComponent(hash.slice(2));
    }

    // Support older paste links by ignoring them cleanly
    if (hash.startsWith("paste=")) {
        return "";
    }

    const hashParams = new URLSearchParams(hash);
    return hashParams.get("h") || "";
}


/* -------------------------
   SAVE CHECKBOXES
------------------------- */

function saveHabits() {

    const habits = {};


    checkboxes.forEach(checkbox => {

        const key =
            getCheckboxKey(checkbox);

        habits[key] =
            checkbox.checked;

    });


    localStorage.setItem(
        HABITS_KEY,
        JSON.stringify(habits)
    );

    localStorage.setItem(UPDATED_KEY, String(Date.now()));
    refreshSyncCodeField();

}


/* -------------------------
   LOAD CHECKBOXES
------------------------- */

function loadHabits() {

    const savedHabits =
        JSON.parse(
            localStorage.getItem(
                HABITS_KEY
            )
        ) || {};


    checkboxes.forEach(checkbox => {

        const key =
            getCheckboxKey(checkbox);


        checkbox.checked =
            savedHabits[key] || false;

    });

}


/* -------------------------
   SYNC ACTIONS
------------------------- */

async function copyPhoneLink() {
    const payload = collectPayload();
    localStorage.setItem(HABITS_KEY, JSON.stringify(
        Object.fromEntries(
            Array.from(checkboxes).map(checkbox => [
                getCheckboxKey(checkbox),
                checkbox.checked
            ])
        )
    ));
    localStorage.setItem(TEXT_KEY, JSON.stringify(payload.t));
    localStorage.setItem(UPDATED_KEY, String(payload.u));

    const code = encodeSyncCode(payload);
    if (syncCodeInput) {
        syncCodeInput.value = code;
    }

    const link = buildPhoneLink(code);
    history.replaceState(null, "", `#h=${code}`);

    try {
        await copyText(link);
        setSyncStatus("Phone link copied. Open it on your phone now.");
    } catch (error) {
        if (syncCodeInput) {
            syncCodeInput.focus();
            syncCodeInput.select();
        }
        setSyncStatus("Copy blocked. Long-press the code below, copy it, then use Apply on your phone.");
    }
}


function applySyncCodeFromInput() {
    try {
        const raw = (syncCodeInput?.value || "").trim();
        if (!raw) {
            setSyncStatus("Paste a sync code first.");
            return;
        }

        // Allow pasting a full link too
        let code = raw;
        if (raw.includes("#h=")) {
            code = raw.split("#h=")[1];
        } else if (raw.includes("?h=")) {
            code = raw.split("?h=")[1].split("&")[0];
        }

        const payload = decodeSyncCode(code);
        applyPayload(payload);
        setSyncStatus("Checks applied on this device.");
    } catch (error) {
        setSyncStatus("Could not read that code. Copy the phone link again.");
    }
}


/* -------------------------
   MAIN PROGRESS
------------------------- */

function updateProgress() {

    let completed = 0;


    checkboxes.forEach(checkbox => {

        if (checkbox.checked) {

            completed++;

        }

    });


    const total =
        checkboxes.length;


    const progress =
        total === 0
            ? 0
            : Math.round(
                (completed / total) * 100
            );


    completedCount.textContent =
        completed;


    totalCount.textContent =
        total;


    percentage.textContent =
        `${progress}%`;


    weeklyPercent.textContent =
        `${progress}%`;


    progressFill.style.width =
        `${progress}%`;


    updateRows();

    updateDailyScores();

}


/* -------------------------
   COMPLETED HABIT ROWS
------------------------- */

function updateRows() {

    const rows =
        document.querySelectorAll(
            ".habit-row:not(.habit-header)"
        );


    rows.forEach(row => {

        const rowCheckboxes =
            row.querySelectorAll(
                ".habit-check"
            );

        if (!rowCheckboxes.length) {
            return;
        }


        let completed = 0;


        rowCheckboxes.forEach(
            checkbox => {

                if (checkbox.checked) {

                    completed++;

                }

            }
        );


        if (
            completed ===
            rowCheckboxes.length
        ) {

            row.classList.add(
                "completed"
            );

        } else {

            row.classList.remove(
                "completed"
            );

        }

    });

}


/* -------------------------
   DAILY SCORES
------------------------- */

function updateDailyScores() {

    days.forEach(day => {

        const dayCheckboxes =
            document.querySelectorAll(
                `.habit-check[data-day="${day}"]`
            );


        let completed = 0;


        dayCheckboxes.forEach(
            checkbox => {

                if (checkbox.checked) {

                    completed++;

                }

            }
        );


        const score =
            document.getElementById(
                `score-${day}`
            );


        score.textContent =
            `${completed} / ${dayCheckboxes.length}`;

    });

}


/* -------------------------
   SAVE TEXT
------------------------- */

function saveTextInputs() {

    const textData = getTextData();


    localStorage.setItem(
        TEXT_KEY,
        JSON.stringify(textData)
    );

    localStorage.setItem(UPDATED_KEY, String(Date.now()));
    refreshSyncCodeField();

}


/* -------------------------
   LOAD TEXT
------------------------- */

function loadTextInputs() {

    const saved =
        JSON.parse(
            localStorage.getItem(
                TEXT_KEY
            )
        );


    if (!saved) {
        return;
    }

    setTextData(saved);

}


/* -------------------------
   CHECKBOX EVENTS
------------------------- */

checkboxes.forEach(checkbox => {

    checkbox.addEventListener(
        "change",
        () => {

            saveHabits();

            updateProgress();

        }
    );

});


/* -------------------------
   TEXT EVENTS
------------------------- */

const textInputs = [

    weekName,
    codingTopic,
    codingProject,
    codingFeature,
    biggestWin,
    learned,
    slowedDown,
    bestHabit,
    improveHabit,
    nextGoal

];


textInputs.forEach(input => {

    input.addEventListener(
        "input",
        saveTextInputs
    );

});


syncSaveButton?.addEventListener("click", () => {
    copyPhoneLink();
});

syncApplyButton?.addEventListener("click", () => {
    applySyncCodeFromInput();
});


/* -------------------------
   RESET
------------------------- */

resetButton.addEventListener(
    "click",
    () => {

        const confirmReset =
            confirm(
                "Are you sure you want to reset the entire week?"
            );


        if (!confirmReset) {

            return;

        }


        checkboxes.forEach(
            checkbox => {

                checkbox.checked =
                    false;

            }
        );


        textInputs.forEach(
            input => {

                input.value = "";

            }
        );


        localStorage.removeItem(
            HABITS_KEY
        );


        localStorage.removeItem(
            TEXT_KEY
        );

        localStorage.removeItem(UPDATED_KEY);


        updateProgress();
        refreshSyncCodeField();
        setSyncStatus("Week reset on this device.");

    }
);


/* -------------------------
   START APP
------------------------- */

function startTracker() {

    loadHabits();
    loadTextInputs();
    updateProgress();
    refreshSyncCodeField();

    const code = getCodeFromLocation();
    if (code) {
        try {
            const payload = decodeSyncCode(code);
            applyPayload(payload);
            setSyncStatus("Loaded checks from phone link.");
        } catch (error) {
            setSyncStatus("That phone link is invalid. Copy a new one from your computer.");
        }
    } else {
        setSyncStatus("Tap Copy phone link, then open it on your phone.");
    }

}


startTracker();
