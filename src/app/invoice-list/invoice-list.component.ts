import { Component } from '@angular/core';
import { Invoice } from '../Models/invoice.model';

@Component({
  selector: 'app-invoice-list',
  template: `
    <ul>
      <li *ngFor="let invoice of list">
        <b> Facture: {{ invoice.idFacture }} </b>  {{ invoice.dateFacture }}
        <a [routerLink]="['/invoice', invoice.idFacture, invoice.active]" class="btn btn-secondary m-1">Details</a>
      </li>
    </ul>
  `,
})
export class InvoiceListComponent {
  list: Invoice[] = [
    {idFacture:1,montantFacture:120, montantRemise:10, dateFacture:"12/12/2021", active:true},
    {idFacture:2,montantFacture:1020, montantRemise:90, dateFacture:"22/11/2020", active:true},
    {idFacture:3,montantFacture:260, montantRemise:30, dateFacture:"18/10/2020", active:false},
    {idFacture:4,montantFacture:450, montantRemise:40, dateFacture:"14/12/2020", active:true},
    ];
}
