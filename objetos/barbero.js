
export class Barbero {
    
    constructor(sillaEspera, semaforo, barberoImg) {
        this.sillaEspera = sillaEspera;
        this.semaforo = semaforo;
        this.barberoImg = barberoImg; // Asigna la referencia de la imagen
    }

    async cortarPelo(cliente) {
        console.log(`El barbero está cortando el pelo del Cliente ${cliente.id}`);
        this.renderizadoEstadoBarbero(`El barbero está cortando el pelo del Cliente ${cliente.id}`);
        this.mostrarBarberoTrabajando();
        await new Promise((resolve) => setTimeout(resolve, 4000)); // Simulación de corte de pelo
        console.log(`El barbero ha terminado de cortar el pelo del Cliente ${cliente.id}`);
        this.renderizadoEstadoBarbero(`El barbero ha terminado de cortar el pelo del Cliente ${cliente.id}`);
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulación de renderizado
        this.eliminarRenderizadoCliente(cliente.id);
        this.mostrarBarberoDormido();
        this.semaforo.signal();
    }

    async atenderClientes() {
        while (true) {
            if (this.sillaEspera.clientes.length > 0) {
                const cliente = this.sillaEspera.salir();
                await this.cortarPelo(cliente);
            } else {
                console.log("El barbero está durmiendo...");
                this.mostrarBarberoDormido();
                await new Promise((resolve) => setTimeout(resolve, 10000)); // Simulación de barbero durmiendo
            }
        }
    }

    // Función para cambiar la imagen del barbero a "trabajando"
    mostrarBarberoTrabajando() {
        this.barberoImg.setAttribute('src', '../img/BarberoTrabajando.png');
    }

    // Función para cambiar la imagen del barbero a "dormido"
    mostrarBarberoDormido() {
        this.barberoImg.setAttribute('src', '../img/BarberoDurmiendo.png');
    }

    eliminarRenderizadoCliente(idCliente) {
        const idImg = idCliente;
        document.getElementById(idImg).remove();
    }

    renderizadoEstadoBarbero(mensaje) {

        const render = document.getElementById('estadoBarbero');
        render.innerText = `${mensaje}`;
        
        
    }
}