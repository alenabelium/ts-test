import { sestej } from "./knjiznice";

const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
console.log(`Vsota ${a} + ${b} je ${sestej(a, b)}`);

for(let i = 0; i < 10; i++) {
   console.log(i);
}

