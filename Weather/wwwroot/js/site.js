// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

$(document).ready(function(){
    $("select.citylist").change(function(){
        var selectedValue = $(this).children("option:selected").val();
        var cityName = document.getElementById('city');
        cityName.innerText = selectedValue;

    });
});
