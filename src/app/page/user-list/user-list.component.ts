import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();
  users2$: BehaviorSubject<User[]> = this.userService.list$

  phrase:string=""
  dropdown:string="-- Select search category --"
  dropdownlist:any[]=["-- Select search category --", "id", "name", "email", "address", "active"]
  order:string=""
  nyil:string=""
  position:number=1
  changeorder(e:any):void{if(e==this.order){this.position=this.position*-1} else {this.order=e; this.position=1;}}
  
  idarrow:string=""
  namearrow:string=""
  addressarrow:string=""
  emailarrow:string=""
  activearrow:string=""

  arrowid():void{this.clear(); if (this.position==1){this.idarrow="fa fa-arrow-up"} else if (this.position==-1) { this.idarrow="fa fa-arrow-down"}}
  arrowname():void{this.clear(); if (this.position==1){this.namearrow="fa fa-arrow-up"} else if (this.position==-1) { this.namearrow="fa fa-arrow-down"}}
  arrowaddress():void{this.clear(); if (this.position==1){this.addressarrow="fa fa-arrow-up"} else if (this.position==-1) { this.addressarrow="fa fa-arrow-down"}}
  arrowemail():void{this.clear(); if (this.position==1){this.emailarrow="fa fa-arrow-up"} else if (this.position==-1) { this.emailarrow="fa fa-arrow-down"}}
  arrowactive():void{this.clear(); if (this.position==1){this.activearrow="fa fa-arrow-up"} else if (this.position==-1) { this.activearrow="fa fa-arrow-down"}}
  clear():void{this.idarrow=""; this.namearrow=""; this.addressarrow=""; this.emailarrow=""; this.activearrow=""}
  
  constructor(
    private userService: UserService) { }

  ngOnInit(): void {this.userService.getAll2()}

  onDelete(e:User):void{this.userService.remove(e).subscribe(e=>this.userService.getAll2())}


}
