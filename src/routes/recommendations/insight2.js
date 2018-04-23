import React from 'react';
import {Panel} from "react-bootstrap";
import {CartesianGrid, Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import moment from "moment/moment";

const insightData = [
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

const tickFormatter = (tick) => moment(tick).format('MM-DD-YYYY');

class Insight2 extends React.Component {
  render() {
    return (<Panel header={<span>Mood Over Time</span>}>
      <div>
        <ResponsiveContainer width="100%" aspect={2}>
          <LineChart data={insightData} margin={{top: 20, right: 80, bottom: 20, left: 20}} >
            <CartesianGrid stroke="#ccc" />
            <XAxis tickFormatter={tickFormatter} domain={['auto', 'auto']} dataKey="date" >
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

export default Insight2;
