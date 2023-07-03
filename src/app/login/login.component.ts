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

  acno:any
  psw:any

constructor( private router: Router,private ds:DataService)
{

}

ngOnInit():void{


}

login()
{

  var acno=this.acno
  var psw=this.psw
  this.ds.login(acno,psw).subscribe((result:any)=>{
    alert(result.message)
    this.router.navigateByUrl('home')},
    result=>{
      alert(result.error.message)
    
  })
 
  
  //alert('login clicked')
  
//this.router.navigateByUrl('home')
//console.log(this.acno);
//console.log(this.psw);



}


}
