import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customers.model';

@Component({
  selector: 'new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent {
  customers: Customer[];
  formulario: FormGroup;
  isVisible: boolean = false;
  message: string = '';
  isSuccess: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { 
    this.formulario = this.formBuilder.group({
      cpf: ['', Validators.required],
      nome: ['', Validators.required],
      email: [''],
      cep: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      telefone: [''],
      complemento: [''],
    })
  }
  
  postar() {
    this.isVisible = true;
    if (!this.formulario.valid) {
      this.message = 'Existem campos vazios, favor verificar!';
      this.isSuccess = false
    } else {
      this.message = 'Cadastro realizado!';
      this.isSuccess = true;
      this.formulario.reset();
    }
    setTimeout(() => this.isVisible = false, 2000);
  }

}
