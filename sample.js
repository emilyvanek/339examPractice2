document.getElementById("part1Checkbox").addEventListener('change', function(){
    if (this.checked == true) {
        document.querySelector('#part2').classList.remove("closed");
    }
    else {
        document.querySelector('#part2').classList.add("closed");
    }
});

document.getElementById('repeat').addEventListener('change', function(){
    let value1 = document.getElementById("message1");
    let value2 = document.getElementById("message2");
    if (this.checked == true) {
        value2.value = value1.value.toUpperCase();
    }
    else {
        value2.value = "";
    }
});
let images = document.querySelectorAll('img');
let broken;
for (let i = 0; i < images.length; i++) {
    if (images[i].src = "") {
        broken = i;
    }
}
images[broken].addEventListener('mouseover', function(){
    images[broken].src = images[0].src;
});

images[broken].addEventListener('mouseleave', function(){
    images[broken].src = "";
});

for (let i = 0; i < images.length; i++) {
   images[i].tabIndex = "0";
}
images[broken].addEventListener('keydown', function(){
    images[broken].src = images[0].src;
});

images[broken].addEventListener('keyup', function(){
    images[broken].src = "";
});


