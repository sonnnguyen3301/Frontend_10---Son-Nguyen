$(document).ready(function () {
  let data = getlocal(CONTACT);
  ShowLocalData(data)

  $(btnSendContact).click(function(e){
    e.preventDefault();
    var obj = {
      fullname: fullname.val(),
      email: email.val(),
      phone: phone.val(),
      job: job.val()
    }
    saveLocal(CONTACT, obj);
  });
  $(btnDeleteStorage).click(function(){
    removelocal(CONTACT);
    DeleteLocalData();
  });

}); 
