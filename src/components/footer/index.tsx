import React from 'react';
import './footer.scss';
import FooterButton from './footer-button';
import store from '../../store';

interface Props { }
interface State { };
export default class Footer extends React.Component<Props, State> {
  isActive(id: number) {
    return store.getState().pages.active === id;
  }

  render() {
    return (
      <div className="footer">
        {
          store.getState().pages.list.map((item: any) => (
            <FooterButton active={this.isActive(item.id)} icon={item.icon} id={item.id} title={item.title} key={item.id} />
          ))
        }
      </div>
    );
  }
}