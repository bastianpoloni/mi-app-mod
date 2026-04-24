import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Product {
  // http: any;
  // getProducts(): IProduct[] {
  //   return [
  //     {
  //       productId: 1,
  //       productName: 'Zapatillas deportivas',
  //       productCode: 'GDN-0011',
  //       releaseDate: 'March 19, 2021',
  //       price: 19.95,
  //       description: 'Zapatillas deportivas para hombre',
  //       starRating: 40,
  //       imageUrl: '',
  //     },
  //     {
  //       productId: 2,
  //       productName: 'Martillo',
  //       productCode: 'GDN-0023',
  //       releaseDate: 'March 18, 2021',
  //       price: 32.99,
  //       description: 'Martillo de acero con mango de madera',
  //       starRating: 59,
  //       imageUrl:
  //         'https://media.istockphoto.com/id/183759696/photo/hammer.jpg?s=1024x1024&w=is&k=20&c=UQwz6a6GGK0Ti7uCaN2GugVyv1bKXYquzFaZY90wax4=',
  //     },
  //     {
  //       productId: 3,
  //       productName: 'Polera',
  //       productCode: 'TBX-0048',
  //       releaseDate: 'May 21, 2021',
  //       price: 8.9,
  //       description: 'Polera deportiva para hombre',
  //       starRating: 60,
  //       imageUrl:
  //         'https://media.istockphoto.com/id/1490616219/photo/portrait-of-handsome-young-man.jpg?s=1024x1024&w=is&k=20&c=CjNTkeUq2TfhyPoXWA9sShdaxnsPGA_RM2PT4-YAxYU=',
  //     },
  //     {
  //       productId: 4,
  //       productName: 'Lentes de sol',
  //       productCode: 'TBX-0022',
  //       releaseDate: 'May 15, 2021',
  //       price: 11.55,
  //       description: 'Lentes de sol con protección UV',
  //       starRating: 60,
  //       imageUrl: 'https://cdn.pixabay.com/photo/2017/07/13/12/21/wood-sunglasses-2500248_1280.jpg',
  //     },
  //     {
  //       productId: 5,
  //       productName: 'Control de videojuego',
  //       productCode: 'GM-0042',
  //       releaseDate: 'October 15, 2021',
  //       price: 39.99,
  //       description: 'Control de videojuego inalámbrico con botones responsivos.',
  //       starRating: 200,
  //       imageUrl:
  //         'https://cdn.pixabay.com/photo/2016/07/22/15/11/android-tv-game-controller-1535038_1280.jpg',
  //     },
  //     {
  //       productId: 6,
  //       productName: 'Laptop',
  //       productCode: 'SHO-001',
  //       releaseDate: 'November 20, 2021',
  //       price: 59.99,
  //       description: 'Laptop liviana de 15 pulgadas',
  //       starRating: 121,
  //       imageUrl: 'https://cdn.pixabay.com/photo/2021/01/10/06/14/macbook-pro-5904175_1280.jpg',
  //     },
  //   ];
  // }

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/productos').pipe(
      map((response: any) => response.productos)
    );
  }

  generateProductCode(): string {
    const randomNum = Math.floor(Math.random() * (100 -10) + 10);
    return `PROD-${randomNum.toString().padStart(3, '0')}`;
  }

  saveProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('http://localhost:3000/productos', product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/productos/${id}`);
  }

  updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`http://localhost:3000/productos/${id}`, product);
  }
 
}

export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}
