import { DetailComponent } from './detail/detail.component';
import { RiwayatComponent } from './riwayat/riwayat.component';
import { AktifComponent } from './aktif/aktif.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'aktif',
    pathMatch:'full'
  },
  {
    path:'aktif',
    component:AktifComponent,
  },
  {
    path:'riwayat',
    component:RiwayatComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
