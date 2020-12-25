import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import MainHome from './MainHome/index';
import ListEmployee from './Employee/ListEmployee';
import EditEmployee from './Employee/EditEmployee';
import AddEmployee from './Employee/addEmployee';
import AttendancesAdd from './Attendances/AttendancesAdd'
import AttendancesEdit from './Attendances/AttendancesEdit'
import AttendancesHistory from './Attendances/AttendancesHistory';
import AuthorCompoent from './Common/AuthorComponent';
import Login from './User/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function RouterApp (){
    return(
        <div>
            <Router>
                < Route path="/" exact component={ MainHome} />
                <Route path="/employee" exact component={ ListEmployee} />
                <Route path="/employee/edit/:id" exact component={EditEmployee} />
                <Route path="/employee/add" exact component={AddEmployee} />
                <Route path="/attendances/add" exact component={AttendancesAdd} />
                <Route path="/attendances/edit" exact component={AttendancesEdit} />
                <Route path="/attendances/history" exact component={AttendancesHistory} />
                <Route path="/login" exact component={Login} />
            </Router>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
        
    )
}