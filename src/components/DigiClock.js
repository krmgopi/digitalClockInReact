import React, { Component } from "react";

export class DigiClock extends Component {
  state = {
    date: new Date(),
  };

  callMe() {
    setTimeout(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  showClock() {
    this.hour = this.state.date.getHours();
    this.minute = this.state.date.getMinutes();
    this.second = this.state.date.getSeconds();
    this.session = "AM";
    this.time = "";

    if (this.hour === 0) {
      this.hour = 12;
    }
    if (this.hour > 12) {
      this.hour = this.hour - 12;
      this.session = "PM";
    }
    this.hour = this.hour < 10 ? "0" + this.hour : this.hour;
    this.minute = this.minute < 10 ? "0" + this.minute : this.minute;
    this.second = this.second < 10 ? "0" + this.second : this.second;
    this.time = `${this.hour}:${this.minute}:${this.second}:${this.session}`;
    // console.log(this.time);
  }

  render() {
    return (
      <div className='App'>
        <div onLoad={this.showClock()} {...this.callMe()}>
          <h2 className='clock'>
            {/* <span>{this.time}</span> */}
            <div className='container'>
              <div>{this.hour}</div>
              <div>{this.minute}</div>
              <div>{this.second}</div>
              <div>{this.session}</div>
            </div>
          </h2>
        </div>
      </div>
    );
  }
}

export default DigiClock;
