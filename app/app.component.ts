import { Component } from '@angular/core';

import 'rxjs/Rx'
import { ProductService }  from './products/product.service';

@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-inverse" role="navigation">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" [routerLink]="['/welcome']">Product management system</a>
            
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li>
                           <a [routerLink]="['/welcome']">Home</a>
                        </li>
                        <li>
                          <a [routerLink]="['/products']">Products</a>
                        </li>
                        
                    </ul>
                </div>
               
            </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
            <footer>
                <div class="row">
                    <div class="col-lg-12">
                        <p>Copyright &copy; Your Website 2017</p>
                    </div>              
                </div>
            </footer>
        </div>
    `,
    providers: [ProductService]
   
})


export class AppComponent {
    pageTitle: string = "Home Page"
    applicationTitle: string = "Product Management System"
   
}
