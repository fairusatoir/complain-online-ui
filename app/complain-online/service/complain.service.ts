import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../../../environments/constant';
import { BaseCrudTableService } from '../../lib/service';
import { ComplainModule } from '../complain-online.module';
import { CardList, ComplainList } from '../model';
import { Observable } from 'rxjs';
import { PagedApiResponse, PageRequest } from '../../lib/model';

@Injectable({ providedIn: ComplainModule })
export class ComplainService extends BaseCrudTableService<ComplainList> {

  constructor(http: HttpClient) {
    super(http, `${constant.complainOnlineUrl}/complain`);
  }

  // getTableRowsCard(page: PageRequest): Observable<PagedApiResponse<ComplainList>> {
  //   return this.http.get<PagedApiResponse<ComplainList>>(
  //     `${this.url}`,
  //     {
  //       params: page.requestParam
  //     }
  //   );
  // }
}
