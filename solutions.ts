//? Problem 1
function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(number => number % 2 === 0);
}

//? Problem 2
function reverseString(strText: string): string {
    return strText.split('').reverse().join('');
}

//? Problem 3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
    if (typeof value === 'string') {
        return `String`;
    } else {
        return `Number`;
    }
}

//? Problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// const user = { id: 1, name: "John Doe", age: 21 };
// getProperty(user, "name");

//? Problem 5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
    return {
        ...book,
        isRead: true
    };
}

//? Problem 6
class Person {
    constructor(public name: string, public age: number) { }
}

class Student extends Person {
    constructor(name: string, age: number, public grade: string) {
        super(name, age);
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
// const student = new Student("Alice", 20, "A");
// student.getDetails();

//? Problem 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(item => {
        return arr2.includes(item);
    });
}
