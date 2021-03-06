import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './Layout';

// applications
import ListApplications from './views/applications/ListApplications';
import CreateApplication from "./views/applications/CreateApplication";
import UpdateApplication from "./views/applications/UpdateApplication";
import ApplicationUsers from "./views/applications/ApplicationUsers";
import CreateApplicationUser from "./views/applications/CreateApplicationUser";
import UpdateApplicationUser from "./views/applications/UpdateApplicationUser";

// nodes
import ListNodes from './views/nodes/ListNodes';
import UpdateNode from './views/nodes/UpdateNode';
import CreateNode from "./views/nodes/CreateNode";
import ActivateNode from "./views/nodes/ActivateNode";

// channels
import ChannelLists from "./views/channels/ChannelLists";
import ChannelListDetails from "./views/channels/ChannelListDetails";
import CreateChannelList from "./views/channels/CreateChannelList";

// users
import Login from "./views/users/Login";
import CreateUser from "./views/users/CreateUser";
import ListUsers from "./views/users/ListUsers";
import UpdateUser from "./views/users/UpdateUser";
import UpdatePassword from "./views/users/UpdatePassword";

// gateways
import ListGateways from "./views/gateways/ListGateways";
import GatewayDetails from "./views/gateways/GatewayDetails";
import CreateGateway from "./views/gateways/CreateGateway";
import UpdateGateway from "./views/gateways/UpdateGateway";

// fix leaflet image source
import Leaflet from 'leaflet';
Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/'

//Overview
import Overview from './components/Overview';
import MapView from './views/maps/MapView';

// styling
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/paper/bootstrap.css';
import 'react-select/dist/react-select.css';
import 'leaflet/dist/leaflet.css';
import 'font-awesome/css/font-awesome.css';
import 'rc-slider/assets/index.css';
import './index.css';



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Overview}></IndexRoute>
      <Route path="applications" component={ListApplications}></Route>
      <Route path="applications/create" component={CreateApplication}></Route>
      <Route path="applications/:applicationID/edit" component={UpdateApplication}></Route>
      <Route path="applications/:applicationID/nodes/create" component={CreateNode}></Route>
      <Route path="applications/:applicationID/nodes/:devEUI/edit" component={UpdateNode}></Route>
      <Route path="applications/:applicationID/nodes/:devEUI/activation" component={ActivateNode}></Route>
      <Route path="applications/:applicationID/users" component={ApplicationUsers}></Route>
      <Route path="applications/:applicationID/users/create" component={CreateApplicationUser}></Route>
      <Route path="applications/:applicationID/users/:userID/edit" component={UpdateApplicationUser}></Route>
      <Route path="applications/:applicationID" component={ListNodes}></Route>
      <Route path="channels" component={ChannelLists}></Route>
      <Route path="channels/create" component={CreateChannelList}></Route>
      <Route path="channels/:id" component={ChannelListDetails}></Route>
      <Route path="login" component={Login}></Route>
      <Route path="users/create" component={CreateUser}></Route>
      <Route path="users/:userID/edit" component={UpdateUser}></Route>
      <Route path="users/:userID/password" component={UpdatePassword}></Route>
      <Route path="users" component={ListUsers}></Route>
      <Route path="gateways" component={ListGateways}></Route>
      <Route path="gateways/create" component={CreateGateway}></Route>
      <Route path="gateways/:mac/edit" component={UpdateGateway}></Route>
      <Route path="gateways/:mac" component={GatewayDetails}></Route>
      <Route path="maps/view" component={MapView}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
