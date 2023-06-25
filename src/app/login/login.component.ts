import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{DataService} from '../data.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data="Happy Banking With Us!!"
  pdata="acc no"
  serviceData:any

constructor( private router: Router,private ds:DataService)
{

}

ngOnInit():void{
this.serviceData= this.ds.sdata
console.log(this.serviceData);
this.ds.smethod()

}

login()
{
 
  
  //alert('login clicked')
  
this.router.navigateByUrl('home')
}

}

