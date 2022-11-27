import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from '../../../services/authapp.service';

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
  titolo : string = "Accesso & Autenticazione";
  sottotitolo : string = "Procedi ad inserire la userid e la password";

  constructor(private route: Router, private BasicAuth : AuthappService) { }

  ngOnInit(): void {
  }

  gestAuth(){
    if (this.BasicAuth.autentica(this.userId, this.password)){

      this.route.navigate(["welcome",this.userId]);
    }else if (this.userId == "" || this.password == ""){
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event : any) {
            if (form.checkValidity() === false) {
            form.classList.add('was-validated');
            }
          })
        });
      }else{
        this.autenticato = false;
    }
  }
}
