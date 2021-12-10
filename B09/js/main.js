$(document).ready(function () {
    count = 0
    const dictum = [
       "Where there is a will, there is a way.",
        "On the way to success, there is no trace of lazy men.",
        "I can accept failure, everyone fails at something. But I can’t accept not trying."
    ]
    setInterval(function () {
        count++;
        $("#box").text(dictum[count % dictum.length]).fadeIn(400);
    },2000);
    
});
// $("#box").fadeOut(400, function () {
    // $(this).text(dictum[count % dictum.length]).fadeIn(400);
    // });
//   }, 2000);