import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import {
  LineChart, Tooltip,
  Line, XAxis, YAxis, ZAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../../vendor/recharts';
// ResponsiveContainer is broken so we have customise the ResponsiveContainer

const title = 'SleepPage';

const data1 = [
      { date: '3/3', mood: 4000, hr: 3 },
      { date: '3/5', mood: 3000, hr: 5 },
      { date: '3/23', mood: 2000, hr: 6 },
      { date: '3/7', mood: 2780, hr: 7 },
      { date: '3/4', mood: 1890, hr: 8 },
      { date: '3/8', mood: 2390, hr: 9 },
      { date: '3/10', mood: 3490, hr: 10 },
];

const data2 = [
  { date: '3/1', mood: 4000, hr: 1 },
  { date: '3/1', mood: 3000, hr: 2 },
  { date: '3/1', mood: 2000, hr: 3 },
  { date: '3/1', mood: 2780, hr: 4 },
  { date: '3/1', mood: 1890, hr: 5 },
  { date: '3/1', mood: 2390, hr: 6 },
  { date: '3/1', mood: 3490, hr: 7 },
];

function displaySleepPage(props, context) {
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
                <AreaChart data={data1} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <XAxis dataKey="hr" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Area type="monotone" dataKey="mood" stackId="1" stroke="#8884d8" fill="#8884d8" unit="pts" />
                  <Area type="monotone" dataKey="date" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>

        <div className="col-lg-6">
          <Panel header={<span>How Many Hours You've Been Awake Affects Your Mood</span>} >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <LineChart data={data2} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="hr" unit="hr" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="mood" stroke="#8884d8" unit="pts" />
                  <Line type="monotone" dataKey="date" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

displaySleepPage.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displaySleepPage;
