import React from 'react';
import { Create, SimpleForm, TextInput, TopToolbar, ListButton } from 'react-admin';


const HabiTitle = ({ record }) => {
    return (
        <span>Habitacion {record.id ? `${record.Habitacion}-${record.Pizo}` : ''}</span>
    );
};

const HabiActions = ({ basePath }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);


export const HabiCreate = props => (
    <Create  {...props} actions={<HabiActions />} title={<HabiTitle />}>
        <SimpleForm>
            <TextInput source="Habitacion" />
            <TextInput source="Pizo" />
        </SimpleForm>
    </Create >
);