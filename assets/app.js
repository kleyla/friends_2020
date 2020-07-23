$(function () {
  $("#btn-submit").click(function () {
    var pass = $("#password").val();
    $("#fill").empty();
    var contenido = getContenido(pass);
    $("#fill").append(contenido);
    // alert("hi");
  });
});
var passwods = [
  "landa",
  "andy",
  "rocio",
  "daniel",
  "knox",
  "jake",
  "wigner",
  "guille",
  "jandi",
  "ale",
  "fab",
  "pedro",
  "claudio",
  "nohemi",
  "gabi",
];

function toggleLamina(id) {
  if ($("#lamina" + id).hasClass("lamina" + id)) {
    $("#lamina" + id).removeClass("lamina" + id);
    $("#lamina" + id).addClass("show-lamina show-lamina" + id);
    $("#heart" + id).removeClass("heart" + id);
    $("#heart" + id).addClass("show-heart show-heart" + id);
    hidePestanas(id);
    $("#contenido" + id).css("display", "flex");
  } else {
    $("#lamina" + id).removeClass("show-lamina show-lamina" + id);
    $("#lamina" + id).addClass("lamina" + id);
    $("#heart" + id).removeClass("show-heart show-heart" + id);
    $("#heart" + id).addClass("heart" + id);
    $("#contenido" + id).css("display", "none");
    showPestanas(id);
  }
}

function hidePestanas(id) {
  for (i = 1; i < id; i++) {
    $("#lamina" + i).css("display", "none");
  }
}
function showPestanas(id) {
  for (i = 1; i < id; i++) {
    $("#lamina" + i).css("display", "block");
  }
}

function friendship() {
  modal.style.display = "block";
}
function getContenido(pass) {
  if (verificar_pass(pass)) {
    var img = '<img src="./assets/images/undraw_Appreciation_sjc1.svg" alt="">';
    var contenido = get_by_pass(pass);
    return img + contenido;
  } else {
    var error = '<p style="color: red;">Password incorrecto!</p>';
    return img + error;
  }
}
function verificar_pass(pass) {
  return passwods.includes(pass);
}
{
  /* <br> */
}
function get_by_pass(pass) {
  switch (pass) {
    case "landa":
      var p =
        "<p class='sms'>Siempre me sacas una sonrisa, incluso en los momentos de preocupacion, sigue siendo optimista alegrando a todos a tu alrededor! <br>Love u so much!</p>";
      return p;
    case "andy":
      var p =
        "<p class='sms'>La dulcura en persona! Siempre tienes palabras para el momento y sabes como apoyar. <br> I love u so much <3 </p>";
      return p;
    case "rocio":
      var p =
        "<p class='sms'>Uff! Toda la carrera a tu lado, eres una gran programadora, siempre me inspiras a seguir! <br> I love u <3 </p>";
      return p;
    case "daniel":
      var p =
        "<p class='sms'>Mi amigo el grillo.. Muchas gracias por recordarme lo que es correcto y lo que no. Ingeniero, ojala algún dia volvamos a ser compañeros! <br> Abrazos <3 </p>";
      return p;
    case "knox":
      var p =
        "<p class='sms'>El más relax! Eres un gran amigo, siempre me das los animos que necesito. Por más materias juntos! <br> Abrazos<3 </p>";
      return p;
    case "jake":
      var p =
        "<p class='sms'>Eres muy tierna.. con tus articulos, como la mochila de panda. Recuerda cuidarte, te quiero ver sana y muy feliz! <br> I love u <3 </p>";
      return p;
    case "wigner":
      var p =
        "<p class='sms'>El timido.. solo bromeo.. eres una gran persona y un buen amigo, Por más años de amistad!  <br> Abrazos <3 </p>";
      return p;
    case "guille":
      var p =
        "<p class='sms'>El inteligente y el más gracioso! Sabes muchas cosas y siempre estas dispuesto a ayudar a los demás, nunca cambies! <br> Abrazos <3 </p>";
      return p;
    case "jandi":
      var p =
        "<p class='sms'>Siempre con una sonrisa.. Gracias por tu amistad! Por más años juntas! <br> Te quiero <3 </p>";
      return p;
    case "ale":
      var p =
        "<p class='sms'>BBcita! La persona más amorosa del mundo! Gracias por tu amistad! <br> I love u <3 </p>";
      return p;
    case "fab":
      var p =
        "<p class='sms'>El más responsable! Gracias por tu amistad! Por una graduación feliz! <br> Abrazos<3 </p>";
      return p;
    case "pedro":
      var p =
        "<p class='sms'>Eres muy divertido e inteligente! Nunca pares de aprender! no sé porque lo digo.. eres imparable..  <br> Abrazos <3 </p>";
      return p;
    case "claudio":
      var p =
        "<p class='sms'>Científico!!! Me inspiras mucho, sé que conseguiras tus objetivos.<br> Abrazos <3 </p>";
      return p;
    case "nohemi":
      var p =
        "<p class='sms'>Una gran programadora! Me inspiras a seguir en el area.. Gracias por ser paciente y mostrarme nuevos caminos! Por más años juntas! <br> I love u <3 </p>";
      return p;
    case "gabi":
      var p =
        "<p class='sms'>La divertida Gabi! Eres una gran mujer que inspira, mucho cariño para tu hijo.. se lo extraña.. Sigue adelante.. tienes mi apoyo. <br> I love u <3 </p>";
      return p;
  }
  return contenido;
}
var modal = document.getElementById("myModal");

var span = document.getElementById("span-close");

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
