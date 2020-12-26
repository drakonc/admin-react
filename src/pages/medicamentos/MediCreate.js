import React from 'react';
import { Create, SimpleForm, TextInput, TopToolbar, ListButton } from 'react-admin';

const MedActions = ({ basePath }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

export const MediCreate = props => (
    <Create {...props} actions={<MedActions />}>
        <SimpleForm>
            <TextInput label="Medicamento" source="medicamento" />
            <TextInput label="Caducidad" source="date" />
            <TextInput label="Descripcion" source="body" />
            <TextInput label="Cantidad" source="cantidad" />
        </SimpleForm>
    </Create>
);