import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Requestblog } from '../../shared/models/requestblog.model';
import { NewblogService } from '../../shared/services/newblog.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-request-blog',
  templateUrl: './request-blog.component.html',
  styleUrls: ['./request-blog.component.css']
})
export class RequestBlogComponent implements OnInit {

  list: Requestblog[];
  showList: boolean = false;

  constructor(public service: NewblogService, 
    private firestore:AngularFirestore,
    private toastr: ToastrService
   ) { }

  ngOnInit() {
    this.service.getRequests().subscribe(actionArray =>{
      this.list= actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Requestblog;
      })
    });
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form !=null)
    form.resetForm();
    this.service.requestData = {
      id: null,
      topic: '',
      user: '',
      about: '',
    }
  }

  onSubmit(form:NgForm){
    let data =Object.assign({},form.value);
    delete data.id;
    if(form.value.id==null)
    this.firestore.collection('Requestlist').add(data);
    else
    this.firestore.doc('Requestlist/'+form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Wo-Hoo!!', 'Request Placed Successfully');
  }

  onEdit(request: Requestblog){
    this.service.requestData =Object.assign({}, request);
  }

  editBtn(){
    this.showList=!this.showList;
  }

  onDelete(id: string){
    if(confirm("Are you sure to delete this record")){
      this.firestore.doc('Requestlist/'+id).delete();
    }
  }

}
