import React, { Component } from "react";
import Typical from "react-typical";
import Logo from '../components/images/Srinath3.jpg';
//import Switch from "react-switch";

class Header extends Component
{
  titles = [];

  constructor()
  {
    super();
    this.state = { checked: false };
    // this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  // onThemeSwitchChange(checked)
  // {
  //   this.setState({ checked });
  //   this.setTheme();
  // }

  // setTheme()
  // {
  //   var dataThemeAttribute = "data-theme";
  //   var body = document.body;
  //   var newTheme =
  //     body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
  //   body.setAttribute(dataThemeAttribute, newTheme);
  // }

  render()
  {
    if (this.props.sharedData)
    {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat();
    }

    const HeaderTitleTypeAnimation = React.memo(() =>
    {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className="row aligner" style={{ height: '100%' }}>
          <div className="col-md-12">
            <div>
              {<span >
                <img
                  height="225px"
                  src={Logo}
                  alt="Name Logo"
                />
              </span>}
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
