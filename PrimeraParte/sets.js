const set = new Set([1,2,3,3,4,5,true,false, "hola"]);

console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(1);
set2.add(2);
set2.add(4);
set2.add(5);

console.log(set2);
console.log('Recorriendo set');
for(item of set){
    console.log(item);
}
console.log('Recorriendo set 2');

set2.forEach(item => console.log((item)));