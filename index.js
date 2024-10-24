// 宣告 string 型別的變數
var message = "Hello, TypeScript!";
// 宣告 number 型別的變數
var age = 30;
// 宣告 boolean 型別的變數
var isStudent = true;
// 宣告 array 型別的變數
var scores = [90, 85, 88];
// 宣告 tuple 型別的變數
var person = ["John", 25];
// 宣告 enum 型別
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
// 宣告 any 型別的變數
var randomValue = 10;
randomValue = "Hello!";
randomValue = true;
