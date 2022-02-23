
// ##### ADD NEWS ######
let load_news = (ele, Item_list) =>{
    str ='';
    Item_list.forEach((element) => {
        let index = list_favorite.map(object => object.title).indexOf(element.title);
        
        if(index != -1){
            console.log(list_favorite[index].id)
            element.id = list_favorite[index].id;
            element.type = "../images/—Pngtree—beautiful two heart design with_5720547.png"; 
        }
        str += 
        `   
        <item>
            <a href="${element.link}" target="_blank" rel="noopener noreferrer""><span>${element.title}</span>
            <div>
                <description class="item">
                    <img src="${element.img}">
                    <div class="detail">
                        <br>${element.text}
                        <pubdate>${element.date}</pubdate>
                    </div>
                </description>
            </div>
            </a>
            <img class="favorite-news" src="${element.type}" onclick="NewsBtnFavorite('${element.id}')" value=${element.id} value=${element.id} alt="Heart Coffee Mug - - Happy Valentine's Day Sister Animated Gif @clipartmax.com">
        </item>
        `
    });
    $(ele).html(str);
}// ##### BUTTON - FUNCTION ######
const NewsBtnFavorite = (id) => {
    let index = list_favorite.map(object => object.id).indexOf(id);
    if (index != -1){
        list_favorite.splice(index,1);
        load_news(myFavoriteNews,list_favorite);
        saveLocalFavorite(LOCAL_Favorite,list_favorite);  
    }
    else{
        
        let index_btn = List_All.map(object => object.id).indexOf(id);
        if(!jQuery.isEmptyObject(List_All[index_btn])) list_favorite.push(List_All[index_btn]);
        // console.log(List_All[index_btn])
        

        load_news(myFavoriteNews,list_favorite);
        saveLocalFavorite(LOCAL_Favorite,list_favorite);  
    }
} 

// ##### CHANGE BACKGROUND IMAGE ######
let change_bgImage = (element, url) =>{
    $(element).css("background-image", "url(" + url + ")");
}

// ##### CHANGE TEXT ######
let change_Text = (element, text) =>{
    $(element).text(text);
}


