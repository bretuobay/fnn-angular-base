import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public name: string = 'Kumasi';
  public lat: number = 48.5768558;
  public lng: number = 13.268283;
  public temperature: number | string;
  public humidity: number = 50;
  public cityToSearch = new FormControl();
  public currentWeather: Object;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.name).subscribe((data) => {
      this.currentWeather = data;
    });
  }
}
