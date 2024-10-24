// 宣告 string 型別的變數
let message: string = "Hello, TypeScript!";

// 宣告 number 型別的變數
let age: number = 30;

// 宣告 boolean 型別的變數
let isStudent: boolean = true;

// 宣告 array 型別的變數
let scores: number[] = [90, 85, 88];

// 宣告 tuple 型別的變數
let person: [string, number] = ["John", 25];

// 宣告 enum 型別
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;

// 宣告 any 型別的變數
let randomValue: any = 10;
randomValue = "Hello!";
randomValue = true;
