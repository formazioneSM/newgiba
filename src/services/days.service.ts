import { signal } from "@angular/core";
import { DayInfo } from "src/interfaces/interface.table";

export const day = signal<DayInfo>({
    month: 0,
    year: 0,
  });