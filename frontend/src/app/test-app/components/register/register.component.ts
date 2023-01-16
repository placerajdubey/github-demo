import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { ServicesService } from '../../services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  msg: any;
  user = new User();
  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
  
  }

  registerUser(){
   
    this.service.registerUser(this.user).subscribe(
      data => {console.log("Success!")
      Swal.fire({

        icon: 'success',

        title: 'Registration Successful',

        showConfirmButton: false,

        timer: 5000

      })
      this.router.navigate(['login']);
      })
      {
        
      }
    
  }
}
