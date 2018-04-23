import React, {PropTypes} from 'react';
import {
  Button,
  PageHeader,
  Panel,
} from 'react-bootstrap';

import {
  Tooltip,
  XAxis, YAxis, LineChart,
  CartesianGrid, Line, Label,
  ResponsiveContainer,
} from 'recharts';

import CustomizedDot from "./CustomizedDot";

const title = 'Alexa Mood Application';

const data1 = [
  {date: '4/17/2017', mood: 7},
  {date: '4/17/2018', mood: 8},
  {date: '4/17/2018', mood: 5},
  {date: '4/17/2018', mood: 5},
  {date: '4/17/2018', mood: 2},
  {date: '4/17/2018', mood: -2},
  {date: '4/17/2018', mood: -5},
  {date: '4/17/2018', mood: -7},
  {date: '4/17/2018', mood: -8},
  {date: '4/17/2018', mood: 7},
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOption1: false,
      dataToUse: data1,
    };
  }

  componentDidMount() {

  }

  render() {
    document.title = title;

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
              <Button type="submit">Today</Button>
              <Button type="submit">This Week</Button>
              <Button type="submit">This Year</Button>
            </div>
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <LineChart data={this.state.dataToUse} margin={{top: 20, right: 80, bottom: 20, left: 20}}>
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="date">
                    <Label value="Date" offset={0} position="insideBottom" />
                  </XAxis>
                  <YAxis domain={[-10, 10]}>
                    <Label value="Mood Scale" offset={0} position="insideLeft" angle={-90} />
                  </YAxis>
                  <Tooltip />
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
