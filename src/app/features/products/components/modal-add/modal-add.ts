import { Component, inject, output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

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
  ocultarModal() {
    this.close.emit();
  }

  formProduct = this.fb.group({
    name: ['', Validators.required],
    code: ['', Validators.required],
    date: ['', Validators.required],
    price: [0, Validators.required],
    description: ['', Validators.required],
    rating: [0, [Validators.required, Validators.min(0), Validators.max(200)]],
    image: ['', Validators.required],
  });
}
