import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../../../environments/constant';
import { BaseCrudTableService } from '../../lib/service';
import { ComplainModule } from '../complain-online.module';
import { CardList } from '../model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: ComplainModule })
export class CardService extends BaseCrudTableService<CardList> {

  constructor(http: HttpClient) {
    super(http, `${constant.complainOnlineUrl}/complain/card`);
  }

  searchCard(searchTerm: string): Observable<Array<CardList>> {
    return this.http.get<Array<CardList>>(
      `${constant.complainOnlineUrl}/complain/card`
    );
  }
}
