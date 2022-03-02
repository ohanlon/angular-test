import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { ForexListComponent } from './components/forex-list/forex-list.component';
import { ForexDetailComponent } from './components/forex-detail/forex-detail.component';
import { ForexDashboardComponent } from './components/forex-dashboard/forex-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ForexListComponent,
    ForexDetailComponent,
    ForexDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
