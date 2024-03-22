const objekt = {
   ime: "Miha",
   priimek: "Korošec",
   starost: 25
};

console.log(objekt);
console.log(JSON.stringify(objekt));
console.dir(JSON.parse(JSON.stringify(objekt)));
