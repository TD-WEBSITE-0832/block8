// document.getElementById("bt").onclick = function () {
//   window.location.href = "neew.html";
// };





// let age =print('hello guys no ')
// alert('yes hello guys' + age + 'killer old')
// learnt





// let ag =alert('hello guys no ')
// prompt('yes hello guys' + ag + 'killer old')
// learnt





// let a =alert('hello guys no ')
// prompt('yes hello guys' + a + 'killer old')
// learnt

// let a=10
// let b=32323
// console.log(a+b)



// let yes=alert('I have phone name samsung s55 5g')
// confirm('now I have phone buy and me new phone name iphone 18 pro max')



// let no=confirm('my name ')
// alert(no)







// let mat=confirm('5*25')
// console.log("125"+mat)


// let mid=confirm(5+120)
// alert("defet"+mid)



// let mide=prompt("12-4=" + (12+12))
// confirm("8"+mide)
// alert("wou win"+mide)



// let mid=5*0
// alert(mid)

// let mid=12/2
// confirm(mid+(22*2))




// let x=20+3*(200+1)-(120-3000)
// alert(x)

// let a=20+3*(200+1)-(120-3000)
// alert(x+a)






// let d=0-6
// alert(d)



// let s=60<2
// alert(s)




// let confirm=prompt(70>3)
// alert=confirm(prompt)



let title=document.getElementById("txt")
title.innerHTML="hello guys"
title.style.fontSize="40px"
title.style.color="red"
title.style.textAlign="center"
console.log(title)

// let title=document.getElementById("txt")
// title.style.color="red"
// console.log(title)




let photo=document.getElementById("ph")
photo.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kljr70EXGkgVxIBSgWFsQmy2QmJn_C1OqA&s"
console.log(photo)
photo.style.borderRadius="20px"
photo.style.marginLeft="650px"
photo.style.opacity="0.8"
photo.addEventListener("mouseover", function() {
  this.style.opacity = "0.5";
  this.style.transition="all 0.6s ease-in-out"
});
photo.addEventListener("mouseout", function() {
  this.style.opacity = "1";
  this.style.transition="all 0.6s ease-in-out"
});


















let title1 = document.getElementById("txt1");

title1.style.fontSize = "40px";
title1.style.color = "#ff6400";
title1.style.textAlign = "center";
title1.innerHTML = "Plus buy ";

let button = document.createElement("button");
button.innerText = "Submit";
button.id = "bt";

button.style.padding = "10px";
button.style.fontSize = "22px";
button.style.marginLeft = "10px";
button.style.cursor = "pointer";
button.style.borderRadius="13px"
button.style.border="none"
button.style.width="140px"
button.style.height="55px"

title1.appendChild(button);

console.log(button);
