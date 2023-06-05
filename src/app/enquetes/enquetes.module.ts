import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquetesRoutingModule } from './enquetes-routing.module';
import { EnquetesComponent } from './enquetes/enquetes.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { NovaEnqueteFormComponent } from './nova-enquete-form/nova-enquete-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EnquetesComponent,
    NovaEnqueteFormComponent
  ],
  imports: [
    CommonModule,
    EnquetesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EnquetesModule { }
