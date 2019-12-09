import { Component, OnInit } from '@angular/core';
import { NewblogService } from '../../shared/services/newblog.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { WebsiteDescription } from 'src/app/shared/models/description.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-description',
  templateUrl: './edit-description.component.html',
  styleUrls: ['./edit-description.component.css']
})
export class EditDescriptionComponent implements OnInit {

  description: WebsiteDescription[];
  // selecteddescription: WebsiteDescription = new WebsiteDescription(); 

  constructor(public service: NewblogService,
    private firestore: AngularFirestore,
    private toastr: ToastrService,) { }

  ngOnInit() {
    this.service.getDescription().subscribe(actionArray =>{
      this.description= actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as WebsiteDescription;
      })
    });
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form !=null)
    form.resetForm();
    this.service.webDesc = {
      id: null,
      websitedesc: ''
    }
  }

  onSubmit(form:NgForm){
    let data =Object.assign({},form.value);
    delete data.id;
    if(form.value.id!=null){
      this.firestore.doc('Description/'+form.value.id).update(data);
      this.resetForm(form);
      this.toastr.success("Description Updated Successfully!", "Good Work!");
    }
    else{
      this.resetForm(form);
      this.toastr.warning("Current Description Not chosen","Not Updated!")
    }
  }

  onEdit(blog: WebsiteDescription){
    this.service.webDesc =Object.assign({}, blog);
  }

  // keyDownFunction(event) {
  //   if(event.keyCode == 13) {
  //     this.description.forEach
  //   }
  // }
  
  // editDesc(desc: WebsiteDescription){
  //   this.selecteddescription=desc;
  // }

  // senddescriptionToListEventHandler(desc: WebsiteDescription){
  //   this.description.forEach((el, index , array) => {
  //     if(el.id === desc.id){
  //       array[index].websitedesc = desc.websitedesc;
  //     }
  //   });
  //   this.selecteddescription = null;
  // }

}
