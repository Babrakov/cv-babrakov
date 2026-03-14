var current_date = new Date();
var first_date = new Date(2002, 9, 1); // October 2002 (months are 0-based)

var total_months = date_diff_calc_total(first_date, current_date);

let experienceElement = document.getElementById("total_years");
experienceElement.innerHTML = experienceElement.innerHTML.replace('totalyears', total_months);

function date_diff_calc_total(d1, d2) {
    let d1Y = d1.getFullYear();
    let d2Y = d2.getFullYear();
    let d1M = d1.getMonth();
    let d2M = d2.getMonth();

    let total_months = (d2M + 12 * d2Y) - (d1M + 12 * d1Y);

    let years = Math.floor(total_months / 12);
    let months = total_months - years * 12;

    if (years === 0) {
        return "less than 1 year";
    } else if (months < 6) {
        return "over " + years + " years";
    } else {
        return "almost " + (years + 1) + " years";
    }
}

var today = new Date();
var startDate = new Date(2022, 6, 1); // July 2022 (months 0-based)

var last_job_duration = "July 2022 - Present (" + date_diff_calc(startDate, today) + ")";
document.querySelectorAll('.resume-item h5')[0].innerHTML = last_job_duration;

function date_diff_calc(d1, d2) {
    let d1Y = d1.getFullYear();
    let d2Y = d2.getFullYear();
    let d1M = d1.getMonth();
    let d2M = d2.getMonth();

    let total_months = (d2M + 12 * d2Y) - (d1M + 12 * d1Y);

    let years = Math.floor(total_months / 12);
    let months = total_months - years * 12;

    if (years === 0) {
        return months + " months";
    } else if (months === 0) {
        return years + " years";
    } else {
        return years + " years " + months + " months";
    }
}
