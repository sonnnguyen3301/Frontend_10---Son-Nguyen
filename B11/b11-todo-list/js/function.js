// ##### SAVE #######
let saveLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    Reset_form();
}
// ##### GET LOCAL ######
let getlocal = (key) => {
    let data = localStorage.getItem(key);
    data = data ? JSON.parse(data) : [];
    return data
}

// ##### REMOVE LOCAL ######
let removelocal = () =>{
    localStorage.removeItem(LOCAL);
}

let removeTask = (indexValueOfArray) =>{
    TODOLIST.splice(indexValueOfArray,1);
}
// ##### SHOW LOCAL - DATA ######
let ShowLocalData = (data) =>{
    if(data){
        taskName.val(data.fullname);
    }
}
// ##### DELETE LOCAL - DATA ######
let DeleteLocalData = () =>{
    taskName.val("");
}
let bg_level = (element) =>{
    let classtype;
    switch(element){
        case "High":
            classtype = "bg-danger"
            break;
        case "Medium":
            classtype = "bg-info"
            break;
        default:
            classtype = "bg-dark"
            break;
    }
    return classtype
}
// ##### ADD TASK ######

let load_task = (TODOLIST) =>{
    str ='';
    TODOLIST.forEach((element,index) => {
        str += 
        `
        <tr>
            <td class="task_id">${index+1}</td>
            <td class="task_name">${element.taskName}</td>
            <td><span class="badge ${bg_level(element.level)}">${element.level}</span></td>
            <td>
                <button class="btn btn-edit btn-warning">Edit</button>
                <button class="btn btn-delete btn-danger">Delete</button>
            </td>
        </tr>
        `
    });
    list_all_task.html(str);
}

// ##### LOAD TASK ######
let list_task = () =>{
    var keys = Object.keys(localStorage)
    for(let i = 1; i <= keys.length; i++){
        let data = getlocal(i);
        new_task(data);
    }
}
// ##### RESET FORM ######
let Reset_form = () =>{
    taskName.val("");
    level.val(0);
}

// ##### RANDOM ID LOCAL - DATA ######
let randstr = (prefix)=>{
    return Math.random().toString(36).replace('0.',prefix || '');
}

// ##### GET FORM - SUBMIT ######

let getForm = ()=>{
    if(ready_Edit != 0)
        if($(btnAddTask).text() == 'Close'){
            console.log(ready_Edit);
            return;
        }
        else{
            $(btnAddTask).toggleClass('btn-info');
            $(btnAddTask).text(($(btnAddTask).text() == 'Add Task') ? 'Close' : 'Add Task').fadeIn();
            $("#area-form").toggleClass('d-none');
            $(btnAddTask).toggleClass('btn-danger');
        }
    else{
        $(btnAddTask).toggleClass('btn-info');
        $(btnAddTask).text(($(btnAddTask).text() == 'Add Task') ? 'Close' : 'Add Task').fadeIn();
        $("#area-form").toggleClass('d-none');
        $(btnAddTask).toggleClass('btn-danger');
    }
}

// ##### SEARCH TASK - TEXT ######

let ListSearchTaskByText = (text)=>{
    var searchList  = [];
    var regex = new RegExp(text, "gi");
    TODOLIST.forEach((element,index) => {
        let taskH_Name = element.taskName;
        if(regex.test(taskH_Name)){
            taskH_Name = taskH_Name.replace(regex,'<mark class="highlight">'+text+'</mark>')
            let obj = {
                id      : element.id,
                taskName: taskH_Name,
                level   : element.level
            }
            searchList.push(obj);
        }
    });
    return searchList
}   

// ##### SEARCH HIGHLIGHT - TEXT ######

let MarkHightLightText = (text)=>{
    var searchList  = [];
    var regex = new RegExp(text, "gi");
    replaceText = string_input.replace(regex,'<mark class="highlight">'+str1+'</mark>')
    $("markName").innerHTML = replaceText;
    return searchList
}   

// ##### SORT ASC vs DESC - NAME ######

let SortAscByName = ()=>{
    let sortList  = [];
    let NameListSorted = [];
    TODOLIST.forEach((element) => {
      sortList.push(element.taskName);
    });
    sortList.sort();
    sortList.forEach((element) =>{
        for(let i = 0;i < TODOLIST.length; i++){
            if(element == TODOLIST[i].taskName){
                NameListSorted.push(TODOLIST[i]);
                break;
            }
        }
    })
    return NameListSorted;
} 

let SortDescByName = ()=>{
    let sortList  = [];
    let NameListSorted = [];
    TODOLIST.forEach((element) => {
      sortList.push(element.taskName);
    });
    sortList.sort();
    sortList.reverse();
    sortList.forEach((element) =>{
        for(let i = 0;i < TODOLIST.length; i++){
            if(element == TODOLIST[i].taskName){
                NameListSorted.push(TODOLIST[i]);
                break;
            }
        }
    })
    return NameListSorted;
} 

// ##### SORT ASC vs DESC - LEVEL ######

let SortAscByLevel = ()=>{
    let sortList  = [];
    let LevelListSorted = [];
    TODOLIST.forEach((element) => {
      sortList.push(element.level);
    });
    sortList.sort();
    sortList.forEach((element) =>{
        for(let i = 0;i < TODOLIST.length; i++){
            if(element == TODOLIST[i].level){
                LevelListSorted.push(TODOLIST[i]);
                break;
            }
        }
    })
    return LevelListSorted;
} 

let SortDescByLevel = ()=>{
    let sortList  = [];
    let LevelListSorted = [];
    TODOLIST.forEach((element) => {
      sortList.push(element.level);
    });
    sortList.sort();
    sortList.reverse();
    sortList.forEach((element) =>{
        for(let i = 0;i < TODOLIST.length; i++){
            if(element == TODOLIST[i].level){
                LevelListSorted.push(TODOLIST[i]);
                break;
            }
        }
    })
    return LevelListSorted;
} 
