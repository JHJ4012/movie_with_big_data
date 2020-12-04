import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

class Board_comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }

    componentDidUpdate(previousProps, previousState){
        if (previousProps.data !== this.props.data) {
            this.setState({
                data : this.props.data
            })
        }
    }

    render() {
        return (
            <div className = "table_div">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>내용</TableCell>
                            <TableCell>작성자</TableCell>
                            <TableCell>날짜</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {   
                                this.state.data.map(c => {
                                    return(
                                        <TableRow className = "board_item" key = {c.id}>
                                            <TableCell>{c.content !== null ? c.content : ''}</TableCell>
                                            <TableCell>{c.user_name !== null ? c.user_name : ''}</TableCell>
                                            <TableCell>{c.created_date !== null ? c.created_date : ''}</TableCell>
                                        </TableRow>
                                    );
                                })
                            }
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default Board_comment