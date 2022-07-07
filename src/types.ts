export type AppState = {
  countriesData: CountriesInitialState;
  countryData: CountryInitalState;
};

export type CountriesInitialState = {
  countriesData: Country[];
  error: null | string;
  favoriteCountries: Country[];
  filteredCountriesData: Country[];
  keyword: null | string;
  loading: boolean;
};
export type CountryInitalState = {
  countryNameData: Country[];
  error: null | string;
  loading: boolean;
};

export type Country = {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  region: string;
  population: number;
  languages: {
    [key: string]: string;
  };
  borders: string[];
  cca3: string;
  currencies: {
    [key: string]: {
      name: string;
    };
  };
};

export type Column = {
  id: "flags" | "name" | "languages" | "population" | "favourite" | "region";
  label: string;
  align?: "center" | "right";
  minWidth?: number;
  format?: (value: string | number) => JSX.Element | string;
};
