let goalsArray = {
    "11/21/2020": [
        {
            "goal": "Check-in",
            "incrementer": 1,
            "dailyTotal": 1,
            "achieved": 0,
        }
    ]
}

function addGoal(goalTitle, incrementer, dailyTotal, achieved, date) {
    let dayGoal = {
        "goal": goalTitle,
        "incrementer": incrementer,
        "dailyTotal": dailyTotal,
        "achieved": achieved,
    }

    let dayAndDayGoal = {
        date : [
            {
                "goal": goalTitle,
                "incrementer": incrementer,
                "dailyTotal": dailyTotal,
                "achieved": achieved,
            }
        ]
    }

    if(goalsArray[date]){
        currentGoalArray = goalsArray[date]
        currentGoalArray.push(dayGoal)
    } else {
        currentGoalArray = goalsArray
        currentGoalArray.push(dayAndDayGoal)
    }
}

function addGoalPopup() {
    var incrementerValue, goalTitleValue, dailyTotalValue, date;

    var background      = document.createElement("div");
    background.style    = "background:#fff; color:#000";

    var goalTitle   = document.createElement("input");
    goalTitle.style = "width:100%"
    goalTitle.id    = "goalTitleValue";
    background.append(goalTitle);

    var dailyTotalValue = document.createElement("input");
    dailyTotalValue.style = "width:100%";
    dailyTotalValue.id  = "dailyTotalValue";
    background.append(dailyTotalValue);

    var incrementer = document.createElement("input");
    incrementer.style = "width:100%;";
    incrementer.id  = "incrementerValue";
    background.append(incrementer);

    goalTitleValue      = goalTitle.value;
    dailyTotalValue     = dailyTotalValue.value;
    incrementerValue    = incrementer.value;
    date                = getDay();

    var completeBtn     = document.createElement("button");
    completeBtn.textContent = "Add Goal"
    completeBtn.onclick = "addGoal(" + goalTitleValue +", " + incrementerValue + ", " + dailyTotalValue + ", " + 0 + ", " + date +")";
    background.append(completeBtn);


    document.getElementById("commonPopup").append(background)
    
}

function getDay() {
    var today   = new Date();
    var dd      = String(today.getDate()).padStart(2, '0');
    var mm      = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy    = today.getFullYear();

    today       = mm + '/' + dd + '/' + yyyy;
    return today;
}