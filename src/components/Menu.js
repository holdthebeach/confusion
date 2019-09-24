import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

import DishDetail from "./DishDetail";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    };
    console.log("menu component constructor is invoked");
  }

  componentDidMount() {
    console.log("menu component componentDidMount is invoked");
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    console.log("menu component render is invoked");

    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
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
        <DishDetail selectedDish={this.state.selectedDish} />
      </div>
    );
  }
}

export default Menu;
