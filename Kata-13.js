const talkingCalendar = function(date) {
  let dateArray = date.split('/');
  let month = convertMonth(dateArray[1]);
  let day = convertDay(dateArray[2]);
  let year = dateArray[0];
  return month + ' ' + day + ', ' + year;

  function convertMonth(month) {
    if (month === '01') {
      return "January"
    } else if (month === '02') {
      return "February"
    } else if (month === '03') {
      return "March"
    } else if (month === '04') {
      return "April"
    } else if (month === '05') {
      return "May"
    } else if (month === '06') {
      return "June"
    } else if (month === '07') {
      return "July"
    } else if (month === '08') {
      return "August"
    } else if (month === '09') {
      return "September"
    }else if (month === '10') {
      return "October"
    }else if (month === '11') {
      return "November"
    }else if (month === '12') {
      return "December"
    }
  };

  function convertDay(day) {
    if (day == 1 || day == 21 || day == 31) {
      return parseInt(day) + 'st';
    } else if (day == 2 || day == 22) {
      return parseInt(day) + 'nd';
    } else if (day == 3 || day == 23) {
      return parseInt(day) + 'rd';
    } else {
      return parseInt(day) + 'th';
    }
  }
};

console.log(talkingCalendar("2017/12/01"));
console.log(talkingCalendar("20007/02/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1987/01/03"));