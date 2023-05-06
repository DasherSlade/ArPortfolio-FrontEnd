import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit{
  cargandoImagen: boolean = false;
  nombrePro: string;
  descripcionPro: string;
  img: string;

  constructor(
    private proyectosS: ProyectosService, 
    private router: Router,
    public imageService: ImageService
    ) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const proyectos = new Proyectos(this.nombrePro, this.descripcionPro, this.img);
    proyectos.img = this.imageService.url;
    this.proyectosS.save(proyectos).subscribe(
      data => {
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const file = $event.target.files[0];
    const name = 'proyecto_' + Date.now();
    this.cargandoImagen = true;
    this.imageService.uploadImage(file, name).then(() => {
      this.cargandoImagen = false;
      this.img = this.imageService.url;
    });
  }
}
