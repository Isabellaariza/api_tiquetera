class Tiquetera { 
    constructor({id, nroTiquetera, cliente, saldo, totalTransacciones, observaciones}) {
        this.id = id;
        this.nroTiquetera = nroTiquetera;
        this.cliente = cliente;
        this.saldo = saldo;
        this.totalTransacciones = totalTransacciones;
        this.observaciones = observaciones;
    }
}

export default Tiquetera;