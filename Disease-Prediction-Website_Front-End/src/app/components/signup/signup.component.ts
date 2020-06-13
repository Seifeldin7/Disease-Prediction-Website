import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['./signup.component.scss']
}
)

export class SignupComponent implements OnInit {

  submitted = false;
  returnUrl: string;

  /**
     * HTML Elements
  **/
  loginForm: FormGroup = this.formBuilder.group({
    /**
     * TODO: Validate email is exists
     */
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password: ['', [Validators.required,]],
    remember_me: ['',]

  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
   
  ) { }


  ngOnInit() {
    
  }
}