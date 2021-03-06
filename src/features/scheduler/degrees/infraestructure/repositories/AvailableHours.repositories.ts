import { Result } from "../../../../../core/config/result";
import { SubjectAvailableHours } from "../../domain/models/SubjectAvailableHours";
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
      const value = res.value.map(
        (subjectAvailableHoursDto): SubjectAvailableHours => {
          return {
            kind: subjectAvailableHoursDto.Subject.Kind,
            subject: subjectAvailableHoursDto.Subject.Name,
            hours: {
              remaining: subjectAvailableHoursDto.RemainingHours,//TODO do min also
              total: subjectAvailableHoursDto.MaxHours,//TODO do min also
            },
          };
        }
      );
      return {
        isError: false,
        value: value,
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
