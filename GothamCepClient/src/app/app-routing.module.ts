import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CepListilsComponent } from './components/cep-listils/cep-listils.component';
import { CepDetailsComponent } from './components/cep-details/cep-details.component';
import { AddCepComponent } from './components/add-cep/add-cep.component';

const routes: Routes = [
  { path: '', redirectTo: 'ceps', pathMatch: 'full' },
  { path: 'ceps', component: CepListilsComponent },
  { path: 'ceps/:id', component: CepDetailsComponent },
  { path: 'add', component: AddCepComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
