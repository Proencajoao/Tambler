import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Frase {
  id: number,
  frase: string,
  autor: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  citacao: Frase = {
    id: 0,
    frase: '',
    autor: ''
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<Frase[]>('http://lucasreno.kinghost.net/frase').subscribe(
      resposta => {
        this.citacao = resposta[0];
      }
    );

  }
}
