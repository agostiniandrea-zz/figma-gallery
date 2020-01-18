import { PictureModel } from '../models/picture'
import { getPicturesRequest } from './api'
import { AxiosResponse } from 'axios';

/*
* getPhotos
* invokes getPicturesRequest (./api)
* returns an array of photos
*/
export async function getPictures(query: string = ""): Promise<PictureModel[]> {
  const picturesResponse: AxiosResponse = await getPicturesRequest(query);
  const responseData = picturesResponse.data;
  const dataList = responseData.results;

  const photosList: PictureModel[] = [];

  if (Array.isArray(dataList) && dataList.length > 0) {
    dataList.forEach((pictureData: any) => {
      photosList.push(new PictureModel(pictureData));
    });
  }

  return photosList;
}