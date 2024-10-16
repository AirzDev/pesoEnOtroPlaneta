const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');
const extraterrestre = document.querySelector('#extraterrestre');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {

    opcion.addEventListener('click', (e) => {
        console.log("[opcion.addEventListener] document: ", document.querySelectorAll('#opciones > .opcion'));
        e.preventDefault();
        contenidoSelect.innerHTML = e.currentTarget.innerHTML;
        console.log("[contenidoSelect.innerHTML] e: ", e.currentTarget.innerHTML );
        select.classList.toggle('active');
        opciones.classList.toggle('active');
        hiddenInput.value = e.currentTarget.querySelector('.titulo').innerHTML;
        console.log("[hiddenInput.value] e: ", e.currentTarget.querySelector('.titulo').innerHTML) 
        ocultarMostrarExtraterrestre();
        mostrarPeso();
    })
});

select.addEventListener('click', () => {
    console.log("[prueba] opciones: ",opciones);
    select.classList.toggle('active');
    opciones.classList.toggle('active');
})

const ocultarMostrarExtraterrestre = () => {
    if (hiddenInput.value != "") {
        extraterrestre.classList.add('ocultarExtraterrestre');
    };
};

//imprimir peso

function mostrarPeso() {
    nombrePlaneta = hiddenInput.value
    pesoEnLaTierra = document.getElementById('pesoEnLaTierra').value;
    calcularPeso();
    document.getElementById('mostrarPeso').innerHTML = `<p></p>Tu peso en <b>${nombrePlaneta}</b> es de <b>${pesoPlaneta} Kg</b></p>`;
};

/*
función para calcular el peso del ususario segun la gravedad de cada planeta
Peso en la luna = peso en la Tierra/gravedad en la tierra * gravedad en la luna
*/
function calcularPeso() {
    switch(nombrePlaneta)
    {
        case "El sol":
            pesoPlaneta = parseFloat(pesoEnLaTierra / 9.8 * 274).toFixed(2);
        break;
        case "Mercurio":
            pesoPlaneta = parseFloat(pesoEnLaTierra / 9.8 * 3.7).toFixed(2);
        break;
        case "Venus":
            pesoPlaneta = parseFloat(pesoEnLaTierra / 9.8 * 8.87).toFixed(2);
        break;
        case "La luna":
            pesoPlaneta = parseFloat(pesoEnLaTierra / 9.8 * 1.62).toFixed(2);
        break;
        case "Marte":
            pesoPlaneta = parseFloat(pesoEnLaTierra / 9.8 * 3.72).toFixed(2);
        break;
        case "Júpiter":
            pesoPlaneta = parseFloat(pesoEnLaTierra / 9.8 * 24.79).toFixed(2);
            break;
        case "Saturno":
            pesoPlaneta = parseFloat(pesoEnLaTierra / 9.8 * 10.44).toFixed(2);
            break;
        case "Urano":
            pesoPlaneta = parseFloat(pesoEnLaTierra / 9.8 * 8.87).toFixed(2);
            break;
        case "Neptuno":
            pesoPlaneta = parseFloat(pesoEnLaTierra / 9.8 * 11.15).toFixed(2);
            break;
        case "Plutón":
            pesoPlaneta = parseFloat(pesoEnLaTierra / 9.8 * 0.62).toFixed(2);
            break;
    }
}