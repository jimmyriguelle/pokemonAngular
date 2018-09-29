import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DetailsComponent } from './details/details.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AddFavoriteComponent } from './add-favorite/add-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    DetailsComponent,
    FavoriteComponent,
    AddFavoriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
