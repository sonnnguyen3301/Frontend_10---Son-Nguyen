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
    
    // ##### HOME NEWS ######
    $.ajax({
      type:"GET",
      url:'https://www.theanimedaily.com/category/anime/',

      success: function (response) {
          var article = $(response).find('article');
          for(let i = 0; i<article.length;i++)
          {
            let img       = (i>=1) ? $(article[i]).find('.thumbnail-container img').attr('data-src') : $(article[i]).find('.thumbnail-container').attr('data-src');
            let text_info = (i>=1) ? $(article[i]).find('.jeg_post_excerpt p')[0].innerText : "";
            obj = {
              link :  $(article[i]).find('.jeg_post_title a').attr('href'),
              title : $(article[i]).find('.jeg_post_title a')[0].innerHTML,
              date : $(article[i]).find('.jeg_meta_date a')[0].innerHTML.replaceAll('<i class="fa fa-clock-o"></i>',""),
              info : text_info,
              img : img
            }
            Home_anime_list.push(obj);
          }
          
      }
  });
  $.ajax({
    type:"GET",
    url:'https://www.theanimedaily.com/category/anime/page/2/',

    success: function (response) {
        var article = $(response).find('article');
        for(let i = 0; i<article.length;i++)
        {
          let img       = (i>=1) ? $(article[i]).find('.thumbnail-container img').attr('data-src') : $(article[i]).find('.thumbnail-container').attr('data-src');
          let text_info = (i>=1) ? $(article[i]).find('.jeg_post_excerpt p')[0].innerText : "";
          obj = {
            link :  $(article[i]).find('.jeg_post_title a').attr('href'),
            title : $(article[i]).find('.jeg_post_title a')[0].innerHTML,
            date : $(article[i]).find('.jeg_meta_date a')[0].innerHTML.replaceAll('<i class="fa fa-clock-o"></i>',""),
            info : text_info,
            img : img
          }
          Home_anime_list.push(obj);
        }
        console.log(Home_anime_list)
        change_Text(anime_title_1st,Home_anime_list[1].title);
        change_Text(anime_info_1st,Home_anime_list[1].info);
        change_attrBgImg(anime_img_1st,Home_anime_list[1].img);
        change_attrHref(anime_href_1st,Home_anime_list[1].link);

        change_Text(anime_title_2st,Home_anime_list[0].title);
        change_Text(anime_info_2st,Home_anime_list[0].info);
        change_attrBgImg(anime_img_2st,Home_anime_list[0].img);
        change_attrHref(anime_href_2st,Home_anime_list[0].link);
        
        change_Text(anime_title_3st,Home_anime_list[2].title);
        change_Text(anime_info_3st,Home_anime_list[2].info);
        change_attrBgImg(anime_img_3st,Home_anime_list[3].img);
        change_attrHref(anime_href_3st,Home_anime_list[2].link);
        
        change_Text(anime_title_4st,Home_anime_list[3].title);
        change_Text(anime_info_4st,Home_anime_list[3].info);
        change_attrBgImg(anime_img_4st,Home_anime_list[2].img);
        change_attrHref(anime_href_4st,Home_anime_list[3].link);
        
        change_Text(anime_title_5st,Home_anime_list[4].title);
        change_Text(anime_info_5st,Home_anime_list[4].info);
        change_bgImage(anime_img_5st,Home_anime_list[4].img);
        change_attrHref(anime_href_5st,Home_anime_list[4].link);

        change_Text(anime_title_6st,Home_anime_list[5].title);
        change_Text(anime_info_6st,Home_anime_list[5].info);
        change_bgImage(anime_img_6st,Home_anime_list[5].img);
        change_attrHref(anime_href_6st,Home_anime_list[5].link);

        change_Text(anime_title_7st,Home_anime_list[6].title);
        change_Text(anime_info_7st,Home_anime_list[6].info);
        change_bgImage(anime_img_7st,Home_anime_list[6].img);
        change_attrHref(anime_href_7st,Home_anime_list[6].link);
        
        change_Text(anime_title_8st,Home_anime_list[7].title);
        change_Text(anime_info_8st,Home_anime_list[7].info);
        change_bgImage(anime_img_8st,Home_anime_list[7].img);
        change_attrHref(anime_href_8st,Home_anime_list[7].link);
        
        change_Text(anime_title_9st,Home_anime_list[8].title);
        change_Text(anime_info_9st,Home_anime_list[8].info);
        change_bgImage(anime_img_9st,Home_anime_list[8].img);
        change_attrHref(anime_href_9st,Home_anime_list[8].link);

        change_Text(anime_title_10st,Home_anime_list[9].title);
        change_Text(anime_info_10st,Home_anime_list[9].info);
        change_bgImage(anime_img_10st,Home_anime_list[9].img);
        change_attrHref(anime_href_10st,Home_anime_list[9].link);

        change_Text(anime_title_11st,Home_anime_list[10].title);
        change_bgImage(anime_img_11st,Home_anime_list[10].img);
        change_attrHref(anime_href_11st,Home_anime_list[10].link);

        change_Text(anime_title_12st,Home_anime_list[12].title);
        change_bgImage(anime_img_12st,Home_anime_list[12].img);
        change_attrHref(anime_href_12st,Home_anime_list[12].link);

        change_Text(anime_title_13st,Home_anime_list[13].title);
        change_bgImage(anime_img_13st,Home_anime_list[13].img);
        change_attrHref(anime_href_13st,Home_anime_list[13].link);

        change_Text(anime_title_14st,Home_anime_list[14].title);
        change_bgImage(anime_img_14st,Home_anime_list[14].img);
        change_attrHref(anime_href_14st,Home_anime_list[14].link);

        change_Text(anime_title_15st,Home_anime_list[15].title);
        change_Text(anime_info_15st,Home_anime_list[15].info);
        change_attrBgImg(anime_img_15st,Home_anime_list[15].img);
        change_attrHref(anime_href_15st,Home_anime_list[15].link);

        change_Text(anime_title_16st,Home_anime_list[16].title);
        change_Text(anime_info_16st,Home_anime_list[16].info);
        change_bgImage(anime_img_16st,Home_anime_list[16].img);
        change_attrHref(anime_href_16st,Home_anime_list[16].link);
        change_attrHref(anime_href_16st,Home_anime_list[16].link);
        
        change_Text(anime_title_17st,Home_anime_list[17].title);
        change_Text(anime_info_17st,Home_anime_list[17].info);
        change_attrHref(anime_href_17st,Home_anime_list[17].link);
    }
});
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
$('body').on('click','.favorite-news',function(e){
    e.preventDefault();
    let img_attr    = $(this).attr("src");
    if(window.location.pathname != "/index.html" && window.location.pathname != "/Home.html" )
    {
      if(img_attr == "../images/—Pngtree—beautiful two heart design with_5720547.png"){
        $(this).attr("src", "../images/pngfind.com-diamond-frame-png-6525224.png");
      }else{
          $(this).attr("src", "../images/—Pngtree—beautiful two heart design with_5720547.png");
      }
    }
})
$('body').on('click','.paginationjs a',function(e){
  e.preventDefault();
  document.documentElement.scrollTop = 0;
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






