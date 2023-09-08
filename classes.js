class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  // # is a feature of ES12 for setting private memebrs
  #msg = 'Hello World';

  static email = 'dev@example.com';
  // function but it does not require the keyword function inside a class

  get printName() {
    return `${this.username} is the name of the user`;
  }

  // static properties are only called by the class name and object name
  // because Static properties are associated with the class itself, not with instances of the
  // class.
  set devName(name) {
    this.#msg = name;
  }

  capitalise() {
    const firstChar = this.username.charAt(0).toUpperCase();
    const remaining = this.username.slice(1);
    return firstChar + remaining;
  }
}

// class Teacher extends User {
//   // Teacher is the child class
//   constructor(username, subject) {
//     super(username);
//     this.username = username;
//     this.subject = subject;
//   }

//   get printName() {
//     return `${this.username} is the teacher`;
//   }

// }

const newUser = new User('mayank', 'abcde');
// const newTeacher = new Teacher('Varun', 'CS');
console.log(newUser.printName);
console.log(newUser.capitalise());
// console.log(newTeacher.printName);
console.log(User.email);

// class expression with anonymous class, assigned to a variable
// const dev = class {};

// class expression with named class assigned to a variable
// const dev2 = class softwareDev {};

// class declaration
// class Developer {}
