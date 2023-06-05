import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnquetesComponent } from './enquetes/enquetes.component';
import { NovaEnqueteFormComponent } from './nova-enquete-form/nova-enquete-form.component';

const routes: Routes = [
  { path: '', component: EnquetesComponent},
  { path: 'new', component: NovaEnqueteFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquetesRoutingModule { }
