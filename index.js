function pow(a, b) {
  return a ** b;
}

const val = pow(2, 3);

function getFullName(firstName, lastName, middleName="") {
  return firstName + " " + middleName + " " + lastName;
}

const fullName = getFullName("Qasim", "Rizvi", "Raza");

window.addEventListener("load", function() {
  setTimeout(function() {
    document.getElementById("primary-loader").className += " hidden"
    document.getElementById("main-content").className = "show"
  }, 1000);
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})