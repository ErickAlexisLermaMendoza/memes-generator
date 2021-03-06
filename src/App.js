import React from "react";
import "./styles.css";

//* Convertir a clase
//* State (top y bottom)
//* Handle change method (event.target.name y event.target.value)
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      top: "",
      bottom: ""
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">¡Genera tu meme, es gratis!</h1>
          <Meme top={this.state.top} bottom={this.state.bottom} />
          <MemeForm values={this.state} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

//* Pasar los textos como props
function Meme(props) {
  return (
    <div className="meme-template">
      <img
        className="image-template"
        src="http://pm1.narvii.com/7247/3c33ce2c8eee83a42e391f1c0891f6bb538b4c47r1-1742-1663v2_uhq.jpg"
        alt="Plantilla"
      />
      <h2 className="top-text">{props.top}</h2>
      <h2 className="bottom-text">{props.bottom}</h2>
    </div>
  );
}

// Pasar value por props
// On change por props
function MemeForm(props) {
  return (
    <form>
      <input
        name="top"
        value={props.values.top}
        placeholder="Texto superior"
        className="form-input"
        onChange={props.onChange}
      />
      <input
        name="bottom"
        value={props.values.bottom}
        placeholder="Texto inferior"
        className="form-input"
        onChange={props.onChange}
      />
    </form>
  );
}

export default App;
