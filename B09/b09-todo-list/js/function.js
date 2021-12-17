// ##### SAVE #######
let saveLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    taskName.val("");
}
// ##### GET LOCAL ######
let getlocal = (key) => {
    let data = localStorage.getItem(key);
    data = data ? JSON.parse(data) : data;
    return data
}

// ##### REMOVE LOCAL ######
let removelocal = (key) =>{
    localStorage.removeItem(key);
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

// ##### ADD TASK ######
let new_task = (obj) =>{
    let level;
    let classtype;
    switch(obj.level){
        case "2":
            level = "High";
            classtype = "bg-danger"
            break;
        case "1":
            level = "Medium";
            classtype = "bg-info"
            break;
        default:
            level = "Small";
            classtype = "bg-dark"
            break;
    }
    var task = $(`
    <tr>
    <td> ${obj.key} </th>
    <td> ${obj.taskName}</td>
    <td><span class="badge ${classtype}">${level}</span></td>
    <td>
        <button class="btn btn-warning">Edit</button>
        <button id="btn-delete" class="btn btn-danger">Delete</button>
    </td>
    </tr>`)
    $("#area-list-task").append(task);
}

// ##### LOAD TASK ######
let list_task = () =>{
    var keys = Object.keys(localStorage)
    for(let i = 1; i <= keys.length; i++){
        let data = getlocal(i);
        new_task(data);
    }
}