function sort(){
    // Denna funktion används för att sortera en array av siffror.
    // Den sorterar siffrorna så det blir minst till störst i arrayn.
    const sorterad_p = document.getElementById('sorterad')
    random.sort(function(a, b){return a-b});
    sorterad_p.innerText = random.join(', ')
}

function get_numbers(){
    // Den här funktionen genererar 10 siffror mellan 1-100 och sedan sparar det i en array.
    while(random.length < 10){
        var r = Math.floor(Math.random() * 100) + 1;
        // Den här if satsen kollar om en random siffra redan finns i arrayn så det inte blir fler av samma siffra.
        if (random.indexOf(r) === -1) random.push(r);

        else{
            console.log(r + " Fanns redan i arrayen!")
        }
    }

    const osorterad_p = document.getElementById('osorterad')
    osorterad_p.innerText = random.join(', ')
}

var random = [10];

get_numbers();

sort();
