let ace = document.getElementById("cont1");
let hunter = true;
ace.addEventListener('mouseover', () => {
    if(hunter == true){
        ace.style.height = "350px";
        ace.style.width = "350px";
        hunter = false;
    }else{
        ace.addEventListener('mouseleave', () => {
            ace.style.height = "250px";
            ace.style.width = "250px"
                    hunter = true;
        });

    }
});
let luffy = document.getElementById("cont2");
let textel = document.getElementById("luffytexte");

luffy.addEventListener('click', () => {
    if(hunter == true){
    textel.style.display = "block";
    hunter = false;
}else{
    textel.style.display = "none";
    hunter = true;
}
})

let zoro = document.getElementById("cont3");
let zoroo = document.getElementById("zorooo");
zoro.addEventListener('click', () => {
    if(hunter == true){
        zoroo.style.display = "block";
        hunter = false;
    }else{
        zoroo.style.display = "none";
        hunter = true;
    }
});


/*

luffy.addEventListener('mouseover', () => {
    if(hunter == true){
        luffy.style.height = "350px";
        luffy.style.width = "350px";
        hunter = false;
    }else{
        luffy.addEventListener('mouseleave', () => {
            luffy.style.height = "250px";
            luffy.style.width = "250px"
                    hunter = true;
        });

    }
});*/