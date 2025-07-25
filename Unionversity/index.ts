import courses from "./courses";
import studyGroups from "./studyGroups";

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};
type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};
type SearchEventsOptions = {
  query: string | number;
  eventType: "courses" | "studyGroups";
};

function searchEvents(options: SearchEventsOptions) {

  const events: (Course | StudyGroup)[] =
    options.eventType === "courses" ? courses : studyGroups;
  
  const result = events.filter((event) => {
    if (typeof options.query === "number") {
      return options.query === event.id;
    }
    if (typeof options.query === "string"){
      return event.keywords.includes(options.query)
      }
  })
    return result
}

/* 
//THIS FUNCTION CAN ADDITIONALLY TREAT THE CASE WHEN THE INPUT IN A NUMBER IN THE FORM OF A STRING
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

let enrolledEvents: (Course | StudyGroup)[] = []
function enroll(event: Course | StudyGroup){
  enrolledEvents.push(event)
  console.log(enrolledEvents)
} 

/*
Main 
*/
let searchResults = searchEvents({ query: 1, eventType: "courses" });
console.log(searchResults);
let enrollTest = enroll(searchResults[1])
console.log(enrollTest);
