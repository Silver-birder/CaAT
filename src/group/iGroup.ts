import ICalendarApp from "../calendar/ICalendarApp";

export interface IHolidayWords {
    morning: RegExp,
    afternoon: RegExp,
    all: RegExp,
}

export interface IGroupMember {
    name: string,
    match: RegExp,
}

export interface IHoliday {
    morning: boolean,
    afternoon: boolean,
    all: boolean,
    inMember: Array<string>,
    toDate: Date,
    title: string,
}

export interface IGroupConfig {
    startDate: Date;
    endDate: Date;
    members: Array<IGroupMember>;
    holidayWords: IHolidayWords;
}

export default interface IGroup {
    id: string;
    config: IGroupConfig;
    calendarApp: ICalendarApp;

    fetchHolidays(): Array<IHoliday>;
}