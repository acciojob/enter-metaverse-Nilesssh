//your JS code here. If required.
let button = document.querySelector("button");
let para = document.querySelector("#status");
button.addEventListener("click",()=>{
	para.innerHTML = "";
	para.insertAdjacentHTML("beforeend","<h1>Entered Metaverse</h1>");
})