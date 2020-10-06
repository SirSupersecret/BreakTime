var dates = [
    new Date('October 26, 2020'),
    new Date('December 7, 2020'),
    new Date('December 24, 2020'),
    new Date('Febuary 15, 2021'),
    new Date('March 27, 2021'),
    new Date('May 14, 2021'),
    new Date('May 22, 2021'),
    new Date('June 4, 2021'),
    new Date('July 10, 2021'),
    new Date('October 27, 2021'),
    new Date('December 24, 2021'),
    new Date('Febuary 21, 2022'),
    new Date('April 9, 2022'),
    new Date('June 4, 2022'),
    new Date('July 9, 2022'),
    new Date('October 27, 2022'),
    new Date('December 24, 2022')
]

var theDate = new Date('October 7, 2020')

var randomText = [
    "CONFUSION",
    "???",
    "GUESS",
    "DIMENSION",
    "FOCUS",
    "REALITY",
    "BRAINDEAD",
    "ABSTRACT",
    "PIE",
    "WHY?",
    "HOW?",
    "WHAT?",
    "UNDERSTAND",
    "RANDOM",
    "TIME",
    "UNDEFINED"
]

function load(){
    console.log("yay")

    setSidenote();
    countDaysInt();
    countDaysBinary();
    countDaysHex();
    pickRandomLine();
    
}

function setSidenote(){
    var today = new Date(new Date().toDateString())
    if(today.toString() == theDate.toString()){
        document.getElementById("sidenote").innerHTML = "Don't vote for HER"
        document.getElementById("counterInt").style.animationPlayState = "running"
    }
}

function countDaysInt(){
    
    document.getElementById("counterInt").innerHTML = getDays().toString();
}

function countDaysHex(){
    
    document.getElementById("counterHex").innerHTML = getDays().toString(16);    
}

function countDaysBinary(){
    
    document.getElementById("counterBinary").innerHTML = getDays().toString(2);    
}

function getDays(){
    var today = new Date()
    var found = false;
    var daysTillHoliday = 9999999999

    dates.forEach(element => {
        if(!found){
            c = datediff(today, element)
            console.log(c)
            if(c >= 0){
                found = true
                daysTillHoliday = c;
            }
        }
    });
    return daysTillHoliday;
}

function pickRandomLine(){

    // pick a random number between 1 and 10
    var r0 = Math.floor(Math.random() * (randomText.length))
    console.log(r0)
    document.getElementById("justSomeText0").innerHTML = randomText[r0]
}

function datediff(date1, date2) {
    var Difference_In_Time = date2.getTime() - date1.getTime(); 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);  
    return Math.floor(Difference_In_Days)
}