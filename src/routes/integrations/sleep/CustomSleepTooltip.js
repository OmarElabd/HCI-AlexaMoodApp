import React, {PropTypes} from 'react';
import moment from "moment";

// propTypes: {
//   type: PropTypes.string,
//     payload: PropTypes.array,
//     label: PropTypes.string,
// },

const popupStyle = {
  margin: '0px',
  padding: '10px',
  backgroundColor: 'rgb(255, 255, 255)',
  border: '1px solid rgb(204, 204, 204)',
  whiteSpace: 'nowrap',
};

class CustomSleepTooltip extends React.Component {
  constructor(props) {
    super(props);
  }

  timeFormatter = (value) => {
    if (this.props.filter === "daily") {
      return "Time: " + moment(value).format('hh:mm a');
    } else if (this.props.filter === "weekly" || this.props.filter === "monthly") {
      return "Date: " + moment(value).format('MM-DD-YYYY');
    } else {
      return "Date: " + value;
    }
  };

  labelFormatter = (value) => {
    if(this.props.filter === "yearly") {
      return "Avg. Hours of Sleep: " + value;
    } else {
      return "Hours of Sleep: " + value;
    }
  };

  render() {
    const {active} = this.props;

    if (active) {
      const {payload, label} = this.props;
      return (
        <div style={popupStyle}>
          <p className="recharts-tooltip-label">{this.timeFormatter(label)}</p>
          <p className="recharts-tooltip-label">{`Mood Scale: ${payload[0].value}`}</p>
          <p className="recharts-tooltip-label">{this.labelFormatter(payload[1].value)}</p>
        </div>
      );
    }

    return (<div></div>);
  }
}

export default CustomSleepTooltip;
