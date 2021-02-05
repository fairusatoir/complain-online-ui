import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuTableComponent } from "./table/tracking-complain.component";
import { CreateComplainComponent } from "./form/get-complain.component";

const routes: Routes = [
  {
    path: '',
    component: MenuTableComponent,
    data: {
      title: 'Tracking',
      editable: true
    }
  },
  {
    path: ':id',
    component: CreateComplainComponent,
    data: {
      title: 'Response',
      editable: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackingComplainRoutingModule {
}
