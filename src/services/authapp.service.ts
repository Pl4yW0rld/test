import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userId : string , password : string) : boolean => {
    var retVal = (userId === "Francesco" && password === "cuccu4life") ? true : false;
    if (retVal) {
      sessionStorage.setItem("utente", userId);
    }
    return retVal;
  }

  loggedUser = () : string | null => (sessionStorage.getItem("utente")) ? sessionStorage.getItem("utente") : "";

  isLogged = () : boolean => (sessionStorage.getItem("utente")) ? true : false;

  clearUser = () : void => sessionStorage.removeItem("utente");

  clearAll = () : void => sessionStorage.clear();

}
