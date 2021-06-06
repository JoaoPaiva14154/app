import { Injectable } from "@angular/core";

import { AuthData } from "./auth-data.model";

@Injectable({ providedIn: "root" })

export class AuthService {
  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    console.log("login", authData);
  }
  createUser(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    console.log("createUser", authData);
  }
}