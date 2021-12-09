function getElements(str,word,new_word) { 
    str = str.replace(word, "<a style=\"border-bottom-style:dashed;border-bottom-width:thin;text-decoration:none\" rel=\"speechbubble3\" class=\"addspeech\" href=\"#\">"+new_word+"</a>"); 
    return str 
} 
function change_word(string_input,list_word,res_word,id){
    for( i in list_word){
        string_input = getElements(string_input,list_word[i],res_word)
        document.getElementById(id).innerHTML = string_input; 
    }
}

let res_word = "Frontend"
let id = "box"

let string_input = document.getElementById(id).innerText;
const regex = /frontend/gi;
list_word = string_input.match(regex); 
change_word(string_input,list_word,res_word,id)


