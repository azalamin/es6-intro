class Support {
    name;
    address = "BD";
    designation = "Web dev";
    phone;
    constructor(name, phone, address) {
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
    startSession() {
        console.log(this.name, "start a session");
    }

}
const naim = new Support("Sajjad", '017980569993', "Dubai");
const aman = new Support("Aman", '+000988387', "Katar");
naim.startSession();
console.log(naim);
console.log(aman);