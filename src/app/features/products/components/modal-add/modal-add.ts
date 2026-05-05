import { Component, inject, output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { map, Observable } from 'rxjs';

import { Product } from '../../services/product';

@Component({
  selector: 'app-modal-add',
  standalone: true,
  templateUrl: './modal-add.html',
  styleUrl: './modal-add.css',
  imports: [ReactiveFormsModule],
})
export class ModalAdd {
  

  saveData() {
    console.log(this.formProduct.value);
  }
  private fb = inject(FormBuilder);
  close = output<void>();
  private productService = inject(Product);
  ocultarModal() {
    this.close.emit();
  }

  codeValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable< {[key: string] : any} | null> => {
      let code = control.value;
      console.log('cliente - code:', code);
      return this.productService.searchProduct(code)
      .pipe(map(res => {
        if (res) {
          console.log('codigo encotrado:', res);
          return { codeExists: true };
        }
        console.log('codigo no encontrado:', code);
        return null;
      }));
    };
  }

  formProduct = this.fb.group({
    name: ['', Validators.required],
    code: ['', [  Validators.required, Validators.minLength(7)], this.codeValidator()],
    date: ['', Validators.required],
    price: [0, Validators.required],
    description: ['', Validators.required],
    rating: [0, [Validators.required, Validators.min(0), Validators.max(200)]],
    image: ['', Validators.required],
  });
}
