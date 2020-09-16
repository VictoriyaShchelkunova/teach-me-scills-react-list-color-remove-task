import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { saveListAction, changeColorAction } from './actions';
import List from './components/List';


function App({ saveList, changeColor }) {
  useEffect( () => {
    (async function getList() {
      debugger
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
      const list = await response.json();
      saveList(list);
    })()
  }, [saveList]);
    
  return (
    <section>
      <input type="text" onChange={({target}) => changeColor(target.value)}/>
      <List/>
    </section>
    
  );
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveList: (list) => dispatch(saveListAction(list)),
    changeColor: (value) => dispatch(changeColorAction(value)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
