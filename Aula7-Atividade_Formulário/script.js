function validationForm() {
  let validationCode = document.forms["register"]["cod"].value;
  let validationName = document.forms["register"]["name"].value;
  let validationManufacturer = document.forms["register"]["manufacturer"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationGender = document.forms["register"]["radioGender"].value;
  let validationWayToPlay = document.forms["register"]["radioOneOff"].value;
  let validationNumberOfPlayers =
    document.forms["register"]["numberOfPlayers"].value;

  if (validationCode == "") {
    alert("O Código deve ser preenchido");
    return false;
  }
  if (validationName == "") {
    alert("O nome deve ser preenchido");
    return false;
  }
  if (validationManufacturer == "") {
    alert("O Nome do fabricante deve ser preenchido");
    return false;
  }
  if (validationDate == "") {
    alert("A data deve ser preenchida");
    return false;
  }
  if (validationGender == "") {
    alert("O Gênero deve ser preenchido");
    return false;
  }
  if (validationWayToPlay == "") {
    alert("A forma de jogar deve ser preenchida");
    return false;
  }
  if (validationNumberOfPlayers == "") {
    alert("O número de jogadores deve ser preenchido");
    return false;
  }

  alert("A validação ocorreu de forma correta");
}

function insert() {
  let cod = document.forms["register"]["cod"].value;
  let name = document.forms["register"]["name"].value;
  let manufacturer = document.forms["register"]["manufacturer"].value;
  let date = document.forms["register"]["date"].value;
  let gender = document.forms["register"]["radioGender"].value;
  let wayToPlay = document.forms["register"]["radioOneOff"].value;
  let numberOfPlayers = document.forms["register"]["numberOfPlayers"].value;

  let insert = window.document.getElementById("insertRow");

  insert.innerHTML = `
  <th scope="row">${cod}</th>
  <td>${name}</td>
  <td>${manufacturer}</td>
  <td>${date}</td>
  <td>${gender}</td>
  <td>${wayToPlay}</td>
  <td>${numberOfPlayers}</td>
  `;
}
