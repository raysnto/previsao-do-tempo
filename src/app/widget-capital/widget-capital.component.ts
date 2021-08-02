import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import xml2js from 'xml2js';

@Component({
  selector: 'app-widget-capital',
  template: 'Cidade Id: {{id}}',
  templateUrl: './widget-capital.component.html',
  styleUrls: ['./widget-capital.component.css']
})
export class WidgetCapitalComponent implements OnInit {

  @Input() capital_id: string;
  public xmlItems: any;

  constructor(private _http: HttpClient) { this.loadXML(); }  

  loadXML() {
    let str = 'http://localhost:4200/api/cidade/' + this.capital_id + '/previsao.xml';  
    this._http.get(str,  
      {  
        responseType: 'blob'  
      })  
      .subscribe((data) => {        
        let reader = new window.FileReader();
        reader.readAsBinaryString(data);
        reader.onloadend = (e) => {
          this.parseXML(e.target.result).then((data) => {
            this.xmlItems = data;
          });
        }
      });
  }
  parseXML(data) {  
    return new Promise(resolve => {  
      let k: string | number,  
        arr = [],  
        parser = new xml2js.Parser(  
          {  
            trim: true,  
            explicitArray: true  
          });  
      parser.parseString(data, function (err, result) {  
        let obj = result.cidade;
        for (k in obj.previsao) {  
          let item = obj.previsao[k];
          arr.push({
            nome: obj.nome,
            uf: obj.uf,
            atualizacao: obj.atualizacao,  
            dia: new Date(item.dia[0]).toLocaleDateString('pt-BR', {timeZone: 'UTC'}),  
            tempo: item.tempo[0],  
            maxima: item.maxima[0],
            minima: item.minima[0],
            iuv: item.iuv[0]
          });  
        }  
        resolve(arr);
      });  
    });
  }  

  ngOnInit(): void {

  }

}
