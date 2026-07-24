export interface BlogType{
    id:number
    title:string 
    description:string 
    cover_image:string 
    created_at:string
}

export interface Weather{
    id:number 
    description:string
}

export interface WeatherType {
  coord: {
    lon: number
    lat: number
  };
  weather:Weather[]
  main: {
    temp: number
    humidity: number
    pressure: number
    sea_level?: number
  };
  wind: {
    speed: number
  };
  sys: {
    country: string
    sunrise: number
    sunset: number
  };
  name: string
}