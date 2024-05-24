import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';
import { DemandesComponent } from './demandes/demandes.component';
import { JoursFerComponent } from './jours-fer/jours-fer.component';
import { FormComponent } from './form/form.component';
import { AuthGuard } from './form/auth.guard';


const routes: Routes = [
  { path : 'employes', component : EmployeComponent,canActivate: [AuthGuard] },
  { path : 'demandes', component : DemandesComponent,canActivate: [AuthGuard]},
  { path : 'jours_fer', component : JoursFerComponent,canActivate: [AuthGuard]},
  { path : 'form', component : FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
