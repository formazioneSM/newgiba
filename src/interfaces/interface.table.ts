export interface DaysOfMonth {
    name: string;
    index: number;
}
export interface User {
    name: string;
}
export interface DayInfo {
    totalDays?: number;
    month: number;
    year: number;

}

export interface Day {
    position?: number | undefined;
    day?: string | number;
    month?: number;
    year?: number;
    commessa?: Commessa;
    entrataMattina?: number;
    uscitaMattina?: number;
    entrataPomeriggio?: number;
    uscitaPomeriggio?: number;
    entrataExtraUfficio?: number;
    uscitaExtraUfficio?: number;
    descrizioneAssenza?: string;
    assenza?: boolean;
    sedeDiLavoro?: string;
    trasferta?: string;
    reperibilita?: boolean;
    totaleOre?: number;
}

export interface Commessa {
    hours?: number;
    quantity?: number;
    day?: number,
    month?: number,
    year?: number,
}