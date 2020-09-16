import React, { Component } from "react";
import BurgerMenuIcon from "../assets/icons/bars-solid.svg";
import BurgerMenuModal from "../components/BurgerMenuModal";

class BurgerMenu extends Component {
  state = { show: false };
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="burger-menu">
        <img
          className="burger-menu__icon"
          src={BurgerMenuIcon}
          alt="menu icon"
          onClick={this.showModal}
        />
        <BurgerMenuModal show={this.state.show} handleClose={this.hideModal} />
      </div>
    );
  }
}

export default BurgerMenu;
