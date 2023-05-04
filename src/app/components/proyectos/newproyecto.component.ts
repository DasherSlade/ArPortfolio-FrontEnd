import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit{
  nombrePro: string;
  descripcionPro: string;
  img: string;

  constructor(private proyectosS: ProyectosService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const proyectos = new Proyectos(this.nombrePro, this.descripcionPro, this.img);
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
}
