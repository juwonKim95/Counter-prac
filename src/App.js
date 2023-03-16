import { Component, useReducer, useRef, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Inputs from './components/Inputs';
import UserLists from './components/UserLists';

function App() {
  function reducer(state, action) {
    switch(action.type){
      case 'adduser':
        return [
          ...state,
          action.user
        ];
      default:
        return state;
    }
  }
  const [users, dispatch] = useReducer(reducer,[
    {
      id:1,
      username: "김그린"
    },
    {
      id:2,
      username: "김블루"
    },
    {
      id:3,
      username: "김노랑"
    }
  ])
  // const lists = users.map(user=><li>{user.username}</li>);
  // //lists --> [<li>김그린</li>,<li>김블루</li>,<li>김노랑</li>]
  // const divs = [<div>하하하하</div>,<div>하하하하</div>,<div>하하하하</div>]


  //원래있던 배열에 추가
  //배열은 변수?상태?
  const addUser = (user) => {
    dispatch({
      type:"adduser",
      abc: user
  })
    console.log(users);
  }
  return (
    <div className='App'>
      <Inputs add={addUser}/>
      <UserLists aaa={users} bbb="green"/>
      {/* {divs} */}
      <Counter />
    </div>
  )
}

export default App;