
var more=document.querySelectorAll(".more");


more.forEach(function(btn){
	btn.addEventListener('click',function() {
		if(btn.innerText == "Read More") {
			btn.innerText = "Read Less";
			//below code is use to replace class 
		 	btn.previousElementSibling.children[0].classList = "active";
		} else {
				btn.innerText = "Read More";
				btn.previousElementSibling.children[0].classList = "read-more";
			}
	});
});