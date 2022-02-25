class TeamMember {
    name;
    address = "BD";
    designation = "Web dev";

    constructor(name, address) {
        this.name = name;
        this.address = address
    }
}
class Support extends TeamMember {
    profession;
    category;
    constructor(name, address, profession, category) {
        super(name, address)
        this.profession = profession;
        this.category = category;
    }
    startSession() {
        console.log(this.name, 'start a session');
    }
}

class StudentCare extends TeamMember {

    buildARoutine(student) {
        console.log(this.name, 'build a routine', student);
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}


const amir = new Support("Amir", "Dubai", 'Software Engineer', 'Software');
const sarukh = new Support("sarukh", "India", 'Graphics Designer', 'Graphics');
// console.log(amir)
// console.log(sarukh)
// amir.startSession()
const alia = new StudentCare('Alia Bhatt', "Mumbai");
const dalia = new NeptuneDev('Dalia', 'Dhaka', "Android Studio");
console.log(dalia);
dalia.releaseApp('1.2.3')