import { Day, DayInfo } from "src/interfaces/interface.table";
import * as moment from "moment";
import { FormGroup } from "@angular/forms";
export const dayToTimestamp = (day: Day) => {
  return moment().year(day.year ?? 0).month(moment().month(day.month ?? 0).format('MMMM')).date((day.position ?? 0)).valueOf();
}

export const getCurrentDay = (d: number, m: number, y: number) => {
  return moment().year(y).month(moment().month(m).format('MMMM')).date(d).lang('it').format('dddd');
}

export const fromNumberToDaysArray = (day: DayInfo) => {
  return [...Array(day.totalDays).keys()].map((d: number) => ({
    position: d + 1,
    day: getCurrentDay((d + 1), day.month, day.year),
    month: day.month,
    year: day.year,
    commessa: {}
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