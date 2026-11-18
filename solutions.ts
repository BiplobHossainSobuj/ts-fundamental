const multiplyValue = (num: number, multiplier?:number): number=>{
    if(multiplier === undefined){
        return num * 2;
    }
    return num* multiplier;
    
}

const processInput = (input: string | number | boolean): string | number =>{

    if(typeof input === "string"){
        return `${input.trim().toLowerCase()}`;
    }else if(typeof input === "number"){
        return input * 10;
    }
    return input?'Active':'Inactive';
}

type locationType = readonly [latitude: number, longitude: number, locationName: string] ;
const formatCoordinate =  (location:locationType):string =>{
    return `Location: ${location[2]} (${location[0]}, ${location[1]})`;
}

const concatenateArrays = <T>(...arrays:T[][]): T[] => {
    let output: T[] = [];
    return output.concat(...arrays);
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
const getPopularCourses = (courses: Course[],minStudents:number): Course[] =>{
    return courses.filter(c=>c.isPublished && c.students >= minStudents);
}

const pluckValues = <T, K extends keyof T>(items: T[], keys:K):T[K][]=>{
    return items.map(item => item[keys]);
};

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name:string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails(): string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string){
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`;

    }
}
const waitForSeconds = (time: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, time));
}
const validateAgeAsync = async (age:number): Promise<string> =>{
    if(age>=18) {
        await waitForSeconds(1000);
        return await Promise.resolve("Access Granted");
    }
    return await Promise.reject(new Error("Access Denied: Must be 18 or older"));
}