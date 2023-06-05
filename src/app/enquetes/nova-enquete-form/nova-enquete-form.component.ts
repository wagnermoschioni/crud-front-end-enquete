import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnquetesService } from '../services/enquetes.service';

@Component({
  selector: 'app-nova-enquete-form',
  templateUrl: './nova-enquete-form.component.html',
  styleUrls: ['./nova-enquete-form.component.scss']
})

export class NovaEnqueteFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: EnquetesService) {
    this.form = this.formBuilder.group({
      titulo: [null],
      dataCriacao: [null]
    });
  }

  onCancel() {

  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => console.log(result));
  }

  ngOnInit(): void {

  }

}
