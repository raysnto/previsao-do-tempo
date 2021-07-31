import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import xml2js from 'xml2js';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {  
  title = 'read-xml-angular';  
  public xmlItems: any;  
  constructor(private _http: HttpClient) { this.loadXML(); }  
  loadXML() {  
    this._http.get('http://localhost:4200/api/cidade/246/previsao.xml',  
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
} 