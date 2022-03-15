import * as moment from "moment";

export enum DateRange {
  OneWeek,
  TwoWeeks,
  Month,
  Quarter,
  Year,
  MinusOneWeek,
  MinusTwoWeek,
  MinusMonth,
  MinusQuarter,
  MinusYear
}

export class CalendarEventRange {
  public Start: Date;
  public End: Date;
  public DateRange: DateRange;

  constructor(range: DateRange) {
    this.DateRange = range;
    this.Start = this._getRangeStart();
    this.End = this._getRangeEnd();
  }

  private _getRangeEnd(): Date {
    let end: moment.Moment;

    // add the appropriate number of days
    switch (this.DateRange) {
      case DateRange.OneWeek:
        end = moment().add(1, "weeks");
        break;
      case DateRange.TwoWeeks:
        end = moment().add(2, "weeks");
        break;
      case DateRange.Month:
        end = moment().add(1, "months");
        break;
      case DateRange.Quarter:
        end = moment().add(1, "quarters");
        break;
      case DateRange.Year:
        end = moment().add(1, "years");
        break;
      default:
        // is there a max date option in Moment? i couldn't find it
        // instead, let's get events for the next year
        end = moment();
        break;
    }

    return end.toDate();
  }

  private _getRangeStart(): Date {
    let start: moment.Moment;

    switch (this.DateRange) {
      case DateRange.MinusOneWeek:
        start = moment().subtract(1, "weeks");
        break;
      case DateRange.MinusTwoWeek:
        start = moment().subtract(2, "weeks");
        break;
      case DateRange.MinusMonth:
        start = moment().subtract(1, "months");
        break;
      case DateRange.MinusQuarter:
        start = moment().subtract(1, "quarters");
        break;
      case DateRange.MinusYear:
        start = moment().subtract(1, "years");
        break;
      default:
        start = moment();
        break;
    }
    return start.toDate();
  }
}
