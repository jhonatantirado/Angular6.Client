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
  mensaje = '';

  data: any = []
  author = {
    FirstName: '',
    ID: '',
    IDBook: '',
    LastName: ''
  }

  transfer = {
    fromAccountNumber: '123-456-002',
    toAccountNumber: '123-456-001',
    amount: 1
  }

  constructor(public appService: AppService) { }

  ngOnInit() {
    //this.IndexPage();
    this.TransferPage(this.transfer);
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
          },
            error => {
              console.log(error, "error");
            })
      } catch (e) {
        console.log(e);
      }
    }

    TransferPage(transfer){
      try {
        this.appService.transferMoney(transfer)
        .subscribe(resp => {
            console.log(resp, "res");
          },
            error => {
              console.log(error, "error");
            })
      } catch (e) {
        console.log(e);
      }
    }

}
