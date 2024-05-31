let intento = 1;
let listaNumeros = [];
let maximoIntento = 10;
let numeroSecreto = random();

texto('p', 'Elija un numero entre "0 - 10"')


function random() {
    let randomm = Math.floor(Math.random() * 11);
    console.log(randomm);
    console.log(listaNumeros);

    if (listaNumeros.includes(randomm)) {
        return random();
    } else {
        listaNumeros.push(randomm);
        return randomm
    }
}

function texto(a, b) {
    let parrafo = document.querySelector(a)
    parrafo.innerHTML = b;
}

function inputCheck() {
    let input = parseInt(document.getElementById('valorUsuario').value);

    if (input === numeroSecreto) {
        texto('p', ` MUY BIEN, tuvo ${intento} ${(intento === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {
        if (input < numeroSecreto) {
            texto('p', 'El numero es bajo. AUMENTE')
        } else {
            texto('p', 'El numero es alto. DISMINUYA')
        }
    }
    intento++;
}

function limipiarInput() {
    document.getElementById('valorUsuario').value = "";
}

function reiniciarJuego() {
    if (listaNumeros.length > maximoIntento) {
        texto('p','Excelente! FIN DEL JUEGO')
        document.getElementById('reiniciar').setAttribute('disabled', 'true')
    } else {


        //limpiar el imput 
        limipiarInput();

        //indicar mensaje 
        texto('p', 'Elija un numero entre "0 - 10"')

        //generar numero
        // numeroSecreto = 0;
        intento = 1;
        numeroSecreto = random();

        //deshabilitar el boton "nuevo juego"
        document.getElementById('reiniciar').setAttribute('disabled', 'true');
    }
}
