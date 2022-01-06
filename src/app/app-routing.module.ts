import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './telas/pedidos/pedidos.component';
import { ProdutosComponent } from './telas/produtos/produtos.component';

const routes: Routes =
  [
    { path: 'pedidos', component: PedidosComponent },
    { path: 'produtos', component: ProdutosComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
