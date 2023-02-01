let counter = 0;
const toggle = document.querySelector("#toggle");
let months = [];
let days= [];

toggle.addEventListener("click", () => {
    counter++;

    renderCalendar();
});

var curDate = document.querySelector(".current-date");
var weeksTag = document.querySelector(".weeks");
var daysTag = document.querySelector(".days");
prevNextIcons = document.querySelectorAll(".icons div");

// getting new date, current year and month
var date = new Date();
curYear = date.getFullYear();
curMonth = date.getMonth();
curDay = date.getDate();

var renderCalendar = () => {
    var firstDayOfMonth = new Date(curYear, curMonth, 1).getDay(); // getting first day of current month
    var lastDateOfMonth = new Date(curYear, curMonth + 1, 0).getDate(); // getting the last date of current month
    var lastDayOfMonth = new Date(curYear, curMonth, lastDateOfMonth).getDay(); // getting the last day of current month
    var lastDateOfLastMonth = new Date(curYear, curMonth, 0).getDate(); // getting the last date of previous month
    var liTag = "";
    weeksTag.innerHTML = "";

    if (counter % 2 == 0) {
        days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        months = ["January", "February", "March", "April", "May", "June", "July",
                        "August", "September", "October", "November", "December"];
    } else {
        days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
        months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
                        "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    }

    for (let i = 0; i < days.length; i++) {
        weeksTag.innerHTML += `<li>${days[i]}</li>`;
    }

    if (firstDayOfMonth == 0) {
        firstDayOfMonth = 7;
    }

    for (var i = firstDayOfMonth - 1; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    for (var i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === new Date().getDate() && curMonth === new Date().getMonth() &&
                curYear === new Date().getFullYear() ?
        liTag += `<li class="active">${i}</li>` :
        liTag += `<li>${i}</li>`;
    }

    for (var i = lastDayOfMonth; i <= 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }

    curDate.innerText = `${months[curMonth]} ${curYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcons.forEach (icon => {
    icon.addEventListener("click", () => {
        curMonth = icon.id === "prev" ? curMonth - 1 : curMonth + 1;
        if (curMonth > 11) {
            curMonth -= 12;
            curYear++;
        }
        if (curMonth < 0) {
            curMonth += 12;
            curYear--;
        }
        renderCalendar();
    })
});