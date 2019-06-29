// Instruction to every other class
// on how they can be an argument to 'addMarker'
export interface First {
  color: string;
}
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }
  // here only common properties in both User and Company will be allowed by TS only i.e location
  // with this approach if we have other classes, then we have to add them in or statement as well
  // so correct approach is to use interface
  // addMarker(mappable: User | Company): void {
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
      clickable: true,
      draggable: true
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     },
  //     clickable: true,
  //     draggable: true
  //   });
  // }
}
