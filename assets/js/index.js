$(document).ready(function(){

    const luminositat = 0.9;
    const darkColor = '#363533';
    const hex2rgb = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const a = parseInt(hex.slice(7, 9), 16);
    
        return { r, g, b, a };
    }

    const randomColor = () => {
        return '#'+ Math.floor(Math.random()*16777215).toString(16);
    }

    const background = (color) => {
        rgb = hex2rgb(color);

        let lightness = ((rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114) / 255 );
        return lightness;
    }

    const random_button = document.querySelector("#rand-btn")
    const input = document.querySelector("#hex");
    const output = document.querySelector("#rgb");
    let container = document.querySelector("#container");
    let colorContainer = document.querySelector("#colorContainer");
    let header = document.querySelector("#header");
    let copy = document.querySelector("#copy");
    
    let defaultHex = randomColor();
    default_rgb = hex2rgb(defaultHex);
    input.value = defaultHex;
    output.textContent = "rgb("+default_rgb.r+","+default_rgb.g+","+default_rgb.b+")";

    

    container.style.background = defaultHex;
    let fondo = background(defaultHex);
        if (fondo > luminositat) {
            header.style.color = darkColor;
            colorContainer.style.background = darkColor;
            colorContainer.style.color = "white";
            input.style.color = "white";
            
        }else {
            header.style.color = "white";
            colorContainer.style.background = "white";
            colorContainer.style.color = darkColor;
            input.style.color = darkColor;
        }


    input.addEventListener("input", (e) => {
        if (hex2rgb(e.target.value).a > 0){
            output.textContent = "rgba("+hex2rgb(e.target.value).r+","+hex2rgb(e.target.value).g+","+hex2rgb(e.target.value).b+","+hex2rgb(e.target.value).a+")";

        }else {
            output.textContent = "rgb("+hex2rgb(e.target.value).r+","+hex2rgb(e.target.value).g+","+hex2rgb(e.target.value).b+")";
        }
    container.style.background = e.target.value;
    let fondo = background(e.target.value);
        if (fondo > luminositat) {
            header.style.color = darkColor;
            colorContainer.style.background = darkColor;
            colorContainer.style.color = "white";
            input.style.color = "white";
        }else {
            header.style.color = "white";
            colorContainer.style.background = "white";
            colorContainer.style.color = darkColor;
            input.style.color = darkColor;
        }
    });



    random_button.addEventListener("click", ()=>{
        rand = randomColor()
        container.style.background = rand;
        rand_rgb = hex2rgb(rand);
        output.textContent = "rgb("+rand_rgb.r+","+rand_rgb.g+","+rand_rgb.b+")";
        input.value = rand;


        let fondo = background(rand);
        if (fondo > luminositat) {
            header.style.color = darkColor;
            colorContainer.style.background = darkColor;
            colorContainer.style.color = "white";
            input.style.color = "white";
        }else {
            header.style.color = "white";
            colorContainer.style.background = "white";
            colorContainer.style.color = darkColor;
            input.style.color = darkColor;
        }

    });

    copy.addEventListener("click", ()=> {
        navigator.clipboard.writeText(output.textContent);
        copy.classList.remove('fa-copy');
        copy.classList.add('fa-check');

        setTimeout(function(){
            copy.classList.remove('fa-check');
            copy.classList.add('fa-copy');
        }, 1500);
    })


});