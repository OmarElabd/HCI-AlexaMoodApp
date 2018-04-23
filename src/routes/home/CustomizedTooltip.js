import React, {PropTypes} from 'react';

// propTypes: {
//   type: PropTypes.string,
//     payload: PropTypes.array,
//     label: PropTypes.string,
// },

class CustomTooltip extends React.Component {
  getIntroOfPage = (label) => {
    if (label === 'Page A') {
      return "Page A is about men's clothing";
    } else if (label === 'Page B') {
      return "Page B is about women's dress";
    } else if (label === 'Page C') {
      return "Page C is about women's bag";
    } else if (label === 'Page D') {
      return "Page D is about household goods";
    } else if (label === 'Page E') {
      return "Page E is about food";
    } else if (label === 'Page F') {
      return "Page F is about baby food";
    }
  };

  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro">{this.getIntroOfPage(label)}</p>
          <p className="desc">Anything you want can be displayed here.</p>
          <div>
            <audio ref="audio_tag" src="./static/music/foo.mp3" controls={true}/>
          </div>
        </div>
      );
    }

    return <div></div>;
  }
}

export default CustomTooltip;
