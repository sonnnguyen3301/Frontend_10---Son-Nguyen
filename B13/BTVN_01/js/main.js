
var input = document.querySelector('input[name=tags]');
var text_tags = $("#input_tags").val();
// initialize Tagify on the above input node reference
new Tagify(input);
$(document).ready(function () {
    $("#input_tags").on("change paste keyup", function() {
        console.log($(this).val()); 
        text_tags = JSON.parse($(this).val());
        console.log("Object.keys(text_tags).length;",); 
    });
    myFunction = () =>{
        let str = "";
        for(let i = 0; i < Object.keys(text_tags).length; i++)
        {
            if(i == Object.keys(text_tags).length - 1){
                str+= text_tags[i].value;
            }
            else
                str+= text_tags[i].value+", ";
        }
        console.log(str); 
        navigator.clipboard.writeText(str);
        alert("Copied the text: " + str);
    }
});