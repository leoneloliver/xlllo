# Skozoo APP
What I learned by studying Angular in the last weeks.
I create a simple prototype APP that is a list of tutors where you can search for tutors and see datails about them also you can send quick massages using a chat.

DEMO [skozoo-app](https://skozoo.netlify.com/)


### Angular CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.2.
I developed I simple app prototype with Angular7 using Angular CLI.

### Installation
Fist of all I needed to work around a few issues and solve them to make my Angular CLI environment working properly. 

```sh
$ npm install -g @angular/cli
```


### Development
The CLI is very powerful and helps a lot, also its very easy to create new components

```sh
$ ng generate component [my component]
```
##### In this project I had the opportunity to apply what I’ve been learning.

##### 1 - How to use routerLink.

```sh
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
```

##### 2 - How to create a serve data (DataService).

```sh
$ ng generate service data
```

##### 3 - Then get data from external API.

```sh
import { DataService } from '../data.service';
```

##### 4 - Play with ng tags example if and for to render data.

```sh
<ul *ngIf="users">
  <li *ngFor="let user of users.data">
    <img [src]="user.avatar">
    <p>{{ user.first_name }} {{ user.last_name }}</p>
  </li>
</ul>
```

##### 5 - Using Reactive form and Form validations (ReactiveFormsModule).

```sh

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
```

##### 6 - Generate Pipe filter to play around data and create filters for a search form  on the app.

```sh
$ ng generate pipe filter
```
```sh
<ul *ngFor="let data of dataset | filter: searchText">
  <li>{{data}}</li>
</ul>
```
##### 7 - Working with Form Modules.

```sh
import { FormsModule } from '@angular/forms';
```

##### * For the layout and UI components I am not using any library, every css and html code were developed from scratch also I create some javascript functionalities to create simple interactions in the User Interface app.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy info

* Netlify
##### Build settings
* Repository
* github.com/leoneloliver/xlllo
##### Build command
```sh
$ ng build --prod
```
##### Publish directory
* dist/xello


=) I enjoyeid learning Angular7 and I thought it is a very powerful framework. I will keep learning for sure. 

