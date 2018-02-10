import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { AdministradorService } from './administrador.service';
import { Administrador } from './administrador';

@Component({
    selector: "app-administrador",
    templateUrl: "./administrador.component.html",
    providers: [AdministradorService, ScriptLoaderService],
    encapsulation: ViewEncapsulation.None,
})
export class AdministradorComponent implements OnInit, AfterViewInit {

    administradores: Administrador[];

    constructor(private _script: ScriptLoaderService, private administradorService: AdministradorService) {}
    public ngOnInit() { }

    ngAfterViewInit() {

        this.administradorService
            .getAll()
            .subscribe(
            (administradores) => {
                this.administradores = administradores;
                this._script.loadScripts('app-administrador',
                    ['assets/demo/default/custom/components/datatables/base/html-table.js']);
            }
            );
    }

}