import { Result } from "../../../../../core/config/result";
import { SubjectKind } from "../../../entries/domain/models/Entry";
import { SubjectAvailableHours, SubjectAvailableHoursProperties, SubjectTime } from "../../domain/models/SubjectAvailableHours";
import { degreeAvailableHoursData } from "../data_sources/http/AvailableHours.data";
import AvailableHoursParamsDTO from "../dto/AvailableHoursParamsDTO";



export const degreeAvailableHoursRepo = {
  getDegreeAvailableHours: async (
    params: AvailableHoursParamsDTO
  ): Promise<Result<SubjectAvailableHours[]>> => {
    const res = await degreeAvailableHoursData.getDegreeAvailableHours(params);
    if (res.isError) {
      return { isError: true, error: res.error };
    }
    // Parse to domain models, where bussines logic can understand the data
    try {
  
      var subjectsMap : Map<string,SubjectAvailableHoursProperties > = new Map()
      
      res.value.forEach(subject => {
        const name = subject.Subject.Name

        var subjectTime:SubjectTime = {
          remaining: {
            hour: subject.RemainingHours,
             min: subject.RemainingMin 
          },
          total: {
            hour: subject.MaxHours,
            min: subject.MaxMin
          }
        }
        var properties =  subjectsMap.get(name)
        if (typeof properties === 'undefined'){
          var newProperties : SubjectAvailableHoursProperties = new Map<SubjectKind,SubjectTime>()
          newProperties.set(subject.Subject.Kind,subjectTime)
          subjectsMap.set(subject.Subject.Name,newProperties)
        }else{
          properties.set(subject.Subject.Kind,subjectTime)
          subjectsMap.set(subject.Subject.Name,properties)

        }
        
        
        
      });

      var subjects : SubjectAvailableHours[] = []

      subjectsMap.forEach((_properties,_name)=>{
          subjects.push({name:_name, properties:_properties})
      })

      return {
        isError: false,
        value: subjects,
      };
    } catch (e) {
      console.error((e as Error).message);
      return {
        isError: true,
        error: e as Error,
      };
    }
  },
};
