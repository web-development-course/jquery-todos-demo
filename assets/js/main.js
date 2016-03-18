var toggleComplete = function() {
    $(this).toggleClass('fa-check-circle').toggleClass('fa-circle-thin');
};

var removeTask = function() {
    var item = $(this).parent();
    item.addClass('animated hinge');
    setTimeout(function() {
        item.remove();
    }, 2000);
};

var addTask = function() {
    var text = $('.todos-input').val();
    $('<li class="list-group-item todos-item"><i class="fa fa-check-circle todos-item-check"></i>' + text + '<i class="fa fa-trash-o todos-item-trash"></i></li>').prependTo('.todos-list');
    $('.todos-input').val('').focus();
};

$('.todos-list').delegate('.todos-item-check', 'click', toggleComplete);
$('.todos-list').delegate('.todos-item-trash', 'click', removeTask);

$('.todos-button').click(addTask);