
const LOCAL             = "info_task";

var TODOLIST            = []
var btnAddTask          = $("#add-task");

var list_all_task       = $("#area-list-task")
var btnCancel           = $("#btn-cancel")
var btnDelete           = '.btn-delete';
var btnEdit             = '.btn-edit';
var btnSubmit           = $("#btn-submit");
var taskName            = $("#input-name");
var level               = $("#input-level");
var task_id             = $(".task_id");
var btnSearch           = $("#btn-search");
var inputSearch         = $(".form-control");
var markName            = $(".task_name");

var sortNameASC         = $("#name_asc");
var sortNameDESC        = $("#name_desc");
var sortLevelASC        = $("#level_asc");
var sortLevelDESC       = $("#level_desc");

var sortName           = $("#sort_name");

var ready_Edit          = 0;
var index               = 0;
var update_task         = TODOLIST;

