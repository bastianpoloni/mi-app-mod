import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { switchMap} from 'rxjs';

import { IProduct } from '../interfaces/product';
import { Product as ProductService } from '../services/product';
import { ProductList } from './product-list/product-list';
import { ModalAdd } from './modal-add/modal-add';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone: true,
  imports: [ProductList, ModalAdd, FormsModule],
})
export class Product {
  isModalOpen = signal(false);
  listFilter = signal('');

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: IProduct[]) => {
      this.productService.products.set(products);
      console.log(this.productService.products());
    });
  }

  filteredProducts = computed(() => {
    return this.productService.products().filter(p => 
        p.productName.toLowerCase().includes(this.listFilter().toLowerCase()));
  });

  abrirModal() {
    console.log('Abriendo modal para crear producto');
    this.isModalOpen.set(true);
    console.log('Modal abierto:', this.isModalOpen());
  }

  cerrarModal() {
    console.log('Cerrando modal');
    this.isModalOpen.set(false);
  }

   guardarProducto(product: IProduct) {
    console.log('Guardando producto:', product);
    this.productService
      .saveProduct(product)
      .pipe(switchMap(() => this.productService.getProducts()))
      .subscribe(products => this.productService.products.set(products));
  }

    crearProducto() {
    let datos: any = {
      name: `Producto nuevo ${Math.round(Math.random() * (100 - 1) + 1)}`,
      code: this.productService.generateProductCode(),
      date: '2024-06-01',
      price: Math.round(Math.random() * (40000 - 10000) + 10000),
      description: 'Producto nuevo',
      rate: Math.round(Math.random() * (200 - 1) + 1),
      image:
        'https://cdn.pixabay.com/photo/2016/07/22/15/11/android-tv-game-controller-1535038_1280.jpg',
    };
    this.guardarProducto(datos);
  }
}
