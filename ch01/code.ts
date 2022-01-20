
// 여기다가 코드를 써도, ts파일은 브라우저가 인식할 수가 없음
// $ tsc -w 명령어 실행해두면 자동으로 js파일이 생겨남!

// 타입지정
let test :string = "이름"
// string, number, boolean, null, undefined, bigint, [], {}, ...

let arr :string[] = ["가나다", "마바사"]
let arr2 :[string,string] = ["가나다", "마바사"]

let obj : {} = {name: "dddd"}
let obj2 : {age:number} = {age: 12}
let obj3 : {age?:number, name?} = {name: ""}


// Union type -> 다양한 타입
let 이름 :number|string = "dddd"
이름 = 123


// Type alias
type CustomType = number|string
let 이름2:CustomType = "dsfd"


// 함수 타입 지정
function func(x :number) :string {
    return (x * 2) + ""
}


// 튜플 구현
type Member = [number, boolean]
let john :Member = [123, false]
// let john2 :Member = ["123", false] -> X

type Member2 = {age: number, gender: boolean}

type Member3 = {
    [key :string] : string
    // 싹다 string으로 받음 ..?
}


// 클래스 작명
class User {
    name :string
    
    constructor(name: string){
        this.name = name
    }
}

