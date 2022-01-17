// ##### SAVE #######
let saveLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

// ##### GET LOCAL ######
let getlocal = (key) => {
    let data = localStorage.getItem(key);
    data = data ? JSON.parse(data) : [];
    return data
}

// ##### LOAD PAGE #####
let loadPageContent = (page,str) =>{
    $('#content').load(`content.html #${page}`,()=>{
        $('#introduction').html(str);
    });
}
// ##### CHECK INPUT #####
let checkUser = (name,password) =>{
    let str = `
       Xin chào mừng ${name} đến với trang chủ!
    `;
    if(name = start.name && password == start.password){
        loadPageContent("main_tab", str);    
        toggleC("#sign","active");
        toggleC("#main","active");
    }
    else
    {
        alert("Bạn đã nhập sai mật khẩu");
    }
}
// ##### CHECK INPUT #####
let toggleC = (id,clas) =>{
    $(id).toggleClass(clas);
}