import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ReservaService } from './reserva.service';
import { Reserva } from './reserva';

import { ReservaCustom } from './reserva-custom';

@Component({
    selector: "app-reserva",
    templateUrl: "./reserva.component.html",
    providers: [ReservaService],
    encapsulation: ViewEncapsulation.None,
})
export class ReservaComponent implements OnInit, AfterViewInit {

    constructor(private reservaService: ReservaService) { }

    public ngOnInit() { }

    ngAfterViewInit() {
        this.reservaService
            .getAll()
            .subscribe((reservas) => {
                ReservaCustom.initReservaFullCalendar('#m_calendar', reservas);
            });
    }

}