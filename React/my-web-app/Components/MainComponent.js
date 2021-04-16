import React, { Component } from 'react';
import Content from './ContentComponent.js';

class Main extends Component{
    constructor(props){
        this.state = {
            QuotesData : []
        }
    }

    render(){
        return(
            <React.Fragment>
                <button type='button' className="loadBtn">Load Quotes to DB</button>
                <button type='button' className="showBtn">Show Quotes</button>


                { this.state.data.length == 0? <div></div> : <Content data={this.state.QuotesData}  />}

            </React.Fragment>
        );
    }
}

export default Main;