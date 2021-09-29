import { Noticia } from './Noticia';
import { environmentNoticia } from './environments';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  private readonly API = `${environmentNoticia.API}Noticia/`;

  constructor(protected http: HttpClient) {}

  getList() {
    return this.http
      .get(`${this.API}ObterNoticias`)
      .pipe();
  }
  getById(id:number){
    return this.http
      .get<any>(`${this.API}ObterNoticiaPorId?id=${id}`)
      .pipe(map((data: any) => data as Noticia));
  }
  
}
