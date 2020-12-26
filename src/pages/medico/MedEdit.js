import React from 'react';
import { SimpleForm, TextInput, Edit, TopToolbar, ListButton } from 'react-admin';

const Medname = ({ record }) => {
    return (
        <span>Medico {record ? `${record.name}` : ''}</span>
    );
};


const MedActions = ({ basePath }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

export const MedEdit = props => (
    <Edit title={<Medname />} actions={<MedActions />} {...props}>
        <SimpleForm>
            <TextInput disabled label="Registro" source="id" />
            <TextInput label="Nombre Medico" source="name" />
            <TextInput label="Correo" source="email" />
            <TextInput label="Telefono" source="phone" />
            <TextInput label="Ocupacin" source="Title" />
            <TextInput label="Edad" source="Edad" />
        </SimpleForm>
    </Edit>
);