// ##### GET API ######
let get_API = (items, list) =>{
    for(let i = 0; i < items.length; i++){
        let str_find    = $(items);
        let CDATA_del   = str_find.find('description')[i].innerHTML.replace("<!\[CDATA\[", "").replace("\]\]>", "")
        let img_src     = str_find.find('description')[i].innerHTML.match(/ [^>]*src="[^"]*"[^>]*/gm);
        let obj = {
            id          : randstr(10),
            title       : str_find.find('title')[i].innerHTML,
            description : str_find.find('description')[i].innerHTML,
            date        : str_find.find('pubDate')[i].innerHTML,
            link        : str_find.find('link')[i].innerHTML,
            img         : (img_src == null) ? 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJkZWZhdWx0LWltYWdlLXNvbGlkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDAwIDI2NSIgc3R5bGU9IndpZHRoOiA0MDBweDsgaGVpZ2h0OiAyNjVweDsiPg0KPHJlY3QgZmlsbD0iI0M2RDhFMSIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNjUiLz4NCjxwYXRoIGZpbGw9IiNEOUUzRTgiIGQ9Ik0zOTUuMyw5Ni4yYy01LTAuOC02LjEsMS4xLTguNSwyLjljLTEtMi4zLTIuNi02LjItNy43LTVjMS41LTUuMy0yLjYtOC40LTcuNy04LjRjLTAuNiwwLTEuMiwwLjEtMS44LDAuMg0KCWMtMS44LTQuMS02LTYuOS0xMC43LTYuOWMtNi41LDAtMTEuOCw1LjMtMTEuOCwxMS44YzAsMC40LDAsMC45LDAuMSwxLjNjLTEuMi0wLjgtMi41LTEuMy0zLjktMS4zYy00LjMsMC03LjksNC4yLTcuOSw5LjQNCgljMCwxLjIsMC4yLDIuNCwwLjYsMy41Yy0wLjUtMC4xLTEtMC4xLTEuNi0wLjFjLTYuOSwwLTEyLjUsNS41LTEyLjcsMTIuNGMtMC45LTAuMi0xLjktMC40LTIuOS0wLjRjLTYuNCwwLTExLjcsNS4yLTEyLjUsMTEuOA0KCWMtMS4yLTAuNC0yLjUtMC42LTMuOS0wLjZjLTUuOSwwLTEwLjgsMy44LTEyLjEsOC45Yy0yLjQtMi01LjUtMy4yLTguOS0zLjJjLTYsMC0xMS4xLDMuNy0xMi44LDguOGMtMS41LTEuNC0zLjgtMi4zLTYuMy0yLjMNCgljLTIuMSwwLTQuMSwwLjYtNS41LDEuN2gtMC4xYy0xLjMtNS41LTYuMi05LjUtMTIuMS05LjVjLTIuNCwwLTQuNywwLjctNi42LDEuOWMtMS40LTAuNy0zLTEuMi00LjgtMS4yYy0wLjMsMC0wLjUsMC0wLjgsMA0KCWMtMS41LTQuMS01LjItNy05LjUtN2MtMy4xLDAtNS45LDEuNS03LjgsMy45Yy0yLjItNC44LTYuOC04LjItMTIuMi04LjJjLTUuNiwwLTEwLjUsMy43LTEyLjUsOC44Yy0yLjEtMC45LTQuNC0xLjUtNi45LTEuNQ0KCWMtNi44LDAtMTIuNSwzLjktMTQuNSw5LjNjLTAuMiwwLTAuNSwwLTAuNywwYy01LjIsMC05LjYsMy4yLTExLjQsNy44Yy0yLjctMi44LTctNC41LTExLjgtNC41Yy0zLjMsMC02LjQsMC45LTguOSwyLjMNCgljLTIuMS02LjUtOC0xMi4yLTE4LjEtOS45Yy0yLjctMi4zLTYuMy0zLjctMTAuMS0zLjdjLTIuNSwwLTQuOCwwLjYtNi45LDEuNmMtMi4yLTUuOS03LjktMTAuMS0xNC42LTEwLjFjLTguNiwwLTE1LjYsNy0xNS42LDE1LjYNCgljMCwwLjksMC4xLDEuNywwLjIsMi41Yy0yLjYtNS03LjgtOC40LTEzLjgtOC40Yy04LjMsMC0xNS4xLDYuNS0xNS42LDE0LjZjLTIuOS0zLjItNy01LjMtMTEuNy01LjNjLTcuNCwwLTEzLjUsNS4xLTE1LjIsMTINCgljLTIuOS0zLjUtOS44LTYtMTQuNy02djExOS4yaDQwMFYxMDJDNDAwLDEwMiw0MDAsOTcsMzk1LjMsOTYuMnoiLz4NCjxwYXRoIGZpbGw9IiM4RUE4QkIiIGQ9Ik00MDAsMjA2LjJjMCwwLTI1LjMtMTkuMi0zMy42LTI1LjdjLTEzLjQtMTAuNi0yMy4xLTEyLjktMzEuNy03cy0yMy45LDE5LjctMjMuOSwxOS43cy01OC45LTYzLjktNjEuNS02Ni40DQoJYy0xLjUtMS40LTMuNi0xLjctNS41LTAuOWMtNS4yLDIuNC0xNy42LDkuNy0yNC41LDEyLjdjLTYuOSwyLjktNDEtNTAuNy00OS42LTUzcy04NC4zLDgzLjMtMTAxLjQsNzUuMXMtMjYuOS0yLjMtMzUuNCwzLjUNCgljLTguNiw1LjktMTEsNS45LTE1LjksOC4ycy0xNy4xLTUuOS0xNy4xLTUuOVYyNjVjMCwwLDQwMCwwLjIsNDAwLDB2LTU4LjhINDAweiIvPg0KPHBhdGggZmlsbD0iIzdFOTZBNiIgZD0iTTMzMy40LDE3OWMtMTMuMS05LjMtNDAsNC42LTU1LjEsMTAuN2MtMjMuNiw5LjYtOTQtNTQuNC0xMDcuMi01OS43YzAsMC00LjIsMy43LTkuNiw3LjYNCgljLTMuNS0wLjQtOC40LTUuNy05LjktNC43Yy00LjYsMy4xLTE3LjgsMTUuNC0yOC4zLDI2LjZjLTEwLjUsMTEuMy0xMS43LDAtMTUuOC0wLjZjLTIuNS0wLjQtNTQuMSw0Mi41LTU4LjcsNDMuMQ0KCUMyMi4zLDIwNS4zLDAsMTk3LjUsMCwxOTcuNVYyNjVsNDAwLTAuMXYtNTMuM0M0MDAsMjExLjYsMzQ0LjgsMTg3LjEsMzMzLjQsMTc5eiIvPg0KPHBhdGggZmlsbD0iIzc4OEY5RSIgZD0iTTAsMjY0Ljl2LTU4LjZjMCwwLDguMiwxLjgsMTEuMyw1LjNjMy4xLDMuNiwyNi4xLTQuMiwyNi4xLDQuN3MwLjUsNC4yLDAuNSwxNC44YzAsMTAuNywyMy00LjIsMzguMS0xOC40DQoJczM0LjktNDkuMiwzNi0zNWMxLDE0LjItMTUuMSwzOS4yLTI0LDU2LjRDNzkuMSwyNTEuNCw1MS43LDI2NSw1MS43LDI2NUwwLDI2NC45eiIvPg0KPHBhdGggZmlsbD0iIzc4OEY5RSIgZD0iTTEwMCwyNjVjMCwwLDY2LjctMTI1LjEsNjguMy0xMTYuOHMtNi44LDI5LjcsMi4xLDI2LjFjOC45LTMuNiwxNC42LTE2LDE4LjgtOS41czE2LjIsMzguNiwyMS45LDMzLjgNCgljNS43LTQuNywyMS40LTEzLjEsMjIuNC02LjVjMSw2LjUtMSw1LjMtNS43LDIwLjJDMjIzLjEsMjI3LjEsMjAwLDI2NSwyMDAsMjY1aC0xMGMwLDAsNi0yNC44LDguNi0zNC45YzIuNi0xMC4xLTMuNy0xOS0xMi04LjMNCglzLTIzLDIyLTI0LDE3LjhzLTUuNy0zMC4zLTE4LjgtMTQuMmMtMTMsMTYtMzMuOCwzOS43LTMzLjgsMzkuN2gtMTBWMjY1eiIvPg0KPHBhdGggZmlsbD0iIzc4OEY5RSIgZD0iTTI0NSwyNjVjMCwwLDE5LjgtNTQuNywzMy40LTY0LjJzNTMuNy0yNy45LDQ2LjktMTMuNmMtNi44LDE0LjItMTEsMzQuNC0yMC4zLDQ5LjgNCgljLTkuNCwxNS40LTE4LjgsMjYuMS0xNC4xLDEzLjZjNC43LTEyLjUsNi40LTIzLjMsMy43LTIzLjFDMjcxLjMsMjI5LjEsMjYwLDI2NSwyNjAsMjY1SDI0NXoiLz4NCjwvc3ZnPg0K' : img_src[0].replace('src=',"").replaceAll('"',""),
            text        : (img_src == null) ? CDATA_del.substring(CDATA_del.indexOf('['), CDATA_del.length) : CDATA_del.substring(CDATA_del.indexOf('</br>')+5, CDATA_del.length),
            type        : "../images/pngfind.com-diamond-frame-png-6525224.png"
        }
        list.push(obj);
        List_All.push(obj);
    }
    return list;
} 
// ##### GET LIST - ID TYPE ######

