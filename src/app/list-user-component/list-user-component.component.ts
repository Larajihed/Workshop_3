import { Component } from '@angular/core';
import { User } from '../Models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user-component',
  templateUrl: './list-user-component.component.html',
  styleUrls: ['./list-user-component.component.css']
})
export class ListUserComponentComponent {
  constructor(private R:Router){}

  goToAdd(){
    this.R.navigate(["addUser"])
  }
  usersList:User[]=[
    {
    idCustomer: 1,
    firstName: "Mila",
    lastName: " Kunis",
    birthDate: "1999-06-30",
    accountCategory: "Admin",
    email: "mila@kunis.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
    profession: "Software Engineer"
    },
    {
    idCustomer: 2,
    firstName: "George",
    lastName: "Clooney",
    birthDate: "1999-06-30",
    accountCategory: "Customer",
    email: "marlon@brando.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
    profession: "Software Engineer"
    },
    {
    idCustomer: 3,
    firstName: "George",
    lastName: "Clooney",
    birthDate: "1999-06-30",
    accountCategory: "Customer",
    email: "marlon@brando.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
    profession: "Software Engineer"
    },
    {
    idCustomer: 4,
    firstName: "Ryan",
    lastName: "Gossling",
    birthDate:"1999-06-30",
    accountCategory: "Golden",
    email: "Ryan@nicholson.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
    profession: "Software Engineer"
    },
    {
    idCustomer: 5,
    firstName: "Robert",
    lastName: "Downey",
    birthDate: "1999-06-30",
    accountCategory: "Blocked Account",
    email: "robert@nicholson.com",
    password: "test",
    picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
    profession: "Software Engineer"
    }]
    searchText: string = '';

    public handleSearch(searchText: string): void {
      if (searchText.trim() === "") {
        this.usersList = [...this.usersList];
      } else {
        this.usersList = this.usersList.filter(user => user.firstName.toLowerCase().includes(searchText.toLowerCase()));
      }
    }
    
  public handleDelete(id:number){
    this.usersList.splice(id,1);
  }

}
