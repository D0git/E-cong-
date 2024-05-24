import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-jours-fer',
  templateUrl: './jours-fer.component.html',
  styleUrls: ['./jours-fer.component.css']
})
export class JoursFerComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],

  };
}
