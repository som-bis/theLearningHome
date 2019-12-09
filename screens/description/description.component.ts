import { Component, OnInit } from '@angular/core';
import { DescriptionService } from 'src/app/shared/services/description.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  tit: string ;
  descn:string;


  constructor(private descService: DescriptionService) { }

  ngOnInit() {
  }
 
  showTit(){
    this.descService.gettitle = this.tit;
    this.descService.getdesc = this.descn;
  }

}
