import React from 'react';
import {ListGroup, ListGroupItem, PageHeader, Panel} from 'react-bootstrap';
import {CartesianGrid, Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import Insight1 from "./insight1";
import Insight2 from "./insight2";
import Insight3 from "./insight3";
import Insight4 from "./insight4";
import Recommendation2 from "./recommendation2";
import Recommendation1 from "./recommendation1";
import Recommendation3 from "./recommendation3";

const title = 'Insights and Recommendations';

const insightData1 = [
  {date: 'January 2018', mood: 7},
  {date: 'February 2018', mood: 8},
  {date: 'March 2018', mood: 5},
  {date: 'April 2018', mood: 5},
];

const insightData2 = [
  {date: 'January 2018', mood: 7},
  {date: 'February 2018', mood: 8},
  {date: 'March 2018', mood: 5},
  {date: 'April 2018', mood: 5},
];

class RecommendationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapseRecommendation: [true, true, true],
      collapseInsight: [true, true, true, true],
    };
  }

  onClickInsight = (i) => {
    let insight = this.state.collapseInsight;
    insight[i] = !insight[i];
    this.setState({collapseInsight: insight});
  };

  onClickRecommendation = (i) => {
    let recommendation = this.state.collapseRecommendation;
    recommendation[i] = !recommendation[i];
    this.setState({collapseRecommendation: recommendation});
  };

  render() {
    document.title = title;

    return (<div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Insights and Recommendations</PageHeader>
            <p>Based on your mood data we've found a number of data insights and proposed recommendations.</p>
          </div>
        </div>

        <div>
          <h1>Insights</h1>
          <p>Below are a list of insights we've found while examining your mood and tracker data, click on each insight
            to see a visualization for that insight</p>
          <ListGroup>
            <ListGroupItem
              header="Mood has been trending downwards over the last few months" href="#"
              bsStyle="warning" onClick={() => this.onClickInsight(0)}
            >
              We've noticed that your average mood for the months of March and April have been decreasing, if you feel
              you have been feeling down as of late, please refer to our recommendations below for tips on how to
              improve your mood.
            </ListGroupItem>

            {this.state.collapseInsight[0] ? <div></div> : <Insight1/>}

            <ListGroupItem header="Mood is Lower on Weekdays than on Weekends" onClick={() => this.onClickInsight(1)}
                           href="#">We've detected a recurring trend
              of a
              negative mood present on weekdays and followed by an elevated mood change during weekends. This is pattern
              was detected amongst 76% of our North American participants and is nothing to be alarmed
              about.</ListGroupItem>

            {this.state.collapseInsight[1] ? <div></div> : <Insight2/>}

            <ListGroupItem header="Mood and Sleep Data are Slightly Correlated" onClick={() => this.onClickInsight(2)}
                           href="#">
              We've detected a slight correlation (R<sup>2</sup> = 0.32) between your mood data and your sleep data from
              your sleep
              tracker.
            </ListGroupItem>

            {this.state.collapseInsight[2] ? <div></div> : <Insight3/>}

            <ListGroupItem header="Mood and Fitness Data are Strongly Correlated" onClick={() => this.onClickInsight(3)}
                           href="#">
              We've detected a strong correlation (R<sup>2</sup> = 0.78) between your mood data and your fitness data
              from your fitness tracker.
            </ListGroupItem>

            {this.state.collapseInsight[3] ? <div></div> : <Insight4/>}

          </ListGroup>
        </div>

        <div>
          <h1>Recommendations</h1>
          <p>Below are a list of recommendations based on suggestions that have improved other users that fit your mood
            profile. Click on each recommendation to see how each recommendation could potentially improve your
            mood.</p>
          <ListGroup>

            <ListGroupItem header="Try getting eight hours of sleep a day on Sundays" href="#" onClick={() => this.onClickRecommendation(1)}>
              We've noticed your mood dips on Mondays and that you have on average 6.76 hours of sleep the night before.
              Try sleeping earlier Sunday night to improve your mood for the week.
            </ListGroupItem>

            {this.state.collapseRecommendation[1] ? <div></div> : <Recommendation2 />}

            <ListGroupItem header="Try walking during lunch time on the Weekdays" href="#" onClick={() => this.onClickRecommendation(2)}>We've noticed that your mood
              is lower on the weekdays than on the weekends, we've also noticed your steps are less on the weekdays than
              on the weekend. Most people have a difficult time exercising during the weekdays, try walking around for
              half an hour during lunch as this may improve your mood.</ListGroupItem>
          </ListGroup>

          {this.state.collapseRecommendation[2] ? <div></div> : <Recommendation3 />}
        </div>
      </div>
    </div>);
  }
}

export default RecommendationPage;
