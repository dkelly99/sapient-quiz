import React, { Component } from 'react';
import { Button, Icon, Layout, Col, Pagination, Modal } from 'antd';
import { Question } from './components/Question';
import './App.css';

const {Header, Content, Footer} = Layout;

const PAGE_SIZE = 5;

class App extends Component {
    constructor() {
        super();
        this.state = {
            pageNumber: 1
        };
        this.updateAnswer = this.updateAnswer.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateAnswer(questionId, questionValue) {
        console.log(questionId, questionValue);
    }

    handlePageChange(page) {
        this.setState({
            pageNumber: page
        });
    }

    handleSubmit() {
        const totalQuestions = 15;
        const questionsAnswered = 3;
        if (questionsAnswered !== totalQuestions) {
            const modal = Modal.warning({
                title: 'You must answer all questions',
                content: `You have answered ${questionsAnswered} of ${totalQuestions} questions.
                    Please answer all questions before submitting your answers.`,
            });
            setTimeout(() => modal.destroy(), 3000);
        }
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
                      {pagedData.map( (question, index) =>
                          <Question
                              key={question.id}
                              handleChange={this.updateAnswer}
                              questionOrder={qStart + index + 1}
                              questionData={question}/>
                      )}
                      <Pagination
                          style={{padding: 8}}
                          onChange={this.handlePageChange}
                          current={this.state.pageNumber}
                          pageSize={PAGE_SIZE}
                          total={allQuestionData.length} />
                      <Button onClick={this.handleSubmit}>Submit</Button>
                  </Col>
              </Content>
          </Layout>
        );
      }
}

export default App;
