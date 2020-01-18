import React from 'react';
import './footer-button.scss';
import store from '../../../store';

interface Props {
  active: boolean,
  id: number,
  icon: string,
  title: string
}
interface State { };
export default class FooterButton extends React.Component<Props, State> {
  selectPage(id: number) {
    store.dispatch({ type: 'SET_PAGE', payload: { id } })
  }

  render() {
    return (
      <div onClick={() => this.selectPage(this.props.id)} className={`footer-button ${this.props.active ? 'active' : ''}`}>
        <div className={`icon ${this.props.icon}`} />
        <div className="title">{this.props.title}</div>
      </div>
    );
  }
}