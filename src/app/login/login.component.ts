import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId :string = "";
  password :string = "";
  autenticato : boolean = true;
  errMsg : string = "Spiacente, la userid e/o la password sono errati!";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAuth(){
    console.log(this.userId);
    if (this.userId == "Francesco" && this.password == "cuccu4life"){
      //this.autenticato = true;
      this.route.navigate(["welcome",this.userId]);
    }else{
      this.autenticato = false;
    }
  }

}
