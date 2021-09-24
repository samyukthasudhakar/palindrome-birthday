function reverseString(string){
    return (string.split("").reverse().join(""));
}

function checkPalindrome(string){
    
    var reversedString = reverseString(string);
    return string === reversedString;
}

function convertDateToString(date){
    convertedDate ={day:"",month:"",year:""}
    if (date.day < 10){
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

    return(convertedDate);

}

function dateVariations(date){
    
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yymmdd = date.year.slice(-2) + date.month + date.day;
    if(date.day[0]==0){
        var dmmyy = date.day[1] + date.month + date.year;
    }
    if(date.month[0]==0){
        var ddmyy = date.day + date.month[1] + date.year;
    }
    if(date.day[0]==0 && date.month[0]==0){
        var dmyy = date.day[1] + date.month[1] + date.year.slice(-2);
        var dmyyyy = date.day[1] + date.month[1] + date.year
    } 
    
    return [ddmmyyyy,ddmmyy,mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd,dmmyy,ddmyy,dmyy,dmyyyy];

}

function checkPalindromeForAllDates(allDateFormats){
    let flag=false;
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

    var day = Number(date.day) + 1;
    var month = Number(date.month);
    var year = Number(date.year);

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

    return convertDateToString({
        day:day,
        month:month,
        year:year
    });
}

function getNextPallindromeDate(date){

    var nextDate = getNextDate(date);
    var counter = 0;

    while (1){
        counter++;
        var dts = convertDateToString(nextDate)
        var result = checkPalindromeForAllDates(dateVariations(dts))
        
        if(result){
    
            var nextPalindrome = convertDateToString(nextDate);
            nextPalindrome = nextPalindrome.day + "-" +nextPalindrome.month + "-" + nextPalindrome.year
            return ([counter, nextPalindrome ]);
        }
        else{
            nextDate = getNextDate(nextDate);
        }
    }
}


function dateToObject(date){
    dateObject = {
        day:0,month:0,year:0
    }

    var splitDate = date.split("-").reverse();
   
    dateObject.day = splitDate[0];
    dateObject.month = splitDate[1];
    dateObject.year = splitDate[2];

    return dateObject;

}


const birthDate = document.querySelector("#birthdate");
const check = document.querySelector("#check");
const alert = document.querySelector("#alert");
const result = document.querySelector("#result");
const loading = document.querySelector("#loading");



function processing(){
    dob = birthDate.value;
    dateObject = dateToObject(dob);
    var flag = checkPalindromeForAllDates(dateVariations(dateObject));
    alert.innerText="";
    if(flag){
        result.innerText = "Yayy it is a palindrome date 🥳";
    }
    else{
        var result1 = getNextPallindromeDate(dateObject);
        result.innerText = "The next palindrome date is " + result1[1] +" ,you missed it by " + String (result1[0] + " days 😦");
    }
    result.style.display="block";
}

function hide(){
    loading.style.display="none";
    result.innerText="";
    processing();
}

function checkFoPalindrome(){

    if(birthDate.value!=""){
        result.style.display="none";
        loading.style.display="block";
        setTimeout(hide,3000);
        alert.innerText="Calculations being done on full speed 🤯"
    }else{
        alert.innerText="Please pick a date 👆🏽"
    }
    

}

check.addEventListener("click",checkFoPalindrome);
