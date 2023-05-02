import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule }  from  'ng-circle-progress';
import { SkillComponent } from './components/habilidades/skill.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia-laboral/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia-laboral/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditSkillComponent } from './components/habilidades/edit-skill.component';
import { NewSkillComponent } from './components/habilidades/new-skill.component';
import { EditSobreMiComponent } from './components/sobre-mi/edit-sobre-mi.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { LoadingComponentComponent } from './components/loading-component/loading-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    SobreMiComponent,
    ExperienciaLaboralComponent,
    EducacionComponent,
    SkillComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    PortfolioComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditSobreMiComponent,
    LoadingComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot ({ }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
