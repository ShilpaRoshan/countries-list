export type AppState = {
    countriesData: {
        countriesData: Country[];
        error: null | string;
        favoriteCountries: Country[];
        filteredCountriesData: Country[];
        keyword: null | string;
        loading: boolean;
    };
    countryData: {
        countryNameData: Country;
        error: null | string;
        loading: boolean;
    };
};

type Country = {
    name: {
        common: string;
    };
};

export type Column = {
    id: "flags" | "name" | "languages" | "population" | "favourite" | "region";
    label: string;
    align?: "center" | "right";
    minWidth?: number;
    format?: (value: string | number) => JSX.Element | string;
};
