
//Native JS
var modal = document.getElementById('myModal'),
    btn   = document.getElementById('myBtn'),
    span  = document.getElementById('close'),
    sign  = document.getElementById('sign');

    btn.onclick = function() {
        modal.style.display = 'block';
        modal.style.zIndex = '10';
    }
    span.onclick = function() {
        modal.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    sign.addEventListener("click", function(){
        modal.style.display = 'none';
        swal("You are logged in!", "Good luck!", "success");
    });

   //jQuery
    $(document).ready(function (){

        var $parent,
            windowWidth,
            windowHeight;
       
        $('#reg').on('click', function() {
            alert('This part of page is not yet ready');
        });
        $('#sign').on('click', function() {
            alert('This part of page is not yet ready');
        });
        $('#readBtn').on('click', function(){
            $('.read-content').fadeIn();
        });
        $('#hideBtn').on('click', function() {
            $('.read-content').fadeOut();
        });

        
    });



