import { Component, signal } from '@angular/core';
import { allIcons } from 'ngx-bootstrap-icons';
import { IProduct } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Empresa ACME');
  products: IProduct []= [
    {
    productId: 1,
    productName: 'Zapatillas deportivas',
    productCode: 'GDN-0011',
    releaseDate: 'March 19, 2021',
    price: 19.95,
    description: 'Zapatillas deportivas para hombre',
    starRating: 3.2,
    imageUrl: 'https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.jpg?s=1024x1024&w=is&k=20&c=anQJwG2c4-ZEqf9BgeIm3ph76JZWSU2-GbOE7b_OzcA='
  },
  {
    productId: 2,
    productName: 'Martillo',
    productCode: 'GDN-0023',
    releaseDate: 'March 18, 2021',
    price: 32.99,
    description: 'Martillo de acero con mango de madera',
    starRating: 4.2,
    imageUrl: 'https://media.istockphoto.com/id/183759696/photo/hammer.jpg?s=1024x1024&w=is&k=20&c=UQwz6a6GGK0Ti7uCaN2GugVyv1bKXYquzFaZY90wax4='

  },
  {
    productId: 3,
    productName: 'Polera',
    productCode: 'TBX-0048',
    releaseDate: 'May 21, 2021',
    price: 8.9,
    description: 'Polera deportiva para hombre',
    starRating: 4.8,
    imageUrl: 'https://media.istockphoto.com/id/1490616219/photo/portrait-of-handsome-young-man.jpg?s=1024x1024&w=is&k=20&c=CjNTkeUq2TfhyPoXWA9sShdaxnsPGA_RM2PT4-YAxYU='

  },
  {
    productId: 4,
    productName: 'Lentes de sol',
    productCode: 'TBX-0022',
    releaseDate: 'May 15, 2021',
    price: 11.55,
    description: 'Lentes de sol con protección UV',
    starRating: 3.7,
    imageUrl: 'https://cdn.pixabay.com/photo/2017/07/13/12/21/wood-sunglasses-2500248_1280.jpg'
  },
  {
    productId: 5,
    productName: 'Control de videojuego',
    productCode: 'GM-0042',
    releaseDate: 'October 15, 2021',
    price: 39.99,
    description: 'Control de videojuego inalámbrico con botones responsivos.',
    starRating: 4.5,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/07/22/15/11/android-tv-game-controller-1535038_1280.jpg'
  },
  {
    productId: 6,
    productName: 'Laptop',
    productCode: 'SHO-001',
    releaseDate: 'November 20, 2021',
    price: 59.99,
    description: 'Laptop liviana de 15 pulgadas',
    starRating: 4.3,
    imageUrl: 'https://cdn.pixabay.com/photo/2021/01/10/06/14/macbook-pro-5904175_1280.jpg'
  }
 ]

 listFilter = signal('');
 
  
};
