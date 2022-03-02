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
    

    // ##### BUTTON SEARCH ######
    $(btnSearch).click(function(){     
        if(search_test >= 2){
            if(inputSearch.val() == ""){
                alert("Xin hãy nhập trước khi tìm kiếm.")
            }
            else{
                let id = ListSearchNewByText(inputSearch.val());
                if(list_searched.length == 0){
                    alert("Không có tin tức nào có tên "+inputSearch.val()+"...")
                    inputSearch.val("");
                  }
                else{
                    list = list_searched;
                    Item_current_list_str  = load_news(id, list_searched);
                    $(count_search).text("Kết quả tìm kiếm có "+list_searched.length+" tin tức...");
                    (function(name) {
                      var container = $('.pagination-' + name);
                      var options = {
                        dataSource: Item_current_list_str,
                        pageSize: 6,
                        callback: function (response, pagination) {
                          var dataHtml = ''
                          $.each(response, function (index, item) {
                            dataHtml += '<li>' + item + '</li>';
                          });
                          container.prev().html(dataHtml);
                        }
                      };
                      container.pagination(options);
                  
                    })($(id[0]).attr('id'));
                  }
            }}
        else{search_test += 1;}
    });
    // ##### BUTTON SEARCH ENTER ######
    $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){ 
            let id = ListSearchNewByText(inputSearch.val());
            let page_id = "";
            if (GetList_Id() == "#news_favorite"){
              page_id = "news_favorite";
            }
            else page_id = ($(id[0]).attr('id') == "news") ? "news_latest" : $(id[0]).attr('id'); 
            if(list_searched.length == 0){ 
                alert("Không có tin tức nào có tên "+inputSearch.val()+"...")
                inputSearch.val("");
              }
            else{
                list = list_searched;
                Item_current_list_str  = load_news(id, list_searched);
                $(count_search).text("Kết quả tìm kiếm có "+list_searched.length+" tin tức...");
                (function(name) {
                  var container = $('.pagination-' + name);
                  var options = {
                    dataSource: Item_current_list_str,
                    pageSize: 6,
                    callback: function (response, pagination) {
                      var dataHtml = ''
                      $.each(response, function (index, item) {
                        dataHtml += '<li>' + item + '</li>';
                      });
                      container.prev().html(dataHtml);
                    }
                  };
                  container.pagination(options);
              
                })(page_id);
              }
        }
    });

    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/tin-moi-nhat.rss',
        beforeSend: function() {
            loading("#news");
        },
        success: function (response) {
            $(".lds-roller").hide();
            var items           = $(response).find('item');
            Item_news_list      = get_API(items, Item_news_list);
            Item_current_list_str  = load_news(news, Item_news_list);
            change_bgImage(image_1[0],Item_news_list[0].img);
            change_bgImage(image_2[0],Item_news_list[1].img);
            change_bgImage(image_3[0],Item_news_list[2].img);
            change_bgImage(image_4[0],Item_news_list[3].img);
            change_Text(text_news0[0],Item_news_list[0].text);
             (function(name) {
              var container = $('.pagination-' + name);
              var options = {
                dataSource: Item_current_list_str,
                pageSize: 6,
                callback: function (response, pagination) {
                  var dataHtml = ''
                  $.each(response, function (index, item) {
                    dataHtml += '<li>' + item + '</li>';
                  });
                  container.prev().html(dataHtml);
                }
              };
              container.pagination(options);
          
            })('news_latest');
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/gia-dinh.rss',
        
        beforeSend: function() {
            loading("#news_family");
        },
        success: function (response) {
            var items = $(response).find('item');
            Item_family_list = get_API(items, Item_family_list);
            Item_current_list_str  = load_news(news_family, Item_family_list);
            change_bgImage(image_1[1],Item_family_list[0].img);
            change_Text(text_news[0],Item_family_list[0].text);
            (function(name) {
                var container = $('.pagination-' + name);
                var options = {
                  dataSource: Item_current_list_str,
                  pageSize: 6,
                  callback: function (response, pagination) {
                    var dataHtml = ''
                    $.each(response, function (index, item) {
                      dataHtml += '<li>' + item + '</li>';
                    });
                    container.prev().html(dataHtml);
                  }
                };
                container.pagination(options);
            
              })('news_family');
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/suc-khoe.rss',
        beforeSend: function() {
            loading("#news_health");
        },
        success: function (response) {
            var items = $(response).find('item');
            Item_health_list = get_API(items, Item_health_list);
            Item_current_list_str  = load_news(news_health, Item_health_list);
            change_bgImage(image_2[1],Item_health_list[0].img);
            change_Text(text_news_health[0],Item_health_list[0].text);
            (function(name) {
                var container = $('.pagination-' + name);
                var options = {
                  dataSource: Item_current_list_str,
                  pageSize: 6,
                  callback: function (response, pagination) {
                    var dataHtml = ''
                    $.each(response, function (index, item) {
                      dataHtml += '<li>' + item + '</li>';
                    });
                    container.prev().html(dataHtml);
                  }
                };
                container.pagination(options);
            
              })('news_health');
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/oto-xe-may.rss',
        beforeSend: function() {
            loading("#news_cars");
        },
        success: function (response) {
            var items = $(response).find('item');
            Item_cars_list = get_API(items, Item_cars_list);
            Item_current_list_str  = load_news(news_cars, Item_cars_list);
            change_bgImage(image_3[1],Item_cars_list[0].img);
            change_Text(text_news_cars[0],Item_cars_list[0].text);
            (function(name) {
                var container = $('.pagination-' + name);
                var options = {
                  dataSource: Item_current_list_str,
                  pageSize: 6,
                  callback: function (response, pagination) {
                    var dataHtml = ''
                    $.each(response, function (index, item) {
                      dataHtml += '<li>' + item + '</li>';
                    });
                    container.prev().html(dataHtml);
                  }
                };
                container.pagination(options);
            
              })('news_cars');
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/du-lich.rss',
        beforeSend: function() {
            loading("#news_travel");
        },
        success: function (response) {
            var items = $(response).find('item');
            Item_travel_list = get_API(items, Item_travel_list);
            Item_travel_list_str  = load_news(news_travel, Item_travel_list);
            change_bgImage(image_4[1],Item_travel_list[0].img);
            change_Text(text_news_travel[0],Item_travel_list[0].text);
            (function(name) {
                var container = $('.pagination-' + name);
                var options = {
                  dataSource: Item_current_list_str,
                  pageSize: 6,
                  callback: function (response, pagination) {
                    var dataHtml = ''
                    $.each(response, function (index, item) {
                      dataHtml += '<li>' + item + '</li>';
                    });
                    container.prev().html(dataHtml);
                  }
                };
                container.pagination(options);
            
              })('news_travel');
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/so-hoa.rss',
        beforeSend: function() {
            loading("#news_digital");
        },
        success: function (response) {
            var items = $(response).find('item');
            Item_digital_list = get_API(items, Item_digital_list);
            Item_current_list_str  = load_news(news_digital, Item_digital_list);
            change_bgImage(image_5[0],Item_digital_list[0].img);
            change_Text(text_news_digital[0],Item_digital_list[0].text);
            (function(name) {
                var container = $('.pagination-' + name);
                var options = {
                  dataSource: Item_current_list_str,
                  pageSize: 6,
                  callback: function (response, pagination) {
                    var dataHtml = ''
                    $.each(response, function (index, item) {
                      dataHtml += '<li>' + item + '</li>';
                    });
                    container.prev().html(dataHtml);
                  }
                };
                container.pagination(options);
            
              })('news_digital');
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/the-thao.rss',
        beforeSend: function() {
            loading("#news_sports");
        },
        success: function (response) {
            var items = $(response).find('item');
            Item_sport_list = get_API(items, Item_sport_list);
            Item_current_list_str  = load_news(news_sports, Item_sport_list);
            change_bgImage(image_6[0],Item_sport_list[0].img);
            change_Text(text_news_sport[0],Item_sport_list[0].text);
            (function(name) {
                var container = $('.pagination-' + name);
                var options = {
                  dataSource: Item_current_list_str,
                  pageSize: 6,
                  callback: function (response, pagination) {
                    var dataHtml = ''
                    $.each(response, function (index, item) {
                      dataHtml += '<li>' + item + '</li>';
                    });
                    container.prev().html(dataHtml);
                  }
                };
                container.pagination(options);
            
              })('news_sports');
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/giai-tri.rss',
        beforeSend: function() {
            loading("#news_entertain");
        },
        success: function (response) {
            var items = $(response).find('item');
            Item_entertain_list = get_API(items, Item_entertain_list);
            Item_current_list_str  = load_news(news_entertain, Item_entertain_list);
            change_bgImage(image_7[0],Item_entertain_list[0].img);
            change_Text(text_news_entertain[0],Item_entertain_list[0].text);
            (function(name) {
                var container = $('.pagination-' + name);
                var options = {
                  dataSource: Item_current_list_str,
                  pageSize: 6,
                  callback: function (response, pagination) {
                    var dataHtml = ''
                    $.each(response, function (index, item) {
                      dataHtml += '<li>' + item + '</li>';
                    });
                    container.prev().html(dataHtml);
                  }
                };
                container.pagination(options);
            
              })('news_entertain');
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/tam-su.rss',
        beforeSend: function() {
            loading("#news_talk");
        },
        success: function (response) {
            var items = $(response).find('item');
            Item_talk_list = get_API(items, Item_talk_list);
            Item_current_list_str  = load_news(news_talk, Item_talk_list);
            change_bgImage(image_8[0],Item_talk_list[0].img);
            change_Text(text_news_talk[0],Item_talk_list[0].text);
            (function(name) {
                var container = $('.pagination-' + name);
                var options = {
                  dataSource: Item_current_list_str,
                  pageSize: 6,
                  callback: function (response, pagination) {
                    var dataHtml = ''
                    $.each(response, function (index, item) {
                      dataHtml += '<li>' + item + '</li>';
                    });
                    container.prev().html(dataHtml);
                  }
                };
                container.pagination(options);
            
              })('news_talk');
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/kinh-doanh.rss',
        beforeSend: function() {
            loading("#news_business");
        },
        success: function (response) {
            var items = $(response).find('item');
            Item_business_list = get_API(items, Item_business_list);
            Item_current_list_str  = load_news(news_business, Item_business_list);
            change_bgImage(image_9[0],Item_business_list[0].img);
            change_Text(text_news_business[0],Item_business_list[0].text);
            (function(name) {
                var container = $('.pagination-' + name);
                var options = {
                  dataSource: Item_current_list_str,
                  pageSize: 6,
                  callback: function (response, pagination) {
                    var dataHtml = ''
                    $.each(response, function (index, item) {
                      dataHtml += '<li>' + item + '</li>';
                    });
                    container.prev().html(dataHtml);
                  }
                };
                container.pagination(options);
            
              })('news_business');
        }
    });
    $.ajax({
        type:"GET",
        url:'https://vnexpress.net/rss/the-gioi.rss',
        beforeSend: function() {
            loading("#news_world");
        },
        success: function (response) {
            var items = $(response).find('item');
            Item_world_list = get_API(items, Item_world_list);
            Item_current_list_str  = load_news(news_world, Item_world_list);
            change_bgImage(image_10[0],Item_world_list[0].img);
            change_Text(text_news_world[0],Item_world_list[0].text);
            (function(name) {
                var container = $('.pagination-' + name);
                var options = {
                  dataSource: Item_current_list_str,
                  pageSize: 6,
                  callback: function (response, pagination) {
                    var dataHtml = ''
                    $.each(response, function (index, item) {
                      dataHtml += '<li>' + item + '</li>';
                    });
                    container.prev().html(dataHtml);
                  }
                };
                container.pagination(options);
            
              })('news_world');
        }
    });
    $.ajax({
        type:"GET",
        url:"https://www.pnj.com.vn/blog/gia-vang/",
        beforeSend: function() {
            loading(".u-container-layout-2");
        },
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
// ##### NEWS - FAVORITE ######
let favorites = getLocalStorage(LOCAL_Favorite);
if(!jQuery.isEmptyObject(favorites)){
    list_favorite = favorites;
    list_favorite_str  = load_news(news_favorite, favorites);
    (function(name) {
      var container = $('.pagination-' + name);
      var options = {
        dataSource: list_favorite_str,
        pageSize: 6,
        callback: function (response, pagination) {
          var dataHtml = ''
          $.each(response, function (index, item) {
            dataHtml += '<li>' + item + '</li>';
          });
          container.prev().html(dataHtml);
        }
      };
      container.pagination(options);
  
    })('news_favorite');
  }




