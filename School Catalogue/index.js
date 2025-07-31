class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === "number") {
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log("Invalid input: numberOfStudents must be set to a Number.");
      }
    }
    quickFacts() {
      console.log(
        `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
      );
    }
    static pickSubstituteTeacher(substituteTeachers) {
      const index = Math.floor(substituteTeachers.length * Math.random());
      return substituteTeachers[index];
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, "primary", numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
      super(name, "middle", numberOfStudents);
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, "high", numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
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
  