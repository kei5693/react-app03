import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, NavLink, Outlet, useParams} from "react-router-dom";

function Home(){
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

var contents = [
  {id: 1, title: 'HTML', desc: 'HTML is ...'},
  {id: 2, title: 'JS', desc: 'JS is ...'},
  {id: 3, title: 'React', desc: 'React is ...'}
];

function Topics(){
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li><NavLink to="/topics/1">HTML</NavLink></li>
        <li><NavLink to="/topics/2">JS</NavLink></li>
        <li><NavLink to="/topics/3">React</NavLink></li>
      </ul>
      <Outlet />
    </div>
  )
}

function Topic(){
  var params = useParams();
  var topic_id = params.topic_id;
  var selected_topic = {
    title: 'Sorry',
    desc: 'Not Found'
  };
  console.log('params = ', params.topic_id);

  for(var i = 0; i < contents.length; i++){
    if(contents[i].id === Number(topic_id)){
      selected_topic = contents[i];
      break;
    }
  }

  console.log(selected_topic);

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.desc}
    </div>
  )
}

function Contact(){
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function Notfound(){
  return (
    <div>
      <h2>존재하지 않는 페이지입니다.</h2>
    </div>
  )
}

function App(){
  return (
    <div>
      <h1>React Router DOM Example</h1>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul> */} 
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />}>
          {/* <Route path="1" element={<h3>HTML is...</h3>} />
          <Route path="2" element={<h3>JS is...</h3>} />
          <Route path="3" element={<h3>React is...</h3>} />
          <Route path="*" element={<Notfound />} /> */}
          <Route path=":topic_id" element={<Topic />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
