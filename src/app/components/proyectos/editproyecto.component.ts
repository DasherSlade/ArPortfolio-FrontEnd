import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  proyectos: Proyectos = null;
  cargandoImagen: boolean = false;
  
  constructor(
    private proyectosS: ProyectosService,
    private activatedRouter : ActivatedRoute,
    private router: Router,
    public imageService: ImageService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.detail(id).subscribe(
      data =>{
        this.proyectos = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    const imageName = "proyecto_" + id;
    this.imageService.getImages(imageName).then(url => {
      if (url) {
        this.proyectos.img = url;
      }
      this.proyectosS.update(id, this.proyectos).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar el proyecto");
          this.router.navigate(['']);
        }
      )
    });
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    const file = $event.target.files[0];
    this.cargandoImagen = true;
    this.imageService.uploadImage(file, name).then(() => {
      this.cargandoImagen = false
  });
  console.log('Valor del parámetro id:', id);
}
}
