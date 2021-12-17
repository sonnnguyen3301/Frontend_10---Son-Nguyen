$(document).ready(function () {
    // ShowLocalData(getlocal(CONTACT));
    list_task();

    $(btnAddTask).click(function(){
        $(this).toggleClass('btn-info');
        $("#area-form").toggleClass('d-none');
        $(this).toggleClass('btn-danger');
    });
    $(btnSubmit).click(function(e){
        e.preventDefault();
        var obj = {
            key     : key_tag,
            taskName: taskName.val(),
            level   : level.val()
        }
        saveLocal(key_tag, obj);
        new_task(obj);
        key_tag += 1;
    });
    $(btnCancel).click(function(e){
        $(btnAddTask).toggleClass('btn-info');
        $("#area-form").toggleClass('d-none');
        $(btnAddTask).toggleClass('btn-danger');
    });
});



// $(btnSendContact).click(function(e){
//     e.preventDefault();
//     var obj = {
//         fullname: fullname.val(),
//         email: email.val(),
//         phone: phone.val(),
//         job: job.val()
//     }
//     saveLocal(CONTACT, obj);
// });
// $(btnDeleteStorage).click(function(){
//     removelocal(CONTACT);
//     DeleteLocalData();
// });