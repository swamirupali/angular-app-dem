import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { ShowsComponent } from './shows/shows.component';
import { PopularComponent } from './popular/popular.component';
import { GenesisComponent } from './genesis/genesis.component';
import { TempleComponent } from './temple/temple.component';
import { VoidComponent } from './void/void.component';
import { BaycComponent } from './bayc/bayc.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    ShowsComponent,
    PopularComponent,
    GenesisComponent,
    TempleComponent,
    VoidComponent,
    BaycComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const routingCompenents = [TrendingComponent, ShowsComponent, PopularComponent, GenesisComponent, TempleComponent, VoidComponent,BaycComponent]

