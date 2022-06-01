// const a = 10;
// const b = 20;

// function sum(a, b){
//     if (typeof a != 'number' || typeof b != 'number') return false;
//     let result = a + b;
//     return result;
// }
// console.log(sum(a, b));


const myChildren = ["Kien", "Dat"];
const running = function (){
    return "varialble running";
};

const myInfo = {
    name: "Ting",
    age: 20,
    isStatus: true,
    street: {
        name: "Ting",
        address: "Hai Duong",
    },
    running: function(){
        return "object running";
    },
}
console.log(running());
console.log(myInfo.running());



