import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PicResponseTableComponent } from "./table/pic-response-table.component";
import { PicResponseFormComponent } from "./form/pic-response-form.component";

const routes: Routes = [
  {
    path: '',
    component: PicResponseTableComponent,
    data: {
      title: 'Complain List',
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
