
// 타입을 미리 정하기 애매할 때

// Union type
let userid: string | number = "asfd"
userid = 123

// 소괄호로 묶어줄 수도 있음
let userid2: (string | number | boolean) = "asfd"

// 응용
let users: (number | string)[] = [1, 2, "3"]
let users2: number | string[] = 1 // or ["1", "2"] <- 이렇게되니깐 소괄호 묶어주어야 함     // ? 1[1] ???
let obj: { a: number | string } = { a: "123" }



// Any type
let names: any
names = [123]
names = 2312
names = "sdf123"
// 그냥 다 들어올 수 있음
// 이렇게 쓸거면 ts 쓸 의미가 없음
// -> type shield 헤제 문법



// Unknown
// any랑 비슷함
let namess: unknown
namess = "asfdsdaf"
namess = 123
namess = [123124]

// 조금 더 안전한 이유?
// let var1: string = "ddd"
// var1 = names   // 이거는 assign이 됨
// var1 = namess  // 이거는 막아줌 -> 보호!

// namess - 1 // -> 에러
// 타입스크립트가 엄격하기 때문에 any, number, bigint 만 연산이 가능!
// 에러 미리 방지할 수 있음!



// 타입스크립트는 엄격하기 때문에 일부 계산에서 에러를 표시할 수 있음!
// let age: string | number
// age + 1 // -> 에러
// unknown도 에러

// Narrowing / Assersion 으로 엄격하게 코드짜면 됨!



// 문제 1.
let user: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | false)[] = [user, age, married];



// 문제 2.
let 학교: {
    score: (number | boolean)[],
    teacher: string,
    friend: string | (string)[],
} = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
}

학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]
