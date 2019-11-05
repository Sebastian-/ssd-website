let schedule = [
  {"date":"Sep 9","topic":"Orientation","staff":"Phil / Marlene"},
  {"date":"Sep 10","topic":"Orientation - Day 2","staff":"Phil / Marlene"},
  {"date":"Sep 11","topic":"HTML5/CSS3","staff":"Michael"},
  {"date":"Sep 12","topic":"System Analysis & Design","staff":"Phil"},
  {"date":"Sep 13","topic":"HTML5/CSS3","staff":"Michael"},
  {"date":"Sep 16","topic":"Javascript","staff":"Jason"},
  {"date":"Sep 17","topic":"System Analysis & Design","staff":"Phil"},
  {"date":"Sep 18","topic":"Relational Databases","staff":"Phil"},
  {"date":"Sep 19","topic":"System Analysis & Design","staff":"Phil"},
  {"date":"Sep 20","topic":"HTML5/CSS3","staff":"Michael"},
  {"date":"Sep 23","topic":"Javascript","staff":"Jason"},
  {"date":"Sep 24","topic":"Relational Databases","staff":"Phil"},
  {"date":"Sep 25","topic":"HTML5/CSS3","staff":"Michael"},
  {"date":"Sep 26","topic":"System Analysis & Design","staff":"Phil"},
  {"date":"Sep 27","topic":"HTML5/CSS3","staff":"Michael"},
  {"date":"Sep 30","topic":"Javascript","staff":"Jason"},
  {"date":"Oct 1","topic":"Relational Databases","staff":"Phil"},
  {"date":"Oct 2","topic":"HTML5/CSS3","staff":"Michael"},
  {"date":"Oct 3","topic":"System Analysis & Design","staff":"Phil"},
  {"date":"Oct 4","topic":"HTML5/CSS3","staff":"Michael"},
  {"date":"Oct 7","topic":"Relational Databases","staff":"Phil"},
  {"date":"Oct 8","topic":"Relational Databases","staff":"Phil"},
  {"date":"Oct 9","topic":"HTML5/CSS3","staff":"Michael"},
  {"date":"Oct 10","topic":"Relational Databases","staff":"Phil"},
  {"date":"Oct 11","topic":"HTML5/CSS3","staff":"Michael"},
  {"date":"Oct 14","topic":"Thanksgiving Day","staff":""},
  {"date":"Oct 15","topic":"Flex Day","staff":""},
  {"date":"Oct 16","topic":"HTML5/CSS3","staff":"Michael"},
  {"date":"Oct 17","topic":"C# - OOP","staff":"Phil"},
  {"date":"Oct 18","topic":"HTML5/CSS3","staff":"Michael"},
  {"date":"Oct 21","topic":"Javascript","staff":"Jason"},
  {"date":"Oct 22","topic":"PHP","staff":"Jeff"},
  {"date":"Oct 23","topic":"HTML5/CSS3","staff":"Michael"},
  {"date":"Oct 24","topic":"Javascript","staff":"Jason"},
  {"date":"Oct 25","topic":"Frontend Project","staff":"Michael"},
  {"date":"Oct 28","topic":"Javascript","staff":"Jason"},
  {"date":"Oct 29","topic":"PHP","staff":"Jeff"},
  {"date":"Oct 30","topic":"Frontend Project","staff":"Michael"},
  {"date":"Oct 31","topic":"Presentation Skills","staff":"Marlene"},
  {"date":"Nov 1","topic":"Frontend Project","staff":"Michael"},
  {"date":"Nov 4","topic":"C# - OOP","staff":"Phil"},
  {"date":"Nov 5","topic":"PHP","staff":"Jeff"},
  {"date":"Nov 6","topic":"C# - OOP","staff":"Phil"},
  {"date":"Nov 7","topic":"Angular","staff":"Alex"},
  {"date":"Nov 8","topic":"Frontend Project","staff":"Michael"},
  {"date":"Nov 11","topic":"Remembrance Day","staff":""},
  {"date":"Nov 12","topic":"Laravel","staff":"Jason"},
  {"date":"Nov 13","topic":"PHP","staff":"Jeff"},
  {"date":"Nov 14","topic":"Angular","staff":"Alex"},
  {"date":"Nov 15","topic":"C# - OOP","staff":"Phil"},
  {"date":"Nov 18","topic":"Angular","staff":"Alex"},
  {"date":"Nov 19","topic":"Laravel","staff":"Jason"},
  {"date":"Nov 20","topic":"C# - OOP","staff":"Phil"},
  {"date":"Nov 21","topic":"Angular","staff":"Alex"},
  {"date":"Nov 22","topic":"C# - OOP","staff":"Phil"},
  {"date":"Nov 25","topic":".NET Core - MVC","staff":"Phil"},
  {"date":"Nov 26","topic":"Laravel","staff":"Jason"},
  {"date":"Nov 27","topic":".NET Core - MVC","staff":"Phil"},
  {"date":"Nov 28","topic":"React","staff":"Alex"},
  {"date":"Nov 29","topic":"React","staff":"Alex"},
  {"date":"Dec 2","topic":"React","staff":"Alex"},
  {"date":"Dec 3","topic":"Laravel","staff":"Jason"},
  {"date":"Dec 4","topic":".NET Core - MVC","staff":"Phil"},
  {"date":"Dec 5","topic":"React","staff":"Alex"},
  {"date":"Dec 6","topic":".NET Core - MVC","staff":"Phil"},
  {"date":"Dec 9","topic":"Resume Writing Essentials","staff":"Marlene"},
  {"date":"Dec 10","topic":"Laravel","staff":"Jason"},
  {"date":"Dec 11","topic":".NET Core - MVC","staff":"Phil"},
  {"date":"Dec 12","topic":"AWS","staff":"Alex"},
  {"date":"Dec 13","topic":"Portfolio Site Presentation","staff":"Phil"},
  {"date":"Dec 16","topic":"Winter Break","staff":""},
  {"date":"Dec 17","topic":"Winter Break","staff":""},
  {"date":"Dec 18","topic":"Winter Break","staff":""},
  {"date":"Dec 19","topic":"Winter Break","staff":""},
  {"date":"Dec 20","topic":"Winter Break","staff":""},
  {"date":"Dec 23","topic":"Winter Break","staff":""},
  {"date":"Dec 24","topic":"Winter Break","staff":""},
  {"date":"Dec 25","topic":"Winter Break","staff":""},
  {"date":"Dec 26","topic":"Winter Break","staff":""},
  {"date":"Dec 27","topic":"Winter Break","staff":""},
  {"date":"Dec 30","topic":"Winter Break","staff":""},
  {"date":"Dec 31","topic":"Winter Break","staff":""},
  {"date":"Jan 1","topic":"Winter Break","staff":""},
  {"date":"Jan 2","topic":"Winter Break","staff":""},
  {"date":"Jan 3","topic":"Winter Break","staff":""},
  {"date":"Jan 6","topic":"AWS","staff":"Alex"},
  {"date":"Jan 7","topic":"Laravel","staff":"Jason"},
  {"date":"Jan 8","topic":".NET Core Web API","staff":"Phil"},
  {"date":"Jan 9","topic":".NET Core - MVC","staff":"Phil"},
  {"date":"Jan 10","topic":"Web Application Security","staff":"Pat"},
  {"date":"Jan 13","topic":".NET Core - MVC","staff":"Phil"},
  {"date":"Jan 14","topic":"AWS","staff":"Alex"},
  {"date":"Jan 15","topic":".NET Core Web API","staff":"Phil"},
  {"date":"Jan 16","topic":"AWS","staff":"Alex"},
  {"date":"Jan 17","topic":"Web Application Security","staff":"Pat"},
  {"date":"Jan 20","topic":"AWS","staff":"Alex"},
  {"date":"Jan 21","topic":".NET Core - MVC","staff":"Phil"},
  {"date":"Jan 22","topic":".NET Core Web API","staff":"Phil"},
  {"date":"Jan 23","topic":"AWS","staff":"Alex"},
  {"date":"Jan 24","topic":"Web Application Security","staff":"Pat"},
  {"date":"Jan 27","topic":"iOS","staff":"Phil"},
  {"date":"Jan 28","topic":".NET Core Web API","staff":"Phil"},
  {"date":"Jan 29","topic":".NET Core Web API","staff":"Phil"},
  {"date":"Jan 30","topic":"X-Platform Mobile","staff":"Alex"},
  {"date":"Jan 31","topic":"Web Application Security","staff":"Pat"},
  {"date":"Feb 3","topic":"iOS","staff":"Phil"},
  {"date":"Feb 4","topic":"Android","staff":"Phil"},
  {"date":"Feb 5","topic":"Full-Stack JS","staff":"Medhat"},
  {"date":"Feb 6","topic":"X-Platform Mobile","staff":"Alex"},
  {"date":"Feb 7","topic":"Web Application Security","staff":"Pat"},
  {"date":"Feb 10","topic":"iOS","staff":"Phil"},
  {"date":"Feb 11","topic":"Android","staff":"Phil"},
  {"date":"Feb 12","topic":"Full-Stack JS","staff":"Medhat"},
  {"date":"Feb 13","topic":"Flex Day","staff":""},
  {"date":"Feb 14","topic":"X-Platform Mobile","staff":"Alex"},
  {"date":"Feb 17","topic":"Family Day","staff":""},
  {"date":"Feb 18","topic":"Flex Day","staff":""},
  {"date":"Feb 19","topic":"Full-Stack JS","staff":"Medhat"},
  {"date":"Feb 20","topic":"Android","staff":"Phil"},
  {"date":"Feb 21","topic":"Passion Project","staff":"Phil"},
  {"date":"Feb 24","topic":"iOS","staff":"Phil"},
  {"date":"Feb 25","topic":"X-Platform Mobile","staff":"Alex"},
  {"date":"Feb 26","topic":"Full-Stack JS","staff":"Medhat"},
  {"date":"Feb 27","topic":"Android","staff":"Phil"},
  {"date":"Feb 28","topic":"Passion Project","staff":"Phil"},
  {"date":"Mar 2","topic":"iOS","staff":"Phil"},
  {"date":"Mar 3","topic":"X-Platform Mobile","staff":"Alex"},
  {"date":"Mar 4","topic":"Full-Stack JS","staff":"Medhat"},
  {"date":"Mar 5","topic":"Android","staff":"Phil"},
  {"date":"Mar 6","topic":"Passion Project","staff":"Phil"},
  {"date":"Mar 9","topic":"iOS","staff":"Phil"},
  {"date":"Mar 10","topic":"Android","staff":"Phil"},
  {"date":"Mar 11","topic":"Full-Stack JS","staff":"Medhat"},
  {"date":"Mar 12","topic":"Flex Day","staff":""},
  {"date":"Mar 13","topic":"Mobile Project","staff":"Alex"},
  {"date":"Mar 16","topic":"Spring Break","staff":""},
  {"date":"Mar 17","topic":"Spring Break","staff":""},
  {"date":"Mar 18","topic":"Spring Break","staff":""},
  {"date":"Mar 19","topic":"Spring Break","staff":""},
  {"date":"Mar 20","topic":"Spring Break","staff":""},
  {"date":"Mar 23","topic":"Flex Day","staff":""},
  {"date":"Mar 24","topic":"Passion Project (optional Demos)","staff":"Phil"},
  {"date":"Mar 25","topic":"Full-Stack JS","staff":"Medhat"},
  {"date":"Mar 26","topic":"Mobile Project","staff":"Alex"},
  {"date":"Mar 27","topic":"Mobile Project","staff":"Alex"},
  {"date":"Mar 30","topic":"Mobile Project (optional Demos)","staff":"Alex"},
  {"date":"Mar 31","topic":"Final Project","staff":"Phil"},
  {"date":"Apr 1","topic":"Final Project","staff":"Phil"},
  {"date":"Apr 2","topic":"Interview Skills","staff":"Marlene"},
  {"date":"Apr 3","topic":"Final Project","staff":"Phil"},
  {"date":"Apr 6","topic":"Final Project","staff":"Phil"},
  {"date":"Apr 7","topic":"Final Project","staff":"Phil"},
  {"date":"Apr 8","topic":"Final Project (with Demos)","staff":"Phil"},
  {"date":"Apr 9","topic":"Mock Interviews","staff":"Phil/Marlene"},
  {"date":"Apr 10","topic":"Good Friday","staff":""},
  {"date":"Apr 13","topic":"Easter Monday","staff":""},
  {"date":"Apr 14","topic":"Industry Projects","staff":"Phil"},
  {"date":"Apr 15","topic":"Industry Projects","staff":"Phil"},
  {"date":"Apr 16","topic":"Industry Projects","staff":"Phil"},
  {"date":"Apr 17","topic":"Industry Projects","staff":"Phil"},
  {"date":"Apr 20","topic":"Industry Projects","staff":"Phil"},
  {"date":"Apr 21","topic":"Industry Projects","staff":"Phil"},
  {"date":"Apr 22","topic":"Industry Projects","staff":"Phil"},
  {"date":"Apr 23","topic":"Industry Projects","staff":"Phil"},
  {"date":"Apr 24","topic":"Industry Projects","staff":"Phil"},
  {"date":"Apr 27","topic":"Industry Projects","staff":"Phil"},
  {"date":"Apr 28","topic":"Industry Projects","staff":"Phil"},
  {"date":"Apr 29","topic":"Industry Projects","staff":"Phil"},
  {"date":"Apr 30","topic":"Industry Projects","staff":"Phil"},
  {"date":"May 1","topic":"Industry Projects","staff":"Phil"},
  {"date":"May 4","topic":"Industry Projects","staff":"Phil"},
  {"date":"May 5","topic":"Industry Projects","staff":"Phil"},
  {"date":"May 6","topic":"Industry Projects","staff":"Phil"},
  {"date":"May 7","topic":"Industry Projects","staff":"Phil"},
  {"date":"May 8","topic":"Demo Day","staff":"Phil"}
];

