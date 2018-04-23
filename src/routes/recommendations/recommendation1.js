import React from 'react';
import {Panel} from "react-bootstrap";
import {CartesianGrid, Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const insightData = [
  { date: 'January 2018', mood: 7 },
  { date: 'February 2018', mood: 8 },
  { date: 'March 2018', mood: 5 },
  { date: 'April 2018', mood: 5 },
];

class Recommendation1 extends React.Component {
  render() {
    return (<Panel header={<span>Mood Over Time</span>}>
      <div>
        <ResponsiveContainer width="100%" aspect={2}>
          <LineChart data={insightData} margin={{top: 20, right: 80, bottom: 20, left: 20}} >
            <CartesianGrid stroke="#ccc" />
            <XAxis
              domain={['auto', 'auto']} dataKey="date" >
              <Label value="Date" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis domain={[-10, 10]}>
              <Label value="Avg. Mood Scale" offset={0} position="insideLeft" angle={-90} />
            </YAxis>
            <Tooltip />
            <Line type="monotone" dataKey="mood" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Panel>);
  }
}

export default Recommendation1;
