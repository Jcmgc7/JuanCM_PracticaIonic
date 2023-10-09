import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'lo-r',
    loadChildren: () => import('./lo-r/lo-r.module').then( m => m.LoRPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tendencias',
    loadChildren: () => import('./tendencias/tendencias.module').then( m => m.TendenciasPageModule)
  },
  {
    path: 'buscador',
    loadChildren: () => import('./buscador/buscador.module').then( m => m.BuscadorPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'asia-or',
    loadChildren: () => import('./asia-or/asia-or.module').then( m => m.AsiaOrPageModule)
  },
  {
    path: 'asia-occ',
    loadChildren: () => import('./asia-occ/asia-occ.module').then( m => m.AsiaOccPageModule)
  },
  {
    path: 'america-nor',
    loadChildren: () => import('./america-nor/america-nor.module').then( m => m.AmericaNorPageModule)
  },
  {
    path: 'america-sur',
    loadChildren: () => import('./america-sur/america-sur.module').then( m => m.AmericaSurPageModule)
  },
  {
    path: 'europa',
    loadChildren: () => import('./europa/europa.module').then( m => m.EuropaPageModule)
  },
  {
    path: 'ocean',
    loadChildren: () => import('./ocean/ocean.module').then( m => m.OceanPageModule)
  },
  {
    path: 'afric',
    loadChildren: () => import('./afric/afric.module').then( m => m.AfricPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
