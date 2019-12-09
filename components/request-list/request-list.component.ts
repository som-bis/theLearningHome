import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NewblogService } from '../../shared/services/newblog.service';
import { Requestblog } from '../../shared/models/requestblog.model';
import { faCheckCircle, faFrown } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  list: Requestblog[];
  showVar: boolean = false;
  descClose: boolean = false;
  faCheckCircle=faCheckCircle;
  faFrown=faFrown;

  constructor(public service: NewblogService,
    private firestore: AngularFirestore,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getRequests().subscribe(actionArray =>{
      this.list= actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Requestblog;
      })
    });
  }

  onEdit(request: Requestblog){
    this.service.requestData =Object.assign({}, request);
  }

  onDelete(id: string){
    if(confirm("Are you sure to delete this record")){
      this.firestore.doc('Requestlist/'+id).delete();
      this.toastr.error("Request Deleted Successfully!","Done");
    }
  }


  toggleDesc(id: any){
    this.showVar = id;
    this.descClose= !this.descClose;
    console.log(id);
}


}
