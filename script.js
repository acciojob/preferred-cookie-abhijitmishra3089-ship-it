//your JS code here. If required.
const input=document.getElementById("fontsize");
const color=document.getElementById("fontcolor");
const form = document.querySelector("form");
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
form.addEventListener('submit',(e)=>{
	e.preventDefault();
    document.cookie = `fontsize=${input.value}`;
    document.cookie = `fontcolor=${color.value}`;
	document.body.style.fontSize = input.value + "px";
    document.body.style.color = color.value;
})