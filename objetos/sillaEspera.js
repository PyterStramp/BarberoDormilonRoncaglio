export class SillaEspera {
    constructor(capacidad) {
        this.capacidad = capacidad;
        this.clientes = [];
    }

    entrar(cliente) {
        if (this.clientes.length < this.capacidad) {
            this.clientes.push(cliente);
            return true;
        } else {
            return false;
        }
    }

    salir() {
        return this.clientes.shift();
    }
}