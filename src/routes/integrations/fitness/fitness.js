import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import {
  LineChart, Tooltip,
  Line, XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../../vendor/recharts';
// ResponsiveContainer is broken so we have customise the ResponsiveContainer

const title = 'Fitness Data';

const data = [
      { date: '3/1', mood: 4000, hr: 24, amt: 2400, value: 600 },
      { date: '3/2', mood: 3000, hr: 13, amt: 2210, value: 300 },
      { date: '3/3', mood: 2000, hr: 9, amt: 2290, value: 500 },
      { date: '3/4', mood: 2780, hr: 3, amt: 2000, value: 400 },
      { date: '3/5', mood: 1890, hr: 4, amt: 2181, value: 200 },
      { date: '3/6', mood: 2390, hr: 3, amt: 2500, value: 700 },
      { date: '3/7', mood: 3490, hr: 4, amt: 2100, value: 100 },
];

function displayFitnessPage(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Your Sleeping Habits Affects Your Mood!</PageHeader>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <Panel header={<span>How Many Hours Of Sleep You Had Affects Your Mood</span>} >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <XAxis dataKey="hr" name="hrs slept: " unit="hr" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Area type="monotone" dataKey="mood" stackId="1" stroke="#8884d8" fill="#8884d8" unit="pts" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>

        <div className="col-lg-6">
          <Panel header={<span>How Many Hours You've Been Awake Affects Your Mood</span>} >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="amt" unit="hr" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="mood" stroke="#8884d8" unit="pts" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

displayFitnessPage.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayFitnessPage;
