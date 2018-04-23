import React from 'react';
import { ScatterChart, Scatter, Cell, XAxis, YAxis, ZAxis, CartesianGrid, LabelList, Tooltip, ReferenceLine, Label } from 'recharts';
import PageHeader from 'react-bootstrap/lib/PageHeader';

const title = 'Scatter Data';

// const { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, LabelList, Tooltip} = Recharts;
const data = [
  { p: -100, a: 200, mood: 'happy' },
  { p: 120, a: 100, mood: 'sad' }
  ];


const dailyData = [
  { date: new Date('4/22/2018 7:32 AM').getTime(), mood: 'depressed' , a: -3, p: -4 },
  { date: new Date('4/22/2018 10:41 AM').getTime(), mood: 'elated', a: 3, p: 5 },
  { date: new Date('4/22/2018 11:02 AM').getTime(), mood: 'happy', a: 1, p: 5 },
  { date: new Date('4/22/2018 11:30 AM').getTime(), mood: 'excited', a: 3, p: 3 },
  { date: new Date('4/22/2018 12:12 PM').getTime(), mood: 'excited', a: 4, p: 3 },
  { date: new Date('4/22/2018 4:12 PM').getTime(), mood: 'happy', a: 1, p: 2 },
  { date: new Date('4/22/2018 5:30 PM').getTime(), mood: 'sad', a: -1, p: -2 },
  { date: new Date('4/22/2018 9:10 PM').getTime(), mood: 'Bored', a: -4, p: -3 },
  { date: new Date('4/22/2018 9:40 PM').getTime(), mood: 'depressed', a: -3, p: -4 },
  { date: new Date('4/22/2018 10:12 PM').getTime(), mood: 'Fatigued', a: -5, p: -2 },
  { date: new Date('4/22/2018 11:49 PM').getTime(), mood: 'happy', a: 2, p: 3 },
];
const colors = ['red', 'green', 'pink', 'yellow'];

class ScatterPage extends React.Component {
  constructor(props) {
    super(props);
  }

  displayName: 'ScatterExample';
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Valence and Arousal</PageHeader>
          </div>
        </div>
        <ScatterChart width={600} height={600} margin={{ top: 50, right: 100, bottom: 50, left: 100 }}>
          <XAxis height={90} type="number" dataKey={'p'} range={[-5, 5]} name="Pleasant Score" >
            <Label value="Deactivation" offset={0} position="insideBottom" />
          </XAxis>
          <ZAxis dataKey={'p'} name="mood" />
          <YAxis label={{ value: 'Unpleasant', position: 'left' }} range={[-5, 5]} type="number" dataKey={'a'} name="Activation Score" />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <ReferenceLine x={0} stroke="red" label={{ value: 'Activation', position: 'top' }} />
          <ReferenceLine y={0} label={{ value: 'Pleasant', position: 'right' }} stroke="red" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={dailyData} fill="#8884d8" >

          </Scatter>

        </ScatterChart>
      </div>
    );
  }
}

export default ScatterPage;
