$(document).ready(function () {
    let last_game = getLocalStorage(LOCAL);
    if(jQuery.isEmptyObject(last_game)){
        number_button(25);
        number_life(3);
        load_button(BUTTONLIST);
        load_Life(LIFE);
        saveLocal(LOCAL);
    }
    else{
        BUTTONLIST  = last_game.list_btn;
        LIFE        = last_game.list_life;
        step        = last_game.step;
        right_btn   = last_game.right_button;
        index_btn   = last_game.last_btn;

        load_button(BUTTONLIST);
        load_Life(LIFE);
        note_last_save(last_game.note);
    }
});
// ##### BUTTON - START GAME ######
$(start_btn).click(function(e){
    e.preventDefault();
    step = 0;
    BUTTONLIST  = [];
    LIFE        = [];
    NOTE        = "";

    notify.empty();

    list_button.css("background-color", "white");
    $(bg_button).css({"animation": ""});
    number_button(25);
    number_life(3);
    load_button(BUTTONLIST);
    load_Life(LIFE);
    saveLocal(LOCAL)   
});

// ##### BUTTON - HINTS ######
$(hint_btn).click(function(){
    new_hint();
});

// ##### BUTTON - SAVE GAME ######
$(save_btn).click(function(){
    saveLocal(LOCAL);
    alert("Đã save tiến độ trò chơi!");
});


