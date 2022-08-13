import { Component, OnInit } from '@angular/core';    
    
@Component({    
    selector:'app-navigation-bar',    
    templateUrl:'./navigation-bar.html',    
    styleUrls:['./navigation-bar.css']    
})    
export class NavigationBarComponent implements OnInit {

     constructor() { }
      
    ngOnInit(): void {
    }

    logout(){
        alert('you have successfully loged out') 
    }

      login(){
        alert(' welcome you are loged in')
      }
}



