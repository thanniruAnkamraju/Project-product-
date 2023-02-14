import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateproductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import {FormsModule} from'@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateproductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
