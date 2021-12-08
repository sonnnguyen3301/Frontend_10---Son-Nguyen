var browser = (function() {
    var test = function(regexp) {return regexp.test(window.navigator.userAgent)}
    switch (true) {
        case test(/edg/i): return "Microsoft Edge";
        case test(/trident/i): return "Microsoft Internet Explorer";
        case test(/firefox|fxios/i): return "Mozilla Firefox";
        case test(/opr\//i): return "Opera";
        case test(/ucbrowser/i): return "UC Browser";
        case test(/samsungbrowser/i): return "Samsung Browser";
        case test(/chrome|chromium|crios/i): return "Google Chrome";
        case test(/safari/i): return "Apple Safari";
        default: return "Other";
    }
})();

var background_color = (browser == "Mozilla Firefox") ? "red": (browser == "Microsoft Edge") ? "MediumSeaGreen": (browser == "Google Chrome") ? "Tomato":(browser == "Apple Safari") ? "Violet":(browser == "Opera") ? "Crimson":(browser == "Microsoft Internet Explorer") ? "DeepSkyBlue": "Orange";
let element_box = document.getElementsByClassName("background");
element_box[0].style.backgroundColor = background_color