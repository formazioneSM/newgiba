import { Day, DayInfo } from "src/interfaces/interface.table";
import * as moment from "moment";
import { FormGroup } from "@angular/forms";
export const dayToTimestamp = (day: Day) => {
    return moment().year(day.year ?? 0).month(moment().month(day.month ?? 0).format('MMMM')).date((day.position ?? 0)).valueOf();
  }

  export const   getCurrentDay = (d: number, m: number, y: number) =>  {
    return moment().year(y).month(moment().month(m).format('MMMM')).date(d).lang('it').format('dddd');
  }

 export const fromNumberToDaysArray = (day:DayInfo) => {
    return [...Array(day.totalDays).keys()].map((d: number) => ({
      position: d + 1,
      day: getCurrentDay((d + 1), day.month, day.year),
      month: day.month,
      year: day.year,
      commessa: {}
    }));
  }
  export const getFormGroup = (name: string, formInstance:FormGroup) =>  {
    return formInstance.get(name) as FormGroup;
  }
  export const isMobile = () =>  {
    return window.innerWidth < 768
  }