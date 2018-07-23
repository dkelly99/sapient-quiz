import React from 'react';
import { Modal } from 'antd';

export const ResultPopup = (props) => {
    const {result, onClose} = props;
    const name = result ? result.name : '';
    const score = result ? result.score : 0;

    return <Modal title='Your Results'
                  closable={false}
                  visible={result !== null}
                  onOk={onClose}
                  onCancel={onClose}>
        <p>
            <h1>{`Well done ${name || ''}!`}</h1>
            <h2>{`Your score is ${score}`}</h2>
        </p>
    </Modal>
};
