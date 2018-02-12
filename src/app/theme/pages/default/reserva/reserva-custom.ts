import * as $ from 'jquery';
import 'fullcalendar';
export class ReservaCustom {
    
    static initReservaFullCalendar(id:string, dataJson: any) {
        $(id).fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listWeek'
            },
            locale:'pt-br',
            eventLimit: true,
            navLinks: true,
            events: dataJson
        });
    }
}