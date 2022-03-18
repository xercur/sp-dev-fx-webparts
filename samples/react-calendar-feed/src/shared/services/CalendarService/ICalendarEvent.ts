export interface ICalendarEvent {
    title: string;
    start: Date;
    end: Date;
    url: string|undefined;
    allDay: boolean;
    category: string|undefined;
    description: string|undefined;
    location: string|undefined;
    //diese sind von mir hinzugefügt worden
    banner: string|undefined;
    attendees?: string[]|undefined;
    itemid: string;
    currentuser: string;
    userclaims: string;
    listguid: string;
    site: string;
}
