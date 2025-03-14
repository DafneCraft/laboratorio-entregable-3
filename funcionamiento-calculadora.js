//Funciones
// Funcion de la seccion de operacion de ejemplo
function operacionEjemplo(){
    
    // Valores Escogidos en el ejemplo
    const num1 = 6;
    const num2 = 5;
    
    // Obtener la opcion seleccionada a visualizar
    const opcion = document.querySelector('input[name="ejemploOperacion"]:checked').value;

    // Variable que guarda el valor despues de elegir la operacion
    let resultado;
    
    //Realizar la operacion basada en la opcion tomada
    switch(opcion){
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            resultado = num1 / num2;
            break;
        default:
            alert("Opcion no valida.");
            return;
    }

    // Mostrar el resultado en el HTML
    document.getElementById('ejemploResultado').textContent = resultado;
}

function operacionCalculadora(){
    // Variable para la verificacion de encendido/apagado de la calculadora
    const encendido= document.getElementById('encendido').checked;

    // Constantes que son agregadas por el usuario
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);

    if (!encendido) {
        alert("La calculadora esta apagada. Enciendala para usarla.")
        return;
    }
    // Condicional que verifica si lo que ingresa el usuario son numeros
    if (isNaN(num1) || isNaN(num2)) {
        alert("No valido, Por favor ingresar solo numeros");
        return;
    }

    // Guarda el valor escogido en el menu desplegable
    const opcion = document.getElementById('opciones').value;

    // Variable que guarda el resultado de la operacion escogida
    let resultado;
    
    // Realizar la operacion basada en la opcion seleccionada
    switch(opcion){
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            if (num2 === 0){
                alert("No se puede dividir por cero.");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Opcion no valida.");
            return;
    }
    document.getElementById('resultadoCal').textContent = resultado;
}

function actualizarEstado(){
    const encendido = document.getElementById('encendido').checked;
    const inputs = document.querySelectorAll('input[type="number"], select[id=opciones], button');

    inputs.forEach(input => {
        input.disabled = !encendido; // Deshabilitar si está apagado
    });

    if(encendido){
        alert("La calculadora esta Encendida. ¡Puedes Usarla!")
    } else {
        //alert("La calculadora esta Apagada. Enciendela para usarla.")
    }
}

function eventos(){
    // Obtener todos los botones de opcion de operacion de ejemplo
    const radioButtons = document.querySelectorAll('input[name="ejemploOperacion"]');

    // Asignar el evento "change" a cada botón de opción de Operacion de ejemplo
    radioButtons.forEach(radio => {
        radio.addEventListener('change', operacionEjemplo);
    });

    // Asignar el evento "change" a los botones de radio de calculadora
    document.getElementById('encendido').addEventListener('change', actualizarEstado);
    document.getElementById('apagado').addEventListener('change', actualizarEstado);
    actualizarEstado();

}

//Llamado de funciones o eventos
eventos();


