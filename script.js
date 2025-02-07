// your code here
let btn = document.querySelector("button")
let name = document.querySelector("#name")
let year = document.querySelector("#year")
btn.addEventListener("click", (e) => {
	e.preventDefault()
	let heading = document.querySelector("h3")
	if(name.value && year.value){
		heading.innerText = heading.innerText + `?name=${name.value}&year=${year.value}`
		name.value = ""
		year.value = ""
	}
	if(name.value){
		heading.innerText = heading.innerText + `?name=${name.value}`
		name.value = ""
	}
	if(year.value){
		heading.innerText = heading.innerText + `?year=${year.value}`
		year.value = ""
	}
})


