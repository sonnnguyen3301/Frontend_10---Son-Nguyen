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
            <div style="font-size: small;">${step}. ${index_button} - ${note}</div>
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
            <div style="font-size: small;">${step}. ${index_button} - You got the right button. Congrats!!!</div>
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
        alert("The game was over! Please chose to play again.");
        return;
    }
    else if(hint_number <= 3){
        rep_hint = `<div style="font-size: small;">Your almost got the right button!!!</div>`
    }
    else if(hint_number <= 6){
        rep_hint = `<div style="font-size: small;">Your choise near 6 or less the right one!!!</div>`
    }
    else if(hint_number <= 10){
        rep_hint = `<div style="font-size: small;">Your choise near 10 or less the right one!!!</div>`
    }
    else{
        rep_hint = `<div style="font-size: small;">Please choose more to get the hints!!!</div>`
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

