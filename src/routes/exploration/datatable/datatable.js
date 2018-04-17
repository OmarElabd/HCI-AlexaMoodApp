import React, { PropTypes } from 'react';
import ReactTable from 'react-table';

const title = 'Data Table View';

class DataTablePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goodMoodData: [
        [
          '2018/04/05',
          '08:15',
          10.3,
          'GOOD',
          'audio',
        ],
        [
          '2018/04/05',
          '09:15',
          6.3,
          'GOOD',
          'audio',
        ],
        [
          '2018/04/07',
          '12:16',
          6.9,
          'GOOD',
          'audio',
        ],
        [
          '2018/04/09',
          '19:30',
          3.3,
          'GOOD',
          'audio',
        ],
        [
          '2018/04/09',
          '19:50',
          4.3,
          'GOOD',
          'audio',
        ],
        [
          '2018/04/10',
          '10:20',
          7.3,
          'GOOD',
          'audio',
        ],
        [
          '2018/04/11',
          '09:20',
          6.1,
          'GOOD',
          'audio',
        ],
        [
          '2018/04/13',
          '09:56',
          7.7,
          'GOOD',
          'audio',
        ],
        [
          '2018/04/13',
          '15:20',
          2.3,
          'GOOD',
          'audio',
        ],
        [
          '2018/04/13',
          '17:15',
          8.8,
          'GOOD',
          'audio',
        ],
      ],
      badMoodData: [
        [
          '2018/04/03',
          '08:15',
          -3.3,
          'BAD',
          'audio',
        ],
        [
          '2018/04/03',
          '19:15',
          -5.3,
          'BAD',
          'audio',
        ],
        [
          '2018/04/04',
          '12:16',
          -6.5,
          'BAD',
          'audio',
        ],
        [
          '2018/04/08',
          '13:30',
          -3.4,
          'BAD',
          'audio',
        ],
        [
          '2018/04/08',
          '20:50',
          -4.3,
          'BAD',
          'audio',
        ],
        [
          '2018/04/09',
          '10:21',
          -7.0,
          'BAD',
          'audio',
        ],
        [
          '2018/04/10',
          '01:20',
          -5.1,
          'BAD',
          'audio',
        ],
        [
          '2018/04/12',
          '21:56',
          -3.7,
          'BAD',
          'audio',
        ],
        [
          '2018/04/15',
          '15:23',
          -2.9,
          'BAD',
          'audio',
        ],
        [
          '2018/04/15',
          '17:40',
          -8.3,
          'BAD',
          'audio',
        ],
      ],
    };
  }

  render() {
    const data = [{
      name: 'Tanner Linsley',
      age: 26,
    },
    {
      name: 'Tanner Linsley',
      age: 26,
    },
    {
      name: 'Tanner Linsley',
      age: 26,
    }];

    const columns = [{
      Header: 'Name',
      accessor: 'name', // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
    }];


    return (
      <div>
        <ReactTable data={data} columns={columns} />
      </div>
    );
  }
}

export default DataTablePage;
