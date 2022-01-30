import React from "react";

export default class Jumbotron extends React.Component {
  align;
  render() {
    const {image, title, subtitle} = this.props;
    return <div>
      <div className="pv5 pv6-l ph3 bg-center cover" style={{
        backgroundImage: image && `url(${image})`
      }}>
        <div className="mw7 center ph3">
          <div className="db center mb3">
            <div className="mw7 center relative bg-fix-primary mb3">
              <h1 className="f2 f1-l b di lh-title mb3 blue mw6 bg-primary tc">
                { title }
              </h1>
            </div>
            <div className="mw7 center relative bg-fix-primary">
              {subtitle && <p className="center tc b f4 di lh-title mb3 blue mw6 bg-primary" align="center">{ subtitle }</p>}
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
