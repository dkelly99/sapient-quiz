import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Icon, Layout, Col, Pagination } from 'antd';

import { Question } from './components/Question';
import {Card} from './components/Card';
import {Cell} from './components/Cell';
import {fetchQuestions, submitAnswers, updateAnswer} from './store/actions/questions';
import './App.css';

const {Header, Content, Footer} = Layout;
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

    renderStartButton() {
        return <Cell><Card>
            <Button
                onClick={this.props.fetchQuestions}
                loading={this.props.isFetching}>
                Click here to begin your general knowledge quiz!
            </Button>
        </Card></Cell>;
    }

    renderQuestion(question, order) {
        return <Question
            className={'App-row'}
            key={question.id}
            handleChange={this.props.updateAnswer}
            questionOrder={order}
            questionData={question}/>;
    }

    renderPagination(totalNumberOfQuestions) {
        return <Pagination
            style={{padding: 8}}
            onChange={this.handlePageChange}
            current={this.state.pageNumber}
            pageSize={PAGE_SIZE}
            total={totalNumberOfQuestions} />;
    }

    renderSubmitButton() {
        return <Cell><Button onClick={this.props.submitAnswers}>Submit</Button></Cell>;
    }

    render() {
        const allQuestionData = this.props.questionData;
        const qStart = (this.state.pageNumber - 1) * PAGE_SIZE;
        const pagedData = allQuestionData.slice(qStart, qStart + PAGE_SIZE);
        const totalQuestions = allQuestionData.length;

        return (
          <Layout style={{height: '100vh'}} className="App">
              <Header className='App-header' style={{background: '#0030FF'}}>
                  <span className='App-title'>SAPIENT QUIZ_ <Icon type='question-circle-o' /></span>
              </Header>
              <Content style={{paddingTop: 80, overflow: 'auto'}}>
                  <Col xs={{span: 24}} lg={{span: 8, offset:8}}>
                      {!pagedData.length && this.renderStartButton()}

                      {pagedData.map( (question, index) => this.renderQuestion(question, qStart + index + 1) )}
                  </Col>
              </Content>
              <Footer>
                  {pagedData.length > 0 && this.renderPagination(totalQuestions)}
                  {pagedData.length > 0 && this.renderSubmitButton()}
              </Footer>
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
