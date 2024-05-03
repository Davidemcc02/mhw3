




const CAROSEL_IMAGES = ["img/regalo1.PNG", "img/regalo55.PNG", "img/regalo-test.PNG"]
let CAROSEL_INDEX = 0;

function carosel_switch(event, advance) {
    CAROSEL_INDEX = CAROSEL_INDEX + (advance ? 1 : -1)
    let index = Math.abs(CAROSEL_INDEX) % CAROSEL_IMAGES.length
    document.getElementById("displayed-img").src = CAROSEL_IMAGES[index];
}

// Chiamata alla funzione per far scorrere le recensioni una volta che il documento � stato caricato
window.addEventListener('load', function () {
    console.log("test");

    const arrow_r = document.getElementById("arrow-right");
    const arrow_l = document.getElementById("arrow-left");
    console.log(arrow_l, arrow_r);
    arrow_r.addEventListener("click", (e) => carosel_switch(e, false));
    arrow_l.addEventListener("click", (e) => carosel_switch(e, true));
});

function showCategories(){

    var section_show = document.getElementById("hide-container");
    var section_hidden = document.getElementById("show-container");
    section_show.classList.add("hidden");
    section_hidden.classList.remove("hidden");

}

const apiKey = '423646880590-egpckrb0rdlto68eg7j3ol03bkplihn4.apps.googleusercontent.com';
const videoId = '9mR-0qbi7Ms';

let player;


function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '400',
        width: '800',
        videoId: videoId,

        events: {
            onReady: autoplayer,
        },
    });
}


function autoplayer(event) {
    event.target.playVideo(); 
}






window.addEventListener('load', function () {
    var pos = { lat:45.4418849, lng:9.2077489};
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 20, center: pos });
    var marker = new google.maps.Marker({ position: pos, map: map, title:'Trustpilot S.r.l'});
});



