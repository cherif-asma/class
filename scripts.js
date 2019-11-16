class Human {
    name;
    job;
    skills;
    constructor(name, job, skills) {
        this.name = name;
        this.job = job;
        this.skills = skills;
    }
}

class Student extends Human {
    constructor(name, job, skills) {
        super(name, job, skills);
    }
    getJob(newJob) {
        this.job = newJob;
    }
    leaveJob() {
        this.job = 'unemployed';
    }
    learnNewSkill(newSkill) {
        this.skills.push(newSkill)
    }
    forgetSkill(skill) {
        this.skills = this.skills.filter((item) => (item !== skill))
    }
}

const person = new Student('asma', 'developer', ['React']);

console.log(person.name)
console.log(person.job)
console.log(person.skills)

person.getJob('data analyst');
console.log(person.job)

person.leaveJob()
console.log(person.job)

console.log(person.skills)
person.learnNewSkill('Java')
person.learnNewSkill('Node.js')
console.log(person.skills)

person.forgetSkill('Java')
console.log(person.skills)