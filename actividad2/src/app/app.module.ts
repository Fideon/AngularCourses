import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { IdsComponent } from './ids/ids.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { RegistrationComponent } from './shared/components/registration/registration.component';

import { FormsModule } from '@angular/forms';

const appRoutes: AppRoutingModule = [
  {path: 'bio', component: BioComponent},
  {path: 'ids', component: IdsComponent},
  {path: 'reg', component: RegistrationComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    IdsComponent,
    HeaderComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
