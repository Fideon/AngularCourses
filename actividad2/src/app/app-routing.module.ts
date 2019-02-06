import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BioComponent} from './bio/bio.component';
import {IdsComponent} from './ids/ids.component';
import {RegistrationComponent} from './shared/components/registration/registration.component';

const routes: Routes = [
  {path: 'bio', component: BioComponent},
  {path: 'ids', component: IdsComponent},
  {path: 'reg', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
