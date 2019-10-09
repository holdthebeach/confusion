import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish() {
    const selectedDish = this.props.dish;
    if (selectedDish != null) {
      return (
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
      );
    } else {
      return <div></div>;
    }
  }

  renderDateFormat(unformattedDate) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    }).format(new Date(Date.parse(unformattedDate)));
  }

  renderComments() {
    const selectedDish = this.props.dish;

    if (selectedDish != null) {
      const comments = selectedDish.comments.map((commentArray, index) => {
        console.log(commentArray);
        return (
          <li key={index} className="comment">
            <p className="comment-text">{commentArray.comment}</p>
            <p className="comment-info">
              {`-- ${commentArray.author}, ${this.renderDateFormat(
                commentArray.date
              )}`}
            </p>
          </li>
        );
      });
      return (
        <div className="col-sm-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">{comments}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderDish()}
          {this.renderComments()}
        </div>
      </div>
    );
  }
}

export default DishDetail;
