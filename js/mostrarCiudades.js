                $(document).ready(function() {
                    $.ajax({
                            type: "POST",
                            url: "mostrarCiudades.php",
                            success: function(response)
                            {
                                $('#selectCiudad').append(response).fadeIn();                            
                            }
                    });

                });



