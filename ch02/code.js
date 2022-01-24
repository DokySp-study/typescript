// js 문법에 타입 지정한 느낌이 ts
var username1 = "kim";
const username2 = "kim";
// 처음에 assign한 값에 따라 타입 지정을 자동으로 해줌!
let username3 = "kim";
// username3 위에 커서 올려두면 자동으로 타입 뭔지 알려줌!
username3 = username3;
let arr1 = [1, 2, 3];
let arr2 = [1, 2, "3"];
// 문제
let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
