
let rotate = () => {
	$('.swap').css({
		 transform  : 'rotate(360deg)',
		'transition': '0.7s'
	});
}

$(".swap").on('click',function(){
	rotate();
});

// $('.reset').click(function(){
// 	let toAdd = $("input[name=first]").val();
// 	console.log(toAdd);
// });

$.ajax({
    url:'https://api.kursna-lista.info/b7b80a59415046c33449b6a2a96bd4d8/kursna_lista',
    method:'GET',
    dataType:'jsonp'
    
})
.done(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})

// let getRates = (from,to) => {
// 	let rates = document.createElement('rates');
// 	rates.setAttribute('src','https://api.kursna-lista.info/b7b80a59415046c33449b6a2a96bd4d8/kursna_lista');
// 	document.body.appendChild(rates);
// }


	// let checker = document.querySelector(".options1");
	// let option = checker.options[checker.selectedIndex].value;


let switchCurrency = () => {
	let temp = document.querySelector(".options1").value;
	document.querySelector('.options1').value = document.querySelector('.options2').value;
	document.querySelector('.options2').value = temp;
}


// let populate = (s1,s2) => {
// 	var s1 = document.getElementById('options1');
// 	var s2 = document.getElementById('options2');
// 	s2.innerHTML = "";
// 	if(s1.value === "EUR"){
// 		s2.innerHTML = $('.options2').html("<select><option>RSD</option><option>USD</option>");
// 	}else if(s1.value === "RSD"){
// 		let change2 = $('.options2').html("<select><option>EUR</option><option>USD</option>");
// 	}else if(s1.value === "USD"){
// 		let change3 = $('.options2').html("<select><option>EUR</option><option>RSD</option>");
// 	}
// 	for(let option in optionArray){
// 		var pair = optionArray[option].split("|");
// 		var newOption = document.createElement("option");
// 		newOption.value = pair[0];
// 		newOption.innerHTML = pair[1];
// 		s2.options.add(newOption);
// 	}
// }
