import { Component, OnInit } from '@angular/core';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  faBookOpen = faBookOpen;
  faHandPaper= faHandPaper;
  faHandshake =faHandshake;
  faThumbsUp=faThumbsUp;
  faArrowAltCircleRight=faArrowAltCircleRight;
  faUser=faUser;
  constructor() { }

  ngOnInit() {
  }

}
