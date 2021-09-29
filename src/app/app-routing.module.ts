import { ViewNoticiaComponent } from './pages/view-noticia/view-noticia.component';
import { ListaNoticiasComponent } from './pages/lista-noticias/lista-noticias.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lista_noticias', pathMatch: 'full' },
  {path:"lista_noticias", component:ListaNoticiasComponent},
  {path:"view_noticia/:id", component:ViewNoticiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
