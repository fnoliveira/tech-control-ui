import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { UserService } from '../../../_services/user.service';
import { UserDto } from '../../../_models/user';
declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {

    user: UserDto = new UserDto();

    constructor(private _userService: UserService) { }
    ngOnInit() {
       
    }
    ngAfterViewInit() {

        this._userService.findByUsername().subscribe(
            user => {
                this.user = user;
            }, error => {
                console.log(error);
            }
        );

        mLayout.initHeader();

        

    }

}