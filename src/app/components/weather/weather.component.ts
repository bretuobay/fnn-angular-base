import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';

import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../models';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService],
})
export class WeatherComponent implements OnInit {
  public name: string = 'Kumasi';
  public lat: number = 48.5768558;
  public lng: number = 13.268283;
  public temperature: number | string;
  public humidity: number = 50;
  public cityToSearch = new FormControl();

  constructor(private weatherService: WeatherService) {
    this.cityToSearch.setValue(this.name);

    this.cityToSearch.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((city) => {
        this.getWeatherData(city);
      });
  }

  private setMapParameters(data: Weather) {
    const { temp, humidity, name } = data;
    this.name = name;
    this.humidity = humidity;
    // T(°C) = (T(°F) - 32) × 5/9
    this.temperature = (((temp - 32) * 5) / 9).toFixed(2);
  }

  ngOnInit(): void {
    this.getWeatherData(this.cityToSearch.value);
  }

  public getWeatherData(city: string) {
    const currentCity = city || this.name;
    this.name = currentCity;
    this.weatherService
      .getWeatherData(currentCity)
      .subscribe((data: Weather) => {
        this.setMapParameters(data);
      });
  }
}
