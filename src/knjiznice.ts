
export function sestej(a: number, b: number) {
   return a + b;
}

export class Oseba {
   ime: string;
   priimek: string;
   starost: number;

   constructor(ime: string, priimek: string, starost: number) {
      this.ime = ime;
      this.priimek = priimek;
      this.starost = starost;
   }

   predstaviSe() {
      console.log(`Pozdravljeni, moje ime je ${this.ime} ${this.priimek} in sem star ${this.starost} let.`);
   }
}

export async function delay(ms: number) {
   return new Promise(resolve => setTimeout(resolve, ms) );
}