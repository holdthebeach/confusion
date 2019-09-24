import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish() {
    const { selectedDish } = this.props;

    if (selectedDish != null) {
      return (
        <div className="row">
          <div className="col-sm-12 col-md-5 m-1">
            <Card>
              <CardImg
                width="100%"
                src={selectedDish.image}
                alt={selectedDish.name}
              />
              <CardBody>
                <CardTitle>{selectedDish.name}</CardTitle>
                <CardText>{selectedDish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-sm-12 col-md-5 m-1"></div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return this.renderDish();
  }
}

export default DishDetail;
