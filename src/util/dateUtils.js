const dayAbbr = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec'];
const monthFullList = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

function isBeforeDate(d1, d2) {
  return d1.getTime() < d2.getTime();
}

function isAfterDate(d1, d2) {
  return d1.getTime() > d2.getTime();
}

function isBetweenDates(dateToCheck, startDate, endDate) {
  return (!(isBeforeDate(dateToCheck, startDate)) &&
          !(isAfterDate(dateToCheck, endDate)));
}

function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function getDaysInMonth(d) {
  const resultDate = getFirstDayOfMonth(d);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
}

function getWeekArray(d, firstDayOfWeek) {
  const dayArray = [];
  const daysInMonth = getDaysInMonth(d);
  let week = [];

  for (let i = 1; i <= daysInMonth; i++) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i));
  }

  const fillEmptyDays = (thisWeek, weekArrayLength) => {
    const emptyDays = 7 - week.length;

    for (let i = 0; i < emptyDays; ++i) {
      if (weekArrayLength) {
        thisWeek.push(null);
      } else {
        thisWeek.unshift(null);
      }
    }

    return thisWeek;
  };

  return dayArray.reduce((weekArray, day) => {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      weekArray.push(
        fillEmptyDays(week, weekArray.length)
      );
      week = [];
    }

    week.push(day);

    if (dayArray.indexOf(day) === dayArray.length - 1) {
      weekArray.push(
        fillEmptyDays(week, weekArray.length)
      );
    }

    return weekArray;
  }, []);
}

function getYearsArray(
  minYear = new Date().getFullYear() - 100,
  maxYear = new Date().getFullYear() + 100
) {
  const yearsArray = [];

  for (let year = minYear; year <= maxYear; year++) {
    yearsArray.push(year);
  }

  return yearsArray;
}

export default {
  getFirstDayOfMonth,
  getDaysInMonth,
  getWeekArray,
  dayAbbr,
  dayList,
  monthList,
  monthFullList,
  getYearsArray,
  isBetweenDates,
};
