import React from 'react';
import { Create, SimpleForm, TextInput, TopToolbar, ListButton } from 'react-admin';

const MedActions = ({ basePath }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

export const MedCreate = props => (
    <Create actions={<MedActions />} {...props}>
        <SimpleForm>
            <TextInput label="Nombre Medico" source="name" />
            <TextInput label="Correo" source="email" />
            <TextInput label="Telefono" source="phone" />
            <TextInput label="Ocupacin" source="Title" />
            <TextInput label="Edad" source="Edad" />
        </SimpleForm>
    </Create>
);