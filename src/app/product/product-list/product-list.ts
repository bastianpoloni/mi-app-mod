import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IProduct } from '../../product';
import { Star } from './star/star';
import { ImagePipe } from '../../shared/image-pipe';

@Component({
  selector: 'app-product-list',
  imports: [Star, DatePipe, ImagePipe],  
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  datoEmitido = output<string>();
  products = input<IProduct[]>([], { alias: 'datos' });
  imageWidth: number = 50;
  imageMargin: number = 10;
  imageHeight: number = 50;
  showImage: boolean = false;

  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }

  toggleImage() : void {
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


}
