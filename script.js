function reverseStr(str){
 
    var ListOfChars = str.split('');
    var reverseListOfChars = ListOfChars.reverse();
    var reversedStr = reverseListOfChars.join('');
    return reversedStr;

    // return str.split('').reverse().join('');

}

function ispalindrome(str){
     
  var reverse = reverseStr(str);
  return str === reverse
  
}

function convertDateToStr(date){

    var dateStr = { day:'', month:'', year:'' };

    if(date.day < 10){
        dateStr.day = '0' + date.day;
    }
    else {
        dateStr.day = date.day.toString();
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

var date = {
    date: 2, month : 11, year:2020
}

console.log(getAllDateFormats(date));


// var date = { day:15, month:10, year:2020}

// console.log(ispalindrome('242'));

// console.log(ispalindrome('oppo'));

// console.log(ispalindrome('121'));

console.log(convertDatetoStr(date));