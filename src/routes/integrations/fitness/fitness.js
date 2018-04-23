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
import CustomFitnessTooltip from "./CustomFitnessTooltip";

const title = 'Fitness Tracker Data Integration';

const tickFormatter = (tick) => moment(tick).format('MM-DD-YYYY');

const weeklyData = [
  { date: new Date('4/16/2018').getTime(), mood: -6, no_steps: 4012 },
  { date: new Date('4/17/2018').getTime(), mood: -4, no_steps: 3421 },
  { date: new Date('4/18/2018').getTime(), mood: -4, no_steps: 5221 },
  { date: new Date('4/19/2018').getTime(), mood: -6, no_steps: 4521 },
  { date: new Date('4/20/2018').getTime(), mood: 6, no_steps: 9092 },
  { date: new Date('4/21/2018').getTime(), mood: 7, no_steps: 11242 },
  { date: new Date('4/22/2018').getTime(), mood: 6, no_steps: 12621 },
];

const monthlyData = [
  { date: new Date('4/01/2018').getTime(), mood: 5, no_steps: 12121 },
  { date: new Date('4/02/2018').getTime(), mood: -5, no_steps: 8702 },
  { date: new Date('4/03/2018').getTime(), mood: -2, no_steps: 3210 },
  { date: new Date('4/04/2018').getTime(), mood: 5, no_steps: 4232 },
  { date: new Date('4/05/2018').getTime(), mood: 4, no_steps: 6242 },
  { date: new Date('4/06/2018').getTime(), mood: 7, no_steps: 7242 },
  { date: new Date('4/07/2018').getTime(), mood: 8, no_steps: 9251 },
  { date: new Date('4/08/2018').getTime(), mood: 8, no_steps: 8791 },
  { date: new Date('4/09/2018').getTime(), mood: -8, no_steps: 3232 },
  { date: new Date('4/10/2018').getTime(), mood: -5, no_steps: 4562 },
  { date: new Date('4/11/2018').getTime(), mood: 3, no_steps: 5752 },
  { date: new Date('4/12/2018').getTime(), mood: 4, no_steps: 3842 },
  { date: new Date('4/13/2018').getTime(), mood: 6, no_steps: 4525 },
  { date: new Date('4/14/2018').getTime(), mood: 6, no_steps: 4012 },
  { date: new Date('4/15/2018').getTime(), mood: 7, no_steps: 6066 },
  { date: new Date('4/16/2018').getTime(), mood: -6, no_steps: 4012 },
  { date: new Date('4/17/2018').getTime(), mood: -4, no_steps: 3421 },
  { date: new Date('4/18/2018').getTime(), mood: -4, no_steps: 5221 },
  { date: new Date('4/19/2018').getTime(), mood: -6, no_steps: 4521 },
  { date: new Date('4/20/2018').getTime(), mood: 6, no_steps: 9092 },
  { date: new Date('4/21/2018').getTime(), mood: 7, no_steps: 11242 },
  { date: new Date('4/22/2018').getTime(), mood: 6, no_steps: 12621 },
];

const yearlyData = [
  { date: 'January 2018', mood: 7, no_steps: 7250 },
  { date: 'February 2018', mood: 8, no_steps: 8212 },
  { date: 'March 2018', mood: 5, no_steps: 6302 },
  { date: 'April 2018', mood: 5, no_steps: 5902 },
];

class FitnessPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: 'weekly',
      rightYLabel: 'Number of Steps',
      leftYLabel: 'Mood Scale',
      dataToUse: weeklyData,
    };
  }

  onClickWeekly = () => {
    this.setState({
      activeFilter: 'weekly',
      rightYLabel: 'Number of Steps',
      leftYLabel: 'Mood Scale',
      dataToUse: weeklyData,
    });
  };

  onClickMonthly = () => {
    this.setState({
      activeFilter: 'monthly',
      rightYLabel: 'Number of Steps',
      leftYLabel: 'Mood Scale',
      dataToUse: monthlyData,
    });
  };

  onClickYearly = () => {
    this.setState({
      activeFilter: 'yearly',
      rightYLabel: 'Number of Steps (Daily Average)',
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
            <PageHeader>Mood Data Integration with Fitness Tracker Data</PageHeader>
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
                  <YAxis yAxisId="right" orientation="right" domain={[0, 20000]}>
                    <Label value={this.state.rightYLabel} offset={0} position="insideRight" angle={90} />
                  </YAxis>
                  <Tooltip content={<CustomFitnessTooltip filter={this.state.activeFilter}/>}/>
                  <Line yAxisId="left" type="monotone" dataKey="mood" stroke="#8884d8" />
                  <Bar yAxisId="right" dataKey="no_steps" barSize={10} fill="red" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}

export default FitnessPage;
