document.addEventListener("DOMContentLoaded", function() {
  var btnCopy = document.getElementById("copy");
  btnCopy.addEventListener("click", Copy);

  var btnClear = document.getElementById("clear");
  btnClear.addEventListener("click", Clear);
});

function Copy() {
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

function Clear() {
  document.getElementById("s_fname").value = "";

  document.getElementById("s_lname").value = "";

  document.getElementById("s_country").value = "select"; //pay attention

  document.getElementById("s_lcity").value = "";

  document.getElementById("s_laddress").value = "";
}
