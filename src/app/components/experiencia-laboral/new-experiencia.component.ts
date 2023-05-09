import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ImageService } from 'src/app/service/image.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  cargandoImagen: boolean = false;
  nombreExp: string;
  descripcionExp: string;
  img: string;

  constructor(
    private sExperiencia: SExperienciaService,
    private router: Router,
    public imageService: ImageService
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreExp, this.descripcionExp, this.img);
    const imageName = 'experiencia_' + Date.now();
    this.imageService.getImages(imageName).then(url => {
      if (url) {
        expe.img = url;
      }
      this.sExperiencia.save(expe).subscribe(
        data => {
          alert("Experiencia añadida");
          this.router.navigate(['']);
        }, err => {
          alert("Falló");
          this.router.navigate(['']);
        }
      )
    });
  }

  uploadImage($event: any) {
    const file = $event.target.files[0];
    const name = 'experiencia_' + Date.now();
    this.cargandoImagen = true;
    this.imageService.uploadImage(file, name).then(() => {
      this.cargandoImagen = false;
      this.imageService.getImages(name).then(url => {
        if (url) {
          this.img = url;
        }
      });
    });
  }
}