/* TODO;
    add css classes to days off
*/

$(function() {
  const $CALENDAR_CONTAINER = $('#schedule-container');
  schedule.forEach(addCalendarEntry);
  
  function addCalendarEntry({date, topic, staff}) {
    let month = getFormattedMonth(date);
    let monthArticle = getMonthArticle(month);
    let entry = createArticleEntry(date, topic, staff);
    monthArticle.append(entry);
  }
  
  function getMonthArticle(month) {
    if ($(`.${month}`).length) {
      return $(`.${month}`).first();
    }
  
    let newMonthArticle = $(monthArticle(month));
    $CALENDAR_CONTAINER.append(newMonthArticle);
    return newMonthArticle;
  }
  
  function monthArticle(month) {
    return `<article class="month ${month}">
      <h2>${month}</h2>
      <h3 class="monday weekday-heading">Monday</h3>
      <h3 class="tuesday weekday-heading">Tuesday</h3>
      <h3 class="wednesday weekday-heading">Wednesday</h3>
      <h3 class="thursday weekday-heading">Thursday</h3>
      <h3 class="friday weekday-heading">Friday</h3>
    </article>`;
  }
  
  function createArticleEntry(date, topic, staff) {
    return `<article class="day week-${weekIndex(date)} ${weekday(date)} ${isToday(date) ? "today" : ""}">
      <h3>${formatDate(date)}</h3>
      <p class="weekday">${weekday(date)}</p>
      <p class="topic">${topic}</p>
      <p class="staff">${staff}</p>
    </article>`;
  }

  function isToday(date) {
    let today = new Date();
    let dateObj = getDateObj(date);
    return today.getDate() == dateObj.getDate() 
        && today.getYear() == dateObj.getYear() 
        && today.getMonth() == dateObj.getMonth();
  }

  function formatDate(date) {
    let day = getDay(date);
    let month = getFormattedMonth(date);
    let year = getYear(date);

    return `${month} ${day}, ${year}`;
  }

  function weekday(date) {
    let dateObj = getDateObj(date);
    let weekdays = ["sunday", "monday", "tuesday","wednesday", "thursday", "friday", "saturday"];

    return weekdays[dateObj.getDay()];
  }

  function weekIndex(date) {
    let dateObj = getDateObj(date);
    return getWeekOfMonth(dateObj);
  }

  function getWeekOfMonth(date) {
    const startWeekDayIndex = 0; // 1 MonthDay 0 Sundays
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDay = firstDate.getDay();
  
    let weekNumber = Math.ceil((date.getDate() + firstDay) / 7);
    if (startWeekDayIndex === 1) {
      if (date.getDay() === 0 && date.getDate() > 1) {
        weekNumber -= 1;
      }
  
      if (firstDate.getDate() === 1 && firstDay === 0 && date.getDate() > 1) {
        weekNumber += 1;
      }
    }
    return weekNumber;
  }

  function getDateObj(date) {
    let month = getMonthIndex(date);
    let day = getDay(date);
    let year = getYear(date);
    let dateObj = new Date(year, month, day);

    return dateObj;
  }

  function getYear(date) {
    let month = getFormattedMonth(date);
    let monthYearMap = {
      "september": 2019,
      "october": 2019,
      "november": 2019,
      "december": 2019,
      "january": 2020,
      "february": 2020,
      "march": 2020,
      "april": 2020,
      "may": 2020,
      "june": 2020,
      "july": 2020,
      "august": 2020
    }

    return monthYearMap[month];
  }

  function getDay(date) {
    return parseInt(date.split(' ')[1]);
  }

  function getMonthIndex(date) {
    let month = getFormattedMonth(date);
    let monthIndexMap = {
      "september": 8,
      "october": 9,
      "november": 10,
      "december": 11,
      "january": 0,
      "february": 1,
      "march": 2,
      "april": 3,
      "may": 4,
      "june": 5,
      "july": 6,
      "august": 7
    }

    return monthIndexMap[month];
  }

  function getFormattedMonth(date) {
    return fullMonth(date.split(' ')[0].toLowerCase());
  }
  
  function fullMonth(month) {
    let monthMap = {
      "sep": "september",
      "oct": "october",
      "nov": "november",
      "dec": "december",
      "jan": "january",
      "feb": "february",
      "mar": "march",
      "apr": "april",
      "may": "may",
      "jun": "june",
      "jul": "july",
      "aug": "august"
    };
  
    return monthMap[month];
  }
});