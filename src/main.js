import React, {Component} from 'react';
import HeadTable from './components/head-table';
import Table from './components/value-table';


export default class Main extends Component {

    render () {
        return (
            <div className="container">
                <table cellSpacing="0">
                    <thead>
                        <HeadTable />
                    </thead>
                    <Table />
                </table>
            </div>
        )
    }
}
