import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { CustomersComponent } from './customers/customers.component';

export const MinhasRotas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre/:Nome', component: SobreComponent },
    { path: 'contato/:telefone', component: ContatoComponent },
    { path: 'clientes', component: CustomersComponent }

];
