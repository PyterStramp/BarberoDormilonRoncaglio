import { Cliente } from './objetos/cliente.js';
import { SillaEspera } from './objetos/sillaEspera.js';
import { Barbero } from './objetos/barbero.js';
import { Semaforo } from './objetos/semaforo.js';

// Configuración
const capacidadSillasEspera = 5;
const numClientes = 10;

// Crear objetos
const semaforo = new Semaforo(capacidadSillasEspera);
const sillaEspera = new SillaEspera(capacidadSillasEspera);
const barberoImg = document.getElementById('barbero-img'); // Obtén una referencia a la imagen del barbero

const referenciaCliente = document.querySelector('#clientes');
const referenciaSilla = document.querySelector('#sillas');

// Crea el barbero después de crear sillaEspera y semaforo
const barbero = new Barbero(sillaEspera, semaforo, barberoImg);

// Función para mostrar mensajes en la consola del navegador
function log(message) {
    const consoleDiv = document.getElementById("console");
    consoleDiv.innerHTML += message + "<br>";
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

const crearImagenCliente = (idCliente) => {
    const renderizadoCliente = document.createElement('img');
    renderizadoCliente.src = `./img/Cliente.png`;
    renderizadoCliente.id = idCliente;
    renderizadoCliente.classList.add('cliente');
    return renderizadoCliente;
}

const crearImagenSilla = () => {
    const renderizadoSilla = document.createElement('img');
    renderizadoSilla.src = `./img/Silla.png`;
    renderizadoSilla.classList.add('cliente');
    return renderizadoSilla;
}


for (let i = 0; i<capacidadSillasEspera; i++) {
    const imgSilla = crearImagenSilla();
    referenciaSilla.append(imgSilla);
}


// Simulación de clientes
for (let i = 1; i <= numClientes; i++) {
    const cliente = new Cliente(i);
    if (sillaEspera.entrar(cliente)) {
        log(`Cliente ${cliente.id} ha llegado y está esperando.`);
        const imgCliente = crearImagenCliente(i);
        referenciaCliente.append(imgCliente);
    } else {
        log(`Cliente ${cliente.id} se fue porque no había sillas disponibles.`);
    }
}

// Iniciar el barbero para atender clientes
barbero.atenderClientes();
