import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../../../environments/constant';
import { BaseCrudTableService } from '../../lib/service';
import { ComplainModule } from '../complain-online.module';
import { AtmComplainList } from '../model';
import { Observable } from 'rxjs';
import { PagedApiResponse, PageRequest } from '../../lib/model';

@Injectable({ providedIn: ComplainModule })
export class PicAtmService extends BaseCrudTableService<AtmComplainList> {

  constructor(http: HttpClient) {
    super(http, `${constant.complainOnlineUrl}/complain/atm`);
  }

  getTableRowsAtm(page: PageRequest): Observable<PagedApiResponse<AtmComplainList>> {
    return this.http.get<PagedApiResponse<AtmComplainList>>(
      `${constant.complainOnlineUrl}/complain/atm?category=atm`,
      {
        params: page.requestParam
      }
    );
  }
}
