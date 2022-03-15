export interface ICalendarEvent {
    title: string;
    start: Date;
    end: Date;
    url: string|undefined;
    allDay: boolean;
    category: string|undefined;
    description: string|undefined;
    location: string|undefined;
    banner: string|undefined;
    attendees?: []|undefined;
    guid: string;
}
