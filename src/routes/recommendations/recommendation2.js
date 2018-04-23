import React from 'react';
import { Panel } from 'react-bootstrap';
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
  YAxis,
} from 'recharts';
import moment from 'moment/moment';

const recommendationData = [
  { date: new Date('4/01/2018').getTime(), new_mood: 5, old_mood: 5, hrs_sleep: 8.5, add_sleep: 0 },
  { date: new Date('4/02/2018').getTime(), new_mood: -2, old_mood: -5, hrs_sleep: 7.5, add_sleep: 1 },
  { date: new Date('4/03/2018').getTime(), new_mood: -2, old_mood: -2, hrs_sleep: 5, add_sleep: 0 },
  { date: new Date('4/04/2018').getTime(), new_mood: 5, old_mood: 5, hrs_sleep: 8, add_sleep: 0 },
  { date: new Date('4/05/2018').getTime(), new_mood: 4, old_mood: 4, hrs_sleep: 8.5, add_sleep: 0 },
  { date: new Date('4/06/2018').getTime(), new_mood: 7, old_mood: 7, hrs_sleep: 9, add_sleep: 0 },
  { date: new Date('4/07/2018').getTime(), new_mood: 8, old_mood: 8, hrs_sleep: 8, add_sleep: 0 },
  { date: new Date('4/08/2018').getTime(), new_mood: 8, old_mood: 8, hrs_sleep: 8.5, add_sleep: 0 },
  { date: new Date('4/09/2018').getTime(), new_mood: 2, old_mood: -8, hrs_sleep: 3, add_sleep: 0 },
  { date: new Date('4/10/2018').getTime(), new_mood: -3, old_mood: -5, hrs_sleep: 4, add_sleep: 4 },
  { date: new Date('4/11/2018').getTime(), new_mood: 3, old_mood: 3, hrs_sleep: 8, add_sleep: 0 },
  { date: new Date('4/12/2018').getTime(), new_mood: 4, old_mood: 4, hrs_sleep: 7.5, add_sleep: 0 },
  { date: new Date('4/13/2018').getTime(), new_mood: 6, old_mood: 6, hrs_sleep: 6, add_sleep: 0 },
  { date: new Date('4/14/2018').getTime(), new_mood: 6, old_mood: 6, hrs_sleep: 8, add_sleep: 0 },
  { date: new Date('4/15/2018').getTime(), new_mood: 7, old_mood: 7, hrs_sleep: 8, add_sleep: 0 },
  { date: new Date('4/16/2018').getTime(), new_mood: 2, old_mood: -6, hrs_sleep: 6, add_sleep: 2 },
  { date: new Date('4/17/2018').getTime(), new_mood: 4, old_mood: -4, hrs_sleep: 7, add_sleep: 0 },
  { date: new Date('4/18/2018').getTime(), new_mood: -4, old_mood: -4, hrs_sleep: 6, add_sleep: 0 },
  { date: new Date('4/19/2018').getTime(), new_mood: -6, old_mood: -6, hrs_sleep: 7, add_sleep: 0 },
  { date: new Date('4/20/2018').getTime(), new_mood: 6, old_mood: 6, hrs_sleep: 8, add_sleep: 0 },
  { date: new Date('4/21/2018').getTime(), new_mood: 7, old_mood: 7, hrs_sleep: 8, add_sleep: 0 },
  { date: new Date('4/22/2018').getTime(), new_mood: 6, old_mood: 6, hrs_sleep: 6, add_sleep: 0 },
];

const tickFormatter = (tick) => moment(tick).format('MM-DD-YYYY');

class Recommendation2 extends React.Component {
  render() {
    return (<Panel header={<span>Mood Over Time</span>}>
      <div>
        <ResponsiveContainer width="100%" aspect={2}>
          <ComposedChart data={recommendationData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis domain={['auto', 'auto']} dataKey="date" scale="time" type="number" tickFormatter={tickFormatter}>
              <Label value="Date" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis yAxisId="left" domain={[-10, 10]}>
              <Label value="Mood Scale" offset={0} position="insideLeft" angle={-90} />
            </YAxis>
            <YAxis yAxisId="right" orientation="right" domain={[0, 12]}>
              <Label value="Hours of Sleep" offset={0} position="insideRight" angle={90} />
            </YAxis>
            <Tooltip />
            <Line yAxisId="left" type="monotone" dataKey="old_mood" stroke="blue" />
            <Line yAxisId="left" type="monotone" dataKey="new_mood" stroke="green" />
            <Bar yAxisId="right" dataKey="hrs_sleep" barSize={10} fill="blue" stackId="stack" />
            <Bar yAxisId="right" dataKey="add_sleep" barSize={10} fill="green" stackId="stack" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Panel>);
  }
}

export default Recommendation2;
