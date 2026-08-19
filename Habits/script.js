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
        "weeklyHabits",
        JSON.stringify(habits)
    );

}


/* -------------------------
   LOAD CHECKBOXES
------------------------- */

function loadHabits() {

    const savedHabits =
        JSON.parse(
            localStorage.getItem(
                "weeklyHabits"
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
        "habitTrackerText",
        JSON.stringify(textData)
    );

}


/* -------------------------
   LOAD TEXT
------------------------- */

function loadTextInputs() {

    const saved =
        JSON.parse(
            localStorage.getItem(
                "habitTrackerText"
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
            "weeklyHabits"
        );


        localStorage.removeItem(
            "habitTrackerText"
        );


        updateProgress();

    }
);


/* -------------------------
   START APP
------------------------- */

function startTracker() {

    loadHabits();

    loadTextInputs();

    updateProgress();

}


startTracker();