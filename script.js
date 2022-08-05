const p = document.getElementById("descrip");

const hiddenDiv = document.getElementsByClassName("container")[0]; //take away 0 replace with for loop

// let img = document.getElementById("taj");

hiddenDiv.addEventListener('mouseover', function (){
    p.style.display = "block";
    console.log(p);
});

hiddenDiv.addEventListener('mouseout', function (){
    p.style.display = 'none';
    console.log(p);
});