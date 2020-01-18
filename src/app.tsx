import React from 'react';
import './app.scss';
import { getPictures } from './services/data';
import { PictureModel } from './models/picture';
import ImagesContainer from './components/images-container';
import Footer from './components/footer';
import store from './store';

interface Props { }
interface State {
  likedPictures: PictureModel[]
  pictures: PictureModel[]
  query: string;
};
export default class App extends React.Component<Props, State> {
  state: State = {
    likedPictures: [],
    pictures: [],
    query: '',
  };

  handleChange = (event: any) => {
    this.setState({ query: event.target.value });
    this.setPictures(event.target.value);
  }

  async setPictures(query: string = "") {
    try {
      const pictures = await getPictures(query);
      this.setState({
        pictures
      });
    } catch {
      console.log(`Error occurred while running getPictures(${query})`)
    }
  }

  renderedPictures() {
    if (this.activePageId() === 0) {
      return this.state.pictures;
    } else if (this.activePageId() === 1) {
      return this.state.likedPictures;
    } else return [];
  }

  activePageId() {
    return store.getState().pages.active;
  }

  pagesList() {
    return store.getState().pages.list;
  }

  title() {
    if (this.pagesList()) {
      const currentItem = this.pagesList().find((item: any) => item.id === this.activePageId());
      return currentItem?.imagesTitle || "";
    } else return "";
  }

  render() {
    return (
      <div className="app">
        <div className="search-bar">
          <input className="input-field" type="text" placeholder="Search Pictures" value={this.state.query} onChange={this.handleChange} />
          <div className="search-bar-icon" />
        </div>
        <p>{this.activePageId()}</p>
        <ImagesContainer pictures={this.renderedPictures()} title={this.title()} />
        <Footer />
      </div>
    );
  }
}