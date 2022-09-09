export interface IEvent {
  title: string;
  dateFrom: Date;
  dateTo: Date;
  description: string;
  id: string;
  events: string[];
  showEvents(): void;
}

// export interface IDate {
//   dataDay: number;
//   dayEvents?: IEvent[];
//   weekDates?: Date[];
//   dataHour: number;
//   hourEvents: IEvent[];
// }

// export interface IModal {
//   isOpened?: boolean;
//   onClose?(): void;
//   closeModal(): void;
// }

export interface ICalendarProps {
  weekDates: Date[];
  events?: string[];
  isOpened?: boolean;
  onClose?(): void;
  showEvents?(): void;
}

export interface IWeek {
  weekDates: Date[];
  events: IEvent[];
  showEvents(): void;
}

export interface IDay {
  dataDay: number;
  dayEvents: IEvent[];
  showEvents(): void;
}

export interface IHour {
  dataDay: number;
  dataHour: number;
  hourEvents: IEvent[];
  showEvents(): void;
}

export interface IEvents {
  k: string;
  height: number;
  marginTop: number;
  title: string;
  time: string;
  showEvents(): void;
}

export interface IHeader {
  onCreate(): void;
  backToCurrentDate(): void;
  prevWeek(): void;
  nextWeek(): void;
  currentMonth: string;
}

export interface IModal {
  closeModal(): void;
  showEvents(): void;
}
