import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { ImageService } from 'src/app/service/image.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  logoUrl: string = '';
  loginFondoUrl: string = '';
  isLoading = false;

  constructor(
    private tokenService: TokenService, 
    private authService: AuthService, 
    private router: Router,
    private imageService: ImageService
    ) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
    
    const imageName = 'Logo.png';
    this.imageService.getImages(imageName).then(url => {
      this.logoUrl = url;
    });
    const otherImageName = 'login-fondo.jpeg';
    this.imageService.getImages(otherImageName).then(url => {
      this.loginFondoUrl = url;
    });
  }

  onLogin(): void{
    this.isLoading = true;
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
     this.authService.login(this.loginUsuario).subscribe(data => {
        this.isLoading = false;
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err => {
        this.isLoading = false;
        this.isLogged = false;
        this.isLogginFail = true;
        console.log(err);
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      })
  }

}
