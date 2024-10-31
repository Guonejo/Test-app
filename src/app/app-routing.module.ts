// app-routing.module.ts

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/horario/horario.module').then(m => m.HorarioPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./pages/notas/actividades.module').then(m => m.ActividadesPageModule)
  },
  {
    path: 'bibliografia',
    loadChildren: () => import('./pages/bibliografia/bibliografia.module').then(m => m.BibliografiaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [AuthGuard]  // Ruta protegida
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cambio-password',
    loadChildren: () => import('./pages/cambio-password/cambio-password.module').then(m => m.CambioPasswordPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'chatbot',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }