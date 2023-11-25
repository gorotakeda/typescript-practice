// string

const firstName: string = 'John';

// number

const age: number = 30;

// boolean
let isHuman: boolean = true;

isHuman = false;

// Date
let birthday: Date = new Date('1990-01-01');
birthday = new Date('1990-01-01');

let colors: "red" | "green" | "blue" = "red";
let ranks: "A" | "B" | "C" | "D" = "A";

// any
let AnyData: any =  "Hello";
AnyData = 1;
AnyData = true;
AnyData = new Date('1990-01-01');

let funclog = () => {
  console.log('Hello');
}

let funcSum =  (a: number, b: number) => {
  return a + b;
}

funcSum(1, 2);

// オブジェクト

let object: {
  name: "John";
  age: 30;
  isHuman: true;
  birthday: Date;
}

// タイプエイリアス
type User = {
  name: string;
  age: number;
  isHuman: boolean;
  birthday: Date;
  phone?: string;
}

let user: User = {
  name: "John",
  age: 30,
  isHuman: true,
  birthday: new Date('1990-01-01')
}

// 配列
let array: number[] = [1, 2, 3];
let array2: Array<number> = [1, 2, 3];
let tuple: [string, number] = ['John', 30];

// 連想配列
let userAraay: User[] = [
  {
    name: "John",
    age: 30,
    isHuman: true,
    birthday: new Date('1990-01-01')
  },
  {
    name: "John",
    age: 30,
    isHuman: true,
    birthday: new Date('1990-01-01')
  }
]

type UserDetail = {
  prefecture: string;
  sex: string;
}

type UserDetailInfo = User & UserDetail;

let userDetail: User & UserDetail = {
  name: "John",
  age: 30,
  isHuman: true,
  birthday: new Date('1990-01-01'),
  prefecture: "Tokyo",
  sex: "男性",
}

type UserDetailInfo2 = {
  user: User;
  userDetail: UserDetail;
}

let user3: UserDetailInfo2 = {
  user: {
    name: "John",
    age: 30,
    isHuman: true,
    birthday: new Date('1990-01-01'),
  },
  userDetail: {
    prefecture: "Tokyo",
    sex: "男性",
  }
}


