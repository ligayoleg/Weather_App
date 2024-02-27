export interface Weather {
    weather: WeatherInfo[],
    main: {
      temp: number;
      pressure: number;
      humidity: number;
      speed: number;
    };
    wind: {
      speed: number;
    };
    sys: {
      country: string
    };
    name: string;
}

interface WeatherInfo{
  main: string;
  icon: string;
}
