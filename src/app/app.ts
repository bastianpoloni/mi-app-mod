import { Component, computed, signal } from '@angular/core';
import { allIcons } from 'ngx-bootstrap-icons';
import { Product } from './features/products/services/product';
import { ProductList } from './features/products/components/product-list/product-list';
import { ModalAdd } from './features/products/components/modal-add/modal-add';
import { switchMap } from 'rxjs/operators';
import { IProduct } from './features/products/interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [ProductList, ModalAdd],
  standalone: true,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Empresa ACME');
  isModalOpen = signal(false);

  constructor(public productService: Product) {}

  listFilter = signal('');
  datoRecibido = signal('');

  updateFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.listFilter.set(input.value);
  }

  filteredProducts = computed(() => {
    return this.productService.products().filter((p) =>
      p.productName.toLowerCase().includes(this.listFilter().toLowerCase()),
    );
  });

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: IProduct[]) => {
      this.productService.products.set(products);
      console.log(this.productService.products());
    });
  }

  ngOnChanges(): void {
    console.log('Padre: ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('Padre: ngOnDestroy');
  }

  showChildren = signal(true);
  toggleChildren(): void {
    this.showChildren.update((value) => !value);
  }

  guardarProducto(product: IProduct) {
    console.log('Guardando producto:', product);
    this.productService
      .saveProduct(product)
      .pipe(switchMap(() => this.productService.getProducts()))
      .subscribe((products) => this.productService.products.set(products));
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

  abrirModal() {
    console.log('Abriendo modal para crear producto');
    this.isModalOpen.set(true);
    console.log('Modal abierto:', this.isModalOpen());
  }

  cerrarModal() {
    console.log('Cerrando modal');
    this.isModalOpen.set(false);
  }
}
