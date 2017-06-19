$(function () {
    $("#mostrarTodos").click(function () {
        $.ajax({
            url: 'mostrarTodos.php',
            type: 'POST',
            dataType: 'JSON',
            success: function (data) {
                var inmuebles = "<div>";
                for (var c = 0; c < data.length; c++) {
                    var infoinmueble = "<div><img width='25%' src='img/home.jpg'></img><strong></div><div>Dirección: </strong>" + data[c].Direccion + "<br>";
                        infoinmueble += "<strong>Ciudad: </strong>" + data[c].Ciudad + "<br>";
                        infoinmueble += "<strong>Teléfono: </strong>" + data[c].Telefono + "<br>";
                        infoinmueble += "<strong>Código Postal: </strong>" + data[c].Codigo_Postal + "<br>";
                        infoinmueble += "<strong>Tipo: </strong>" + data[c].Tipo + "<br>";
                        infoinmueble += "<strong>Precio: </strong>" + "<strong class='precioTexto'>" + data[c].Precio + "</strong><br>";
                        infoinmueble += "<a class='verMas' href='#'>VER MAS</a></div><hr>";
                        inmuebles += infoinmueble;
                }
                inmuebles += "</div>";
                $("#salida").html(inmuebles);
            }
        })
    });
});
