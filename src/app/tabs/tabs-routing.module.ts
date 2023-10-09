import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('./../inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'tendencias',
        loadChildren: () => import('./../tendencias/tendencias.module').then( m => m.TendenciasPageModule)
      },
      {
        path: 'buscador',
        loadChildren: () => import('./../buscador/buscador.module').then( m => m.BuscadorPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./../perfil/perfil.module').then( m => m.PerfilPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
