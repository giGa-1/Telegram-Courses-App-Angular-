import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  template: `<h1>main shop</h1>`
})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService)
  constructor() {
    this.telegram.MainButton.show()
    console.log(this.products.byGroup)
  }
}
