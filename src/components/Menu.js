import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("menu component componentDidMount is invoked");
  }

  render() {
    console.log("menu component render is invoked");

    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.props.onClick(dish.id)}>
            <CardImg src={dish.image} alt={dish.name} />
            <CardImgOverlay className="ml-5">
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default Menu;
