$(document).ready(function () { 
    let last_game = getLocalStorage(LOCAL);
    if(jQuery.isEmptyObject(last_game)){
        number_button(size);
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
    // ##### NEWS - FAVORITE ######
    let favorites = getLocalStorage(LOCAL_Favorite);
    if(!jQuery.isEmptyObject(favorites)){
        list_favorite = favorites;
        load_news(news_favorite, favorites);
    }

    // ##### BUTTON SEARCH ######
    $(btnSearch).click(function(){     
        if(search_test >= 2){
            if(inputSearch.val() == ""){
                alert("Xin hãy nhập trước khi tìm kiếm.")
            }
            else{
                let id = ListSearchNewByText(inputSearch.val());
                if(list_searched.length == 0){
                    inputSearch.val("");
                    alert("Không có tin tức nào có tên "+inputSearch.val()+"...")
                }
                else{
                    list = list_searched;
                    load_news(id, list_searched);
                    $(count_search).text("Kết quả tìm kiếm có "+list_searched.length+" tin tức...");
                }
            }}
        else{search_test += 1;}
    });
    // ##### BUTTON SEARCH ENTER ######
    $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){ 
            let id = ListSearchNewByText(inputSearch.val());
            if(list_searched.length == 0){ 
                inputSearch.val("");
                alert("Không có tin tức nào có tên "+inputSearch.val()+"...")
            }
            else{
                list = list_searched;
                load_news(id, list_searched);
                $(count_search).text("Kết quả tìm kiếm có "+list_searched.length+" tin tức...");
            }
        }
    });

    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/tin-moi-nhat.rss',
        success: function (response) {
            var items = $(response).find('item');
            Item_news_list = get_API(items, Item_news_list);
            load_news(news, Item_news_list);
            change_bgImage(image_1[0],Item_news_list[0].img);
            change_bgImage(image_2[0],Item_news_list[1].img);
            change_bgImage(image_3[0],Item_news_list[2].img);
            change_bgImage(image_4[0],Item_news_list[3].img);
            change_Text(text_news0[0],Item_news_list[0].text);
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/gia-dinh.rss',
        success: function (response) {
            var items = $(response).find('item');
            Item_family_list = get_API(items, Item_family_list);
            load_news(news_family, Item_family_list);
            change_bgImage(image_1[1],Item_family_list[0].img);
            change_Text(text_news[0],Item_family_list[0].text);
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/suc-khoe.rss',
        success: function (response) {
            var items = $(response).find('item');
            Item_health_list = get_API(items, Item_health_list);
            load_news(news_health, Item_health_list);
            change_bgImage(image_2[1],Item_health_list[0].img);
            change_Text(text_news_health[0],Item_health_list[0].text);
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/oto-xe-may.rss',
        success: function (response) {
            var items = $(response).find('item');
            Item_cars_list = get_API(items, Item_cars_list);
            load_news(news_cars, Item_cars_list);
            change_bgImage(image_3[1],Item_cars_list[0].img);
            change_Text(text_news_cars[0],Item_cars_list[0].text);
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/du-lich.rss',
        success: function (response) {
            var items = $(response).find('item');
            Item_travel_list = get_API(items, Item_travel_list);
            load_news(news_travel, Item_travel_list);
            change_bgImage(image_4[1],Item_travel_list[0].img);
            change_Text(text_news_travel[0],Item_travel_list[0].text);
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/so-hoa.rss',
        success: function (response) {
            var items = $(response).find('item');
            Item_digital_list = get_API(items, Item_digital_list);
            load_news(news_digital, Item_digital_list);
            change_bgImage(image_5[0],Item_digital_list[0].img);
            change_Text(text_news_digital[0],Item_digital_list[0].text);
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/the-thao.rss',
        success: function (response) {
            var items = $(response).find('item');
            Item_sport_list = get_API(items, Item_sport_list);
            load_news(news_sports, Item_sport_list);
            change_bgImage(image_6[0],Item_sport_list[0].img);
            change_Text(text_news_sport[0],Item_sport_list[0].text);
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/giai-tri.rss',
        success: function (response) {
            var items = $(response).find('item');
            Item_entertain_list = get_API(items, Item_entertain_list);
            load_news(news_entertain, Item_entertain_list);
            change_bgImage(image_7[0],Item_entertain_list[0].img);
            change_Text(text_news_entertain[0],Item_entertain_list[0].text);
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/tam-su.rss',
        success: function (response) {
            var items = $(response).find('item');
            Item_talk_list = get_API(items, Item_talk_list);
            load_news(news_talk, Item_talk_list);
            change_bgImage(image_8[0],Item_talk_list[0].img);
            change_Text(text_news_talk[0],Item_talk_list[0].text);
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/kinh-doanh.rss',
        success: function (response) {
            var items = $(response).find('item');
            Item_business_list = get_API(items, Item_business_list);
            load_news(news_business, Item_business_list);
            change_bgImage(image_9[0],Item_business_list[0].img);
            change_Text(text_news_business[0],Item_business_list[0].text);
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/the-gioi.rss',
        success: function (response) {
            var items = $(response).find('item');
            Item_world_list = get_API(items, Item_world_list);
            load_news(news_world, Item_world_list);
            change_bgImage(image_10[0],Item_world_list[0].img);
            change_Text(text_news_world[0],Item_world_list[0].text);
        }
    });
    $.ajax({
        type:"GET",
        url:"https://www.pnj.com.vn/blog/gia-vang/",
        error: function (request, error) {
            console.log(arguments);
            alert(" Can't do because: " + error);
        },
        success: function (response) {
            var LIST_GOLD_PRICE = [];
            var items = $(response).find('td');
            for(let i = 0; i < items.length ; i++){
                obj = {
                    name        : items[i].innerHTML,
                    price_buy   : items[i+1].innerHTML,
                    price_sell  : items[i+2].innerHTML,
                }
                i+=2;
                LIST_GOLD_PRICE.push(obj);
            }
            load_List(LIST_GOLD_PRICE);
        }
    });
    $.ajax({
        type:"GET",
        url:'https://www.24h.com.vn/du-bao-thoi-tiet-c568.html?province=12',
        error: function (request, error) {
            console.log(arguments);
            alert(" Can't do because: " + error);
        },
        success: function (response) {
            var items = $(response).find('.tabTop');
            let weather_tr = $(items).find('tr');
            $("#weather").html(weather_tr);
        }
    });
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
    number_button(size);
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

// ##### BUTTON - AUDIO GAME ######
$(myAudio).click(function (e) { 
    e.preventDefault();
    if(switch_sound == 1){
        switch_sound = 0;
        pauseAudio();
        $(".audio_active").attr("src", "./images/mute.png");
        
    }else{
        switch_sound = 1;
        $(".audio_active").attr("src", "./images/unmute.png");
        playAudio();
    }
});

// ##### BUTTON - FAVORITE NEWS ######
$('body').on('click','img',function(e){
    e.preventDefault();
    let img_attr    = $(this).attr("src");
    if(img_attr == "../images/—Pngtree—beautiful two heart design with_5720547.png"){
        $(this).attr("src", "../images/pngfind.com-diamond-frame-png-6525224.png");
    }else{
        $(this).attr("src", "../images/—Pngtree—beautiful two heart design with_5720547.png");
    }
})




