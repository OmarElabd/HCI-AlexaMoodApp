import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {
  PageHeader,
} from 'react-bootstrap';
import {moment} from "moment";

const title = 'Data Table View';

const moodType = {
  0: 'good',
  1: 'bad',
};

const tickFormatterDaily = (tick) => (<div>moment(tick).format('hh:mm a')</div>);

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

const dailyData = [
  { date: '4/22/2018 7:32 AM', mood: -6, moodtype: 1, text: 'Play the Strokes', audio: '01.wav'},
  { date: '4/22/2018 10:41 AM', mood: 7, moodtype: 0, text: 'Play the Strokes', audio: '01.wav' },
  { date: '4/22/2018 11:02 AM', mood: 8, moodtype: 0, text: 'Play the Strokes', audio: '01.wav' },
  { date: '4/22/2018 11:30 AM', mood: 5, moodtype: 0, text: 'Play the Strokes', audio: '01.wav' },
  { date: '4/22/2018 12:12 PM', mood: 5, moodtype: 0, text: 'Play the Strokes', audio: '01.wav' },
  { date: '4/22/2018 4:12 PM', mood: 2, moodtype: 0, text: 'Play the Strokes', audio: '01.wav' },
  { date: '4/22/2018 5:30 PM', mood: -2, moodtype: 1, text: 'Play the Strokes', audio: '01.wav' },
  { date: '4/22/2018 9:10 PM', mood: -5, moodtype: 1, text: 'Play the Strokes', audio: '01.wav' },
  { date: '4/22/2018 9:40 PM', mood: -7, moodtype: 1, text: 'Play the Strokes', audio: '01.wav' },
  { date: '4/22/2018 10:12 PM', mood: -8, moodtype: 1, text: 'Play the Strokes', audio: '01.wav' },
  { date: '4/22/2018 11:49 PM', mood: 7, moodtype: 0, text: 'Play the Strokes', audio: '01.wav'},
];

const products = [{
  id: 1,
  date: '2018/04/05',
  time: '08:15',
  mood: 0,
  score: 10,
  text: '....',
  audio: 'audio',
}, {
  id: 2,
  date: '2018/05/06',
  time: '09:15',
  mood: 0,
  score: 8,
  text: 'Play the Strokes',
  audio: '01.wav',
}];

const audioFormatter = (value) => {
  return (<div>
    <audio ref="audio_tag" src={"/assets/audio/" + value} controls />
  </div>);
}

class DataTablePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Data Table</PageHeader>
          </div>
        </div>
        <div>
          <BootstrapTable data={dailyData} striped hover>
            <TableHeaderColumn dataField="date" isKey dataSort>Date</TableHeaderColumn>
            <TableHeaderColumn dataField="moodtype" filterFormatted dataFormat={enumFormatter} formatExtraData={moodType} filter={{ type: 'SelectFilter', options: moodType }}>Mood</TableHeaderColumn>
            <TableHeaderColumn dataField="mood" dataSort>Score</TableHeaderColumn>
            <TableHeaderColumn dataField="text">Text</TableHeaderColumn>
            <TableHeaderColumn dataField="audio" dataFormat={audioFormatter}>Audio</TableHeaderColumn>

          </BootstrapTable>
        </div>
      </div>
    );
  }
}

export default DataTablePage;
