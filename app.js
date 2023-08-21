// Decoration
let areas = document.getElementById("area");
let sizeField = document.getElementById("size");
let colorField = document.getElementById("color");


function decoration(e, type) {
    if (areas.classList.contains(type)) {
        areas.classList.remove(type);
        e.classList.remove('bg-black');
    }
    else {
        areas.classList.add(type);
        e.classList.add('bg-black');
    }

}


function align(e, type) {
    areas.style.textAlign = type;
    let childs = e.parentNode.childNodes;

    for (let i = 1; i < childs.length; i += 2) {
        console.log(childs[i]);
        childs[i].style.backgroundColor = 'transparent'
    }
    e.style.backgroundColor = 'black'

}

sizeField.addEventListener('change', function () {
    console.log(sizeField.value);
    areas.style.fontSize = sizeField.value + 'px';
})

colorField.addEventListener('change', function () {
    areas.style.color = colorField.value;
})