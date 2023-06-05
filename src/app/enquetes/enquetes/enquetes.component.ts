import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Enquete } from '../model/enquete';
import { EnquetesService } from '../services/enquetes.service';

@Component({
  selector: 'app-enquetes',
  templateUrl: './enquetes.component.html',
  styleUrls: ['./enquetes.component.scss']
})
export class EnquetesComponent implements OnInit {

  enquetes$: Observable<Enquete[]>;
  displayedColumns = ['id', 'titulo', 'dataCriacao', 'actions'];

  constructor(private enqueteService: EnquetesService,
              public dialog: MatDialog,
              private router: Router,
              private currentRoute: ActivatedRoute){

    this.enquetes$ = this.enqueteService.list().
    pipe(
      catchError(erro => {
        this.onError('Erro ao carregar enquetes');
        return of([])
    })
    );

 }

 onAdd() {
  this.router.navigate(['new'], {relativeTo: this.currentRoute});
}

  ngOnInit(): void {

  }

 onError(errorMsg: string) {
  this.dialog.open(ErrorDialogComponent, {
    data: errorMsg
  });
}
}






