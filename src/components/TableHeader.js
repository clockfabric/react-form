import React, { Component } from 'react';

class TableHeader extends Component {
    render() { 
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th></th>
                </tr>
            </thead>
        );
    }
}
 
export default TableHeader;