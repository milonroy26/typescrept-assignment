# Why "any" is risky and why "unknown" is safer in TypeScript

## Introduction

TypeScript এ আমরা যখন data handle করি, তখন type safety খুব important।  
কিন্তু অনেক সময় আমরা `any` ব্যবহার করি, যেটা সহজ মনে হলেও dangerous হতে পারে।  
এই blog এ আমরা বুঝবো কেন `unknown` better choice এবং type narrowing কী।

---

## Problem with "any"

`any` ব্যবহার করলে TypeScript সব checking বন্ধ করে দেয়।

```ts
let data: any;

data = "Hello";
data.toUpperCase();

data = 10;
data.toUpperCase(); // error runtime e

এখানে error compile time এ ধরতে পারে না।

Why "unknown" is safer

unknown মানে আমরা value জানি না, কিন্তু TypeScript force করে check করতে।

let data: unknown;

data = "Hello";

// data.toUpperCase();  not allowed
Type Narrowing concept

Type narrowing মানে হলো আগে type check করে তারপর use করা।

let data: unknown;

data = "Hello";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}

এখানে TypeScript নিশ্চিত হচ্ছে যে data string।

Conclusion

any avoid করা উচিত কারণ এটা type safety ভেঙে দেয়।
unknown safer কারণ এটা আমাদের বাধ্য করে check করতে, যার ফলে code more safe and clean হয়।