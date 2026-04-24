import { Component, inject, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IProduct, Product } from '../../product';
import { Star } from './star/star';
import { ImagePipe } from '../../shared/image-pipe';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-product-list',
  imports: [Star, DatePipe, ImagePipe],
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
private readonly productService = inject(Product);

viewProduct(arg0: number) {
throw new Error('Method not implemented.');
}
editProduct(productId: number, product: IProduct) {
  const datos: any = {
    name: `Producto Actualizado ${Math.floor(Math.random() * 99 + 1)}`,
    code: this.productService.generateProductCode(),
    date: '2023-01-01',
    price: Math.round(Math.random() * 30000 + 10000),
    description: 'Descripción actualizada',
    rate: Math.round(Math.random() * 199 + 1),
    image: 'https://cdn.pixabay.com/photo/2021/01/10/06/14/macbook-pro-5904175_1280.jpg'
  };
  this.productService.updateProduct(productId, datos).pipe(
    switchMap(() => this.productService.getProducts())
  ).subscribe({
    next: (products: IProduct[]) => {
      console.log('llego un dato');
      console.log('Producto actualizado:', productId);
      this.updatedProducts.emit(products);
    },
    error: (error: any) => {
      console.error('Error al actualizar el producto:', error);
    },
    complete: () => {
      console.log('Operación de actualización completada');
    }
  });
}
  datoEmitido = output<string>();
  products = input<IProduct[]>([], { alias: 'datos' });
  imageWidth: number = 50;
  imageMargin: number = 10;
  imageHeight: number = 50;
  showImage: boolean = false;

  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor() {
    console.log('Hijo : constructor');
  }

  ngOnInit(): void {
    console.log('Hijo: ngOnInit');
  }

  ngOnChanges(): void {
    console.log('Hijo: ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('Hijo: ngOnDestroy');
  }
  
  updatedProducts = output<IProduct[]>();
  deleteProduct(productId: number) {
    this.productService
      .deleteProduct(productId)
      .pipe(switchMap(() => this.productService.getProducts()))
      .subscribe({
        next: (products: IProduct[]) => {
          console.log('Llego un dato');
          console.log('Producto eliminado:', productId);
          this.updatedProducts.emit(products);
        },
        error: (error: any) => {
          console.error('Error al eliminar el producto:', error);
        },
        complete: () => {
          console.log('Operación completada');
        },
      });
  }
}
