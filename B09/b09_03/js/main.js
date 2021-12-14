$(document).ready(function () {
  var keys = Object.keys(localStorage)

  var last_key = keys[keys.length-1]
  console.log(typeof(keys))
  console.log(last_key)
  if(last_key != null){
    let start_obj = localStorage.getItem(last_key)
    var text = [JSON.parse(start_obj)]
    var array_input = Object.values(text[0])

    $('#fname').val(array_input[0]);
    $('#email').val(array_input[1]);
    $('#phone').val(array_input[2]);
    $('#job').val(array_input[3]);
  }
  var obj = {
    "fullname": $('#fname').val(),
    "email": $('#email').val(),
    "phone": $('#phone').val(),
    "job": $('#job').val()
  } 

  $("#Submit").click(function(){
    var obj = {
      "fullname": $('#fname').val(),
      "email": $('#email').val(),
      "phone": $('#phone').val(),
      "job": $('#job').val()
    }
    localStorage.setItem(obj["fullname"], JSON.stringify(obj));
  });
  $("#Delete").click(function(){
    var obj = {
      "fullname": $('#fname').val(),
      "email": $('#email').val(),
      "phone": $('#phone').val(),
      "job": $('#job').val()
    }
    localStorage.removeItem(obj["fullname"], JSON.stringify(obj));
  });

  
}); 





//   var fname = $('#fname').text();
//   localStorage.setItem('fullname', fname);
//   $('#fname').on('blur', function() {
//       var newfullname = $(this).text();
//       localStorage.setItem('fname', newfullname);
//       alert(localStorage.getItem('fname'));
//   });


// <label for="serveri"> Server: </label> <input type='text' name="server" id="saveServer"/> 
// <button onclick="save_data()" type="button" value="Save" id="Save">Save</button> 

// var save_button = document.getElementById('Submit')
// var del_button = document.getElementById('Delete')

// save_button.onclick = saveData;
// del_button.onclick = del_data;

// var obj = {
//   "fullname": $('#fname').val(),
//   "email": $('#email').val(),
//   "phone": $('#phone').val(),
//   "job": $('#job').val()
// }
// alert($('#fname').val())

// function saveData(){
//   localStorage.setItem("fullname", JSON.stringify(obj));
//   document.getElementById("fname") = localStorage.getItem(JSON.parse("fullname"));
//   console.log(taskName, JSON.parse(val));
// }
// function del_data(){
//   var input = document.getElementById("fname").innerText;
//   document.getElementById("fname") = localStorage.removeItem("fullname");
// }