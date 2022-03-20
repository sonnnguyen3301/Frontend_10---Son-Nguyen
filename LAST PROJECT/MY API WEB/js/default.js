


var search_text             = $("#choices-text-preset-values");
var inputSearch             = $(".search-input");
var btnSearch               = $(".search-icon");
var count_search            = $(".count-search");
var myFavoriteNews          = $(".favorite-news");

var list                    = [];
var list_searched           = [];
var List_All                = [];
var list_favorite           = [];
var list_favorite_str       = [];

var Home_anime_list         = [];
var search_test             = 0;

var anime_title_1st           = $("#1st-home-title");
var anime_title_2st           = $("#2st-home-title");
var anime_title_3st           = $("#3st-home-title");
var anime_title_4st           = $("#4st-home-title");
var anime_title_5st           = $("#5st-home-title");
var anime_title_6st           = $("#6st-home-title");
var anime_title_7st           = $("#7st-home-title");
var anime_title_8st           = $("#8st-home-title");
var anime_title_9st           = $("#9st-home-title");
var anime_title_10st          = $("#10st-home-title");
var anime_title_11st          = $("#11st-home-title");
var anime_title_12st          = $("#12st-home-title");
var anime_title_13st          = $("#13st-home-title");
var anime_title_14st          = $("#14st-home-title");
var anime_title_15st          = $("#15st-home-title");
var anime_title_16st          = $("#16st-home-title");
var anime_title_17st          = $("#17st-home-title");

var anime_img_1st           = $("#1st-home-img");
var anime_img_2st           = $("#2st-home-img");
var anime_img_3st           = $("#3st-home-img");
var anime_img_4st           = $("#4st-home-img");
var anime_img_5st           = $("#5st-home-img");
var anime_img_6st           = $("#6st-home-img");
var anime_img_7st           = $("#7st-home-img");
var anime_img_8st           = $("#8st-home-img");
var anime_img_9st           = $("#9st-home-img");
var anime_img_10st          = $("#10st-home-img");
var anime_img_11st          = $("#11st-home-img");
var anime_img_12st          = $("#12st-home-img");
var anime_img_13st          = $("#13st-home-img");
var anime_img_14st          = $("#14st-home-img");
var anime_img_15st          = $("#15st-home-img");
var anime_img_16st          = $("#16st-home-img");


var anime_info_1st           = $("#1st-home-info");
var anime_info_2st           = $("#2st-home-info");
var anime_info_3st           = $("#3st-home-info");
var anime_info_4st           = $("#4st-home-info");
var anime_info_5st           = $("#5st-home-info");
var anime_info_6st           = $("#6st-home-info");
var anime_info_7st           = $("#7st-home-info");
var anime_info_8st           = $("#8st-home-info");
var anime_info_9st           = $("#9st-home-info");
var anime_info_10st          = $("#10st-home-info");
var anime_info_15st          = $("#15st-home-info");
var anime_info_16st          = $("#16st-home-info");
var anime_info_17st          = $("#17st-home-info");

var anime_href_1st           = $("#1st-home-href");
var anime_href_2st           = $("#2st-home-href");
var anime_href_3st           = $("#3st-home-href");
var anime_href_4st           = $("#4st-home-href");
var anime_href_5st           = $("#5st-home-href");
var anime_href_6st           = $("#6st-home-href");
var anime_href_7st           = $("#7st-home-href");
var anime_href_8st           = $("#8st-home-href");
var anime_href_9st           = $("#9st-home-href");
var anime_href_10st          = $("#10st-home-href");
var anime_href_11st          = $("#11st-home-href");
var anime_href_12st          = $("#12st-home-href");
var anime_href_13st          = $("#13st-home-href");
var anime_href_14st          = $("#14st-home-href");
var anime_href_15st          = $("#15st-home-href");
var anime_href_16st          = $("#16st-home-href");
var anime_href_17st          = $("#17st-home-href");

var news_favorite           = $("#news_favorite");
var news                    = $("#news");
var news_family             = $("#news_family");
var news_health             = $("#news_health");
var news_entertain          = $("#news_entertain");
var news_cars               = $("#news_cars");
var news_travel             = $("#news_travel");
var news_digital            = $("#news_digital");             
var news_sports             = $("#news_sports");
var news_talk               = $("#news_talk");
var news_business           = $("#news_business");
var news_world              = $("#news_world");


var text_news0              = $(".text-box0");
var text_news               = $(".text-box1");
var text_news_health        = $(".text-box2");
var text_news_cars          = $(".text-box3");
var text_news_travel        = $(".text-box4");
var text_news_digital       = $(".text-box5");
var text_news_sport         = $(".text-box6");
var text_news_entertain     = $(".text-box7");
var text_news_talk          = $(".text-box8");
var text_news_business      = $(".text-box9");
var text_news_world         = $(".text-box10");



var Item_news_list          = [];
var Item_news_list_str      = [];
var Item_family_list        = [];
var Item_family_list_str    = [];
var Item_health_list        = [];
var Item_health_list_str    = [];
var Item_entertain_list     = [];
var Item_entertain_list_str = [];
var Item_cars_list          = [];
var Item_cars_list_str      = [];
var Item_travel_list        = [];
var Item_travel_list_str    = [];
var Item_digital_list       = [];
var Item_digital_list_str   = [];
var Item_sport_list         = [];
var Item_sport_list_str     = [];
var Item_talk_list          = [];
var Item_talk_list_str      = [];
var Item_business_list      = [];
var Item_business_list_str  = [];
var Item_world_list         = [];
var Item_world_list_str     = [];


var image_1                 = $(".u-image-1");
var image_2                 = $(".u-image-2");
var image_3                 = $(".u-image-3");
var image_4                 = $(".u-image-4");
var image_5                 = $(".u-image-5");
var image_6                 = $(".u-image-6");
var image_7                 = $(".u-image-7");
var image_8                 = $(".u-image-8");
var image_9                 = $(".u-image-9");
var image_10                = $(".u-image-10");
// ######### FAVORITE NEWS LOCAL #########
const LOCAL_Favorite    = "FAVORITE_NEWS";


// ######### GAME LOCAL #########
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
vid.volume = 0.3;

        



