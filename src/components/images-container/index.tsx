import React from 'react';
import './images-container.scss';
import Image from './../image';
import { PictureModel } from '../../models/picture';

interface Props {
  pictures: PictureModel[]
  title: string;
}
interface State { };
export default class ImagesContainer extends React.Component<Props, State> {
  render() {
    return (
      <div className="images-container">
        {this.props.pictures.length ? <p className="title">{this.props.title}</p> : ''}
        <div className="images-list">
          {this.props.pictures.map((item) => (
            <Image isLiked={item.isLiked} url={item.url} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}