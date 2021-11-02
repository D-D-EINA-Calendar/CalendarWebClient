import AvailableHoursParamsDTO from "../../../../../../src/features/scheduler/available-hours/infraestructure/dto/AvailableHoursParamsDTO";
import SubjectAvailableHoursDTO from "../../../../../../src/features/scheduler/available-hours/infraestructure/dto/SubjectAvailableHoursDTO";

const Params: AvailableHoursParamsDTO = {
  titulacion: "Ingeniería informática",
  curso: 1,
  grupo: 1,
};

const Params2: AvailableHoursParamsDTO = {
  titulacion: "Arquitectura",
  curso: 2,
  grupo: 1,
};

const ResponseGood: SubjectAvailableHoursDTO[] = [
  {
    subject: "Verificación y validación",
    kind: 2,
    remaining: 2,
    total: 4,
  },
];

export const fixtures = {
  ResponseGood,
  Params,
  Params2,
};