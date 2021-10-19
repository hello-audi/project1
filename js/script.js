function myFunction() {
  var checkBox = document.getElementById("dnewsletter");
  var text = document.getElementById("text");
  if (!checkBox.checked == true)
  {
    text.style.display = "none";
  } 
  else 
  {
     text.style.display = "block";
  }
}

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

