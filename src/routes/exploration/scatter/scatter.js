import React from 'react';
import { ScatterChart, Scatter, Cell, XAxis, YAxis, CartesianGrid, LabelList, Tooltip, ReferenceLine, Label } from 'recharts';

const title = 'Scatter Data';

// const { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, LabelList, Tooltip} = Recharts;
const data = [{ x: -100, y: 200, z: 200}, { x: 120, y: 100, z: 260 },
  { x: 170, y: -300, z: 400}, {x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200 }]

const colors = ['red', 'green', 'pink', 'yellow'];

class ScatterPage extends React.Component {
  constructor(props) {
    super(props);
  }

  displayName: 'ScatterExample';
  render() {
    return (
      <ScatterChart width={600} height={600} margin={{ top: 50, right: 100, bottom: 50, left: 50 }}>
        <XAxis height={90} type="number" dataKey={'x'} name="stature" unit="cm" >
          <Label value="Pages of my website" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis label={{ value: 'pv of page', angle: -90, position: 'insideLeft' }} type="number" dataKey={'y'} name="weight" unit="kg" />
        <CartesianGrid />
        <ReferenceLine x={0} stroke="red" label="Activity" />
        <ReferenceLine y={0} label="Pleasant" stroke="red" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8">
          {
            data.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />;
            })
          }
        </Scatter>
      </ScatterChart>
    );
  }
}

export default ScatterPage;
