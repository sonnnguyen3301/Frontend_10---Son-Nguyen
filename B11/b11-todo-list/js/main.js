$(document).ready(function () {
    TODOLIST = getlocal(LOCAL);
    load_task(TODOLIST);
    // ##### BUTTON SEARCH BUTTON ######
    $(btnSearch).click(function(){
        if(inputSearch.val() == ""){
            alert("Xin hãy nhập task trước khi submit.")
        }
        else{
            let listSearched = ListSearchTaskByText(inputSearch.val());
            console.log("listSearched",listSearched);
            if(listSearched.length == 0) alert("Không có task nào có tên "+inputSearch.val()+"...")
            else{
                load_task(listSearched);
                inputSearch.val("");
            }
        }
    });
    // ##### BUTTON SEARCH ENTER ######
    $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            let listSearched = ListSearchTaskByText(inputSearch.val());
            console.log("listSearched",listSearched);
            if(listSearched.length == 0) alert("Không có task nào có tên "+inputSearch.val()+"...")
            else{
                load_task(listSearched);
                inputSearch.val("");
            }   
        }
    });
    // ##### BUTTON SORT BUTTON ######
    $(sortNameASC).click(function(){
        load_task(SortAscByName());
        sortName.text(sortNameASC.text());
    });
    $(sortNameDESC).click(function(){
        load_task(SortDescByName());
        sortName.text(sortNameDESC.text());
    });
    $(sortLevelASC).click(function(){
        load_task(SortAscByLevel());
        sortName.text(sortLevelASC.text());
    });
    $(sortLevelDESC).click(function(){
        load_task(SortDescByLevel());
        sortName.text(sortLevelDESC.text());
    });

    // ##### BUTTON ADD TASK ######
    $(btnAddTask).click(function(){
        getForm();
    });

    // ##### BUTTON CANCEL ######
    $(btnCancel).click(function(){
        getForm();
        Reset_form();
    });

    // ##### BUTTON EDIT ######
    $(document).on('click',btnEdit,function(){
        ready_Edit = 1;
        getForm();
        index = $(this).closest("tr").find('.task_id').text();
        new_task = TODOLIST[parseInt(index) - 1];
    });

    // ##### BUTTON DELETE ######
    $(document).on('click',btnDelete,function() {
        let text = "Bạn có chắc muốn xóa task không?";
        if (confirm(text) == true) {
            let index = $(this).closest("tr").find('.task_id').text();
            removeTask(parseInt(index) - 1); 
            saveLocal(LOCAL, TODOLIST);
            TODOLIST = getlocal(LOCAL);
            load_task(TODOLIST);
        } else {
            text = "You canceled!";
        }
    }); 

    // ##### BUTTON SUBMIT ######
    $(btnSubmit).click(function(e){
        e.preventDefault();
        if(taskName.val() == ""){
            alert("Xin hãy nhập task trước khi submit.")
        }
        else 
        if(ready_Edit != 0){
            ready_Edit = 0;
            obj = {
                id      : new_task.id,
                taskName: taskName.val(),
                level   : $("#input-level option:selected").text()
            }
            TODOLIST[parseInt(index) - 1] = obj;
            saveLocal(LOCAL, TODOLIST);
            load_task(TODOLIST);
            Reset_form();
        }
        else{
            let obj = {
                id     : randstr(),
                taskName: taskName.val(),
                level   : $("#input-level option:selected").text()
            }
            TODOLIST.push(obj);
            saveLocal(LOCAL, TODOLIST);
            load_task(TODOLIST);
            Reset_form();
        }
    });
 
});



