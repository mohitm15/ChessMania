import React, { Component } from "react";
import { Button, Nav } from "react-bootstrap";
import "../App.js";

class ChessRankings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "open",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      target: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Nav fill justify variant="tabs">
          <Nav.Item>
            <Button
              onClick={this.handleClick}
              value="open"
              variant="outline-dark"
              style={{ flexDirection: "row", width: "100%" }}
            >
              <b>Open</b>
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button
              onClick={this.handleClick}
              value="women"
              variant="outline-dark"
              style={{ flexDirection: "row", width: "100%" }}
            >
              <b>Women</b>
            </Button>
          </Nav.Item>
        </Nav>
        <div style={{ marginTop: "3%" }}>
          <main>
            {this.state.target === "open" && <OpenRanking />}
            {this.state.target === "women" && <WomenRanking />}
          </main>
        </div>
      </div>
    );
  }
}

class OpenRanking extends React.Component {
  render() {
    return (
      <div>
        <h2>Open Ranking</h2>
        <br />
        <p>
          Currently in the open section, <strong>GM Magnus Carlsen</strong> from
          Norway is at the peak with 2847 elo points.
        </p>
        <div>
          <a href="https://2700chess.com" target="#">
            <img
              border="2"
              src="https://2700chess.com/files/topten.png"
              alt="2700chess.com for more details and full list"
              title="2700chess.com for more details and full list"
            />
          </a>
        </div>
      </div>
    );
  }
}
class WomenRanking extends React.Component {
  render() {
    return (
      <div>
        <h2>Women's Ranking</h2>
        <br />
        <p>
          Currently in the women's section,<strong> GM Hou Yifan </strong> from
          China is at the peak with 2658 elo points.
        </p>
        <div>
          <a href="https://2700chess.com/women" target="#">
            <img
              border="0"
              src="https://2700chess.com/files/topten_women.png"
              alt="2700chess.com for more details and full list"
              title="2700chess.com for more details and full list"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default ChessRankings;
