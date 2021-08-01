import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { HttpClientModule } from '@angular/common/http';
import { WidgetCapitalComponent } from './widget-capital/widget-capital.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    WidgetCapitalComponent,
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,  
    HttpClientModule,
    //FontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
