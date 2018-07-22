import * as React from 'react';
import PropTypes from 'prop-types';

import { Button, Input, Icon, Table } from 'antd';
import { Card } from './Card';
import { Cell } from './Cell';

const columns = [
    {title: 'Name', dataIndex: 'name', key: 'name' },
    {title: 'Score', dataIndex: 'score', key: 'score'}];

const mockScoreBoardData = [
    {key: '1', name: 'John Brown', score: 32},
    {key: '2',name: 'Jim Green', score: 42},
    {key: '3',name: 'Joe Black',score: 32}];

export const ScoreBoard = (props) => <Cell><Card><div>
    <Cell>
        <Input
            defaultValue={props.name}
            onChange={props.handleNameChange}
            placeholder='Please enter your name...'
            addonBefore={<Icon type='user' />} />
        <Cell><Button
            disabled={!props.name || props.name === ''}
            onClick={props.fetchQuestions}
            loading={props.isFetching}>
            {!props.isFetching ? 'Start your quiz!' : 'Getting Questions'}
        </Button></Cell>
    </Cell>
    <Cell>
        <Table
            pagination={false}
            columns={columns}
            dataSource={mockScoreBoardData} />
    </Cell>
</div></Card></Cell>;

ScoreBoard.propTypes = {
    name: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    fetchQuestions: PropTypes.func.isRequired,
    handleNameChange: PropTypes.func.isRequired
};