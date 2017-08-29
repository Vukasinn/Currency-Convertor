


 	
 
// let rotate = () => {
// 	$('.swap').css({
// 		 transform  : 'rotate(360deg)',
// 		'transition': '0.7s'
// 	});
// }

// $(".swap").on('click',function(e){
// 	e.preventDefault();
// 	console.log('this is clicked');
// 	rotate();
// });

// $('.reset').click(function(){
// 	let toAdd = $("input[name=first]").val();
// 	console.log(toAdd);
// });

var changeCurrency = function (event) {
    var cash = ['RSD', 'EUR', 'USD'];
    $("#options2").empty();   
    var currency;
    if(event){
        currency = $(this).val().toUpperCase();
    } else{
        currency = 'EUR';
    }
    
    if(cash.includes(currency)){
        var index = cash.indexOf(currency);
        cash.splice(index, 1);
    }
    for(var i = 0; i <= 1; i++){
        var option = $("<option>");
            option.attr({
                "value":cash[i],
                "class":cash[i]
            });
            option.html(cash[i]);
        $("#options2").append(option);    
    }
}

changeCurrency();
$('#options1').on('change', changeCurrency);

var changeCurrency2 = function (event) {
    var cash = ['RSD', 'EUR', 'USD'];
    $("#options1").empty();   
    var currency;
    if(event){
        currency = $(this).val().toUpperCase();
    } else{
        currency = 'EUR';
    }
    
    if(cash.includes(currency)){
        var index = cash.indexOf(currency);
        cash.splice(index, 1);
    }
    for(var i = 0; i <= 1; i++){
        var option = $("<option>");
            option.attr({
                "value":cash[i],
                "class":cash[i]
            });
            option.html(cash[i]);
        $("#options1").append(option);    
    }
}

changeCurrency();
$('#options2').on('change', changeCurrency2);

// var firstLeft = $('.Euros1').val().toUpperCase();

// var secondLeft = $('.Dinars1').val().toUpperCase();

// var thirdLeft = $('.Dollars1').val().toUpperCase();

// var firstRight = $('.Euros2').val().toUpperCase();

// var secondRight = $('.Dinars2').val().toUpperCase();

// var thirdRight = $('.Dollars2').val().toUpperCase();


// let selectOne = $('.Euros1').val();
// 	console.log(selectOne);

let checker;
let option;
let checker2;
let option2;

$.ajax({
    url:'https://api.kursna-lista.info/b7b80a59415046c33449b6a2a96bd4d8/kursna_lista',
    method:'GET',
    dataTypes:'jsonp'
})
.done(function(data){
	
	
	$('.firstInput').keyup(function(){
		checker2 = document.querySelector(".options2");
		option2 = checker2.options[checker2.selectedIndex].value;
		 checker = document.querySelector(".options1");
		option = checker.options[checker.selectedIndex].value;
			if(option == "EUR" && option2 == "RSD"){
				
				   console.log(data.result);
				   let firstValue = $('.firstInput').val();
				   let euroValue = firstValue * data.result.eur.sre;
				   parseFloat(euroValue).toFixed(2);
				   let secondValue = $('.secondInput').value;
				   document.getElementById('secondInput').value = euroValue;
				   console.log(euroValue);
				   console.log(secondValue);
				
			}else if(option == "USD" && option2 == "RSD"){
				  
				   console.log(data.result);
				   let firstValue = $('.firstInput').val();
				   let dollarValue = firstValue * data.result.usd.sre;
				   parseFloat(dollarValue).toFixed(2);
				   let secondValue = $('.secondInput').value;
				   document.getElementById('secondInput').value = dollarValue;
				   console.log(dollarValue);
				   console.log(secondValue);
				
			}else if(option == "EUR" && option2 == "USD"){
				
					console.log(data.result);
					let dollars = $('.firstInput').val();
					let euros = dollars * (119.2134 / data.result.usd.sre);
					document.getElementById('secondInput').value = euros;
				    console.log(dollars);
				    console.log(euros);
				
			}else if (option == "RSD" && option2 == "EUR") {
					
					   console.log(data.result);
					   let firstValue = $('.firstInput').val();
					   let euroValue = firstValue / data.result.eur.sre;
					   euroValue.toFixed(2);
					   let secondValue = $('.secondInput').value;
					   document.getElementById('secondInput').value = euroValue;
					   console.log(euroValue);
					   console.log(secondValue);
				
			}else if (option == "RSD" && option2 == "USD") {
				
				   console.log(data.result);
				   let firstValue = $('.firstInput').val();
				   let dollarValue = firstValue / data.result.usd.sre;
				   dollarValue.toFixed(2);
				   let secondValue = $('.secondInput').value;
				   document.getElementById('secondInput').value = dollarValue;
				   console.log(dollarValue);
				   console.log(secondValue);
				
			}else if (option == "USD" && option2 == "EUR") {
				
					console.log(data.result);
					let euros = $('.firstInput').val();
					let dollars = euros * (data.result.usd.sre / 119.2134);
					document.getElementById('secondInput').value = dollars;
				    console.log(dollars);
				    console.log(euros);
				
			};

		})
	})

.catch(function(err){
    console.log(err);
})







// let getRates = (from,to) => {
// 	let rates = document.createElement('rates');
// 	rates.setAttribute('src','https://api.kursna-lista.info/b7b80a59415046c33449b6a2a96bd4d8/kursna_lista');
// 	document.body.appendChild(rates);
// }


	


$('.swap').click(function(){
	let firstSlctVal = document.querySelector('#options1').value.toUpperCase();
	let secondSlctVal = document.querySelector('#options2').value.toUpperCase();
	document.querySelector("#options2").value = firstSlctVal;
	document.querySelector("#options1").value = secondSlctVal; 
	console.log(firstSlctVal);
	console.log(secondSlctVal);
	let temp2 = document.querySelector('.firstInput').value;
	document.querySelector('.firstInput').value = document.querySelector('.secondInput').value;
	document.querySelector('.secondInput').value = temp2;
});



// var checkerBaybe = () => {
// 	var input = $('.firstInput').val();
// 	input = parseInt(input);
// 	console.log(typeof input);
// 	var noVal = $('.firstInput');
// 	if(typeof input !== 'number'){
// 		$(noVal).addClass('red');
// 	}
// }

