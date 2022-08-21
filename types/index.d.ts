export interface Course {
    larsCode: number;
    title: string;
    level: number;
    route: string;
}

export interface Wage {
    wageAmount?: number;
    wageAdditionalInformation: string;
    wageType: string;
    workingWeekDescription: string;
    wageUnit: string;
}

export interface Location {
    lat: number;
    lon: number;
}

export interface Address {
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    addressLine4?: string;
    postcode: string;
}

export interface Vacancy {
    closingDate: string;
    description: string;
    employerName: string;
    hoursPerWeek: number;
    isDisabilityConfident: boolean;
    isNationalVacancy: boolean;
    numberOfPositions: number;
    postedDate: string;
    providerName: string;
    startDate: string;
    title: string;
    ukprn: number;
    vacancyReference: string;
    vacancyUrl: string;
    course: Course;
    wage: Wage;
    location: Location;
    address: Address;
    employerContactPhone?: string;
    employerContactEmail?: string;
    employerContactName?: string;
    employerWebsiteUrl?: string;
    apprenticeshipLevel: string;
    expectedDuration: string;
}

export interface ApiVacancyResponse {
    vacancies: Vacancy[];
}