function smbt()
{
	document.getElementById("submit").addEventListener("click", function() 
		{
			var output = "Welcome to the ITM family, " + document.forms["form"]["fname"].value + " " + document.forms["form"]["lname"].value;
			alert(output);
  		});

	document.getElementById("submit").addEventListener("click", function() 
		{
			var output = "You deserve the best from us!"
			alert(output);
  		});
}

window.addEventListener('load', smbt);
