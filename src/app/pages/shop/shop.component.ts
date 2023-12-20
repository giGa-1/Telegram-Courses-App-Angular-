import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <app-product-list
      title="Diffrent Level"
      subtitle="Lorem ipsum ghot defht ase dfe klasoqmas o asle am ased desde"
      [products]="products.byGroup['skill']"
    />
    <app-product-list
      title="Diffrent Intensive"
      subtitle="Lorem ipsum ghot defht ase dfe klasoqmas o asle am ased desde"
      [products]="products.byGroup['intensive']"
    />
    <app-product-list
      title="Diffrent Course"
      subtitle="Lorem ipsum ghot defht ase dfe klasoqmas o asle am ased desde"
      [products]="products.byGroup['course']"
    />
  `
})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService)
  constructor() {
    this.telegram.BackButton.hide()
  }
}
