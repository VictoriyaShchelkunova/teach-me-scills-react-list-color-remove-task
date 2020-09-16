import React from 'react';
import { connect } from 'react-redux';
import  Item  from './Item'


const List = ({ list }) => {
    return (
        <ul>
            {list.map(({ id, title, color }) => <Item key={id} id={id} title={title} color={color}/>)}
        </ul>
    )

}

function mapStateToProps(state) {
    return {
        list: state.list,
    }
}



export default connect(mapStateToProps)(List);




