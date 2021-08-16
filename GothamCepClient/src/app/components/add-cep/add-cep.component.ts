import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cep } from 'src/app/models/cep.model';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-add-cep',
  templateUrl: './add-cep.component.html',
  styleUrls: ['./add-cep.component.css']
})
export class AddCepComponent implements OnInit {

  cep: Cep = {
    numero: '',
  };
  submitted = false;
  message = '';

  constructor(private cepService: CepService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
    this.message = '';
  }

  saveCep(): void {
    
    const data = {
      numero: this.cep.numero ,
    };

    if(this.cepService.isGothamCEP(this.cep.numero)){
      this.cepService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.message = 'CEP cadastrado com sucesso!';
          setTimeout( () => this.message = '', 2000 );
          this.cep = {};
        },
        error => {
          console.log(error);
        });
        
      } else {
        this.message = 'Verifique o CEP!';
        setTimeout( () => this.message = '', 2000 );
      }

  }
/*
  novoCep(): void {
    // VALIDA CEP
    this.submitted = false;
    this.cep = {
      numero: '',
     };
  }*/

}
