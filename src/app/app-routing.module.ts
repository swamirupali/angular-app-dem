import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaycComponent } from './bayc/bayc.component';
import { GenesisComponent } from './genesis/genesis.component';
import { PopularComponent } from './popular/popular.component';
import { ShowsComponent } from './shows/shows.component';
import { TempleComponent } from './temple/temple.component';
import { TrendingComponent } from './trending/trending.component';
import { VoidComponent } from './void/void.component';

const routes: Routes = [
  {path:'trending', component: TrendingComponent},
  {path: 'shows', component: ShowsComponent},
  {path:'popular', component: PopularComponent},
  {path:'genesis', component: GenesisComponent},
  {path:'temple', component: TempleComponent},
  {path:'void', component: VoidComponent},
  {path:'bayc', component: BaycComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


