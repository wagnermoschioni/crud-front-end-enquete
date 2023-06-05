import { Injectable } from '@angular/core';
import { Enquete } from '../model/enquete';
import { HttpClient} from '@angular/common/http'
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnquetesService {

  private readonly API = 'http://localhost:8080/enquetes';

  constructor(private httpClient: HttpClient) {}

    list() {
     return this.httpClient.get<Enquete[]>(this.API)
     .pipe(
      first(),
      delay(1000),
      tap(enquetes => console.log(enquetes))
      );

  }

  loadById(id: string) {
    return this.httpClient.get<Enquete>(`${this.API}/${id}`);
  }

  save(record: Enquete) {
  console.log(record);
  return this.httpClient.post<Enquete>(this.API, record);
  }


  remove(id: string) {
      return this.httpClient.delete(`${this.API}/${id}`);
  }


}
