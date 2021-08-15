function reverseString(string){
    return (string.split("").reverse().join(""));
}

function checkPalindrome(string){
    var reversedString = reverseString(string);
    return (reversedString == string);
}

function convertDateToString(date){
    convertedDate ={day:"",month:"",year:""}
    if (date.day <10){
        convertedDate.day = "0" + date.day;
    }
    else{
        convertedDate.day = String(date.day);
    }

    if (date.month <10){
        convertedDate.month = "0" + date.month;
    }
    else{
        convertedDate.month = String(date.month);
    }

    convertedDate.year = String(date.year);

    return(convertDateToString);

}

function dateVariations(date){
    
    ddmmyyyy : date.day + date.month + date.year;
    mmddyyyy : date.month + date.day + date.year;
    yyyymmdd : date.year + date.month + date.day;
    ddmmyy : date.day + date.month + date.year.slice(-2);
    mmddyy : date.month + date.date + date.year.slice(-2);
    yymmdd : date.year.slice(-2) + date.month + date.day;

    return [ddmmyy,mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];

}

function checkPalindrome(allDateFormats){
    flag=false;
    for (let i=0;i<6;i++){
        if (checkPalindrome(allDateFormats[i])){
            flag=true;
            break;
        }

    }
    return flag;
}

function isLeapYear(year){

    if(year%400 === 0){
        return true;
    }

    if(year % 100 === 0){
        return false;
    }

    if (year % 4 === 0){
        return true;
    }
    return false;
}

function getNextDate (date) {

    var day = date.date +1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month===2){
        if (isLeapYear(year)){
            if(day>29){
                day =1;
                month =3;
            }
        }else{
            if(day>28){
                day=1;
                month=3;
            }
        }
    }
    else{
        if(day>daysInMonth[month-1]){
            day=1;
            month++;
        }
    }

    if(month>12){
        month=1;
        year++;
    }

    return{
        day:day,
        month:month,
        year:year
    }
}

function getNextPallindromeDate(date){

    var nextDate = getNextDate(date);
    var counter = 0;

    while (1){
        counter++;
        var dateString = convertDateToString(date);
        var dateFormats = allDateFormats(dateString);

        for(let i =0; i<6; i++){
            if(dateFormats[i])
        }
    }
}