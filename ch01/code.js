// 여기다가 코드를 써도, ts파일은 브라우저가 인식할 수가 없음
// $ tsc -w 명령어 실행해두면 자동으로 js파일이 생겨남!
// 타입지정
let test = "이름";
// string, number, boolean, null, undefined, bigint, [], {}, ...
let arr = ["가나다", "마바사"];
let arr2 = ["가나다", "마바사"];
let obj = { name: "dddd" };
let obj2 = { age: 12 };
let obj3 = { name: "" };
// Union type -> 다양한 타입
let 이름 = "dddd";
이름 = 123;
let 이름2 = "dsfd";
// 함수 타입 지정
function func(x) {
    return (x * 2) + "";
}
let john = [123, false];
// 클래스 작명
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
