import { Component, OnInit } from '@angular/core';
import { Pessoa } from './shared/model/pessoa';
import { PessoasService } from './shared/services/pessoas-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Formulário de pessoas';
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoasService) {}

  ngOnInit(): void {
    this.pessoaService.getAll().subscribe((data: Pessoa[]) => {
      this.pessoas = data;
      console.log(this.pessoas);
    });
  }
}
