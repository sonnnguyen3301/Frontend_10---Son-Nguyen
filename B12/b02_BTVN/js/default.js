const LOCAL             = "GAME_BUTTON";
const size              = 25;

var BUTTONLIST          = [];
var LIFE                = [];
var NOTE                = "";

var list_button         = $("#area-list-button");
var myAudio             = $(".audio");
var start_btn           = $("#start_play");
var hint_btn            = $("#hint");
var save_btn            = $("#game_save");
var id_input            = $("#input_id");
var notify              = $("#notify");
var life_game           = $("#life_game");
var bg_button           = $(".game_btn");

var right_btn           = 0;
var step                = 0;
var hint_number         = 0;    
var index_btn           = 0;

var switch_sound        = 1;
var vid = document.getElementById("myAudio");
vid.volume = 0.4;

        
