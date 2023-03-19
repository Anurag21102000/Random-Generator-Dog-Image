const dog=document.getElementById('dog')

const generatedeRandomDog=()=>{
fetch('https://dog.ceo/api/breeds/image/random')
	.then(response => response.json())
	.then(response =>{
    console.log(response.message)
    dog.innerHTML=`<img src='${response.message}' width="500" height="600"'/>`
  } )
}
dog.onclick=()=>{
  generatedeRandomDog()
}
generatedeRandomDog()