let GetList_Id = ()=>{
    let pathname    = window.location.pathname;
    let id          = "";
    switch(pathname){
        case "/news_latest.html":
            list    = Item_news_list;
            id      = news;
            break;
        case "/news_family.html":
            list = Item_family_list;
            id      = news_family;
            break;
        case "/news_health.html":
            list = Item_health_list;
            id      = news_health;
            break;
        case "/news_entertain.html":
            list = Item_entertain_list;
            id      = news_entertain;
            break;
        case "/news_cars.html":
            list = Item_cars_list;
            id      = news_cars;
            break;
        case "/news_travel.html":
            list = Item_travel_list;
            id      = news_travel;
            break;
        case "/news_digital.html":
            list = Item_digital_list;
            id      = news_digital;
            break;
        case "/news_sports.html":
            list = Item_sport_list;
            id      = news_sports;
            break;
        case "/news_talk.html":
            list = Item_talk_list;
            id      = news_talk;
            break;
        case "/news_business.html":
            list = Item_business_list;
            id      = news_business;
            break;
        case "/news_world.html":
            list = Item_world_list;
            id      = news_world;
            break;
        case "/Favorite.html":
            list = list_favorite;
            id      = "#news_favorite";
            break;
        default:
            list = Item_news_list;
            id      = news;
            break;     
    }
    return id;
}

