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

const syncCopyCodeButton =
    document.getElementById("syncCopyCodeButton");

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
const PASTE_BASE = "https://paste.rs";


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


function collectPayload() {
    const habits = {};

    checkboxes.forEach(checkbox => {
        habits[getCheckboxKey(checkbox)] = checkbox.checked;
    });

    return {
        updatedAt: Date.now(),
        habits,
        text: {
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
        }
    };
}


function applyPayload(payload) {
    if (!payload || typeof payload !== "object") return false;

    if (payload.habits && typeof payload.habits === "object") {
        checkboxes.forEach(checkbox => {
            const key = getCheckboxKey(checkbox);
            checkbox.checked = Boolean(payload.habits[key]);
        });
        localStorage.setItem(HABITS_KEY, JSON.stringify(payload.habits));
    }

    if (payload.text && typeof payload.text === "object") {
        weekName.value = payload.text.weekName || "";
        codingTopic.value = payload.text.codingTopic || "";
        codingProject.value = payload.text.codingProject || "";
        codingFeature.value = payload.text.codingFeature || "";
        biggestWin.value = payload.text.biggestWin || "";
        learned.value = payload.text.learned || "";
        slowedDown.value = payload.text.slowedDown || "";
        bestHabit.value = payload.text.bestHabit || "";
        improveHabit.value = payload.text.improveHabit || "";
        nextGoal.value = payload.text.nextGoal || "";
        localStorage.setItem(TEXT_KEY, JSON.stringify(payload.text));
    }

    if (payload.updatedAt) {
        localStorage.setItem(UPDATED_KEY, String(payload.updatedAt));
    }

    updateProgress();
    refreshSyncCodeField();
    return true;
}


function encodeSyncCode(payload) {
    const json = JSON.stringify(payload);
    return btoa(unescape(encodeURIComponent(json)));
}


function decodeSyncCode(code) {
    const cleaned = String(code || "").trim().replace(/\s+/g, "");
    if (!cleaned) {
        throw new Error("Empty sync code");
    }

    const json = decodeURIComponent(escape(atob(cleaned)));
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
        return;
    }

    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
}


function getPasteIdFromLocation() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("paste")) return params.get("paste");

    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return "";

    if (hash.startsWith("paste=")) {
        return decodeURIComponent(hash.slice(6));
    }

    const hashParams = new URLSearchParams(hash);
    return hashParams.get("paste") || "";
}


function buildShareLink(pasteId) {
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = `paste=${pasteId}`;
    return url.toString();
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
   CLOUD / SHARE SYNC
------------------------- */

async function createShareLink() {
    const payload = collectPayload();
    localStorage.setItem(HABITS_KEY, JSON.stringify(payload.habits));
    localStorage.setItem(TEXT_KEY, JSON.stringify(payload.text));
    localStorage.setItem(UPDATED_KEY, String(payload.updatedAt));
    refreshSyncCodeField();

    setSyncStatus("Creating sync link...");

    const response = await fetch(PASTE_BASE, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain; charset=utf-8"
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error("Share service unavailable");
    }

    const pasteUrl = (await response.text()).trim();
    const pasteId = pasteUrl.split("/").filter(Boolean).pop();

    if (!pasteId) {
        throw new Error("Missing paste id");
    }

    const shareLink = buildShareLink(pasteId);
    await copyText(shareLink);
    history.replaceState(null, "", `#paste=${pasteId}`);
    setSyncStatus("Sync link copied. Open it on your phone.");
    return shareLink;
}


async function loadFromPasteId(pasteId) {
    if (!pasteId) return false;

    setSyncStatus("Loading checks from sync link...");

    const response = await fetch(`${PASTE_BASE}/${pasteId}`, {
        cache: "no-store"
    });

    if (!response.ok) {
        throw new Error("Could not load sync link");
    }

    const payload = await response.json();
    applyPayload(payload);
    setSyncStatus("Loaded checks from sync link.");
    return true;
}


function applySyncCodeFromInput() {
    try {
        const payload = decodeSyncCode(syncCodeInput.value);
        applyPayload(payload);
        setSyncStatus("Applied sync code on this device.");
    } catch (error) {
        setSyncStatus("That sync code looks invalid.");
    }
}


async function copySyncCode() {
    const code = encodeSyncCode(collectPayload());
    if (syncCodeInput) {
        syncCodeInput.value = code;
    }
    await copyText(code);
    setSyncStatus("Sync code copied. Paste it on your phone and tap Apply code.");
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

    const textData = {

        weekName:
            weekName.value,

        codingTopic:
            codingTopic.value,

        codingProject:
            codingProject.value,

        codingFeature:
            codingFeature.value,

        biggestWin:
            biggestWin.value,

        learned:
            learned.value,

        slowedDown:
            slowedDown.value,

        bestHabit:
            bestHabit.value,

        improveHabit:
            improveHabit.value,

        nextGoal:
            nextGoal.value

    };


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


    weekName.value =
        saved.weekName || "";


    codingTopic.value =
        saved.codingTopic || "";


    codingProject.value =
        saved.codingProject || "";


    codingFeature.value =
        saved.codingFeature || "";


    biggestWin.value =
        saved.biggestWin || "";


    learned.value =
        saved.learned || "";


    slowedDown.value =
        saved.slowedDown || "";


    bestHabit.value =
        saved.bestHabit || "";


    improveHabit.value =
        saved.improveHabit || "";


    nextGoal.value =
        saved.nextGoal || "";

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
    createShareLink()
        .catch(async () => {
            try {
                await copySyncCode();
                setSyncStatus("Link sync unavailable. Sync code copied instead — paste it on your phone.");
            } catch (error) {
                setSyncStatus("Sync failed. Try Copy sync code.");
            }
        });
});

syncCopyCodeButton?.addEventListener("click", () => {
    copySyncCode().catch(() => {
        setSyncStatus("Could not copy. Select the code and copy manually.");
    });
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

async function startTracker() {

    loadHabits();

    loadTextInputs();

    updateProgress();
    refreshSyncCodeField();

    const pasteId = getPasteIdFromLocation();
    if (pasteId) {
        try {
            await loadFromPasteId(pasteId);
        } catch (error) {
            setSyncStatus("Could not load that sync link. Try Copy sync code instead.");
        }
    } else {
        setSyncStatus("Tap Copy sync link, then open it on your phone.");
    }

}


startTracker();
