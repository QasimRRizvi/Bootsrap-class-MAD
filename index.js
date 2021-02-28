function pow(a, b) {
  return a ** b
}

const val = pow(2, 3);
console.log(val);

function getFullName(firstName, lastName, middleName="") {
  return firstName + " " + middleName + " " + lastName;
}

const fullName = getFullName("Qasim", "Rizvi", "Raza");
console.log(fullName)