// ##### SEARCH NEW - TEXT ######

let ListSearchNewByText = (text)=>{
    list_searched = [];
    let ele_id  = GetList_Id(); 
    var regex = new RegExp(text, "gi");
    list.forEach((element,index) => {
        let NewsH_Name = element.title;
        if(regex.test(NewsH_Name)){
            NewsH_Name = NewsH_Name.replace(regex,'<mark class="highlight">'+text+'</mark>');
            let obj = {
                id          : element.id,
                title       : NewsH_Name,
                description : element.description,
                date        : element.date,
                link        : element.link,
                img         : element.img,
                text        : element.text,
                type        : element.type
            }
            list_searched.push(obj);
        }
    });
    return ele_id;
}  

// ##### SEARCH ANIMATION - TEXT ######

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
            search_test = 1;
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            search_test = 0;
        }
}
// ##### GAME ######

// ##### RANDOM ID LOCAL - DATA ######
let randstr = (prefix)=>{
    return Math.random().toString(36).replace('0.',prefix || '');
}

// ##### RANDOM ID LOCAL - DATA ######
let getRandomInteger = (min, max)=>{
    return Math.floor(Math.random() * (max - min) ) + min;
}

// ##### SAVE #######
let saveLocal = (key) => {
    let obj = {
        list_btn        : BUTTONLIST,
        list_life       : LIFE,
        note            : NOTE,
        step            : step,
        last_btn        : index_btn,
        right_button    : right_btn,
    }
    localStorage.setItem(key, JSON.stringify(obj));
}
// ##### GET LOCAL ######
let getLocalStorage = (key) => {
    let data = localStorage.getItem(key);
    data = data ? JSON.parse(data) : [];
    return data
}

// ##### ADD BUTTON NUMBER - LIFE ######
let number_button = (num_btn) => {
    right_btn = getRandomInteger(0,num_btn);
    for(let i = 0; i < num_btn; i++)
    {
        let obj = {
            id     : randstr(),
            color  : "#fff",
            size   : num_btn,
            right  : (i == right_btn) ? true : false
        }
        BUTTONLIST.push(obj);
    }
}
let number_life = (number_life) => {
    for(let i = 0; i < number_life; i++)
    {
        let obj = {
           background: "bg-info"
        }
        LIFE.push(obj);
    }
}

// ##### ADD BUTTON GAME ######
let load_button = (BUTTONLIST) =>{
    str ='';
    BUTTONLIST.forEach((element,index) => {
        str += 
        `   
            <button class="custom-btn btn btn-${element.size}" onclick="btnChosen('${element.id}')" value=${element.id} style="background-color:${element.color};">${index+1}</button>
        `
    });
    list_button.html(str);
}

// ##### ADD LIFE GAME ######
let load_Life = (LIFE) =>{
    str ='';
    LIFE.forEach((element,index) => {
        str += 
        `   
            <div class="life_num ${element.background}"></div>
        `
        });
        // }
    life_game.html(str);
}

