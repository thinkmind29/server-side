$(document).ready(function(){
    var url = "http://localhost:3000/user/login";
    var dado = {};

    $('button').click(function(){
        
        dado.email = $("#email").val();
        dado.password = $("#password").val();
        console.log(dado);

        $.ajax({
            type: "POST",
            url: url,
            dados: dado,
            dataType: 'json',
            success: function(result){
                if(result.status === 404)
                    $("#result2").text('Usuário ou senha incorretos');
                else
                    localStorage.setItem('user', JSON.stringify(result));
            },
            erro: function(){
                console.log('Error');
            }
        })
    })
})