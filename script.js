var random = [10];

while(random.length < 10){
    var r = Math.floor(Math.random() * 100) + 1;
    if (random.indexOf(r) === -1) random.push(r);
}

console.log(random)

random.sort(function(a, b){return a-b});

console.log(random)