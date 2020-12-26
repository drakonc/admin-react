import React from 'react';
import { Admin, Resource } from 'react-admin';

import { Dashboard } from './pages/dashboard/Dashboard';
import { RecList, RecCreate, RecEdit } from './pages/recetas/'
import { PacList, PacCreate, PacEdit } from './pages/pacientes/';
import { MedList, MedCreate, MedEdit } from './pages/medico/'
import { HabiList, HabiCreate } from './pages/habitaciones/';
import { MediList, MediCreate, MediEdit } from './pages/medicamentos/'
import { InternoList, InternoCreate, InternoEdit } from './pages/internos/';

import jsonServerProvider from 'ra-data-json-server';
import HabiIcon from '@material-ui/icons/AddLocation';
import InterIcon from '@material-ui/icons/Hotel';
import PaciIcon from '@material-ui/icons/PersonPin';
import DashIcon from '@material-ui/icons/History';
import UserIcon from '@material-ui/icons/CreateNewFolder';
import PostIcon from '@material-ui/icons/Book';
import MediIcon from '@material-ui/icons/Poll';
import authProvider from './auth/authProvider';

const dataProvider = jsonServerProvider('http://localhost:3000');

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} icon={DashIcon} >
    <Resource name="Recetas" list={RecList} edit={RecEdit} create={RecCreate} icon={PostIcon} />
    <Resource name="pacientes" list={PacList} edit={PacEdit} create={PacCreate} icon={PaciIcon} />
    <Resource name="medicos" list={MedList} edit={MedEdit} create={MedCreate} icon={UserIcon} />
    <Resource name="habitaciones" list={HabiList} create={HabiCreate} icon={HabiIcon} />
    <Resource name="medicamentos" list={MediList} edit={MediEdit} create={MediCreate} icon={MediIcon} />
    <Resource name="internos" list={InternoList} edit={InternoEdit} create={InternoCreate} icon={InterIcon} />
  </Admin>

);

export default App;
