//your JS code here. If required.
const input=document.getElementById("fontsize");
const color=document.getElementById("fontcolor");
const form = document.querySelector("form");
form.addEventListener('submit',(e)=>{
	e.preventDefault();
    document.cookie = `fontsize=${input.value}`;
    document.cookie = `fontcolor=${color.value}`;
})