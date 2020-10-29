

document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('labelFname').setAttribute("class", "required");
  document.getElementById('labelLname').setAttribute("class", "required");

  var btnCopy = document.getElementById("copy");
  btnCopy.addEventListener("click", Copy);

  var btnClear = document.getElementById("clear");
  btnClear.addEventListener("click", Clear);
});

function Copy() {
  if(document.getElementById('fname').value!="" && document.getElementById("lname").value!="")
  {

    var firstName = document.getElementById("fname").value;
    document.getElementById("s_fname").value = firstName;

    var lastName = document.getElementById("lname").value;
    document.getElementById("s_lname").value = lastName;

    var country = document.getElementById("country").value;
    document.getElementById("s_country").value = country;

    var city = document.getElementById("lcity").value;
    document.getElementById("s_lcity").value = city;

    var address = document.getElementById("laddress").value;
    document.getElementById("s_laddress").value = address;
  }
}

function Clear() {
  document.getElementById("s_fname").value = "";

  document.getElementById("s_lname").value = "";

  document.getElementById("s_country").value = "select"; //pay attention

  document.getElementById("s_lcity").value = "";

  document.getElementById("s_laddress").value = "";
}

function checkMandatory(){
if(document.getElementById('fname').value!="")
	document.getElementById('labelFname').setAttribute("class", "notrequired");
 else
   document.getElementById('labelFname').setAttribute("class", "required");

if(document.getElementById('lname').value!="")
    document.getElementById('labelLname').setAttribute("class", "notrequired");
 else
  document.getElementById('labelLname').setAttribute("class", "required");

}

