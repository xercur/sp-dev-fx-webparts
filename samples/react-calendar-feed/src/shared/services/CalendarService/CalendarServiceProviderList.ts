import { SharePointCalendarService } from "./SharePointCalendarService";

// Localization
import * as strings from "CalendarServicesStrings";

export enum CalendarServiceProviderType {
  SharePoint = "SharePoint",
  WordPress = "WordPress",
  Exchange = "Exchange",
  iCal = "iCal",
  RSS = "RSS",
  Mock = "Mock"
}

export class CalendarServiceProviderList {
  public static getProviders(): any[] {
    const providers: any[] = [
      {
        label: strings.SharePointProviderName,
        key: CalendarServiceProviderType.SharePoint,
        initialize: () => new SharePointCalendarService()
      }
    ];

    // only include the Mock service provider in DEBUG

    return providers;
  }
}
