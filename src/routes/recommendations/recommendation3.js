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

const recommendationData = [
  { date: new Date('4/01/2018').getTime(), new_mood: 7, old_mood: 5, old_steps: 12121, new_steps: 0 },
  { date: new Date('4/02/2018').getTime(), new_mood: -5, old_mood: -5, old_steps: 8702, new_steps: 0 },
  { date: new Date('4/03/2018').getTime(), new_mood: 0, old_mood: -2, old_steps: 3210, new_steps: 3000 },
  { date: new Date('4/04/2018').getTime(), new_mood: 5, old_mood: 5, old_steps: 4232, new_steps: 2000 },
  { date: new Date('4/05/2018').getTime(), new_mood: 5, old_mood: 4, old_steps: 6242, new_steps: 1000 },
  { date: new Date('4/06/2018').getTime(), new_mood: 8, old_mood: 7, old_steps: 7242, new_steps: 1000 },
  { date: new Date('4/07/2018').getTime(), new_mood: 8, old_mood: 8, old_steps: 9251, new_steps: 0 },
  { date: new Date('4/08/2018').getTime(), new_mood: 8, old_mood: 8, old_steps: 8791, new_steps: 0 },
  { date: new Date('4/09/2018').getTime(), new_mood: -5, old_mood: -8, old_steps: 3232, new_steps: 3000 },
  { date: new Date('4/10/2018').getTime(), new_mood: -3, old_mood: -5, old_steps: 4562, new_steps: 2000 },
  { date: new Date('4/11/2018').getTime(), new_mood: 4, old_mood: 3, old_steps: 5752, new_steps: 1000 },
  { date: new Date('4/12/2018').getTime(), new_mood: 4, old_mood: 4, old_steps: 3842, new_steps: 3000 },
  { date: new Date('4/13/2018').getTime(), new_mood: 6, old_mood: 6, old_steps: 4525, new_steps: 3000 },
  { date: new Date('4/14/2018').getTime(), new_mood: 6, old_mood: 6, old_steps: 4012, new_steps: 3000 },
  { date: new Date('4/15/2018').getTime(), new_mood: 7, old_mood: 7, old_steps: 6066, new_steps: 0 },
  { date: new Date('4/16/2018').getTime(), new_mood: -3, old_mood: -6, old_steps: 4012, new_steps: 2000 },
  { date: new Date('4/17/2018').getTime(), new_mood: 0, old_mood: -4, old_steps: 3421, new_steps: 3000 },
  { date: new Date('4/18/2018').getTime(), new_mood: 0, old_mood: -4, old_steps: 5221, new_steps: 0 },
  { date: new Date('4/19/2018').getTime(), new_mood: 2, old_mood: -6, old_steps: 4521, new_steps: 1500 },
  { date: new Date('4/20/2018').getTime(), new_mood: 6, old_mood: 6, old_steps: 9092, new_steps: 0 },
  { date: new Date('4/21/2018').getTime(), new_mood: 7, old_mood: 7, old_steps: 11242, new_steps: 0 },
  { date: new Date('4/22/2018').getTime(), new_mood: 7, old_mood: 6, old_steps: 12621, new_steps: 0 },
];

const tickFormatter = (tick) => moment(tick).format('MM-DD-YYYY');

class Recommendation3 extends React.Component {
  render() {
    return (<Panel header={<span>Mood Over Time</span>}>
      <div>
        <ResponsiveContainer width="100%" aspect={2}>
          <ComposedChart data={recommendationData} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis domain={['auto', 'auto']} dataKey="date" scale="time" type="number" tickFormatter={tickFormatter}>
              <Label value="Date" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis yAxisId="left" domain={[-10, 10]}>
              <Label value="Mood Scale" offset={0} position="insideLeft" angle={-90} />
            </YAxis>
            <YAxis yAxisId="right" orientation="right" domain={[0, 20000]}>
              <Label value="Number of Steps" offset={0} position="insideRight" angle={90} />
            </YAxis>
            <Tooltip />
            <Line yAxisId="left" type="monotone" dataKey="old_mood" stroke="blue" />
            <Line yAxisId="left" type="monotone" dataKey="new_mood" stroke="green" />
            <Bar yAxisId="right" dataKey="old_steps" barSize={10} fill="blue" stackId="stack" />
            <Bar yAxisId="right" dataKey="new_steps" barSize={10} fill="green" stackId="stack" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Panel>);
  }
}

export default Recommendation3;
