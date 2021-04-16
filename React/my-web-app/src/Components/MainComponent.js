import React, { Component } from 'react';
import Content from './ContentComponent'
import axios from 'axios';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            QuotesData : []
        }
    }
    handleLoadQuotes = ()=>{
        axios.post("http://127.0.0.1:3001/loadQuotes")
        .then(res => {
            alert(res.data.dataLength+" records has been loaded into the Database")
        })
    }
    handleShowQuotes=()=>{
        axios.post("http://127.0.0.1:3001/showQuotes")
        .then(res => {
            this.setState({
                QuotesData : res.data.quotes
            })
        })
    }
    render(){
        return(
            <React.Fragment>
                <button type='button' className="loadBtn" onClick={this.handleLoadQuotes}>Load Quotes to DB</button>
                <button type='button' className="showBtn" onClick={this.handleShowQuotes}>Show Quotes</button>

                {this.state.QuotesData.length == 0? <div></div> : <Content data={this.state.QuotesData} />}
                
            </React.Fragment>
        );
    }
}

export default Main;