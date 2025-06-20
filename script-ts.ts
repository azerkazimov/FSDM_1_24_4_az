// boolean
let isActive: boolean = true
let isComplete: boolean = false

let auto = true

function chechStatus(status: boolean): string {
    return status ? "Active" : "No Active"
}

console.log(chechStatus(auto));

// number

// let num: number = NaN
// let num2: number = Infinity
// let num3: number = -Infinity
// let num4: bigint = 100n

// string
let str: string = "NaN"
//str = 42 // Type 'number' is not assignable to type 'string'.


// any
let dynamicVal: any = 42
dynamicVal = "hello"
dynamicVal = true
dynamicVal = { name: "object" }

let val: any = "123"
let result: number = val * 2
console.log(result);

// unknown
let data: unknown

data = 5
data = true
data = "string"

console.log(data);

function process(data: unknown): void {
    if (typeof data === "string") {
        console.log(data.toUpperCase());
    }

    if (typeof data === "boolean") {
        console.log("is active");
    }


}

process(data)

// void

function execute(callback: () => void): void {
    callback()
}

execute(() => {
    console.log("callback inra olund");
})

// never

// function infinie():never {
//     while(true){
//         console.log("hi");
//     }
// }

// infinie()

// null | undefined

let value1: null = null
let value2: undefined = undefined

interface User {
    name: string,
    email?: string
    phone: string | number
    age?: number
}

const user: User = {
    name: "Eli",
    email: "eli@mail.com",
    phone: "true",
}



let nums: number[] = [1, 2, 3, 4, 5, 6, 7]
let string: Array<string> = ["a", "b", "c"]

let users: User[] = [
    {
        name: "Eli",
        email: "eli@mail.com",
        phone: "true",
        age: 22
    },
    {
        name: "Veli",
        email: "eli@mail.com",
        phone: "true",
    },
    {
        name: "Ilqar",
        email: "eli@mail.com",
        phone: "true",
    },
]

console.log(users);

function lalala(param1: any, param2: any): void {
    console.log(param1);
    console.log(param2);

}

lalala("3333", "ghgj")

let resttype: [string, ...number[]] = ["lalalla", 1, 2, 3, 4, 5]
console.log(resttype);


// enum

enum Direction {
    up = "up",
    down = "down",
    left = "left",
    right = "right"
}

const userDirection: Direction = Direction.up
console.log(userDirection);

enum CarType {
    sedan = "sedan",
    SUV = "SUV"
}

const car = {
    name: "Kia",
    type: "sedan"
}

if (car.type = CarType.sedan) {
    console.log("this is sedan");
}

interface Animal {
    name: string,
    age: number | string | null
}

interface Dog extends Animal {
    type: string,
    sleep: boolean
}

const dog: Dog = {
    name: "Rex",
    age: 5,
    type: "doberman",
    sleep: true
}
console.log(dog);

// ======
interface LoadingState {
    state: "loading"
}
interface SuccessState {
    state: "success"
    data: any
}
interface ErrorState {
    state: "error"
    error: any
}

type AsyncState = LoadingState | SuccessState | ErrorState

function handleState(state: AsyncState) {
    switch (state.state) {
        case "loading":
            console.log("Yuklenir");
            break;
        case "success":
            console.log("data", state.data);
            break;
        case "error":
            console.log("Error:", state.error);
            break;
    }
}

handleState({ state: "loading" })
handleState({ state: "success", data: { id: 1, name: "test" } })
handleState({ state: "error", error: "no data" })


// intersection types

interface Person {
    name: string,
    age: string | number
}

interface Employe {
    id: number | string,
    department: string
}

type EmployePerson = Person & Employe

const employe: EmployePerson = {
    name: "Eli",
    age: 32,
    id: 46236,
    department: "IT"
}

console.log(employe);

function identify<T>(param: T): T {
    console.log(param);
    return param
}

identify<string>("hello")
identify<number>(43)
identify("salam")
identify(4546)


function getFirst<T>(array: T[]): T | null {
    const data = array.length > 0 ? array[1] : null
    console.log(data);

    return data
}

getFirst([])

function compare<T, U>(first: T, second: U): [T, U] {
    if ((first as any) > (second as any)) {
        console.log(`${first} is greater than ${second}`);
    } else {
        console.log(`${second} is greater than or equal to ${first}`);
    }

    return [first, second];
}

compare(5, 3)

interface Container<T> {
    value: T;
    setValue(value: T): void;
    getValue(): T
}


class Box<T> implements Container<T> {
    constructor(public value: T) {

    }
    setValue(value: T): void {
        this.value = value
    }
    getValue(): T {
        return this.value
    }
}

const stringBox = new Box<string>("hello")
const numberBox = new Box<number>(45)

interface Values<K, Z> {
    id: K;
    value: Z
}

const userInfo: Values<number, string> = {
    id: 342,
    value: "Eli"
}

interface UserInfo {
    id: number;
    name: string;
    email: string;
    age: string;
    salary: number;
    department: string;
}

type PartialUser = Partial<UserInfo>
type RequiredUser = Required<PartialUser>

// PartialUser:
// {
//     id?: number;
//     name?: string;
//     email?: string;
//     age?: string
// }

// RequiredUser:
// {
//     id: number;
//     name: string;
//     email: string;
//     age: string
// }

// pick omit

type publicInfo = Pick<UserInfo, 'name' | "email" | 'age'>

// type public = {
//     age: string;
//     name: string;
//     email: string;
// }

type hidden = Omit<UserInfo, 'salary' | 'department'>
// {
//     id: number;
//     name: string;
//     email: string;
//     age: string;
// }

type AllColors = 'red' | "yellow" | "green" | "purple" | "blue"
type primaryColors = Exclude<AllColors, 'yellow' | 'purple'>
type extractColors = Extract<AllColors, 'blue'>
 