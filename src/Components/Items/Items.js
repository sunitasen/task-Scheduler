import React,{Component} from 'react';
import './Items.css';

class Items extends Component{

    constructor(props){
        super(props);
        this.state = {
            junk: '',
            users: []
        }
    }

    componentDidMount(){
        let self = this;
        fetch('http://localhost:3001/show', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400){
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data);
            self.setState({users : data});
        }).catch(err => {
        console.log('caught it!',err);
        })
    }

    render(){
        return(
            <div className="listt tc">
                <table className="table table-hover">
                    <thead>
                        <tr className="rowhead">
                            <th className="bla f3">Topic<br/></th>
                            <th className="bla f3">Type</th>
                            <th className="bla f3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(todos =>
                        <tr className="row" >
                        <td className="bla f3">{todos.topic}<br/> </td>
                        <td className="bla f3">{todos.type} <br/> </td>
                        {(todos.done === 0)
                        ?<td className="bla f3">Due<br/> </td>
                        : <td className="bla f3">Done<br/> </td>
                        }
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Items;
