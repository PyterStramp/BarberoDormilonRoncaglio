export class Semaforo {
    constructor(permisos) {
        this.permisos = permisos;
    }

    wait() {
        if (this.permisos > 0) {
            this.permisos--;
        } else {
            // Esperar hasta que haya permisos disponibles
            return new Promise((resolve) => {
                const interval = setInterval(() => {
                    if (this.permisos > 0) {
                        this.permisos--;
                        clearInterval(interval);
                        resolve();
                    }
                }, 100);
            });
        }
    }

    signal() {
        this.permisos++;
    }
}
