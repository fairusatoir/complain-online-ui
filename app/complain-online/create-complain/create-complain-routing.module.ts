import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComplainComponent } from "./form/create-complain.component";

const routes: Routes = [
  {
    path: '',
    component: CreateComplainComponent,
    data: {
      title: 'Create',
      editable: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateComplainRoutingModule {
}
