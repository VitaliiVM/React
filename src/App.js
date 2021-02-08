
import './style.css';
import imageSrc from "./img/62050 1.png";
import imageSrcSecond from "./img/62050 1.png";
import imageSrcBucket from "./img/recycle-bin-clip-art-6.png";
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
    countSecond:0,
  };

  

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  increment_2 = () => {
    this.setState({ countSecond: this.state.countSecond + 1 });
  };

  decrement_2 = () => {
    this.setState({ countSecond: this.state.countSecond - 1 });
  };

  resetSecond = () => {
    this.setState({ countSecond: 0 });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="box_1">
            <div className="box_item1">
              <div className="item_pic">
                <img title="my-img" src={imageSrc} alt="my-img" />
              </div>
              <h3 className="item_first">Товар 1</h3>
            </div>
            <div className="summary">
              <button onClick={this.decrement} className="btn_minus">
                -
              </button>
              <h2 className="first_text">{this.state.count}</h2>
              <button onClick={this.increment} className="btn_plus">
                +
              </button>
              <span className="price">20 000 грн</span>
            </div>
            <img
              onClick={this.reset}
              className="bucket"
              title="my-img"
              src={imageSrcBucket}
              alt="my-img"
            />
          </div>
          <div className="box_2">
            <div className="box_item2">
              <div className="item_pic_2">
                <img title="my-img2" src={imageSrcSecond} alt="my-img2" />
              </div>
              <h3 className="item_first">Товар 2</h3>
            </div>
            <div className="summary">
              <button onClick={this.decrement_2} className="btn_minus">
                -
              </button>
              <h2 className="first_text">{this.state.countSecond}</h2>
              <button onClick={this.increment_2} className="btn_plus">
                +
              </button>
              <span className="price">15 000 грн</span>
            </div>
            <img
              onClick={this.resetSecond}
              className="bucket"
              title="my-img"
              src={imageSrcBucket}
              alt="my-img"
            />
          </div>
          <div className="result_1">
            <p className="result_sum">
              Общая сумма:
              <p>
                {this.state.count * 20000 +
                  this.state.countSecond * 15000 +
                  " " +
                  "грн"}
              </p>
            </p>
            <button onClick={() => alert( this.state.count * 20000 +
                this.state.countSecond * 15000 +
                " " +
                "грн")
            }
              className="btn_order"
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
