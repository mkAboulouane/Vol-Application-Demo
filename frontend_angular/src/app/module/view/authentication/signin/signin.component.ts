import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "src/app/core/service/auth.service";
import {Role} from "src/app/core/models/role";
import {environment} from 'src/environments/environment';
import {UnsubscribeOnDestroyAdapter} from "src/app/module/view/shared/UnsubscribeOnDestroyAdapter";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  authForm: FormGroup;

  appName: string;

  submitted = false;
  loading = false;
  error = "";
  hide = true;

  constructor(

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    super();
    this.appName = environment.appName

  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ["admin@ana.org", Validators.required],
      password: ["admin@123", Validators.required],
    });
  }



  get f() {
    return this.authForm.controls;
  }

  adminSet() {
    this.authForm.get("username").setValue("admin@ana.org");
    this.authForm.get("password").setValue("admin@123");
  }


  clientSet() {
    this.authForm.get("username").setValue("client@ana.org");
    this.authForm.get("password").setValue("client@123");
  }


  pilotSet() {
    this.authForm.get("username").setValue("pilot@ana.org");
    this.authForm.get("password").setValue("pilot@123");
  }


  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = "";
    if (this.authForm.invalid) {
      this.error = "Username and Password not valid !";
      return;
    } else {
      this.subs.sink = this.authService
        .login(this.f["username"].value, this.f["password"].value)
        .subscribe(
          (res) => {
            if (res) {
              setTimeout(() => {
                const role = this.authService.currentUserValue.role;
                if (role === Role.All || role === Role.Admin) {
                  this.router.navigate(["/admin/dashboard/main"]);
                } else if (role === Role.Client) {
                  this.router.navigate(["/client/dashboard"]);
                }else if (role === Role.Pilot) {
                  this.router.navigate(["/pilot/dashboard"]);
                }else {
                  this.router.navigate(["/authentication/signin"]);
                }
                this.loading = false;
              }, 1000);
            } else {
              this.error = "Invalid Login";
            }
          },
          (error) => {
            this.error = error;
            this.submitted = false;
            this.loading = false;
          }
        );
    }
  }
}
