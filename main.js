const weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sunday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Decenmber",
];

const date = new Date();

// // 今年
// const year = date.getFullYear();
// 今月
const month = date.getMonth() + 1;
// 今日の日にち
const today = date.getDate();
// 今日の曜日
const day = date.getDay();

const dayCal = document.getElementById("day");
const monthCal = document.getElementById("month");
const dateCal = document.getElementById("date");

dayCal.innerText = weeks[day];
monthCal.innerText = months[month - 1];
dateCal.innerText = today;
