import React, { PropTypes } from 'react';
import {
  Panel,
} from 'react-bootstrap';

import {
  Tooltip,
  XAxis, YAxis, LineChart,
  CartesianGrid, Line,
  ResponsiveContainer,
} from '../../vendor/recharts';

const title = 'Alexa Mood Application';

const data1 = [
  { date: '4/17/2017', value: 7 },
  { date: '4/17/2018', value: 8 },
  { date: '4/17/2018', value: 5 },
  { date: '4/17/2018', value: 5 },
  { date: '4/17/2018', value: 2 },
  { date: '4/17/2018', value: -2 },
  { date: '4/17/2018', value: 7 },
];

const data2 = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 },
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 },
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
    // HTML GOES HERE
    return (
      <div className="col-lg-6">
        <Panel header={<span>Mood Over Time</span>}>
          <div>
            <ResponsiveContainer width="100%" aspect={2}>
              <LineChart data={this.state.dataToUse} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="date" />
                <YAxis domain={[-10, 10]} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>
    );
  }
}


export default Home;
