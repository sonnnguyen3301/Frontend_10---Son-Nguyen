// ##### SAVE #######
let saveLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
// ##### GET LOCAL ######
let getlocal = (key) => {
    let data = localStorage.getItem(key)
    if(data){ 
        data = JSON.parse(data)
    }
    return data
}
// ##### REMOVE LOCAL ######
let removelocal = (key) =>{
    localStorage.removeItem(key);
}
// ##### SHOW LOCAL - DATA ######
let ShowLocalData = (data) =>{
    if(data){
        fullname.val(data.fullname);
        email.val(data.email);
        phone.val(data.phone);
        job.val(data.job);
    }
}

// ##### DELETE LOCAL - DATA ######
let DeleteLocalData = () =>{
    fullname.val("");
    email.val("");
    phone.val("");
}