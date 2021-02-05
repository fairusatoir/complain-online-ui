import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuTableComponent } from "./table/tracking-complain.component";

const routes: Routes = [
  {
    path: '',
    component: MenuTableComponent,
    data: {
      title: 'Tracking',
      editable: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackingComplainRoutingModule {
}
