const controls = document.querySelector('#controls');
const cssTxt = document.querySelector('.css');
const btn = document.querySelector('.btn');

const range = document.querySelectorAll('input[type="range"]');
range.forEach(i=>{
    i.value = 0;
});

// controles.addEventListener('change' , handleChange);
controls.addEventListener('input' , handleChange);

const handleStyle = {
    element: btn,
    backgroundColor(value){
        this.element.style.backgroundColor = value;
    },
    border(value){
        this.element.style.border = value;
    },
    borderRadius(value){
        this.element.style.borderRadius = value + 'px';
    },
    color(value){
        this.element.style.color = value;
    },
    fontFamily(value){
        this.element.style.fontFamily = value;
    },
    fontSize(value){
        this.element.style.fontSize = value + 'rem';
    },
    height(value){
        this.element.style.height = value + 'px';
    },
    txt(value){
        this.element.innerText= value;  
    },
    width(value){
        this.element.style.width = value + 'px';
    },
}

function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    handleStyle[name](value);
    showCss();
     // console.log(name);
    // console.log(value);
}

function showCss(){
    cssTxt.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
    console.log('<span>' + btn.style.cssText.split('; ').join(';</span><span>'));
}
