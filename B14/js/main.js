let start = getlocal(LOCAL);
let user_name = $('#username').val();
let password = $('#password').val();
if(user_name == start.name && password == start.password){
    let str = `
       Xin chào mừng ${user_name} đến với trang chủ!
    `;
    loadPageContent("main_tab",str);
}
toggleC("#main","active");

$(document).ready(function () {
    $(nav).click(function (e) { 
        e.preventDefault();
        if( check == 0 ){
            alert("Xin hãy nhập đầy đủ thông tin");
        }
        else{
            let str = `
            Xin chào mừng ${start.name} đến với trang chủ!
            `;
            let page = $(this).data('name');
            loadPageContent(page,str);
            toggleC("#sign","active");
            toggleC("#main","active");
        }
    });

    $(submit).click(function (e) { 
        e.preventDefault();
        let user_name = $('#username').val();
        let password = $('#password').val();
        if(user_name == "" || password == "")
        {
            alert("Xin hãy nhập đầy đủ thông tin");
        }
        else{
            checkUser(user_name,password);
            check = 1;
        }
    });
});

