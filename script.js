/*
1- Dom => Document object model =>Browser=> html 

// select element 
- id name class
// document =>object
// get=> select  set=>edit


*/
// id
// let pag=document.getElementById("pg")

// class  => collection ("array")

// let pag=document.getElementsByClassName("parg")[0]

// name  => collection ("array")
// let pag=document.getElementsByTagName("p")[2]
// pag.style.color="red"
// console.log(pag); 

// body

// let body=document.body;
// body.style.backgroundColor="gray"

// imgs
// let images=document.images
// console.log(images[0].alt);

// links

// let links=document.links
// console.log(links[0].href);

// form
// let forms=document.forms
// console.log(forms[0]);

//querySelector  =>  . # name
// let p=document.querySelector(".parg")

// querySelectorAll  => nodelist => array => index
// let p=document.querySelectorAll("#pg")[2]
// p.style.color='red'

// title
// console.log(document.title);
// let title=document.title="ayaat"
// console.log(document.title);

// inner - outer (html , text)

// let container=document.getElementById("container")
// console.log(container.outerHTML);
// console.log(container.innerHTML);
// console.log(container.outerText);

// container.innerHTML="<h1>Ayaat</h1>"
// container.outerHTML="<h1>Ayaat</h1>"
// container.innerText="<h1>Ayaat</h1>"
// container.outerText="<h1>Ayaat</h1>"
// container.textContent="<a href=''>ayaat</a>"

// Attributes

let images=document.getElementsByTagName("img")[0]
let images2=document.getElementsByTagName("img")[1]
// console.log(images.attributes);
// console.log(images.src);
// console.log(images.alt);
// hasAttributes()=> true or false
// console.log(images.hasAttributes());
// hasAttribute("src")
// console.log(images.hasAttribute("src"));
// images.src=images2.src
// images.alt="abd"

images.setAttribute('src',"https://images.pexels.com/photos/19845618/pexels-photo-19845618/free-photo-of-blue-and-white-texture-surface.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")

// images.setAttribute('alt',"ahh")
// console.log(images.getAttribute('src')); 
// images.title="sky"
// images.removeAttribute('alt')
// images.removeAttribute('src')

// style

// images.style.width="20px"
// images.style.height="50px"


// images.style.cssText=
//   "width:20px;height:50px;margin-bottom:10px"

images.classList.add("ayaat")
images.classList.add("jj" ,"hdhh")
images.classList.remove("hdhh")
images.classList.toggle("hdhh")





