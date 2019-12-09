import { Component, OnInit } from '@angular/core';
import { NewblogService } from '../../shared/services/newblog.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Newblog } from '../../shared/models/newblog.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homeform',
  templateUrl: './homeform.component.html',
  styleUrls: ['./homeform.component.css']
})
export class HomeformComponent implements OnInit {
  list: Newblog[];
  showList: boolean = false;
  addtoDesc: string;

  constructor(public service: NewblogService, 
    private firestore:AngularFirestore,
    private toastr:ToastrService
   ) { }

  ngOnInit() {
    this.service.getBlogs().subscribe(actionArray =>{
      this.list= actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Newblog;
      })
    });
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form !=null)
    form.resetForm();
    this.service.formData = {
      id: null,
      title: '',
      author: '',
      about: '',
      description: '',
      caption: '',
    }
  }

  onSubmit(form:NgForm){
    let data =Object.assign({},form.value);
    delete data.id;
    // this.addtoDesc = '<br>'+"Refer "+data.caption;
    // data.description=data.description+this.addtoDesc;
    if(form.value.id==null)
    this.firestore.collection('Bloglist').add(data);
    else
    this.firestore.doc('Bloglist/'+form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success("Blog Created Successfully!", "Yay!")
  }

  onEdit(blog: Newblog){
    this.service.formData =Object.assign({}, blog);
  }

  editBtn(){
    this.showList=!this.showList;
  }

  onDelete(id: string){
    if(confirm("Are you sure to delete this record")){
      this.firestore.doc('Bloglist/'+id).delete();
      this.toastr.error("Blog Deleted Successfully!","Done");
    }
  }


  
}
