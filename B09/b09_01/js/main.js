$(document).ready(function () {
    const TIME_DELAY = 2000

    const dictum = [
       "Where there is a will, there is a way.",
        "On the way to success, there is no trace of lazy men.",
        "I can accept failure, everyone fails at something. But I can’t accept not trying.",
        "Nobody is bored when he is trying to make something that is beautiful."
    ]
    setInterval(function () {
        $("#box").text(dictum[Math.floor(Math.random() * dictum.length)]).fadeIn(400);
    },TIME_DELAY);
    
});
// Arrow function
const getRandom = (min,max) => {

}

// $("#box").fadeOut(400, function () {
    // $(this).text(dictum[count % dictum.length]).fadeIn(400);
    // });
//   }, 2000);

// jqDocReady