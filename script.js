let button = document.querySelector(".button");

button.addEventListener("click" , ()=>{
	button.classList.add("active");

	setTimeout(()=>{
		button.classList.remove("active");//remove active class after 6s
		document.querySelector("i").classList.replace("bx-cloud-download", "bx-heart")
		document.querySelector(".button-text").innerText = "LOVE YOU";

	},6000)//1s = 1000ms

})