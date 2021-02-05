import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { constant } from "../../../environments/constant";
import { PagedApiResponse } from "../../lib/model";
import { BaseCrudTableService } from "../../lib/service";
import { ComplainModule } from "../complain-online.module";
import { ComplainList } from "../model";
import { ResponseAtmModule } from "../response-atm/response-atm.module";

@Injectable({providedIn: ComplainModule})
export class ResponseAtmService extends BaseCrudTableService<ComplainList>{

  constructor(http: HttpClient) {
    super(http, `${constant.complainOnlineUrl}/complain/atm`);
  }

  getTableRow(param: HttpParams): Observable<PagedApiResponse<ComplainList>> {

    return this.http.get<PagedApiResponse<ComplainList>>(
      `${constant.complainOnlineUrl}/complain/atm`,
      {
        params: param
      }
    );
  }
}
