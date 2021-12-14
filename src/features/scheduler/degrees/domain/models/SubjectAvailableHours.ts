import { SubjectKind, Time } from "../../../entries/domain/models/Entry";

type SubjectAvailableHours = {
  kind: SubjectKind;
  subject: string;
  hours: {
    remaining: number;
    total: number;
  };
};

/// TODO: @Íñigo: You have to put it like this (or smth like this)

// type KindTime = {
//   remaining: Time;
//   total: Time;
// };

// type SubjectAvailableHours = {
//   kindMap: Map<SubjectKind, KindTime>
//   subject: string;
// };

export type { SubjectAvailableHours };
