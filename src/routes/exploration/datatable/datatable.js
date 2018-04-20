import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const title = 'Data Table View';

const moodType = {
  0: 'good',
  1: 'bad',
  2: 'unknown',
};

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}
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
  text: '....',
  audio: 'audio',
}];
class DataTablePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BootstrapTable data={products} striped hover>
          <TableHeaderColumn dataField="id" isKey dataSort>Data ID</TableHeaderColumn>
          <TableHeaderColumn dataField="date" dataSort>Date</TableHeaderColumn>
          <TableHeaderColumn dataField="time" dataSort>Time</TableHeaderColumn>
          <TableHeaderColumn dataField="mood" filterFormatted dataFormat={enumFormatter} formatExtraData={moodType} filter={{ type: 'SelectFilter', options: moodType, defaultValue: 1 }}>Mood</TableHeaderColumn>
          <TableHeaderColumn dataField="score" dataSort>Score</TableHeaderColumn>
          <TableHeaderColumn dataField="text">Text</TableHeaderColumn>
          <TableHeaderColumn dataField="audio">Audio</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default DataTablePage;
