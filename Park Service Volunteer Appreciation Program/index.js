"use strict";
exports.__esModule = true;
var raccoon_meadows_log_1 = require("./raccoon-meadows-log");
var wolf_point_log_1 = require("./wolf-point-log");
function combineVolunteers(volunteers) {
    return volunteers.map(function (volunteer) {
        var id = volunteer.id;
        if (typeof id === "string") {
            id = parseInt(id, 10);
        }
        return {
            id: id,
            name: volunteer.name,
            activities: volunteer.activities
        };
    });
}
function isVerified(verified) {
    if (typeof verified === "string") {
        verified = verified === "yes" ? true : false;
    }
    return verified; // return boolean true or false
}
function getHours(activity) {
    if ("hours" in activity) {
        return activity.hours;
    }
    else {
        return activity.time;
    }
}
function calculateHours(volunteers) {
    return volunteers.map(function (volunteer) {
        var hours = 0;
        volunteer.activities.forEach(function (activity) {
            if (isVerified(activity.verified)) {
                hours += getHours(activity);
            }
        });
        return {
            id: volunteer.id,
            name: volunteer.name,
            hours: hours
        };
    });
}
function byHours(a, b) {
    return b.hours - a.hours;
}
var combinedVolunteers = combineVolunteers([].concat(wolf_point_log_1.wolfPointVolunteers, raccoon_meadows_log_1.raccoonMeadowsVolunteers));
/*
Main
*/
console.log(combinedVolunteers);
var result = calculateHours(combinedVolunteers);
console.log("________________________________");
console.log(result.sort(byHours));
