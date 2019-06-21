import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
    render() { 
        const {characterData} = this.props; 
        return (
            <table className="table is-bordered is-striped is-hoverable is-fullwidth">
                <TableHeader/>
                <TableBody characterData={characterData} removeCharacterMethod={this.props.removeCharacterMethod}/>                
            </table>
        );
    }
}
 
export default Table;