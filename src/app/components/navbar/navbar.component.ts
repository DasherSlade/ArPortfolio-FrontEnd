import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged = false;
  navbarLogoUrl: string = '';
  
  constructor(
    private router:Router, 
    private tokenService: TokenService,
    private imageService: ImageService
    ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }

    const imageName = 'APLogo.png';
    this.imageService.getImages(imageName).then(url => {
      this.navbarLogoUrl = url;
    });
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }
}
