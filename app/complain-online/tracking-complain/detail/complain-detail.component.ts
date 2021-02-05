import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplainList } from '../../model';
import { ComplainService } from '../../service';

@Component({
  selector: 'complain-detail',
  templateUrl: 'complain-detail.component.html'
})
export class ComplainDetailComponent implements OnInit {
  complainList: ComplainList;
  @Input() dataDetail: ComplainList;
  isDetail: boolean = true;
  isResponse: boolean = true;

  // @Input() dataDetail: SdnData;
  // @Input() component: string;
  // ofacDetail: SdnDetail;
  // consolidateDetail: ConsolidatedDetail;
  // passportData: Array<Other> = [];
  // isAddress: boolean = true;
  // isCitizenship: boolean = true;
  // isNationality: boolean = true;
  // isProgram: boolean = true;
  // isPassport: boolean = true;
  // isOtherInfo: boolean = true;
  // isOtherInfoSub: boolean = true;
  // isOtherInfoVessel: boolean = true;
  // isShow: boolean = true;

  constructor(private complainService: ComplainService) { }

  ngOnInit() {
    console.log(this.dataDetail.noComplain);
    if (this.dataDetail.noComplain) {
      // console.table(this.id);
      this.complainService
        .get(this.dataDetail.noComplain)
        .subscribe(data => {
          this.complainList = data;
        });
    }
  }
}
