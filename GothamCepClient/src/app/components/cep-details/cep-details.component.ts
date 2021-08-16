import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cep } from 'src/app/models/cep.model';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-cep-details',
  templateUrl: './cep-details.component.html',
  styleUrls: ['./cep-details.component.css']
})
export class CepDetailsComponent implements OnInit {

  currentCep: Cep = {
    numero: '',
  };
  message = '';

  constructor( private cepService: CepService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCep(this.route.snapshot.params.id);
  }

  getCep(id: string): void {
    this.cepService.get(id)
      .subscribe(
        data => {
          this.currentCep = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCep(): void {
   
    if(this.cepService.isGothamCEP(this.currentCep.numero)){
    this.cepService.update(this.currentCep.id, this.currentCep)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'CEP atualizado com sucesso!';
          setTimeout( () => this.router.navigate(['/ceps']) , 1000 );
        },
        error => {
          console.log(error);
        });
      } else {
        this.message = 'Numero do CEP incorreto!';
      }
  }

  deleteCep(): void {
    this.cepService.delete(this.currentCep.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/ceps']);
        },
        error => {
          console.log(error);
        });
  }
}


