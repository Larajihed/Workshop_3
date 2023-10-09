import { RouterModule, Routes } from '@angular/router';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MainUserComponent } from './main-user/main-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Définissez les routes de vos composants existants
  {path:"users",component:ListUserComponentComponent,
    children:[
      {path:"addUser",component:AddUserComponent},
      {path:"editUser/:param",component:EditUserComponent}
    ]},

  { path: 'invoice-management', component: MainInvoiceComponent },
  { path: 'invoice/:id/:active', component: InvoiceComponent },
  {path:"products",component:MainProductComponent},
  {path:"provider",component:MainProviderComponent},
  {path:"mainUser",component:MainUserComponent},

  {path: '**', component: NotFoundPageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
