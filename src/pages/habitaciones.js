import React from 'react';
import { Filter, Create, SimpleForm, TextInput, Edit, List, Datagrid, TextField, TopToolbar, ListButton } from 'react-admin';

const HabiTitle = ({ record }) => {
    return (
        <span>Habitacion {record.id ? `${record.Habitacion}-${record.Pizo}` : ''}</span>
    );
};

const HabiActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

const HabiFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
    </Filter>
);
export const HabiList = props => (
    <List filters={<HabiFilter />} {...props}>
        <Datagrid>
            <TextField label="Registro" source="id" />
            <TextField source="Habitacion" />
            <TextField source="Pizo" />
        </Datagrid>

    </List>
);

export const HabiEdit = props => (
    <Edit title={<HabiTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled label="Registro" source="id" />
            <TextInput disabled source="Habitacion" />
            <TextInput disabled source="Pizo" />
        </SimpleForm>
    </Edit>
);

export const HabiCreate = props => (
    <Create  {...props} actions={<HabiActions />} title={<HabiTitle />}>
        <SimpleForm>
            <TextInput source="Habitacion" />
            <TextInput source="Pizo" />
        </SimpleForm>
    </Create >
);
