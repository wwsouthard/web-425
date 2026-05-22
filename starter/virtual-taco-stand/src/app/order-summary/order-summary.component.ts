import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order, Taco } from '../order/order.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [ CommonModule ],
  template: `
  <h1>Order Summary</h1>
  @if (order.tacos.length > 0) {
    <ul>
      @for (taco of order.tacos; track $index; let i = $index) {
        <li class="line-item">
          <strong>Item {{ i + 1 }}</strong>
          <div class="line-item-details">
            <span>{{ taco.name }}</span>
            <span>Quantity: {{ taco.quantity ?? 1 }}</span>
            <span>Unit price: {{ taco.price | currency:'USD':'symbol':'1.2-2' }}</span>
            <span>Line subtotal: {{ getLineSubtotal(taco) | currency:'USD':'symbol':'1.2-2' }}</span>
            @if (getCustomizations(taco).length > 0) {
              <span class="customizations">Customizations: {{ getCustomizations(taco).join(', ') }}</span>
            }
          </div>
          <button type="button" (click)="onRemoveTaco(i)">Remove Taco</button>
        </li>
      }
    </ul>
    <p><strong>Total:</strong> {{ getTotal() | currency:'USD':'symbol':'1.2-2' }}</p>
  } @else {
    <p>No tacos added to the order yet.</p>
  }
  `,
  styles: `
    li {
      margin-bottom: 10px;
      padding: 5px;
    }

    .line-item-details {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin: 6px 0;
    }

    .customizations {
      font-style: italic;
    }

    button {
      margin-top: 4px;
    }
  `
})
export class OrderSummaryComponent {
  @Input() order!: Order;
  @Output() removeTaco = new EventEmitter<number>();

  getLineSubtotal(taco: Taco): number {
    return taco.price * (taco.quantity ?? 1);
  }

  getCustomizations(taco: Taco): string[] {
    const customizations: string[] = [];
    if (taco.noOnions) {
      customizations.push('No onions');
    }
    if (taco.noCilantro) {
      customizations.push('No cilantro');
    }
    return customizations;
  }

  onRemoveTaco(index: number): void {
    this.removeTaco.emit(index);
  }

  getTotal() {
    return this.order.tacos.reduce((acc, taco) => acc + (taco.price * (taco.quantity ?? 1)), 0);
  }
}
