import { Noticia } from './../../Noticia';
import { NoticiaService } from './../../noticia.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-noticia',
  templateUrl: './view-noticia.component.html',
  styleUrls: ['./view-noticia.component.scss']
})
export class ViewNoticiaComponent implements OnInit {
 
  noticia:Noticia=new Noticia();
  constructor(private router: Router, private noticiaService:NoticiaService) { }

  ngOnInit() {
    let id = +this.router.url.replace(/[^0-9]/g, "");
    this.noticiaService.getById(id).subscribe(response=>{
      Object.assign(this.noticia,response)
    })
    
  }

}
