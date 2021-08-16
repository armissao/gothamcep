import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cep } from 'src/app/models/cep.model';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-cep-listils',
  templateUrl: './cep-listils.component.html',
  styleUrls: ['./cep-listils.component.css']
})

export class CepListilsComponent implements OnInit {

  ceps?: Cep[];
  currentCep: Cep = {};
  currentIndex = -1;
  numero = '';

  constructor(private cepService: CepService,
              private router: Router) { }

  ngOnInit(): void {
    this.retrieveCeps();
  }

  retrieveCeps(): void {
    this.cepService.getAll()
      .subscribe(
        data => {
          this.ceps = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveCeps();
    this.currentCep = {};
    this.currentIndex = -1;
  }

  setActiveCep(cep: Cep, index: number): void {
    this.currentCep = cep;
    this.currentIndex = index;
  }
 
  searchNumero(): void {
    this.currentCep = {};
    this.currentIndex = -1;

    this.cepService.findByNumero(this.numero)
      .subscribe(
        data => {
          this.currentCep = data;
          console.log(data);
        }
        ,
        error => {
          console.log(error);
        });
      
  }
}
