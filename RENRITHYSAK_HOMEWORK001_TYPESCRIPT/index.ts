

// Create interface
interface Taxable{
     takeBonus(bonus:number | undefined): number;
}

// Create gender
type Gender = 'male' | 'female';

// Create a Person class
class Person {
    private name: string;
    private gender: Gender;
    private age: number;

    constructor(name:string, gender:Gender,age:number){
        this.name=name;
        this.gender=gender;
        this.age=age;
    }

    display(): void{
        if(this.gender === 'female'){
            console.log(`${this.name} is ${this.gender} and she is ${this.age} years old.`)
        }else{
            console.log(`${this.name} is ${this.gender} and he is ${this.age} years old.`)
        }
    }
}

// Create an Employee class
class Employee extends Person implements Taxable{

    private position: string;
    private salary: number;
    private tax: number;

    constructor(name:string, gender:Gender,age:number,position:string,salary:number,tax:number) {
        super(name, gender,age);
        this.position = position;
        this.salary = salary;
        this.tax=tax;
    }

    takeBonus(bonus: number | undefined): number {
        if (bonus !== undefined) {
            this.salary += bonus;
        }
        const totalSalary = this.salary;
        const taxAmount = totalSalary * this.tax;
        return taxAmount;
    }   

    displayEmployee(): void {
        console.log(`${this.position}: ${this.salary}`);
        const taxAmount = emp.takeBonus(500);
        console.log(`The tax is: ${taxAmount}`)
        console.log(`The netSalary is: ${this.salary - taxAmount}`)
      }
}

// Hardcode the value
const emp = new Employee("Sak", "male", 20, "Software Engineer", 5000, 0.1);
emp.displayEmployee();
emp.display();