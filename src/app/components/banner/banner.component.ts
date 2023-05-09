import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  persona: persona = null;
  skillBackgroundUrl: string = '';

  constructor(
    public personaService: PersonaService, 
    private tokenService: TokenService,
    private imageService: ImageService
    ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    const imageName = '';
    this.imageService.getImages(imageName).then(url => {
      this.skillBackgroundUrl = url;
    });
  }

  cargarPersona() {
    this.personaService.detail(1).subscribe(data => {
      this.persona = data}
      )
  }
}
