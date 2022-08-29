import {NgModule} from '@angular/core';
import {RouterModule,Routes} from'@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthgGuard } from './authg.guard';
import { SubproductPageComponent } from './pages/subproduct-page/subproduct-page.component';

const routes:Routes=[
 {path:'',redirectTo:'home',pathMatch:'full'},   
{path:'home',component: HomepageComponent,canActivate:[AuthgGuard]},
{path:'product/:catId',component: ProductpageComponent,canActivate:[AuthgGuard]},
{path:'product/sub/:subId',component:SubproductPageComponent,canActivate:[AuthgGuard]},
{path:'product/details/:id',component: ProductDetailComponent,canActivate:[AuthgGuard]},
{path:'about',component:AboutComponent, canActivate:[AuthgGuard]},
{path:'contact',component:ContactComponent,canActivate:[AuthgGuard]},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginPageComponent},
{path:'**', component:ErrorComponent},

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}