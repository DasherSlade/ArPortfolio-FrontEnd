import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  cargandoImagen: boolean = false;
  nombreEdu: string;
  descripcionEdu: string;
  img: string;

  constructor(
    private educacionS: EducacionService, 
    private router: Router,
    public imageService: ImageService
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreEdu, this.descripcionEdu, this.img);
    educacion.img = this.imageService.url;
    this.educacionS.save(educacion).subscribe(
      data => {
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const file = $event.target.files[0];
    const name = 'educacion_' + Date.now();
    this.cargandoImagen = true;
    this.imageService.uploadImage(file, name).then(() => {
      this.cargandoImagen = false;
      this.img = this.imageService.url;
    });
  }
}