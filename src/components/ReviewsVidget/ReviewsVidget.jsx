import React from "react";
import Controls from "./Controls";
import Statistics from "./Statistics";
import { Container } from './ReviewsVidget.styled.jsx'

class ReviewsVidget extends React.Component {

    static defaultProps = {
        initialValueFeedbackGood: 0,
        initialValueFeedbackNeutral: 0,
        initialValueFeedbackBad: 0,
    }

    state = {
        good: this.props.initialValueFeedbackGood,
        neutral: this.props.initialValueFeedbackNeutral,
        bad: this.props.initialValueFeedbackBad,
    }

    controlGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }))
    }

    controlNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }))
    }

    controlBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }))
    }

    render() {
        return (
            <Container className="Container">
                <Controls
                    title="Please leave feadback"
                    onControlGood={this.controlGood}
                    onControlNeutural={this.controlNeutral}
                    onControlBad={this.controlBad}
                />

                <Statistics
                    title="Statistics"
                    statisticsGood={this.state.good}
                    statisticsNeutral={this.state.neutral}
                    statisticsBad={this.state.bad}
                />

            </Container>

        )
    }
}

export default ReviewsVidget;