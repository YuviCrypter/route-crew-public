export interface Coordinate {
  latitude: number;
  longitude: number;
}

export interface Friend {
  id: string;
  location: Coordinate;
  heading: number;
}

export interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
