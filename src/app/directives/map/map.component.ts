import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import * as $ from 'jquery';
import { MarkerObject } from './marker';
import { MapState } from './map-state.enum';
import { LatLngObject } from './lat-lng-object';

declare var plugin: any;



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit, AfterViewChecked {

  private _markers: Array<MarkerObject>;
  private _state: MapState;
  private _locationOption: {
    enableHighAccuracy: boolean;
  };
  private _map: any;
  private _selectMarker: MarkerObject;

  @ViewChild('mapconvas')
  public _convas: ElementRef;

  @ViewChild('selection')
  public _selection: ElementRef;

  @Input()
  public set Markers(value: Array<MarkerObject>){
    this._markers = value;
    if (this._map) {
      this.MakeShow();
    }
  }

  @Input()
  public set state(value: MapState) {
    this._state = value;
    if (this._map && value === MapState.select) {
      // this.MakeSelection();
    }

    if (this._map && value === MapState.show) {
      //  this.MakeShow();
    }
  }

  @Input()
  public set SelectMarker(value: MarkerObject){
    this._selectMarker = value;
  }

  @Input()
  public useMyLocation: boolean;

  @Output()
  public markerSelected = new EventEmitter<MarkerObject>();

  @Output()
  public selectionChanged = new EventEmitter<MarkerObject>();


  public get stateString(): string {
    return this._state.toString();
  }


  constructor() {
    if ( this._selectMarker ) {
      this._selectMarker = {
        title: 'Select your location'
      };
    }

    this._locationOption = {
      enableHighAccuracy: true
    };
  }

  public ngOnInit() {
    let self = this;
    plugin.google.maps.LocationService.getMyLocation(this._locationOption, function (location) {
      console.log(self._locationOption);

      console.log(self._convas.nativeElement);
      self._map = plugin.google.maps.Map.getMap(self._convas.nativeElement, {
        'camera': {
          target: location.latLng,
          zoom: 16
        }
      });




      self._map.on(plugin.google.maps.event.MAP_READY, function () {
        console.log("mapready");
        console.log(self._state);
        self._map.setMyLocationEnabled(true);
        self._map.setClickable(true);
        self._map.setCompassEnabled(true);
        self._map.setAllGesturesEnabled(true);
        if (self._state === MapState.select) {
          self.MakeSelection(location.latLng);
        }

        if (self._state === MapState.show) {
          self.MakeShow();
        }
      });

      self._map.on(plugin.google.maps.event.MAP_LONG_CLICK, function (latLng) {
        if (self._selectMarker && self._state === MapState.select) {
          self._selectMarker["marker"].setPosition({
            lat: latLng.lat,
            lng: latLng.lng
          });
        }
      });

      self._map.on(plugin.google.maps.event.CAMERA_MOVE, function (cameraPosition) {
        if (self._selectMarker && self._state === MapState.select) {
          self._selectMarker["marker"].setPosition({
            lat: cameraPosition.target.lat,
            lng: cameraPosition.target.lng
          });
        }
      });

      self._map.on(plugin.google.maps.event.CAMERA_MOVE_END, function (cameraPosition) {
        if (self._selectMarker && self._state === MapState.select) {
          self._selectMarker["marker"].setPosition({
            lat: cameraPosition.target.lat,
            lng: cameraPosition.target.lng
          });
        }
      });
    });

  }

  public ngAfterViewChecked() {

  }

  public AddMarkers(markers: Array<any>) {

  }

  public MakeSelection(location?: LatLngObject) {
    console.log(JSON.stringify(this._selectMarker));
    let options = this.MakeMarkerOption(this._selectMarker, location);
    console.log(JSON.stringify(options));
    let self = this;
    this._map.addMarker(options, function (marker) {
      self._selectMarker.id = marker.id;
      self._selectMarker["marker"] = marker;
      marker.setDraggable(true);
    });
  }

  public MakeShow() {
    let options = new Array<any>();
    let self = this;
    this._markers.forEach(function(value, index) {
      options.push(self.MakeMarkerOption(value));
    });

    this.AddMarkers(options);
  }

  public MakeMarkerOption(marker: MarkerObject, location?: LatLngObject) {
    let option = {};

    for (const propery in marker) {
      if (marker.hasOwnProperty(propery) && propery !== 'id') {
        const element = marker[propery];
        option[propery] = element;
      }
    }

    if (location) {
      option["position"] = location;
    }

    return option;
  }

  public Select() {
    if (this._selectMarker && this._state === MapState.select) {
      this._selectMarker.position = this._selectMarker["marker"].getPosition();
      this.selectionChanged.emit(this._selectMarker);
    }
  }

  public Close() {
    this._map.remove();
  }
}
