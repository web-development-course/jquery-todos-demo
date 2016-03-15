var toggleComplete = function() {
    $(this).toggleClass('fa-check-circle').toggleClass('fa-circle-thin');
};

var removeTask = function() {
    $(this).parent().remove();
};

var addTask = function() {
    var text = $('.todos-input').val();
    $('<li class="list-group-item todos-item"><i class="fa fa-check-circle todos-item-check"></i>' + text + '<i class="fa fa-trash-o todos-item-trash"></i></li>').prependTo('.todos-list');
    $('.todos-input').val('');
}

$('.todos-list').delegate('.todos-item-check', 'click', toggleComplete);
$('.todos-list').delegate('.todos-item-trash', 'click', removeTask);

$('.todos-button').click(addTask);