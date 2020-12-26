import React from 'react';
import { Filter, TextInput, List, Datagrid, TextField, EditButton } from 'react-admin';

const PacFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
        <TextInput label="Genero" source="Sexo" />
        <TextInput label="Edad" source="Edad" />
    </Filter>
);


export const PacList = (props) => (
    <List title="Registro General de Pacientes" filters={<PacFilter />} {...props}>
        <Datagrid>
            <TextField label="Registro" source="id" />
            <TextField label="Nombre" source="name" />
            <TextField label="Edad" source="Edad" />
            <TextField label="Genero" source="Sexo" />
            <TextField label="Asunto" source="Asunto" />
            <EditButton />
        </Datagrid>
    </List>
);