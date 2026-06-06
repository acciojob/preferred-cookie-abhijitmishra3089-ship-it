//your JS code here. If required.
const input=document.getElementById("fontsize");
const color=document.getElementById("fontcolor");
const form = document.querySelector("form");
window.onload = function () {
  const cookies = document.cookie.split("; ");
  cookies.forEach(cookie => {
    const [key, value] = cookie.split("=");
    if (key === "input") {
      input.value = value;
      document.body.style.input = value + "px";
    }
    if (key === "color") {
      color.value = value;
      document.body.style.color = value;
    }
  });
};
form.addEventListener('submit',(e)=>{
	e.preventDefault();
    document.cookie = `input=${input.value}`;
    document.cookie = `color=${color.value}`;
	document.body.style.input = input.value + "px";
    document.body.style.color = color.value;
})