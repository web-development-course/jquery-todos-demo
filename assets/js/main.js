var toggleComplete = function() {
    $(this).toggleClass('fa-check-circle').toggleClass('fa-circle-thin');
};

var removeTask = function() {
    $(this).parent().remove();
};

var addTask = function() {
    
}

$('.todos-item-check').click(toggleComplete);
$('.todos-item-trash').click(removeTask);
$('.todos-input').click(addTask);