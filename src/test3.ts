import { delay } from "./knjiznice";

async function main() {
   for (let i = 0; i < 10; i++) {
      console.log(i);
      await delay(1000);
   }
}

main();