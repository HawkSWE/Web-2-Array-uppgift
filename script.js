function sort(nummer){

    const sorterad_p = document.getElementById('sorterad')
    nummer.sort(function(a, b){return a-b});
    sorterad_p.innerText = random.join(', ')
}

var random = [10];

while(random.length < 10){
    var r = Math.floor(Math.random() * 100) + 1;
    if (random.indexOf(r) === -1) random.push(r);
}

const osorterad_p = document.getElementById('osorterad')

osorterad_p.innerText = random.join(', ')

sort(random);
