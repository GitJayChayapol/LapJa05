let user = prompt("Username");
let password = prompt("Password");

function login(user, password) {
  if (user === "admin" && password === "P@ssw0rd") {
    alert("Done");
  } else alert("Try agian");
}

login(user, password);

// function login() {
//   if ((user = "admin" && password == "P@ssw0rd")) {
//     alert("Done");
//   } else alert("Try Again");
// }
// login();

// function login1(user) {
//   if (user == "admin") {
//     alert("done");
//   } else alert("Sorry");
// }
// function login2(password) {
//   if (password == "P@ssw0rd") {
//     alert("done");
//   } else alert("Sorry");
// }
// login1();
// login2();
