import React, {Component} from 'react';
import { Button, Nav } from 'react-bootstrap';
import '../App.js'

class ChessRankings extends Component {
    constructor(props) {
      super(props);
      this.state = {
        target: "classical" 
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      this.setState({
        target: e.target.value
      });
    };


  
    render() {
      return (
        <div>
            <Nav fill justify variant="tabs" >
                <Nav.Item>
                    <Button onClick={this.handleClick} value="classical" variant="outline-dark" style={{flexDirection:"row" , width:"100%"}}>
                        <b>Classical</b>
                    </Button>
                </Nav.Item>
                <Nav.Item>
                    <Button onClick={this.handleClick} value="rapid" variant="outline-dark" style={{flexDirection:"row" , width:"100%"}}>
                        <b>Rapid</b>
                    </Button>
                </Nav.Item>
                <Nav.Item>
                    <Button onClick={this.handleClick} value="blitz" variant="outline-dark" style={{flexDirection:"row" , width:"100%"}}>
                        <b>Blitz</b>
                    </Button>
                </Nav.Item>
            </Nav>
            <div style={{marginTop:"3%"}}>
                <main>
                    {this.state.target === "classical" && <ClassicalRanking />}
                    {this.state.target === "rapid" && <RapidRanking />}
                    {this.state.target === "blitz" && <BlitzRanking />}
                </main>
            </div>
        </div>
      );
    }
  }
  
  class ClassicalRanking extends React.Component {
    render() {
      return (
        <div>
          <h2>Classical Ranking</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            pulvinar turpis quis mi pretium pellentesque. In luctus, leo sit amet
            egestas sagittis, ipsum mauris lobortis orci.
          </p>
        </div>
      );
    }
  }
  class RapidRanking extends React.Component {
    render() {
      return (
        <div>
          <h2>Rapid Ranking</h2>
          <p>
            Id consectetur urna misao eu justo. In hac habitasse platea dictumst.
            Maecenas non convallis nunc. Cras maximus, nulla in feugiat
            condimentum, neque metus varius arcu.
          </p>
        </div>
      );
    }
  }
  
  class BlitzRanking extends React.Component {
    render() {
      return (
        <div>
          <h2>Blitz Ranking</h2>
          <p>
            Oyid eleifend turpis elit sed est. Donec facilisis justo elit, in
            consectetur nulla pretium vitae.
          </p>
        </div>
      );
    }
  }

export default ChessRankings;