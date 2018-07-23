import * as React from 'react';
import PropTypes from 'prop-types';

import { Alert, Button, Input, Icon, Table } from 'antd';
import { Card } from './Card';
import { Cell } from './Cell';

const columns = [
    {title: 'Name', dataIndex: 'name', key: 'name' },
    {title: 'Score', dataIndex: 'score', key: 'score'}];

export const ScoreBoard = (props) => <Cell><Card><div>
    <Cell>
        <Input
            defaultValue={props.name}
            onChange={props.handleNameChange}
            placeholder='Please enter your name...'
            addonBefore={<Icon type='user' />} />
        <Cell><Button
            disabled={!props.name || props.name === ''}
            onClick={props.getQuestions}
            loading={props.isFetching}>
            {!props.isFetching ? 'Start your quiz!' : 'Getting Questions'}
        </Button></Cell>
    </Cell>
    <Cell>
        {props.scoreBoardData === null ?
            <Alert
                message='There was a problem accessing the questionServerAPI'
                description={`
                Please check that the questionServerAPI is running.
                You can launch it with the following command:
                    "npm run startQuestionServer"`}
                type='warning'
            /> :
            <Table
                pagination={false}
                columns={columns}
                dataSource={
                    props.scoreBoardData.map( (item, index) => {
                        item.key = index;
                        return item;
                    })} />
        }
    </Cell>
</div></Card></Cell>;

ScoreBoard.propTypes = {
    name: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    getQuestions: PropTypes.func.isRequired,
    handleNameChange: PropTypes.func.isRequired,
    scoreBoardData: PropTypes.any.isRequired
};