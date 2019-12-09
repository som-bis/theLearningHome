import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Newblog } from '../models/newblog.model';
import { NewblogService } from './newblog.service';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {
 public gettitle:string;
  public getdesc:string;

  constructor(public service: NewblogService,
    private firestore: AngularFirestore,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  getDesc(title:string,description:string){
    this.gettitle=title;
    this.getdesc=description;
  }


}
