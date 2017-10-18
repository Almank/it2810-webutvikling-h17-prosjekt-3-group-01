import React from "react";
import {WeekCal} from "../src/views/components/calendar/WeekCal";
import {DayEle} from "../src/views/components/calendar/DayEle";
import {ContentHeader} from "../src/views/components/calendar/ContentHeader";
import {AppointmentForm} from "../src/views/components/calendar/AppointmentForm";


// Variables used to test the source code
const WEEKDAYS = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];


const SHALLOW_WEEK_CAL = shallow(<WeekCal/>);
const INST_WEEK_CAL = SHALLOW_WEEK_CAL.instance();

// Passing in a random function because we only care about it actually rendering, and not if the function is
// correct.
const RENDER_DAY_ELEM = render(<DayEle dateFull={"2017-01-28"} dateName={"Monday"} dateDay={"28"}
                                       change={() => console.log("Change")}/>);
const RENDER_CONTENT_HEADER = render(<ContentHeader closeForm={() => console.log("Close Form")}/>);

const RENDER_APPOINTMENT_FORM = render(<AppointmentForm closeForm={() => console.log("Close Form")}
                                                        openForm={() => console.log("Open Form")}/>);

const DATE = new Date();
let CURRENT_MONTH = DATE.getMonth() + 1;
const DAYS_IN_MONTH = new Date(DATE.getFullYear(), CURRENT_MONTH, 0).getDate();
const DAYS_LEFT_IN_MONTH = DAYS_IN_MONTH - DATE.getDate();


describe("CALENDAR:", () => {
    describe('WeekCal', () => {
        it("Should render(shallow) correctly", () => {
            expect(SHALLOW_WEEK_CAL).toMatchSnapshot();
        });

        it('Should render 7 <DayEle> components', () => {
            expect(SHALLOW_WEEK_CAL.find(DayEle).length).toBe(7);
        });

        describe('WeekCal.getDayName()', () => {
            it('Should return "TODAY" given input=0 ', () => {
                expect(INST_WEEK_CAL.getDayName(0)).toBe('TODAY');
            });
            it('Should return "TOMORROW" given input=1', () => {
                expect(INST_WEEK_CAL.getDayName(1)).toBe("TOMORROW");
            });
            // The following test may be wrong, should come back to it later.
            // May be that the function does not handle looping of a week, which seems to be the case
            it("Should return correct weekday depending on input", () => {
                for (let i = 7; i < 14; i++) {
                    expect(INST_WEEK_CAL.getDayName(i)).toBe(WEEKDAYS[i + DATE.getDay() - 7 - 1]);
                }
            });
        });
        describe("WeekCal.getDayDate()", () => {
            it("Should return today's day DATE, given input= ", () => {
                expect(INST_WEEK_CAL.getDayDate(0)).toBe(DATE.getDate());
            });
            it("Should return correct day DATE, given input <= days left in month", () => {
                expect(INST_WEEK_CAL.getDayDate(DAYS_LEFT_IN_MONTH)).toBe(DAYS_IN_MONTH);
                expect(INST_WEEK_CAL.getDayDate(DAYS_LEFT_IN_MONTH - 1)).toBe(DAYS_IN_MONTH - 1);
            });
            it("Should return correct day DATE when input-offset exceeds days in the month", () => {
                expect(INST_WEEK_CAL.getDayDate(DAYS_LEFT_IN_MONTH + 1)).toBe(1);
            });
        });
        describe("WeekCal.getFullDate()", () => {
            it("Should return today's DATE on format [yyyy-mm-dd], given input=0 ", () => {
                expect(INST_WEEK_CAL.getDateFull(0)).toBe(DATE.getFullYear() + "-" + (DATE.getMonth() + 1) + "-" + DATE.getDate());
            });
            it("Should return correct DATE on format [yyy-mm-dd], given input <= days left in the month", () => {
                // Date().getMonth() returns a number between 0-11. Therefore we need to add 1 to the CURRENT_MONTH value
                // Also we need to handle wen the month is less than 10.
                let tempMonth = CURRENT_MONTH;
                if (tempMonth.length === 1) tempMonth = "0" + tempMonth;

                expect(INST_WEEK_CAL.getDateFull(DAYS_LEFT_IN_MONTH)).toBe(
                    DATE.getFullYear() + "-" + tempMonth + "-" + DAYS_IN_MONTH);
            });
            it("Should return correct DATE on format [yyyy-mm-dd] when input-offset exceeds days in the month", () => {
                // Added handling for months which will return a value less than 10, and the changing from December
                // to january
                let tempMonth = CURRENT_MONTH + 1;
                if (tempMonth.length === 1) tempMonth = "0" + tempMonth;
                if (tempMonth === 12) tempMonth = "01";
                expect(INST_WEEK_CAL.getDateFull(DAYS_LEFT_IN_MONTH + 1)).toBe(
                    DATE.getFullYear() + "-" + tempMonth + "-01");
            });
        });
    });
    describe("DayEle", () => {
        it("Should render correctly", () => {
            expect(RENDER_DAY_ELEM).toMatchSnapshot();
        });
        it("Should render 1 p-tag and 1 h1-tag", () => {
            expect(RENDER_DAY_ELEM.find("p").length).toBe(1);
            expect(RENDER_DAY_ELEM.find("h1").length).toBe(1);
        });
    });
    describe("ContentHeader", () => {
        it("Should render correctly", () => {
            expect(RENDER_CONTENT_HEADER).toMatchSnapshot();
        });
        it("Should render 3 h2s, 1 button and 1 span", () => {
            expect(RENDER_CONTENT_HEADER.find("h2").length).toBe(3);
            expect(RENDER_CONTENT_HEADER.find("button").length).toBe(1);
            expect(RENDER_CONTENT_HEADER.find("span").length).toBe(1);
        });
    });
    describe("AppointmentForm", () => {
        it("Should render correctly", () => {
            expect(RENDER_APPOINTMENT_FORM).toMatchSnapshot();
        });
    });

});