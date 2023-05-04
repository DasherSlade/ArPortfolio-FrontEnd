export class Experiencia {
    id?: number;
    nombreExp: string;
    descripcionExp: string;
    img: string;

    constructor(nombreExp: string, descripcionExp: string, img: string){
        this.nombreExp = nombreExp;
        this.descripcionExp = descripcionExp;
        this.img = img;
    }
}

