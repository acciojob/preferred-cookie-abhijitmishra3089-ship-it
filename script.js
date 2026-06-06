const form = document.querySelector("form");
const fontSize = document.getElementById("fontsize");
const fontColor = document.getElementById("fontcolor");
window.onload = function () {
  const cookies = document.cookie.split("; ");
  cookies.forEach(cookie => {
    const [key, value] = cookie.split("=");
    if (key === "fontsize") {
      fontSize.value = value;
      document.body.style.fontSize = value + "px";
    }
    if (key === "fontcolor") {
      fontColor.value = value;
      document.body.style.color = value;
    }
  });
};
form.addEventListener("submit", function (e) {
  e.preventDefault();
  document.cookie = `fontsize=${fontSize.value}`;
  document.cookie = `fontcolor=${fontColor.value}`;
  document.body.style.fontSize = fontSize.value + "px";
  document.body.style.color = fontColor.value;
});