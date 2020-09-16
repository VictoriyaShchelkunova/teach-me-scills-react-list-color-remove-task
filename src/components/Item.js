import React from 'react';
import { connect } from 'react-redux';
import { removeItemAction } from '../actions';

const Item = ({ id, title, removeItem, color }) => {
   
    return (
        <li style={{color: color}} id={id} onClick={() => setTimeout(() => removeItem(), 1000)}>{title}</li>
    )
}

function mapDispatchToProps(dispatch, { id }) {
    return {
        removeItem: () => dispatch(removeItemAction(id))
    }
}

export default connect(null, mapDispatchToProps)(Item);

