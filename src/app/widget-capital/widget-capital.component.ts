import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-capital',
  template: 'Cidade Id: {{id}}',
  templateUrl: './widget-capital.component.html',
  styleUrls: ['./widget-capital.component.css']
})
export class WidgetCapitalComponent implements OnInit {

  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
