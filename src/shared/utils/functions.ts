import { Day, DayInfo } from "src/interfaces/interface.table";
import * as moment from "moment";
import { FormGroup } from "@angular/forms";

export const dayToTimestamp = (day: Day) => {
  return moment().year(day.year ?? 0).month(moment().month(day.month ?? 0).format('MMMM')).date((day.position ?? 0)).valueOf();
}
const redDays = [
  { day: 1, month: 0 },
  { day: 6, month: 0 },
  { day: 25, month: 3 },
  { day: 1, month: 4 },
  { day: 2, month: 5 },
  { day: 15, month: 7 },
  { day: 1, month: 10 },
  { day: 8, month: 11 },
  { day: 25, month: 11 },
  { day: 26, month: 11 }
]
export const getCurrentDay = (d: number, m: number, y: number) => {
  return moment().year(y).month(moment().month(m).format('MMMM')).date(d).lang('it').format('dddd');
}

export const fromNumberToDaysArray = (day: DayInfo) => {
  return [...Array(day.totalDays).keys()].map((d: number) => ({
    position: d + 1,
    day: getCurrentDay((d + 1), day.month, day.year),
    month: day.month,
    year: day.year,
    commessa: {},
    ...checkDefaultValue(d, day, redDays) ? { entrataMattina: 9 } : {},
    ...checkDefaultValue(d, day, redDays) ? { uscitaMattina: 13 } : {},
    ...checkDefaultValue(d, day, redDays) ? { entrataPomeriggio: 14 } : {},
    ...checkDefaultValue(d, day, redDays) ? { uscitaPomeriggio: 18 } : {},
    sedeDiLavoro: 'SmartWorking',
  }));
}
export const getFormGroup = (name: string, formInstance: FormGroup) => {
  return formInstance.get(name) as FormGroup;
}
export const isMobile = () => {
  return window.innerWidth < 768
}

export const checkDay = (day: any, redDays: any) => {
  return (day.month == (checkEasterDayAndMonth(day.year)[0] - 1) && day.position == checkEasterDayAndMonth(day.year)[1]) || (day.month == (checkEasterDayAndMonth(day.year)[0] - 1) && day.position == checkEasterDayAndMonth(day.year)[1] + 1) ? '#EBF5FF' : redDays.find((d: any) => (d.month == day.month && d.day == day.position)) ? '#EBF5FF' : (day.day == 'sabato' || day.day == 'domenica') ? '#EFFDE6' : 'white';
}

const checkDefaultValue = (d: any, day: any, redDays: any) => {
  return redDays.find((e: any) => { return e.day == d + 1 && e.month == day.month }) != undefined || getCurrentDay((d + 1), day.month, day.year) == 'sabato' || getCurrentDay((d + 1), day.month, day.year) == 'domenica' ? false : true;
}

export const checkEasterDayAndMonth = (year: number) => {
  var f = Math.floor,
    // Golden Number - 1
    G = year % 19,
    C = f(year / 100),
    // related to Epact
    H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
    // number of days from 21 March to the Paschal full moon
    I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
    // weekday for the Paschal full moon
    J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
    // number of days from 21 March to the Sunday on or before the Paschal full moon
    L = I - J,
    month = 3 + f((L + 40) / 44),
    day = L + 28 - 31 * f(month / 4);

  return [month, day];
}