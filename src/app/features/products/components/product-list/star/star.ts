import { Component,signal, input, computed } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  standalone: true,
  templateUrl: './star.html',
  styleUrl: './star.css',
})
export class Star {
  rating = input<number>(100, { alias: 'rating' });
 // stars = signal(4);
  //arr: any[] =  new Array(this.stars()).fill(1);

  // ngOnChanges(): void {
  //   console.log('Hijo star ngOnChanges');
  //   this.stars.set(this.rating()/20);
  //   if (this.rating() > 0 && this.rating() <= 40){
  //     this.stars.set(1);
  //   }else if (this.rating() > 40 && this.rating() <= 80){
  //     this.stars.set(2);
  //   }else if (this.rating() > 80 && this.rating() <= 120){
  //     this.stars.set(3);
  //   }else if (this.rating() > 120 && this.rating() <= 160){
  //     this.stars.set(4);
  //   }else if (this.rating() > 160 && this.rating() <= 200){
  //     this.stars.set(5);
  //   }
  //   this.arr = new Array(this.stars()).fill(1);
    
  // }

  stars = computed(() => {
    const rating = this.rating();
    if (rating > 0 && rating <= 40) {
      return 1;
    }
    else if (rating > 40 && rating <= 80) {
      return 2;
    }
    else if (rating > 80 && rating <= 120) {
      return 3;
    }
    else if (rating > 120 && rating <= 160) {
      return 4;
    }
    else if (rating > 160 && rating <= 200) {
      return 5;
    }
    return 0;
  });

  arr = computed(() => Array.from({ length: this.stars() }).fill(1));
}
