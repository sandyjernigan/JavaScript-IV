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
    changeGrade(student, changeAmount) {
        student.grade = student.grade + changeAmount;
        return `${this.name} changed ${student.name}'s grade by ${changeAmount}, the new grade is ${student.grade}.`
    }
  }
  
// Student
class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listsSubjects(subject1, subject2, subject3) {
        return `${this.name}'s favorite subjects are ${subject1}, ${subject2}, and ${subject3}.`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
    graduate(){
        if (this.grade > 70) {
            console.log(`${this.name} is ready to graduate!`)
            return true;
        } else {
            let pronoun = 'his';
            if(this.gender === 'female') { 
                pronoun = 'her';
             }
            console.log(`${this.name} will have to go back to increase ${pronoun} score.`)
            return false;
        }
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

// List of Instructors
const fred = new Instructor({
    name: 'Fred',
    location: 'Lambda',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies
    `
  });

const josh = new Instructor({
    name: 'Josh',
    age: 30,
    location: 'Lambda',
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'redux',
    catchPhrase: `Show me the code`
  });

  const keiran = new Instructor({
      name: 'Keiran',
      age: 26,
      location: 'Lambda',
      gender: 'male',
      favLanguage: 'Javascript',
      specialty: 'CSS',
      catchPhrase: `That's just hotdogs!`
    });
    
// List of Students
const amber = new Student({
    name: 'Amber',
    location: 'New York',
    age: 25,
    gender: 'female',
    previousBackground: 'CSS',
    className: 'Full Stack Web Development',
    favSubjects: ['HTML', 'CSS', 'Javascript'],
    grade: 92
  });

const tj = new Student({
    name: 'TJ',
    age: 32,
    location: 'Moon',
    gender: 'male',
    previousBackground: 'React',
    className: 'Full Stack Web Development',
    favSubjects: ['React', 'Javascript', 'Node.js'],
    grade: 96
  });

// List of Project Managers
const charletta = new ProjectManagers({
    name: 'Charletta',
    location: 'Lambda',
    age: 31,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `It is a good day.`,
    gradClassName: 'webpt6',
    favInstructor: 'Keiran'
});

const katie = new ProjectManagers({
    name: 'Katie',
    age: 34,
    location: 'Lambda',
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'redux',
    catchPhrase: `Time to code.`,
    gradClassName: 'webpt6',
    favInstructor: 'Josh'
});

// Samples to test Instructors
console.log(`Instructor ${fred.name} is from ${fred.location} and prefers ${fred.favLanguage}.`);
console.log(`Instructor ${keiran.name} told the class \"${keiran.catchPhrase}\" during ${keiran.specialty} class.`);
console.log(josh.speak());
console.log(fred.demo('CSS'));
console.log(keiran.grade(amber, 'CSS'));

// Samples to test Students
console.log(`${tj.name} is a student in the ${tj.className} program.`);
console.log(amber.listsSubjects(...amber.favSubjects));
console.log(tj.PRAssignment("DOM"));
console.log(amber.sprintChallenge("React"));

// Samples to test Project Managers
console.log(`${charletta.name}'s favorite Instructor is ${charletta.favInstructor}.`);
console.log(`${katie.name} is a PM for ${katie.gradClassName}.`);
console.log(charletta.standUp("webpt6"));
console.log(katie.debugsCode(tj, "CSS"));

// Stretch Problem

    // Randomly add or subtract points to a student's grade
    function randomGradeChange(grader, student) {
        let changeAmountforGrade = Math.floor((Math.random() * 50) + 1);

        // Randomize negative or positive
        if (Math.floor(Math.floor((Math.random() * 2) + 1)) < 2) {
            changeAmountforGrade = -changeAmountforGrade;
        }    
        console.log(grader.changeGrade(student, changeAmountforGrade));
    }
    randomGradeChange(josh, amber);

    // Added a graduate method to student
    amber.graduate();

    // TJ's score with a repeat if fails
    randomGradeChange(katie, tj);
    while (!tj.graduate()) {
        console.log(`Try Again.`);
        console.log(`${tj.name} is repeating the assignment.`);
        randomGradeChange(katie, tj);
    }
    