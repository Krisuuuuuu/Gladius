import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageModule } from './components/main-page/main-page.module';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { ToolbarComponent } from './components/user-panel/toolbar/toolbar.component';
import { 'toolbar'Module } from './components/user-panel/toolbar/'toolbar'.module';

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainPageModule,
    'toolbar'Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
