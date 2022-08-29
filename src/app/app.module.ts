import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from 'src/app/app-routing.module';
import { SubcatComponent } from './components/subcat/subcat.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { SubproductsComponent } from './components/subproducts/subproducts.component';

import { RegisterComponent } from './pages/register/register.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SubproductPageComponent } from './pages/subproduct-page/subproduct-page.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CategoryComponent,
    HomepageComponent,
    
    SubcatComponent,
    ProductsComponent,
    ProductpageComponent,
    ProductDetailComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    SubproductsComponent,
    
    RegisterComponent,
         LoginPageComponent,
         SubproductPageComponent,
         
    
    
    
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
