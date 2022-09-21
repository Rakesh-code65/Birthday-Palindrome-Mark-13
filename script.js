var dateInputRef = document.querySelector('#bday-input');
var showBtnRef = document.querySelector('#Show-btn');
var resultRef = document.querySelector('#result');

function reverseStr(str){
 
    var ListOfChars = str.split('');
    var reverseListOfChars = ListOfChars.reverse();
    var reversedStr = reverseListOfChars.join('');
    return reversedStr;

    // return str.split('').reverse().join('');

}

function isPalindrome(str){
     
  var reverse = reverseStr(str);
  return str === reverse
  
}

function convertDateToStr(date){

    var dateStr = { day:'', month:'', year:'' };

    if(date.day < 10){
        dateStr.day = '0' + date.day;
    }
    else {
        dateStr.day = date.day;
    }
    
    if(date.month < 10){
        dateStr.month = '0' + date.month;
    }
    else {
        dateStr.month = date.month.toString();
    }
     dateStr.year = date.year.toString();

     return dateStr;

}


function getAllDateFormats(date){
    var dateStr = convertDateToStr(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.date;

    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);

    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

     return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];

}

function checkPalindromeForAllDateFormats(date){

    var listOfPalindrome = getAllDateFormats(date);

    var flag = false;

    for(var i=0; i<listOfPalindrome.length; i++){
        if(isPalindrome(listOfPalindrome[i])){
            flag = true;
            break;
        }
    }
    return flag;

}

function isleapYear(year){
    if(year%400 === 0){
        return true;
    }
    if(year % 100 === 0){
        return false;
    }
    if(year % 4 === 0){
        return true;
    }
    return false;
}

function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

var daysInMonth = [ 31,28,31,30,31,30,31,31,30,31,30,31 ];

if(month === 2){
    if(isleapYear(year)){  //helper function
        if(day>29){
            day = 1;
            month++;
        }
    }

    else {
        if(day>28){
            day=1;
            month++;
        }
    }
}
   else 
   {
   if(day >daysInMonth[month-1]){
        day = 1;
        month++;
    }
  }
  if(month > 12){
    month = 1;
    year++;
  }
     return { day: day ,
        month: month,
        year: year,
    };
}        

function getNextPalindromeDate(date){
     var ctr = 0;
     var nextDate = getNextDate(date);

     while(1){
        ctr++;
        var isPalindrome = checkPalindromeForAllDateFormats(nextDate);

        if(isPalindrome){
            break;
        }
        nextDate = getNextDate(nextDate);
   
     }
      return[ctr, nextDate];
}


showBtnRef.addEventListener('click', clickHandler);

function clickHandler(e){
    // console.log(dateInputRef.value);
    var bdayStr = dateInputRef.value;

    if( bdayStr! == ''){
        var listOfDate = bdayStr.Split('-');
        var Date = {
            day:listOfDate(2),
            month:listOfDate(1),
            year:listOfDate(0)
        }
        var isPalindrome = checkPalindromeForAllDateFormats(date);
        if(isPalindrome){
            resultRef.innerText = 'YaY! your birthday is a palindrome '
        }
    } else {
        var[ctr,nextDate] = getNextPalindromeDate(date);
        resultRef.innerText = 'The Next palindrome is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed iy by ${ctr}day !' ;
    }
}
        console.log(date);
    }
}



var date = {
    day: 8, month : 8, year: 2021
}



console.log(getNextPalindromeDate(date));
console.log(getNextDate(date));
// console.log(getNextDate(date));
console.log(isleapYear(2021));
console.log(checkPalindromeForAllDateFormats(date));
console.log(getAllDateFormats(date));


// var date = { day:15, month:10, year:2020}

// console.log(ispalindrome('242'));

// console.log(ispalindrome('oppo'));

// console.log(ispalindrome('121'));

// console.log(convertDateToStr(date));