import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { constant } from "../../../environments/constant";
import { PagedApiResponse, PageRequest } from "../../lib/model";
import { ComplainList } from "../model";
import { ResponseAtmModule } from "../response-atm/response-atm.module";

@Injectable({
  providedIn: ResponseAtmModule
})
export class ResponseAtmService {

  constructor(private http: HttpClient) { }

  getTableRow(param: HttpParams): Observable<PagedApiResponse<ComplainList>> {

    return this.http.get<PagedApiResponse<ComplainList>>(
      `${constant.complainOnlineUrl}/complain/atm`,
      {
        params: param
      }
    );
  }
}
