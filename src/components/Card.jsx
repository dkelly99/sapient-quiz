import styled from 'styled-components';
import * as React from 'react';
import PropTypes from "prop-types";

const headerHeight = 80;
const headerOffset = 0;
const bodyOffset = 40;
const boxShadow = '0 10px 20px 0 rgba(0,0,0,0.20)';

const HeaderIDContainer = styled.div`
    background: #0030FF;
    width: 80px;
    height: ${headerHeight}px;
    line-height: ${headerHeight}px;
`;

const HeaderID = styled.div`
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0;
`;

const HeaderTextContainer = styled.div`
    flex: 1;
    background: #FFFFFF;
    height: ${headerHeight}px;
    box-shadow: ${boxShadow};
    margin-right: ${bodyOffset}px;
    padding: 24px 19px 24px 21px;
`;
const HeaderText = styled.div`
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    text-align: left;
`;

const CardHeader = styled.div`
    position: relative;
    left: ${headerOffset}px;
    top: ${headerOffset}px
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
`;

const CardBody = styled.div`
    position: relative;
    left: ${bodyOffset}px;
    top: -${bodyOffset}px;
    margin-right: ${bodyOffset}px;
    box-shadow: ${boxShadow};
    padding: ${bodyOffset + 24}px 16px 32px 64px;
    overflow: auto;
    text-align: left;
    background: #FFFFFF;
`;

export const Card = (props) => <div style={{margin: 16}}>
    {(props.order || props.title) &&
    <CardHeader>
        <HeaderIDContainer><HeaderID>{props.order}</HeaderID></HeaderIDContainer>
        <HeaderTextContainer><HeaderText>{props.title}</HeaderText></HeaderTextContainer>
    </CardHeader>}
    <CardBody>
        {props.children}
    </CardBody>
</div>;

Card.propTypes = {
    children: PropTypes.element.isRequired,
    order: PropTypes.number,
    title: PropTypes.string
};
