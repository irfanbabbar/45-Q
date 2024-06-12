// Q 21,
//They think of something you could store in a TypeScript Object.

import { describe } from "node:test";

// Write a program that creates Objects containing these items.
let ObjectContainingItems: {[key: string]: any} = {
    "laptop": {
        name: "laptop",
        price: 10000,
        color: "black",
        description: " high performance laptop with fast processor"
    },
    "mouse": {
        name: "mouse",
        price: 500,
        color: "black",
        description: " high performance mouse with blur lighting"
    },
    "keyword": {
        name: "keyword",
        price: 5000,
        color: "black",
        description: " high performance keyword with red light"

    }
} 
console.log(ObjectContainingItems);