export class Proyectos {
    id?: number;
    nombrePro: string;
    descripcionPro: string;
    img: string;

    constructor(nombrePro: string, descripcionPro: string, img: string){
        this.nombrePro = nombrePro;
        this.descripcionPro = descripcionPro;
        this.img = img;
    }
}
