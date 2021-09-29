import { NoticiaService } from './../../noticia.service';
import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/Noticia';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.scss'],
})
export class ListaNoticiasComponent implements OnInit {
  /**Todas as notícias */
  noticias: Array<Noticia> = new Array<Noticia>();
  /**Apenas as que seão exibidas na tela */
  noticiasCarrosel: Array<Noticia> = new Array<Noticia>();
  /**indce da ultima notícia mostrada */
  carroselMaximo: number = 3;
  carroselMinimo: number = 0;

  constructor(private noticiaService: NoticiaService) {}

  ngOnInit() {
    this.noticiaService.getList().subscribe((response:any) => {
      Object.assign(this.noticias, response.noticias);
     
      this.noticias.sort((a, b) => {
        if (a.dt_criacao >= b.dt_criacao) return -1;
        if (a.dt_criacao < b.dt_criacao) return 1;
      });
      this.noticiasCarrosel=this.noticias.slice(this.carroselMinimo,this.carroselMaximo)
    });
  }
  proximaNoticia() {
    this.carroselMaximo += 1;
    this.carroselMinimo += 1; 
    this.noticiasCarrosel=this.noticias.slice(this.carroselMinimo,this.carroselMaximo)
  }
  noticiaAnterior() {
    this.carroselMaximo -= 1;
    this.carroselMinimo -= 1;
    this.noticiasCarrosel=this.noticias.slice(this.carroselMinimo,this.carroselMaximo)
  }
}
