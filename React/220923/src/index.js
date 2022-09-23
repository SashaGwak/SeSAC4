import React from 'react';
import ReactDOM from 'react-dom/client';
import Classpractice from './Classpractice';
import FunctionPractice from './FunctionPractice';
import StateClass from './StateClass';
import StateFunction from './StateFunction';
import Event from './Event';
import EventClass from './EventClass';
import ManyInput from './ManyInput';
import EventEdu from './EventEdu';
import EventEdu2 from './EventEdu2';
import Handler_ex from './Handler_ex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Handler_ex />
    <EventEdu2 />
    <EventEdu />
    <ManyInput />
    <EventClass />
    <Event />
    <FunctionPractice />
    <Classpractice />
    <StateClass />
    <StateFunction />
  </>
);


