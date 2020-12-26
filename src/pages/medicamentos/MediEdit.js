import React from 'react';
import { SimpleForm, TextInput, Edit, TextField, TopToolbar, ListButton } from 'react-admin';

const Mediname = ({ record }) => {
    return (
        <span>Medicamento {record ? `${record.medicamento}` : ''}</span>
    );
};

const MedActions = ({ basePath }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);


export const MediEdit = props => (
    <Edit title={<Mediname />} actions={<MedActions />} {...props}>
        <SimpleForm>
            <TextField disable label="Registro" source="id" />
            <TextInput label="Medicamento" source="medicamento" />
            <TextInput label="Caducidad" source="date" />
            <TextInput label="Descripcion" source="body" />
            <TextInput label="Cantidad" source="cantidad" />
        </SimpleForm>
    </Edit>
);


