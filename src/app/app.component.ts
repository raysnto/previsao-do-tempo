import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import xml2js from 'xml2js';
import { WidgetCapitalComponent } from './widget-capital/widget-capital.component';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {
  title = 'envia-capitais';  
  public ids: number[] = [222, 241, 244, 246]; //BH, RJ, SP, VIX
}