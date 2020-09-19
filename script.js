$(document).ready(function(){

$.get(
   'http://data.fixer.io/api/latest',
   {'access_key': '41ba481cd96e340a6e9f42905443c8c9'},
   function(response) {
      console.log(response.rates.RUB);
      $('.course_usd').append((response.rates.RUB / response.rates.USD).toFixed(2))
     $('.course_eur').append((response.rates.RUB / response.rates.EUR).toFixed(2))   }
   
);

});