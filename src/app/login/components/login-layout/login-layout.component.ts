import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit{

  ngOnInit(): void {
    alert('Admin: email: admin@admin.com, pass:1234 \nDocente: email: prueba@gmail.com, pass:1234')
  }
}
