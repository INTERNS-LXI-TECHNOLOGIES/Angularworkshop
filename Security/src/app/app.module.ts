import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService, CoreModule } from 'keycloak-angular';
import { environment } from 'src/environments/environment';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileModalComponent } from './components/edit-profile-modal/edit-profile-modal.component';

const keycloakService = new KeycloakService();
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    EditProfileModalComponent

  ],
  entryComponents: [
    AppComponent,
    EditProfileModalComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),

  ],
  providers: [
    {  provide: KeycloakService,
       useValue: keycloakService}
  ]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef) {
    keycloakService
      .init({
        config: environment.keycloak.config,
        initOptions: {
          flow: 'implicit',
          onLoad: 'login-required',
          checkLoginIframe: false
        },
        enableBearerInterceptor: true,
        bearerExcludedUrls: ['/assets', '/clients/public']
      })
      .then(() => {
        console.log('[ngDoBootstrap] bootstrap app');
        appRef.bootstrap(AppComponent);
      })
      .catch(error => console.error('[ngDoBootstrap] init Keycloak failed', error));
  }
}
