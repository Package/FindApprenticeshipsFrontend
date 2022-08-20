import { ALL_VACANCIES } from "../static-data/vacancy-data";
import { Vacancy } from "../types";

export function getAllVacancies(): Vacancy[] {
    return ALL_VACANCIES;
}

export function getVacancyByReference(reference: string): Vacancy {
    const singleVacancy = ALL_VACANCIES.filter(v => v.vacancyReference == reference);
    return singleVacancy[0] ?? null;
}