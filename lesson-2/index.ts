// // 1 string
// let str: string = 'Some string value';
// str = 'Other string value';
// // type error
// str = false;
//
// // 2 number
// let x: number;
// x = 35;
// // type error
// x.length
// 3 boolean
// let isDone: boolean;
// isDone = false;
// isDone = 'ssss';
// 4 both
// let y: string | number;
// y = '25';
// y = 25;
// 5 any
// let someUn: any;
// someUn = '2222';
// someUn = true;
// someUn = 34;
// someUn = [];
// someUn = {};

//
// let list: number[] = [1, 2, 3];
//
// let listStr: Array<string> = ['1', '2', '3'];
// let listStr: string[] = ['1', '2', '3'];

// Tuple
// let user: [string, number] = ['@test_user', 1];

// ReadOnly Array
// const creds: ReadonlyArray<string> = ['userName', 'password', '44354433'];

// function sum(x: number | string, z: number): number | string {
//   return Number(x) + z;
// }
//
// function mult(x: number, y: number): void {
//   console.log(x * y);
// }

// let multCopy: (x: number, y: number) => void;
// multCopy = mult;

// multCopy = sum;

// console.log(sum(3, 5));
// const obj: {x: number, y: number, z: number} = {x: 10, y: 10, z: 10};
// const obj2: { x: number, y: number, z: (param1: number) => string } = {
//   x: 10,
//   y: 10,
//   z(param1: number) {
//     return String(param1);
//   }
// };

// enum Answers {
//   yes = 25,
//   no ,
// }
//
// enum Config {
//   port = '3306',
//   url = 'someurl.com',
//   pr = 'https',
// }
//
// console.log(Answers.yes);
// console.log(Answers[26]);

// console.log(Config.port);
console.log(1);

interface IUser {
  username: string;
  age?: number;
  pass: string;
}

// function getUserString(user: IUser): string {
//   return `${user.username}, ${user.pass}`;
// }
//
// console.log(getUserString({username: 'Dima', pass: '11111'}));
//
// function getLength(param: ILength): number {
//   return param.length;
// }
//
// interface ILength {
//   length: number;
//   type?: string;
// }
//
// getLength([1, 2, 3]);
// getLength('');
// getLength({type: 'Object', length: 50});
// getLength(2)

// interface IAdmin {
//   isAdmin: boolean;
//   getRules: (name: string) => string[];
// }
//
// class User implements IAdmin {
//
//   isAdmin = false;
//
//   constructor(
//     private _username: string,
//     public age: number,
//     private _pass: string
//   ) {
//   }
//
//   get pass(): string {
//
//     return this._pass;
//   }
//
//   set pass(strPass: string) {
//
//     this._pass = strPass;
//   }
//
//   getPass() {
//     return this._pass;
//   }
//
//   getRules(username: string) {
//     const pass = this._pass;
//     return this.isAdmin ? ['read', 'write', 'delete'] : [];
//   }
// }
//
// const user = new User('Dima', 23, '1234');
// console.log('Pass', user.pass);
// console.log('Pass', user.getPass());

// abstract class User2 {
//     abstract isAdmin: boolean;
//     protected constructor(
//     private _username: string,
//     public age: number,
//     private _pass: string
//   ) {
//   }
//
//   get pass(): string {
//     return this._pass;
//   }
//
//   set pass(strPass: string) {
//     this._pass = strPass;
//   }
//
//   abstract getAccess(user: string): string[];
//
//   getPass() {
//     return this._pass;
//   }
//
//   getRules(username: string) {
//     return ['read', 'write', 'delete'];
//   }
// }

// class Manager extends User2 {
//   isAdmin = true;
//   constructor(
//     _username: string,
//     age: number,
//     _pass: string
//   ) {
//     super(_username, age, _pass);
//   }
//
//   getAccess(user: string): string[] {
//     return ['ok'];
//   }
// }
//
// const manager = new Manager('Dima', 22, '12334');
//
// manager.getAccess('Dima');
// manager.getRules('Dima');
//
// function generic<T>(data: T): T {
//   return data;
// }
//
// generic('wwwww').length;
// generic(22).length;
//
// class Mult<T extends number | string> {
//   constructor(private a: T, private b: T){}
//
//   multiply() {
//     return +this.a * +this.b;
//   }
// }

function log(constrFn: Function) {
  console.log(constrFn);
}

function isLog(flag: boolean): any {
  return flag ? log : null;
}



function addMethod(constructorFn: Function) {
  constructorFn.prototype.showHtml = function() {
    const pre = document.createElement('pre');
    pre.innerHTML = JSON.stringify(this);
    document.body.append(pre);
  }
}

// @isLog(true)
@addMethod
class User {
  constructor(public name: string, public age: number) {
    console.log(`I'm user: ${name}`);
  }
}

const user: User = new User('Dima', 33);
(user as any).showHtml();






