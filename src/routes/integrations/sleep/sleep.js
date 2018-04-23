import React, { PropTypes } from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import {
  Button, ButtonToolbar,
  ToggleButton,
  Panel, ToggleButtonGroup,
} from 'react-bootstrap';
import {
  LineChart, Tooltip,
  Line, XAxis, YAxis, ZAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../../vendor/recharts';
// ResponsiveContainer is broken so we have customise the ResponsiveContainer

const title = 'Sleep Data';

const dailyData1 = [
      { date: '3/3', mood: 4000, hr: 3 },
      { date: '3/5', mood: 3000, hr: 5 },
      { date: '3/23', mood: 2000, hr: 6 },
      { date: '3/7', mood: 2780, hr: 7 },
      { date: '3/4', mood: 1890, hr: 8 },
      { date: '3/8', mood: 2390, hr: 9 },
      { date: '3/10', mood: 3490, hr: 10 },
];

const weeklyData1 = [
  { date: '3/1', mood: 4000, hr: 1 },
  { date: '3/1', mood: 3000, hr: 2 },
  { date: '3/1', mood: 2000, hr: 3 },
  { date: '3/1', mood: 2780, hr: 4 },
  { date: '3/1', mood: 1890, hr: 5 },
  { date: '3/1', mood: 2390, hr: 6 },
  { date: '3/1', mood: 3490, hr: 7 },
];

const monthlyData1 = [
  { date: '3/1', mood: 4000, hr: 1 },
  { date: '3/1', mood: 3000, hr: 2 },
  { date: '3/1', mood: 2000, hr: 3 },
  { date: '3/1', mood: 2780, hr: 4 },
  { date: '3/1', mood: 1890, hr: 5 },
  { date: '3/1', mood: 2390, hr: 6 },
  { date: '3/1', mood: 3490, hr: 7 },
];

const yearlyData1 = [
  { date: '3/1', mood: 4000, hr: 1 },
  { date: '3/1', mood: 3000, hr: 2 },
  { date: '3/1', mood: 2000, hr: 3 },
  { date: '3/1', mood: 2780, hr: 4 },
  { date: '3/1', mood: 1890, hr: 5 },
  { date: '3/1', mood: 2390, hr: 6 },
  { date: '3/1', mood: 3490, hr: 7 },
];

const dailyData2 = [
  { date: '3/3', mood: 4000, hr: 3 },
  { date: '3/5', mood: 3000, hr: 5 },
  { date: '3/23', mood: 2000, hr: 6 },
  { date: '3/7', mood: 2780, hr: 7 },
  { date: '3/4', mood: 1890, hr: 8 },
  { date: '3/8', mood: 2390, hr: 9 },
  { date: '3/10', mood: 3490, hr: 10 },
];

const weeklyData2 = [
  { date: '3/1', mood: 4000, hr: 1 },
  { date: '3/1', mood: 3000, hr: 2 },
  { date: '3/1', mood: 2000, hr: 3 },
  { date: '3/1', mood: 2780, hr: 4 },
  { date: '3/1', mood: 1890, hr: 5 },
  { date: '3/1', mood: 2390, hr: 6 },
  { date: '3/1', mood: 3490, hr: 7 },
];

const monthlyData2 = [
  { date: '3/1', mood: 4000, hr: 1 },
  { date: '3/1', mood: 3000, hr: 2 },
  { date: '3/1', mood: 2000, hr: 3 },
  { date: '3/1', mood: 2780, hr: 4 },
  { date: '3/1', mood: 1890, hr: 5 },
  { date: '3/1', mood: 2390, hr: 6 },
  { date: '3/1', mood: 3490, hr: 7 },
];

const yearlyData2 = [
  { date: '3/1', mood: 4000, hr: 1 },
  { date: '3/1', mood: 3000, hr: 2 },
  { date: '3/1', mood: 2000, hr: 3 },
  { date: '3/1', mood: 2780, hr: 4 },
  { date: '3/1', mood: 1890, hr: 5 },
  { date: '3/1', mood: 2390, hr: 6 },
  { date: '3/1', mood: 3490, hr: 7 },
];

class SleepPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOption1: false,
      dataToUse1: dailyData1,
      dataToUse2: dailyData2,
    };
  }

  componentDidMount() {

  }

  onClickDaily1 = () => {
    this.setState({
      dataToUse1: dailyData1
    })
  };

  onClickWeekly1 = () => {
    this.setState({
      dataToUse1: weeklyData1
    })
  };

  onClickMonthly1 = () => {
    this.setState({
      dataToUse1: monthlyData1
    })
  };

  onClickYearly1 = () => {
    this.setState({
      dataToUse1: yearlyData1
    })
  };

  onClickDaily2 = () => {
    this.setState({
      dataToUse2: dailyData2
    })
  };

  onClickWeekly2 = () => {
    this.setState({
      dataToUse2: weeklyData2
    })
  };

  onClickMonthly2 = () => {
    this.setState({
      dataToUse2: monthlyData2
    })
  };

  onClickYearly2 = () => {
    this.setState({
      dataToUse2: yearlyData2
    })
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Your Sleeping Habits Affects Your Mood!</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6" >
            <Panel header={<span>Hours Of Sleep</span>}>
              <span>Hours Of Sleep</span>
              <div className="pull-right">
                <ButtonToolbar>
                  <ToggleButtonGroup type="checkbox" defaultValue={1}>
                    <ToggleButton onClick={() => this.onClickDaily1()} value={1}>Today</ToggleButton>
                    <ToggleButton onClick={() => this.onClickWeekly1()} value={2}>This Week</ToggleButton>
                    <ToggleButton onClick={() => this.onClickMonthly1()} value={3}>This Month</ToggleButton>
                    <ToggleButton onClick={() => this.onClickYearly1()} value={4}>This Year</ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </div>

              <div>
                <ResponsiveContainer width="100%" aspect={2}>
                  <AreaChart data={this.state.dataToUse1} margin={{ top: 30, right: 30, left: 30, bottom: 30 }} >
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
            <Panel header={<span>Hours You've Been Awake</span>} >
              <span>Hours You've Been Awake</span>
              <div className="pull-right">
                <ButtonToolbar>
                  <ToggleButtonGroup type="checkbox" defaultValue={1}>
                    <ToggleButton onClick={() => this.onClickDaily2()} value={1}>Today</ToggleButton>
                    <ToggleButton onClick={() => this.onClickWeekly2()} value={2}>This Week</ToggleButton>
                    <ToggleButton onClick={() => this.onClickMonthly2()} value={3}>This Month</ToggleButton>
                    <ToggleButton onClick={() => this.onClickYearly2()} value={4}>This Year</ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </div>
              <div>
                <ResponsiveContainer width="100%" aspect={2}>
                  <LineChart data={this.state.dataToUse2} margin={{ top: 30, right: 30, left: 30, bottom: 30 }}>
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
