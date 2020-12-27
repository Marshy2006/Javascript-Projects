function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getprefix(date) {
    l = date.toString().length;
    if (l == 2) {
        var datelast = date.toString()[1];
    } else {
        var datelast = date;
    }
    if (datelast == 1) {
        return date + "st";
    } else if (datelast == 2) {
        return date + "nd";
    } else if (datelast == 3) {
        return date + "rd";
    } else {
        return date + "th";
    }

}

function add0(object) {
    input = object;
    l = input.toString().length;
    if (l == 1) {
        output = "0" + input;
    } else {
        output = input;
    }
    return output;
}

async function main() {
    var i = true;
    while (i == true) {
        var secondsformat_checkbox = document.getElementById('secondsformat-checkbox');
        var millisecondsformat_checkbox = document.getElementById('millisecondsformat-checkbox');
        var timeformat_checkbox = document.getElementById('timeformat-checkbox');
        var monthformat_checkbox = document.getElementById('monthformat-checkbox');
        var dayformat_checkbox = document.getElementById('dayformat-checkbox');
        var dateformat_checkbox = document.getElementById('dateformat-checkbox');
        if (secondsformat_checkbox.checked == false) {
            if (millisecondsformat_checkbox.checked == true) {
                millisecondsformat_checkbox.click();
                millisecondsformat_checkbox.checked = false;
            }
        }
        var d = new Date();
        const days_short = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const days_long = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months_short = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const months_long = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var date = d.getDate();
        var date = getprefix(date);
        if (dayformat_checkbox.checked == true) {
            var day = days_long[d.getDay()];
        } else if (dayformat_checkbox.checked == false) {
            var day = days_short[d.getDay()];
        }
        if (monthformat_checkbox.checked == true) {
            var month = months_long[d.getMonth()];
        } else if (monthformat_checkbox.checked == false) {
            var month = months_short[d.getMonth()];
        }
        var year = d.getFullYear();
        var s = d.getSeconds().toString();
        var s = "." + add0(s);
        if (secondsformat_checkbox.checked == false) {
            var s = ""
        }
        var m = d.getMinutes().toString();
        var m = add0(m);
        var h = d.getHours().toString();
        var h = add0(h);
        if (timeformat_checkbox.checked == false) {
            if (h > 12) { // convert hours to 12 hour
                var h = h - 12
            }
        } else {
            var h = h;
        }

        var ms = "." + d.getMilliseconds().toString()[0];
        if (millisecondsformat_checkbox.checked == false) {
            var ms = ""
        }

        var finaldate = day + " " + date + " " + month + " " + year;

        if (dateformat_checkbox.checked == true) {
            if (monthformat_checkbox.checked == true) {
                monthformat_checkbox.click();
            }
            if (dayformat_checkbox.checked == true) {
                dayformat_checkbox.click();
            }
            var month = d.getMonth() + 1;
            var finaldate = d.getDate() + "/" + month + "/" + year
        };

        var finaltime = h + ":" + m + s + ms;
        document.getElementById("date").innerHTML = finaldate;
        document.getElementById("time").innerHTML = finaltime;
        await sleep(100);
    }
}


/*

ToDo:




*/