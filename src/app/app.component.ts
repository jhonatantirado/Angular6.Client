import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'app';

  data: any = []
  author = {
    FirstName: '',
    ID: '',
    IDBook: '',
    LastName: ''
  }

  dataHolaMundo: any = []
  holaMundo = {
    httpStatus: '',
    message: ''
  }

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.IndexPage();
  }

  /* method to call get-api from app.service */
  AuthorsPage() {
    try {
      this.appService.getAuthors()
        .subscribe(resp => {
          console.log(resp, "res");
          this.data = resp
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }


    /* method to call get-api from app.service */
    IndexPage() {
      try {
        this.appService.getIndex()
          .subscribe(resp => {
            console.log(resp, "res");
            this.dataHolaMundo = resp
          },
            error => {
              console.log(error, "error");
            })
      } catch (e) {
        console.log(e);
      }
    }

}
