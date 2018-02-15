import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductsComponent } from '../products/products.component';
import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';  

export const routes: Routes = [
{ path: 'about', component: AboutComponent },
{ path: 'home', component: HomeComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'products', component: ProductsComponent },
{ path: 'services', component: ServicesComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' }
];