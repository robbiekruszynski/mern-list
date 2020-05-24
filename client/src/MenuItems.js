import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button, ListGroup, ListGroupItem, Container } from "reactstrap";
import { v4 as uuid } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

class MenuItem extends Component {
  state = {
    items: [
      { id: uuid(), name: "Eggs" },
      { id: uuid(), name: "Butter" },
      { id: uuid(), name: "Chives" },
      { id: uuid(), name: "Salt" },
      { id: uuid(), name: "Pepper" },
    ],
  };
  render() {
    const { items } = this.state;

    return (
      <Container>
        <Button
          collor="dark"
          style={{ marginBotton: "2rem" }}
          onClick={() => {
            const name = prompt("Enter Item");
            if (name) {
              this.setState((state) => ({
                items: [...state.items, { id: uuid(), name }],
              }));
            }
          }}
        >
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="Menu-item">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} className="fade">
                <ListGroupItem>{name}</ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default MenuItem;
