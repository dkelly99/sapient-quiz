import * as React from 'react';
import PropTypes from 'prop-types';

import { Radio } from 'antd';
import { Card } from './Card';

export const Question = (props) => {
    const {id, title, answers, answer} = props.questionData;
    const {handleChange, questionOrder} = props;
    const radioStyle = {display: 'block', lineHeight: '30px',  color: '#333333', fontSize: 16, letterSpacing: 0};

    return <Card order={questionOrder} title={title} style={{textAlign: 'left'}}>
        <Radio.Group
            onChange={(e) => {handleChange(id, e.target.value)}}
            value={answer}
        >
            {answers.map( (answer) =>
                <Radio key={answer.value} style={radioStyle} value={answer.value}>{answer.text}</Radio>
            )}
        </Radio.Group>
    </Card>;
};

Question.propTypes = {
    questionOrder: PropTypes.number.isRequired,
    questionData: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        answer: PropTypes.string,
        answers: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })).isRequired
    }).isRequired,
    handleChange: PropTypes.func.isRequired
};
