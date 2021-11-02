import { Result } from "../../../../../../core/config/result";
import Entry from "../../../../../../features/scheduler/entries/domain/models/Entry";
import EntryDTO from "../../../../../../features/scheduler/entries/infraestructure/dto/EntryDTO";

const postEntriesBodyDTO: EntryDTO[] = [
  {
    kind: 2,
    subject: "Verificación y validación",
    semana: "A",
    room: "23",
    initMin: 50,
    initHour: 8,
    grupo: "Tardes",
    endMin: 40,
    endHour: 9,
  },
];

const postEntriesBody: Entry[] = [
  {
    kind: 2,
    subject: "Verificación y validación",
    room: "23",
    initTime: {
      hour: 8,
      min: 50,
    },
    endTime: {
      hour: 9,
      min: 40,
    },
    group: "Tardes",
    week: "A",
  },
];

const resEntries: Result<boolean> = {
  isError: false,
  value: true,
};

const resEntriesError: Result<boolean> = {
  isError: true,
  error: Error(),
};

export const fixtures = {
  postEntriesBodyDTO,
  postEntriesBody,
  resEntries,
  resEntriesError,
};
