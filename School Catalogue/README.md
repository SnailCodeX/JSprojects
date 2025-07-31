# 🏫 School Catalogue

**School Catalogue** is an OOP-based project where I built a digital catalog system for schools across a city. This simulation was designed for a fictional Department of Education to provide quick reference material for each educational institution.

---

## 🧱 Class Structure

- **`School` (Base Class)**  
  Properties: `_name`, `_level`, `_numberOfStudents`  
  Methods:  
  - `quickFacts()` – prints a summary  
  - `pickSubstituteTeacher()` – selects a random teacher from a list  
  - Getter/setter for students with validation  

### Subclasses

- **`PrimarySchool`**  
  Adds: `_pickupPolicy`  
- **`MiddleSchool`**  
  Inherits as-is  
- **`HighSchool`**  
  Adds: `_sportsTeams`

---

## 🎯 Key Features

- Inheritance-based structure to model different school types
- Static method for utility logic (`pickSubstituteTeacher`)
- Validation in setter methods to enforce clean data

---

## 💡 What I Learned

This project helped reinforce:

- Object-oriented principles (inheritance, encapsulation)
- Creating flexible, extendable class hierarchies
- Method reuse and static class utilities

---

## 🚀 Sample Output

```js
  //Instance of PrimarySchool
  console.log("________Instance of PrimarySchool________");
  const lorraineHansbury = new PrimarySchool(
    "Lorraine Hansbury",
    514,
    "Students must be picked up by a parent, guardian, or a family member over the age of 13."
  );
  console.log(
    `Teacher name: ${lorraineHansbury.name}\nNumber of students in class: ${lorraineHansbury.numberOfStudents}\nEducation level: ${lorraineHansbury.level} school\nPickup method: ${lorraineHansbury.pickupPolicy}`
  );
  //lorraineHansbury.quickFacts()
  console.log(
    "Substitute teacher:",
    School.pickSubstituteTeacher([
      "Jamal Crawford",
      "Lou Williams",
      "J. R. Smith",
      "James Harden",
      "Jason Terry",
      "Manu Ginobli",
    ])
  );
  
  //Instance of HighSchool
  console.log("\n________Instance of HighSchool________");
  const alSmith = new HighSchool("Al E. Smith", 415, [
    "Baseball",
    "Basketball",
    "Volleyball",
    "Track and Field",
  ]);
  console.log(`Student name: ${alSmith.name}`);
  console.log(`Number of studentsis in class: ${alSmith.numberOfStudents}`);
  console.log(`Education level: ${alSmith.level} school`);
  console.log(`Sports teams: ${alSmith.sportsTeams}`);
  /* 
Output:

________Instance of PrimarySchool________
Teacher name: Lorraine Hansbury
Number of students in class: 514
Education level: primary school
Pickup method: Students must be picked up by a parent, guardian, or a family member over the age of 13.
Substitute teacher: James Harden

________Instance of HighSchool________
Student name: Al E. Smith
Number of studentsis in class: 415
Education level: high school
Sports teams: Baseball,Basketball,Volleyball,Track and Field
*/
