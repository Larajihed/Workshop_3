import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { SlideComponent } from './slide/slide.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MainUserComponent } from './main-user/main-user.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListUserComponentComponent,
    SlideComponent,
    HomeComponent,
    MainUserComponent,
    MainProductComponent,
    MainProviderComponent,
    NotFoundPageComponent,
    AddUserComponent,
    EditUserComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
