import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loanform',
  templateUrl: './loanform.component.html',
  styleUrls: ['./loanform.component.css']
})
export class LoanformComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    
  }
  onclick()
    {
   this.route.navigate(["newlogin"]);
    }
    urllink:string="assets/images/propic1.jpg";
    
    urllink1:string="assets/images/uploadsign1.PNG";
    
    urllink2:string="assets/images/uploadsign1.PNG";
    selectFiles(event)
    {
      if(event.target.files)
      {
        var reader=new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload=(event:any)=>
        {
          this.urllink=event.target.result
        }
      }
    }
    selectFiles1(event)
    {
      if(event.target.files)
      {
        var reader=new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload=(event:any)=>
        {
          this.urllink1=event.target.result
        }
      }
    }
    selectFiles2(event)
    {
      if(event.target.files)
      {
        var reader=new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload=(event:any)=>
        {
          this.urllink2=event.target.result
        }
      }
    }
  
}
