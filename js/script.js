function smbt(){

	var signup = document.getElementById("submit");
	document.getElementById("submit").addEventListener("click", function() 
		{
			var output = "Welcome to the ITM family, " + document.forms["form"]["fname"].value + " " + document.forms["form"]["lname"].value;
			alert(output);
  		});
	}
window.addEventListener('load', smbt);