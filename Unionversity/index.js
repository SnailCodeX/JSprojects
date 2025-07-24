"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
function searchEvents(options) {
    const events = options.eventType === "courses" ? courses_1.default : studyGroups_1.default;
    const result = events.filter((event) => {
        if (typeof options.query === "number") {
            return options.query === event.id;
        }
        if (typeof options.query === "string") {
            return event.keywords.includes(options.query);
        }
    });
    return result;
}
/*
function searchEvents(options: SearchEventsOptions) {
  const events: (Course | StudyGroup)[] =
    options.eventType === "courses" ? courses : studyGroups;
  
  return events.filter((event) => {
    if (typeof options.query === "number") {
      return options.query === event.id;
    }
    if (typeof options.query === "string") {
      // Handle both keyword search and numeric ID search as string
      const queryAsNumber = parseInt(options.query);
      return (
        event.keywords.includes(options.query) ||
        (!isNaN(queryAsNumber) && queryAsNumber === event.id)
      );
    }
    return false; // Default case to prevent undefined behavior
  });
}
*/
let enrolledEvents = [];
function enroll(event) {
    enrolledEvents.push(event);
    console.log(enrolledEvents);
}
let searchResults = searchEvents({ query: 1, eventType: "courses" });
console.log(searchResults);
let enrollTest = enroll(searchResults[1]);
console.log(enrollTest);
