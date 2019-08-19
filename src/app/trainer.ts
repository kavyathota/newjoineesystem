export class Trainer {
    private trainerID: number;
    private name: string;
    private course: string;
    private govtidno: string;
    private yearOfCareer: number;

    constructor(trainerID: number, name: string, course: string, govtidno: string, yearOfCareer: number) {
        this.trainerID = trainerID;
        this.name = name;
        this.course = course;
        this.govtidno = govtidno;
        this.yearOfCareer = yearOfCareer;
    }
    // Methods
    // Getters
    public getTrainerID():number{
        return this.trainerID;
    }
    public getName():string{
        return this.name;
    }
    public getCourse():string{
        return this.course;
    }
    public getGovtIdNo():string{
        return this.govtidno;
    }
    public getExperience():number{
        return new Date().getFullYear() - this.yearOfCareer;
    }
    
    // Setters
    public setCourse(newCourse, key): boolean {
        var authorized: boolean = this.authentication(key);
        if(authorized)
            this.course = newCourse;
        return authorized;
    }
    // Funcitonailites

    // Abstracted Functions
    private authentication(key): boolean {
        return key === "secretKey";
    }


 trainer1 = new Trainer(1,"John", "Computer Scrience", "ABCD1234", 1997);
  trainer2 = new Trainer(2, "Kavya", "Social Studies", "EFGH5678", 2013);






}