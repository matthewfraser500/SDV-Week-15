/*
function hash(key, arrayLen)
let total = 0;
for(let char of key){
    //map "a" to 1, "b" to 2 "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen
}
*/

/*
function randomHash(key){
    return Math.floor(Math.random() * 1000)
}
*/

// Hash that only works on strings //

function hash(key, arrayLen){
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen;
    }
    return total;
}
hash("pink", 10); // 0
hash("orange", 10); // 7
hash("cyan",10); // 3
