import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logoap',
  templateUrl: './logoap.component.html',
  styleUrls: ['./logoap.component.css']
})
export class LogoapComponent implements OnInit {
islogged= false;
  constructor(private router:Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.islogged=true;
    }else{
      this.islogged = false;
    }
  }
  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }



login(){
  this.router.navigate(["/login"])
}


}