// ##### ADD NOTIFY ######
let new_notify_wrong = (index_button) =>{
    let text =  "";
    let background_type = "";
    let note = (index_button < right_btn) ? "Your number lower than the secret button" : "Your number greater than the secret button";
    if(step <= 2){
        text = "Wrong!";
        background_type = "bg-warning";
    }
    else{
        text = "You Lose";
        background_type = "bg-danger";
        BUTTONLIST[right_btn].color = "MediumSpringGreen";
        note = "The Secret Button was "+ (right_btn + 1).toString()+"! Sorry...";
    }
    let str = 
        `   
        <div>
            <p class="${background_type}" style="color: white;">${text}</p>
            <div style="font-size: small; color:black;">${step}. ${index_button} - ${note}</div>
        </div>
        ` 
    NOTE += str;
    notify.append(str);
}
let new_notify_right = (index_button) =>{
    let text =  "You're Right";
    let background_type = "bg-success";

    let str =
        `   
        <div>
            <p class="${background_type}" style="color: white;">${text}</p>
            <div style="font-size: small; color:black;">${step}. ${index_button} - You got the right button. Congrats!!!</div>
        </div>
        ` 
    NOTE += str;
    notify.append(str);
}
let note_last_save = (text) => {
    notify.append(text);
}
// ##### ADD HINTS ######

let new_hint = () =>{
    hint_number = (right_btn > index_btn) ? right_btn - index_btn : index_btn - right_btn;
    let rep_hint = "";
    if(step == 0){
        alert("Please play at least 1 time to get the hint!!!");
        return;
    }
    else if(step == 3){
        alert("The game was over! Please choose to play again.");
        return;
    }
    else if(hint_number <= 3){
        rep_hint = `<div style="font-size: small; color:black;">Your almost got the right button!!!</div>`
    }
    else if(hint_number <= 6){
        rep_hint = `<div style="font-size: small; color:black;">Your choise near 6 or less the right one!!!</div>`
    }
    else if(hint_number <= 10){
        rep_hint = `<div style="font-size: small; color:black;">Your choise near 10 or less the right one!!!</div>`
    }
    else{
        rep_hint = `<div style="font-size: small; color:black;">Please choose more to get the hints!!!</div>`
    }
    let str =
        `   
        <div>
            <p class="bg-primary" style="color: white;">HINTS</p>
            ${rep_hint}
        </div>
        ` 
    NOTE += str;
    notify.append(str);
}

// ##### BUTTON - FUNCTION ######
const btnChosen = (id) => {
    let data = getLocalStorage(LOCAL); 
    step += 1;
    if(step > 3){
        return;
    }
    else{
        data = data.list_btn;
        id_input.val(id);
        index_btn = data.map(object => object.id).indexOf(id);

        if(data[index_btn].right == false){
            if(index_btn < right_btn){
                BUTTONLIST.forEach((element,index) => {
                    if(index <= index_btn) element.color = "Tomato";
                });
                new_notify_wrong(index_btn+1);

            }else{
                BUTTONLIST.forEach((element,index) => {           
                    if(index >= index_btn) element.color = "Tomato";
                });
                new_notify_wrong(index_btn+1);
            }
            LIFE.forEach((element,index) => {
                if(index < step){ element.background = "bg-danger"; }
            });
            if(step == 3){list_button.css("background-color", "DarkSlateGray");}
        }
        else{
            BUTTONLIST[index_btn].color = "MediumSpringGreen";
            $(bg_button).css({"animation": "color 5s infinite linear"});
            new_notify_right(index_btn+1);
            step = 3;
        }
    }
    load_Life(LIFE);
    load_button(BUTTONLIST);
}   
// ##### BUTTON - AUDIO ######
function playAudio() { 
    vid.play(); 
} 

function pauseAudio() { 
    vid.pause(); 
} 

// ##### ADD LIST GOLD PRICE ######
let load_List = (LIST_GOLD_PRICE) =>{
    str ='';
    for(let i = 1; i < LIST_GOLD_PRICE.length; i++)
    {
        str += 
        `   
        <tr>
            <td>${LIST_GOLD_PRICE[i].name}</td>
            <td>${LIST_GOLD_PRICE[i].price_buy}</td>
            <td>${LIST_GOLD_PRICE[i].price_sell}</td>
        </tr>
        `
    }
    $("#gold-price").html(str);
}

// ##### SAVE #######
let saveLocalFavorite = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
}
