import React from 'react';
import './image.scss';

interface Props {
  isLiked: boolean;
  url: string;
}
interface State {
};
export default class Image extends React.Component<Props, State> {
  render() {
    return (
      <div className="image" style={{ backgroundImage: 'url(' + this.props.url + ')' }}>
        <div className={`like-button ${this.props.isLiked ? 'active' : ''}`}>
          <div className="icon" />
        </div>
      </div>
    );
  }
}