export class Educacion {
    id?: number;
    nombreEdu: string;
    descripcionEdu: string;
    img: string;

    constructor(nombreEdu: string, descripcionEdu: string, img: string){
        this.nombreEdu = nombreEdu;
        this.descripcionEdu = descripcionEdu;
        this.img = img;
    }
}
