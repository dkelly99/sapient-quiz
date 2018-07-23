import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Icon, Layout, Col, Pagination } from 'antd';

import { Question } from './components/Question';
import { ResultPopup} from './components/ResultPopup';
import {getQuestions, submitAnswers, updateAnswer, updateName, updateScoreboard} from './store/actions/questions';
import './App.css';
import {ScoreBoard} from "./components/ScoreBoard";

const {Content, Footer, Header} = Layout;
const PAGE_SIZE = 5;

class App extends Component {
    constructor() {
        super();
        this.state = {
            pageNumber: 1
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handleNameChange(evt) {
        this.props.updateName(evt.target.value);
    }

    handlePageChange(page) {
        this.setState({
            pageNumber: page
        });
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

    renderSubmitButton(isReadyToSubmit) {
        const {submitAnswers, isSubmitting} = this.props;
        return <Button
            onClick={submitAnswers}
            loading={isSubmitting}
            type={isReadyToSubmit ? 'primary' : 'default'}>

            {isSubmitting ? 'Waiting for results' : 'Submit'}

        </Button>;
    }

    render() {
        const {questionData, name, isFetching, scoreBoardData, getQuestions} = this.props;
        const allQuestionData = questionData;
        const qStart = (this.state.pageNumber - 1) * PAGE_SIZE;
        const pagedData = allQuestionData.slice(qStart, qStart + PAGE_SIZE);
        const totalQuestions = allQuestionData.length;
        const questionsAnswered = allQuestionData.filter( (question) => !!question.answer ).length;
        const isReadyToSubmit = totalQuestions === questionsAnswered;

        return (
          <Layout style={{height: '100vh'}} className="App">
              <Header className='App-header' style={{background: '#0030FF'}}>
                  <span className='App-title'>SAPIENT QUIZ_ <Icon type='question-circle-o' /></span>
                  <span style={{float: 'right'}}><Icon type='user' /> {this.props.name}</span>
              </Header>
              <Content style={{paddingTop: 80, overflow: 'auto'}}>
                  <Col xs={{span: 24}} lg={{span: 8, offset:8}}>
                      {!pagedData.length && <ScoreBoard
                          scoreBoardData={scoreBoardData}
                          name={name}
                          isFetching={isFetching}
                          getQuestions={getQuestions}
                          handleNameChange={this.handleNameChange}/>}

                      {pagedData.map( (question, index) => this.renderQuestion(question, qStart + index + 1) )}
                  </Col>
                  {this.props.result !== null &&
                    <ResultPopup result={this.props.result} onClose={this.props.updateScoreboard}/>}
              </Content>
              <Footer>
                  {pagedData.length > 0 && this.renderPagination(totalQuestions)}
                  {pagedData.length > 0 && this.renderSubmitButton(isReadyToSubmit)}
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
        isSubmitting: questionData.isSubmitting,
        name: questionData.name,
        scoreBoardData: questionData.scoreboard,
        result: questionData.result
    };
};

const mapDispatchToProps = {
        updateAnswer: (id, answer) => updateAnswer(id, answer),
        updateName: updateName,
        getQuestions: getQuestions,
        submitAnswers: submitAnswers,
        updateScoreboard: updateScoreboard
    };
export default connect(mapStateToProps, mapDispatchToProps)(App);
