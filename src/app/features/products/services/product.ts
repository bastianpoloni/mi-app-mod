import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import {  HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProduct } from '../interfaces/product';
@Injectable({
  providedIn: 'root',
})
export class Product {

   products = signal<IProduct[]>([]);

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

