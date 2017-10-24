$(document).ready(function(){
                    var url = "http://localhost:5000/user";
                    var dados = {};
                    var address = {};
                    
                    $('button').click(function(){
                        dados.name = $('#name').val();
                        dados.age = $('#age').val();
                        dados.gender = $('#gender').val();
                        dados.password = $("#password").val();
                        dados.email = $('#email').val();
                        dados.hability = $('#hability').val();
                        address.street = $('#street').val();
                        address.number = $('#number').val();
                        address.district = $('#district').val();
                        address.zipCode = $('#zipcode').val();
                        address.city = $('#city').val();
                        address.state = $('#state').val();              
                        address.nation = $('#nation').val(); 
                        dados.address = address;
                        dados.tag = $('#tags').val();
                        console.log(dados);
                        $.ajax({
                            type: "POST",
                            url: url,
                            data: dados,
                            dataType: 'json',
                            success: function(result){
                                if(result.status === 201)
                                    $('#result').text("Usuário criado com sucesso");                       
                                else
                                    $('#result').text(result.message);
                            },
                            erro: function(){
                                console.log("Error");
                            }
                        })
                        });

})
