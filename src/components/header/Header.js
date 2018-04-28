import React from 'react';
import Link from 'gatsby-link';
import './header.sass';

class Header extends React.Component {
  state = {
    isBurgerOpen: false
  };

  toggleMenu = () => {
    this.setState({
      isBurgerOpen: !this.state.isBurgerOpen
    })
  };

  render() {
    const { isBurgerOpen } = this.state;

    const burgerClass = `navbar-burger ${isBurgerOpen && 'is-active'} is-light`; 
    const mainClass = `header-menu navbar-menu is-size-6 is-uppercase ${isBurgerOpen? 'is-active': 'is-flex is-hidden-mobile'}`;
    const pathName = typeof window !== 'undefined'? window.document.location.pathname: '';
    const getSelectedClass = path => `navbar-item ${path === pathName? 'selected': ''}`;

    return (
      <nav className="header-navbar navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand is-hidden-tablet">
            <div className="navbar-item">
              CINTIA ROMERO
            </div>
            <div className={burgerClass} onClick={this.toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={mainClass}>
            <Link className={getSelectedClass('/')} to="/">
              About
            </Link>
            <Link className={getSelectedClass('/tags/ux')} to="/tags/ux">
              UX
            </Link>
            <Link className={getSelectedClass('/tags/visual-design')} to="/tags/visual-design">
              Visual Design
            </Link>
            <Link className={getSelectedClass('/tags/illustrations')} to="/tags/illustrations">
              Illustrations
            </Link>
            <Link className={getSelectedClass('/contact')} to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
