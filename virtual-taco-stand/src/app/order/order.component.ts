import { Component } from '@angular/core';

export interface OrderedTaco {
  id: number;
  name: string;
  price: number;
  quantity: number;
  noOnions: boolean;
  noCilantro: boolean;
}

export interface Order {
  orderId: number;
  tacos: OrderedTaco[];
}

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  template: `
    <p>
      order works!
    </p>
  `,
  styles: ``
})
export class OrderComponent {
  order: Order = { orderId: 0, tacos: [] };

  selectedTacoId = 1;
  quantity = 1;
  noOnions = false;
  noCilantro = false;

  private readonly tacoById: Record<number, { name: string; price: number }> = {
    1: { name: 'Carnitas Taco', price: 3.25 },
    2: { name: 'Queso Birria Taco', price: 3.5 },
    3: { name: 'Al Pastor Taco', price: 3.25 },
    4: { name: 'Tacos de Lengua', price: 3.5 },
    5: { name: 'Chicken Taco', price: 3.25 },
    6: { name: 'Fish Taco', price: 3.25 },
    7: { name: 'Veggie Taco', price: 3.25 },
    8: { name: 'Chicharron Taco', price: 3.25 },
    9: { name: 'Potato Taco', price: 3.25 },
    10: { name: 'Chorizo Taco', price: 3.25 },
  };

  addToOrder(): void {
    this.order.orderId = Math.floor(Math.random() * 1000) + 1;
    const meta = this.tacoById[this.selectedTacoId];
    if (!meta) {
      return;
    }
    this.order.tacos.push({
      id: this.selectedTacoId,
      name: meta.name,
      price: meta.price,
      quantity: this.quantity,
      noOnions: this.noOnions,
      noCilantro: this.noCilantro,
    });
  }

  getTotal(): number {
    return this.order.tacos.reduce(
      (sum, taco) => sum + taco.price * taco.quantity,
      0
    );
  }

  resetForm(): void {
    this.selectedTacoId = 1;
    this.quantity = 1;
    this.noOnions = false;
    this.noCilantro = false;
  }
}
