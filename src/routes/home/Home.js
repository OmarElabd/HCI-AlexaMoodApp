import React, { PropTypes } from 'react';
import {
  Button, ButtonToolbar,
  PageHeader, ToggleButton,
  Panel, ToggleButtonGroup,
} from 'react-bootstrap';

import {
  Tooltip,
  XAxis, YAxis, LineChart,
  CartesianGrid, Line, Label,
  ResponsiveContainer,
} from 'recharts';

import CustomizedDot from './CustomizedDot';
import moment from 'moment';
import CustomizedTooltip from "./CustomizedTooltip";

const title = 'Alexa Mood Application';

const tickFormatterDaily = (tick) => moment(tick).format('hh:mm a');
const tickFormatterWeekly = (tick) => moment(tick).format('MM-DD-YYYY');

const dailyData = [
  { date: new Date('4/22/2018 7:32 AM').getTime(), mood: -6 },
  { date: new Date('4/22/2018 10:41 AM').getTime(), mood: 7 },
  { date: new Date('4/22/2018 11:02 AM').getTime(), mood: 8 },
  { date: new Date('4/22/2018 11:30 AM').getTime(), mood: 5 },
  { date: new Date('4/22/2018 12:12 PM').getTime(), mood: 5 },
  { date: new Date('4/22/2018 4:12 PM').getTime(), mood: 2 },
  { date: new Date('4/22/2018 5:30 PM').getTime(), mood: -2 },
  { date: new Date('4/22/2018 9:10 PM').getTime(), mood: -5 },
  { date: new Date('4/22/2018 9:40 PM').getTime(), mood: -7 },
  { date: new Date('4/22/2018 10:12 PM').getTime(), mood: -8 },
  { date: new Date('4/22/2018 11:49 PM').getTime(), mood: 7 },
];

const weeklyData = [
  { date: new Date('4/16/2018').getTime(), mood: -6 },
  { date: new Date('4/17/2018').getTime(), mood: -4 },
  { date: new Date('4/18/2018').getTime(), mood: -4 },
  { date: new Date('4/19/2018').getTime(), mood: -6 },
  { date: new Date('4/20/2018').getTime(), mood: 6 },
  { date: new Date('4/21/2018').getTime(), mood: 7 },
  { date: new Date('4/22/2018').getTime(), mood: 6 },
];

const monthlyData = [
  { date: new Date('4/01/2018').getTime(), mood: 5 },
  { date: new Date('4/02/2018').getTime(), mood: -5 },
  { date: new Date('4/03/2018').getTime(), mood: -2 },
  { date: new Date('4/04/2018').getTime(), mood: 5 },
  { date: new Date('4/05/2018').getTime(), mood: 4 },
  { date: new Date('4/06/2018').getTime(), mood: 7 },
  { date: new Date('4/07/2018').getTime(), mood: 8 },
  { date: new Date('4/08/2018').getTime(), mood: 8 },
  { date: new Date('4/09/2018').getTime(), mood: -8 },
  { date: new Date('4/10/2018').getTime(), mood: -5 },
  { date: new Date('4/11/2018').getTime(), mood: 3 },
  { date: new Date('4/12/2018').getTime(), mood: 4 },
  { date: new Date('4/13/2018').getTime(), mood: 6 },
  { date: new Date('4/14/2018').getTime(), mood: 6 },
  { date: new Date('4/15/2018').getTime(), mood: 7 },
  { date: new Date('4/16/2018').getTime(), mood: -6 },
  { date: new Date('4/17/2018').getTime(), mood: -4 },
  { date: new Date('4/18/2018').getTime(), mood: -4 },
  { date: new Date('4/19/2018').getTime(), mood: -6 },
  { date: new Date('4/20/2018').getTime(), mood: 6 },
  { date: new Date('4/21/2018').getTime(), mood: 7 },
  { date: new Date('4/22/2018').getTime(), mood: 6 },
];

const yearlyData = [
  { date: 'January 2018', mood: 7 },
  { date: 'February 2018', mood: 8 },
  { date: 'March 2018', mood: 5 },
  { date: 'April 2018', mood: 5 },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: 'daily',
      yLabel: 'Mood Scale',
      dataToUse: dailyData,
    };
  }

  componentDidMount() {

  }

  onClickDaily = () => {
    this.setState({
      activeFilter: 'daily',
      yLabel: 'Mood Scale',
      dataToUse: dailyData,
    });
  };

  onClickWeekly = () => {
    this.setState({
      activeFilter: 'weekly',
      yLabel: 'Mood Scale',
      dataToUse: weeklyData,
    });
  };

  onClickMonthly = () => {
    this.setState({
      activeFilter: 'monthly',
      yLabel: 'Mood Scale',
      dataToUse: monthlyData,
    });
  };

  onClickYearly = () => {
    this.setState({
      activeFilter: 'yearly',
      yLabel: 'Mood Scale (Daily Average)',
      dataToUse: yearlyData,
    });
  };

  render() {
    document.title = title;

    let xAxis = (<div></div>);

    if (this.state.activeFilter === 'daily') {
      xAxis = (<XAxis
        domain={['auto', 'auto']} dataKey="date" scale="time"
        tickFormatter={tickFormatterDaily} type="number"
      >
        <Label value="Date" offset={0} position="insideBottom" />
      </XAxis>);
    } else if (this.state.activeFilter === 'weekly' || this.state.activeFilter === 'monthly') {
      xAxis = (<XAxis
        domain={['auto', 'auto']} dataKey="date" scale="time"
        tickFormatter={tickFormatterWeekly} type="number"
      >
        <Label value="Date" offset={0} position="insideBottom" />
      </XAxis>);
    } else {
      xAxis = (
        <XAxis domain={['auto', 'auto']} dataKey="date">
          <Label value="Date" offset={0} position="insideBottom" />
        </XAxis>);
    }

    // HTML GOES HERE
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Overview</PageHeader>
          </div>
        </div>

        <div className="col-lg-10">
          <Panel header={<span>Mood Over Time</span>}>

            <div>
              <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                  <ToggleButton onClick={() => this.onClickDaily()} value={1}>Today</ToggleButton>
                  <ToggleButton onClick={() => this.onClickWeekly()} value={2}>This Week</ToggleButton>
                  <ToggleButton onClick={() => this.onClickMonthly()} value={3}>This Month</ToggleButton>
                  <ToggleButton onClick={() => this.onClickYearly()} value={4}>This Year</ToggleButton>
                </ToggleButtonGroup>
              </ButtonToolbar>
            </div>

            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <LineChart data={this.state.dataToUse} margin={{ top: 20, right: 80, bottom: 20, left: 20 }}>
                  <CartesianGrid stroke="#ccc" />
                  {xAxis}
                  <YAxis domain={[-10, 10]}>
                    <Label value={this.state.yLabel} offset={0} position="insideLeft" angle={-90} />
                  </YAxis>
                  <Tooltip content={<CustomizedTooltip filter={this.state.activeFilter} />} />
                  <Line type="monotone" dataKey="mood" dot={<CustomizedDot />} stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Home;
