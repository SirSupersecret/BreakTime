var dates = [
    new Date('October 27, 2020'),
    new Date('December 24, 2020'),
    new Date('Febuary 15, 2021'),
    new Date('March 27, 2021'),
    new Date('May 22, 2021'),
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

function getDaysTillHoliday(){
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
    document.getElementById("Counter").innerHTML = daysTillHoliday.toString();    
}

function datediff(date1, date2) {
    var Difference_In_Time = date2.getTime() - date1.getTime(); 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);  
    return Math.round(Difference_In_Days)
}