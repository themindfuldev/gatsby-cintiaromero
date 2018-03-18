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

    const burgerClass = `navbar-burger ${isBurgerOpen && 'is-active'}`; 
    const mainClass = `main-menu navbar-menu is-size-6 is-uppercase ${isBurgerOpen? 'is-active': 'is-flex is-hidden-mobile'}`;

    return (
      <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
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
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/tags/ux">
              UX
            </Link>
            <Link className="navbar-item" to="/tags/visual-design">
              Visual Design
            </Link>
            <Link className="navbar-item" to="/tags/illustrations">
              Illustrations
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
