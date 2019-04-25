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
class Instructor {
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