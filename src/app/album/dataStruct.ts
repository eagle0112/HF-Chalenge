// Structure of the album object received from facebook api
export class DataStruct {
  constructor(public id: string, public name: string, public photos: object) {}
}
