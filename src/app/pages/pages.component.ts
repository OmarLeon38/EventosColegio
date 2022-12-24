import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(public alumnoService: AlumnoService, public router:Router) { 
    console.log(alumnoService.menu);
  }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigateByUrl('/login');
  }

}
