import { SubjectKind, Time } from "../../../entries/domain/models/Entry";



type SubjectTime = {
   remaining: Time;
   total: Time;
};


type SubjectAvailableHours = {
  name : String
  properties : SubjectAvailableHoursProperties

} 
type SubjectAvailableHoursProperties = Map<SubjectKind, SubjectTime>


export type { SubjectAvailableHours,SubjectAvailableHoursProperties,SubjectTime };
