const dayAbbr = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec'];
const monthFullList = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

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
  const weekArray = [];
  let week = [];

  for (let i = 1; i <= daysInMonth; i++) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i));
  }

  const addWeek = (thisWeek) => {
    const emptyDays = 7 - thisWeek.length;
    for (let i = 0; i < emptyDays; ++i) {
      thisWeek[weekArray.length ? 'push' : 'unshift'](null);
    }
    weekArray.push(thisWeek);
  };

  dayArray.forEach((day) => {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      addWeek(week);
      week = [];
    }
    week.push(day);
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      addWeek(week);
    }
  });

  return weekArray;
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
};
