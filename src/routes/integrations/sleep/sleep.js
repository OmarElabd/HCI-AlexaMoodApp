import React, { PropTypes } from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import {
  MenuItem,
  DropdownButton, Panel, Button,
  ListGroup, ListGroupItem,
} from 'react-bootstrap';
import {
  LineChart, Tooltip,
  Line, XAxis, YAxis, ZAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../../vendor/recharts';
// ResponsiveContainer is broken so we have customise the ResponsiveContainer

const title = 'SleepPage';

const data1 = [
      { date: '3/3', mood: 4000, hr: 3 },
      { date: '3/5', mood: 3000, hr: 5 },
      { date: '3/23', mood: 2000, hr: 6 },
      { date: '3/7', mood: 2780, hr: 7 },
      { date: '3/4', mood: 1890, hr: 8 },
      { date: '3/8', mood: 2390, hr: 9 },
      { date: '3/10', mood: 3490, hr: 10 },
];

const data2 = [
  { date: '3/1', mood: 4000, hr: 1 },
  { date: '3/1', mood: 3000, hr: 2 },
  { date: '3/1', mood: 2000, hr: 3 },
  { date: '3/1', mood: 2780, hr: 4 },
  { date: '3/1', mood: 1890, hr: 5 },
  { date: '3/1', mood: 2390, hr: 6 },
  { date: '3/1', mood: 3490, hr: 7 },
];

class SleepPage extends React.Component {
  onMenuClicked = () => {
    this.setState({ dataToUse: data2 });
  };
  constructor(props) {
    super(props);
    this.state = {
      dataToUse: data1,
    };
  }



  displayName: 'SleepPage';

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Your Sleeping Habits Affects Your Mood!</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">

            <Panel
              header={
                <span>
                   <i className="fa fa-bar-chart-o fa-fw" /> How Many Hours Of Sleep You Had Affects Your Mood
                     <div className="pull-right">
                       <DropdownButton title="Dropdown" bsSize="xs" pullRight id="dropdownButton1">
                         <MenuItem eventKey="1" onClick={this.onMenuClicked()}>Month</MenuItem>
                         <MenuItem eventKey="2">Week</MenuItem>
                       </DropdownButton>
                     </div>
                </span>}
            >
              <div>
                <ResponsiveContainer width="100%" aspect={2}>
                  <AreaChart data={this.state.dataToUse} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                    <XAxis dataKey="hr" />
                    <YAxis />
                    <CartesianGrid stroke="#ccc" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Area type="monotone" dataKey="mood" stackId="1" stroke="#8884d8" fill="#8884d8" unit="pts" />
                    <Area type="monotone" dataKey="date" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Panel>
          </div>

          <div className="col-lg-6">
            <Panel header={<span>How Many Hours You've Been Awake Affects Your Mood</span>} >
              <div>
                <ResponsiveContainer width="100%" aspect={2}>
                  <LineChart data={data2} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="hr" unit="hr" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="mood" stroke="#8884d8" unit="pts" />
                    <Line type="monotone" dataKey="date" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default SleepPage;
