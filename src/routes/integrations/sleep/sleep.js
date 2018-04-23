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
  ResponsiveContainer, ComposedChart, Bar,
} from 'recharts';

import moment from 'moment';
import CustomSleepTooltip from './CustomSleepTooltip';

const title = 'Sleep Tracker Data Integration';

const tickFormatter = (tick) => moment(tick).format('MM-DD-YYYY');

const weeklyData = [
  { date: new Date('4/16/2018').getTime(), mood: -6, hrs_sleep: 6 },
  { date: new Date('4/17/2018').getTime(), mood: -4, hrs_sleep: 7 },
  { date: new Date('4/18/2018').getTime(), mood: -4, hrs_sleep: 6 },
  { date: new Date('4/19/2018').getTime(), mood: -6, hrs_sleep: 7 },
  { date: new Date('4/20/2018').getTime(), mood: 6, hrs_sleep: 8 },
  { date: new Date('4/21/2018').getTime(), mood: 7, hrs_sleep: 8 },
  { date: new Date('4/22/2018').getTime(), mood: 6, hrs_sleep: 6 },
];

const monthlyData = [
  { date: new Date('4/01/2018').getTime(), mood: 5, hrs_sleep: 8.5 },
  { date: new Date('4/02/2018').getTime(), mood: -5, hrs_sleep: 7.5 },
  { date: new Date('4/03/2018').getTime(), mood: -2, hrs_sleep: 5 },
  { date: new Date('4/04/2018').getTime(), mood: 5, hrs_sleep: 8 },
  { date: new Date('4/05/2018').getTime(), mood: 4, hrs_sleep: 8.5 },
  { date: new Date('4/06/2018').getTime(), mood: 7, hrs_sleep: 9 },
  { date: new Date('4/07/2018').getTime(), mood: 8, hrs_sleep: 8 },
  { date: new Date('4/08/2018').getTime(), mood: 8, hrs_sleep: 8.5 },
  { date: new Date('4/09/2018').getTime(), mood: -8, hrs_sleep: 3 },
  { date: new Date('4/10/2018').getTime(), mood: -5, hrs_sleep: 4 },
  { date: new Date('4/11/2018').getTime(), mood: 3, hrs_sleep: 8 },
  { date: new Date('4/12/2018').getTime(), mood: 4, hrs_sleep: 7.5 },
  { date: new Date('4/13/2018').getTime(), mood: 6, hrs_sleep: 6 },
  { date: new Date('4/14/2018').getTime(), mood: 6, hrs_sleep: 8 },
  { date: new Date('4/15/2018').getTime(), mood: 7, hrs_sleep: 8 },
  { date: new Date('4/16/2018').getTime(), mood: -6, hrs_sleep: 6 },
  { date: new Date('4/17/2018').getTime(), mood: -4, hrs_sleep: 7 },
  { date: new Date('4/18/2018').getTime(), mood: -4, hrs_sleep: 6 },
  { date: new Date('4/19/2018').getTime(), mood: -6, hrs_sleep: 7 },
  { date: new Date('4/20/2018').getTime(), mood: 6, hrs_sleep: 8 },
  { date: new Date('4/21/2018').getTime(), mood: 7, hrs_sleep: 8 },
  { date: new Date('4/22/2018').getTime(), mood: 6, hrs_sleep: 6 },
];

const yearlyData = [
  { date: 'January 2018', mood: 7, hrs_sleep: 8.25 },
  { date: 'February 2018', mood: 8, hrs_sleep: 7.75 },
  { date: 'March 2018', mood: 5, hrs_sleep: 7 },
  { date: 'April 2018', mood: 5, hrs_sleep: 7.5 },
];

class SleepPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: 'weekly',
      rightYLabel: 'Hours of Sleep',
      leftYLabel: 'Mood Scale',
      dataToUse: weeklyData,
    };
  }

  onClickWeekly = () => {
    this.setState({
      activeFilter: 'weekly',
      rightYLabel: 'Hours of Sleep',
      leftYLabel: 'Mood Scale',
      dataToUse: weeklyData,
    });
  };

  onClickMonthly = () => {
    this.setState({
      activeFilter: 'monthly',
      rightYLabel: 'Hours of Sleep',
      leftYLabel: 'Mood Scale',
      dataToUse: monthlyData,
    });
  };

  onClickYearly = () => {
    this.setState({
      activeFilter: 'yearly',
      rightYLabel: 'Hours of Sleep (Daily Average)',
      leftYLabel: 'Mood Scale (Daily Average)',
      dataToUse: yearlyData,
    });
  };

  render() {
    document.title = title;

    let xAxis = (<div></div>);

    if (this.state.activeFilter === 'weekly' || this.state.activeFilter === 'monthly') {
      xAxis = (<XAxis
        domain={['auto', 'auto']} dataKey="date" scale="time"
        tickFormatter={tickFormatter} type="number"
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
            <PageHeader>Mood Data Integration with Sleep Tracker Data</PageHeader>
          </div>
        </div>
        <div className="col-lg-10">
          <Panel header={<span>Mood Over Time</span>}>

            <div>
              <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                  <ToggleButton onClick={() => this.onClickWeekly()} value={1}>This Week</ToggleButton>
                  <ToggleButton onClick={() => this.onClickMonthly()} value={2}>This Month</ToggleButton>
                  <ToggleButton onClick={() => this.onClickYearly()} value={3}>This Year</ToggleButton>
                </ToggleButtonGroup>
              </ButtonToolbar>
            </div>

            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <ComposedChart data={this.state.dataToUse} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                  <CartesianGrid stroke="#f5f5f5" />
                  {xAxis}
                  <YAxis yAxisId="left" domain={[-10, 10]}>
                    <Label value={this.state.leftYLabel} offset={0} position="insideLeft" angle={-90} />
                  </YAxis>
                  <YAxis yAxisId="right" orientation="right" domain={[0, 12]}>
                    <Label value={this.state.rightYLabel} offset={0} position="insideRight" angle={90} />
                  </YAxis>
                  <Tooltip content={<CustomSleepTooltip filter={this.state.activeFilter}/>}/>
                  <Line yAxisId="left" type="monotone" dataKey="mood" stroke="#8884d8" />
                  <Bar yAxisId="right" dataKey="hrs_sleep" barSize={10} fill="#82ca9d" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}

export default SleepPage;
