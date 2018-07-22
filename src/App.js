import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Icon, Layout, Col, Pagination } from 'antd';

import { Question } from './components/Question';
import {Card} from './components/Card';
import {fetchQuestions, submitAnswers, updateAnswer} from './store/actions/questions';
import './App.css';

const {Header, Content} = Layout;
const PAGE_SIZE = 5;

class App extends Component {
    constructor() {
        super();
        this.state = {
            pageNumber: 1
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(page) {
        this.setState({
            pageNumber: page
        });
    }

    render() {
        const allQuestionData = this.props.questionData;
        const qStart = (this.state.pageNumber - 1) * PAGE_SIZE;
        const pagedData = allQuestionData.slice(qStart, qStart + PAGE_SIZE);

        return (
          <Layout className="App">
              <Header className='App-header' style={{background: '#0030FF'}}>
                  <span className='App-title'>SAPIENT QUIZ_ <Icon type='question-circle-o' /></span>
              </Header>
              <Content style={{paddingTop: 64}}>
                  <Col xs={{span: 24}} lg={{span: 8, offset:8}}>
                      {!pagedData.length && <Card>
                          <Button
                              onClick={this.props.fetchQuestions}
                              loading={this.props.isFetching}>
                              Click here to begin your general knowledge quiz!</Button></Card>}

                      {pagedData.map( (question, index) =>
                          <Question
                              key={question.id}
                              handleChange={this.props.updateAnswer}
                              questionOrder={qStart + index + 1}
                              questionData={question}/>
                      )}
                      {pagedData.length > 0 && <Pagination
                          style={{padding: 8}}
                          onChange={this.handlePageChange}
                          current={this.state.pageNumber}
                          pageSize={PAGE_SIZE}
                          total={allQuestionData.length} />}
                      {pagedData.length > 0 && <Button onClick={this.props.submitAnswers}>Submit</Button>}
                  </Col>
              </Content>
          </Layout>
        );
      }
}

const mapStateToProps = (state = {}) => {
    const {questionData} = state;
    return {
        questionData: questionData.questions,
        isFetching: questionData.isFetching,
        isSubmitting: questionData.isSubmitting
    };
};

const mapDispatchToProps = {
        updateAnswer: (id, answer) => updateAnswer(id, answer),
        fetchQuestions: fetchQuestions,
        submitAnswers: submitAnswers
    };
export default connect(mapStateToProps, mapDispatchToProps)(App);
