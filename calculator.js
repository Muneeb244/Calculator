var field = document.getElementById("field");
var btn = document.getElementsByClassName('btn');


for (var i = 0; i < btn.length; i++) {
    if (btn[i].innerHTML == '=') {
        btn[i].addEventListener('click', function () {
            field.value = eval(field.value);
        });
    }
    else if(btn[i].innerHTML == 'C'){
        btn[i].addEventListener('click', function () {
            field.value = '';
        });
    }
    else {
        btn[i].addEventListener('click', function (e) {
            field.value += e.target.innerHTML;
        });
    }
};