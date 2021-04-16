import React, { Component } from 'react';

class Content extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <React.Fragment>
                <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                    <th >No.</th>
                    <th >Author</th>
                    <th >Category</th>
                    <th >Popularity</th>
                    <th >Quote</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map((quot, index) => {
                            return(
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{quot["Author"]}</td>
                                    <td>{quot["Category"]}</td>
                                    <td>{quot["Popularity"]}</td>
                                    <td>{quot["Quote"]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </React.Fragment>
        );
    }
}

export default Content;