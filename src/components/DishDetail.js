import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish() {
    const selectedDish = this.props.selectedDish;
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

  renderDateFormat(unFormattedDate) {
    const date = new Date(unFormattedDate);
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return `${months[month]} ${day}, ${year}`;
  }

  renderComments() {
    const selectedDish = this.props.selectedDish;

    if (selectedDish != null) {
      const comments = selectedDish.comments.map((commentArray, index) => {
        return (
          <li key={index} className="comment">
            <span className="comment-text">{commentArray.comment}</span>
            <span className="comment-info">
              {`-- ${commentArray.author}, ${this.renderDateFormat(
                commentArray.date
              )}`}
            </span>
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
      <div className="row">
        {this.renderDish()}
        {this.renderComments()}
      </div>
    );
  }
}

export default DishDetail;
