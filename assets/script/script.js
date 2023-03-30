

function pesotodollar(x) {
  let y = .018
  return parseFloat(x) * parseFloat(y);
}

function pesotoyen(x) {
  let y = 2.44
  return parseFloat(x) * parseFloat(y);
}

function pesotoriyal(x) {
  let y = .069
  return parseFloat(x) * parseFloat(y);
}

function pesotoeuro(x) {
  let y = 0.017
  return parseFloat(x) * parseFloat(y);
}







function display() {
  let firstValue = document.getElementById("dollar").value;

  document.getElementById("disUS").innerHTML = pesotodollar(firstValue).toFixed(2) ;
  document.getElementById("disYen").innerHTML = pesotoyen(firstValue).toFixed(2) ;
  document.getElementById("disRiyal").innerHTML = pesotoriyal(firstValue).toFixed(2) ;
  document.getElementById("disEuro").innerHTML = pesotoeuro(firstValue).toFixed(2) ;
}

