var user = document.querySelector('#user');
user.addEventListener('keyup', function(){
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');

    if(user.value.length == 0 || user.value.length<6){
        user.style.border = '5px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
        return false;
    }else{
        user.style.border = '5px solid green';
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
})

var pass = document.querySelector('#pass');
pass.addEventListener('keyup', function(){
    var p_times = document.querySelector('.p_times');
    var p_check = document.querySelector('.p_check');

    if(pass.value.length == 0 || pass.value.length<8){
        pass.style.border = '5px solid red';
        p_times.style.display = 'block';
        p_check.style.display = 'none';
    }else{
        pass.style.border = '5px solid green';
        p_times.style.display = 'none';
        p_check.style.display = 'block';
    }
})

function validate(){
    if(user.value == 0 || user.value.length <6){
        document.getElementById('error').innerHTML = 'please fill the required fields';
        return false;

    }else if( pass.value == 0 || pass.value <8){
        document.getElementById('error').innerHTML = 'please fill the required fields';
        return false;
    }else{
        alert('Successfuly validated bro');
    }
    
}