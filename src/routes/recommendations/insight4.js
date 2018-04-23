import React from 'react';
import {Panel} from "react-bootstrap";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import moment from "moment/moment";

const insightData = [
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

const tickFormatter = (tick) => moment(tick).format('MM-DD-YYYY');

class Insight4 extends React.Component {
  render() {
    return (<Panel header={<span>Mood Over Time</span>}>
      <div>
        <ResponsiveContainer width="100%" aspect={2}>
          <ComposedChart data={insightData} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis domain={['auto', 'auto']} dataKey="date" scale="time" type="number" tickFormatter={tickFormatter}>
              <Label value="Date" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis yAxisId="left" domain={[-10, 10]}>
              <Label value="Avg. Mood Scale" offset={0} position="insideLeft" angle={-90} />
            </YAxis>
            <YAxis yAxisId="right" orientation="right" domain={[0, 20000]}>
              <Label value="Avg. Number of Steps" offset={0} position="insideRight" angle={90} />
            </YAxis>
            <Tooltip />
            <Line yAxisId="left" type="monotone" dataKey="mood" stroke="#8884d8" />
            <Bar yAxisId="right" dataKey="no_steps" barSize={10} fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Panel>);
  }
}

export default Insight4;
