// CODE here for your Lambda Classes

// Person
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
  }
  
// Instructor
class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
      return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
      return `${student.name} receives a perfect score on ${subject}.`;
    }
  }
  
  // Student
  class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        function listsOutSubjects(subject1, subject2, subject3) {
            return `${this.name}'s favorite subjects are ${subject1}, ${subject2}, and ${subject3}.`;
        }
        listsOutSubjects(...this.favSubjects);
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
  }

    // Project Manager
    class ProjectManagers extends Instructor {
        constructor(attributes) {
            super(attributes);
            this.gradClassName = attributes.gradClassName;
            this.favInstructor = attributes.favInstructor;
        }
        standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
        }
        debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
        }
    }