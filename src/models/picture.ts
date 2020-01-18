/*
* PictureModel: models the picture data
* id: string
* name: string
*/
export class PictureModel {
  id: string = "";
  name: string = "";
  width: number = 0;
  height: number = 0;
  isLiked: boolean = false;
  url: string = "";

  constructor(metadata?: any) {
    if (metadata) {
      if (metadata.id) this.id = metadata.id;
      if (metadata.name) this.name = metadata.name;
      if (metadata.width) this.width = metadata.width;
      if (metadata.height) this.height = metadata.height;
      if (metadata.liked_by_user) this.isLiked = metadata.liked_by_user;
      if (metadata.urls && metadata.urls.thumb) this.url = metadata.urls.thumb;
    }
  }
}