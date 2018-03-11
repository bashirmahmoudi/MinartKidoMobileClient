export class Property {

    Id: number;

    location: {
      lan: number;
      lng: number;
    };

    pictureIds: Array<number>;

    Icon: {
      url: string;
      size: {
        width: number;
      }
    };
}
