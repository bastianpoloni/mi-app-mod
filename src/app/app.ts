import { Component, computed, signal } from '@angular/core';
import { allIcons } from 'ngx-bootstrap-icons';
import { IProduct, Product } from './product';
import { ProductList } from './product/product-list/product-list';
import { Weather } from './services/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [ProductList],
  standalone: true,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Empresa ACME');
  products = signal<IProduct[]>([]);
  weatherData = signal<any>(null);

  constructor(private productService: Product, private weatherService: Weather) {}

 listFilter = signal('');
 datoRecibido = signal('');

  updateFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.listFilter.set(input.value);
  }
 
  filteredProducts = computed(() => {
    const filter = this.listFilter().toLocaleLowerCase();
    return this.products().filter(product => product.productName.toLocaleLowerCase().includes(filter));
  }
  );
//  constructor() {
//   console.log('Padre: constructor');
//  }

 ngOnInit(): void {  
  this.products.set(this.productService.getProducts());
  this.weatherService.getWeather('Santiago', 'CL').subscribe(data => {
    console.log(data);
    this.weatherData.set(data);
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
    this.showChildren.update(value => !value);
  }
  
};
