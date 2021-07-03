// estruturas de repetição
// laço for
var colors = ["black", "white", "yellow", "green", "blue"];

for(var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

for (var i = 1; i <= 10; i++){
    console.log(i);
}
console.log("While");
// while 
var i = 5;

while( i < 10){
    console.log(i);
    i++;
}
console.log("Do While");
// do while
i = 5;

do {
    console.log(i);
    i++;
} while(i < 3);