import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResponseAtmComponent } from "./table/response-atm.component";

const routes: Routes = [
  {
    path: '',
    component: ResponseAtmComponent,
    data: {
      title: 'Response',
      editable: true
    }
    // ,
    // children: [
    //   {
    //     path: 'create',
    //     component: CreateComplainComponent,
    //     data: {
    //       title: 'Create',
    //       editable: true
    //     }
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponseAtmRoutingModule {
}
