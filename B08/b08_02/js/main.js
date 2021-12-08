let eleB = document.getElementsByClassName("box");
let max_height = 0;
for (let i = 0;i<eleB.length;i++){
    let eleB_Part = eleB[i].offsetHeight;
    max_height = (max_height <= eleB_Part) ? eleB_Part : max_height
}
for (let i = 0;i<eleB.length;i++){
    let background_Box_Color = "yellow";
    if(i % 2) background_Box_Color = "red"
    eleB[i].style.height = max_height+"px"
    eleB[i].style.backgroundColor = background_Box_Color
}