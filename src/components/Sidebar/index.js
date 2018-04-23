import React, {Component} from 'react';
import classNames from 'classnames';
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
      dataCollapsed: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{marginLeft: '-20px'}} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">

            <li>
              <a
                href="" onClick={(e) => {
                e.preventDefault();
                history.push('/');
              }}
              >
                <i className="fa fa-home fa-fw" /> &nbsp;Overview
              </a>
            </li>

            <li className={classNames({active: !this.state.chartsElementsCollapsed})}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({chartsElementsCollapsed: !this.state.chartsElementsCollapsed});
                  return false;
                }}
              >
                <i className="fa fa-bar-chart-o fa-fw" /> &nbsp;Data Exploration
                <span className="fa arrow" />
              </a>

              <ul
                className={
                  classNames({
                    'nav nav-second-level': true,
                    collapse: this.state.chartsElementsCollapsed,
                  })
                }
              >
                <li>
                  <a
                    href="" onClick={(e) => {
                    e.preventDefault();
                    history.push('/exploration/datatable');
                  }}
                  >
                    <i className="fa fa-table fa-fw" /> View Data
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      history.push('/exploration/scatter');
                    }}
                  >
                    <i className="fa fa-plus fa-fw" /> Valence and Arousal
                  </a>
                </li>
              </ul>
            </li>


            <li className={classNames({active: !this.state.dataCollapsed})}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({dataCollapsed: !this.state.dataCollapsed});
                  return false;
                }}
              >
                <i className="fa fa-random fa-fw" /> &nbsp;Data Integrations
                <span className="fa arrow" />
              </a>

              <ul
                className={
                  classNames({
                    'nav nav-second-level': true,
                    collapse: this.state.dataCollapsed,
                  })
                }
              >
                <li>
                  <a
                    href="" onClick={(e) => {
                    e.preventDefault();
                    history.push('/integrations/sleep');
                  }}
                  >
                    <i className="fa fa-bed fa-fw" /> Sleep Tracker Data
                  </a>
                </li>
                <li>
                  <a
                    href="" onClick={(e) => {
                      e.preventDefault();
                      history.push('/integrations/fitness');
                    }}
                  >
                    <i className="fa fa-heartbeat fa-fw" /> Fitness Tracker Data
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="" onClick={(e) => {
                e.preventDefault();
                history.push('/recommendations');
              }}
              >
                <i className="fa fa-thumbs-up fa-fw" /> &nbsp;Insights & Recommendations
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
