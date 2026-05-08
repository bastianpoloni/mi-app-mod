import { Component, computed, signal } from '@angular/core';
import { Product } from './features/products/components/product/product';
import { Product as ProductService } from './features/products/services/product';
import {RouterOutlet, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, RouterLink],
  providers: [ProductService],
  standalone: true,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Empresa ACME');
  isModalOpen = signal(false);

  //constructor(public productService: ProductService) {}
  constructor(private router: Router){}

  listFilter = signal('');
  datoRecibido = signal('');

  updateFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.listFilter.set(input.value);
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

  




 

//   filteredProducts = computed(() => {
//     return this.productService.products().filter(p => p.productName.toLowerCase().includes(this.listFilter().toLowerCase()));
//   });
 }
