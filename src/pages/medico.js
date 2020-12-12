import React from 'react';
import { Filter, Create, SimpleForm, TextInput, Edit, List, Datagrid, TextField, EditButton, EmailField } from 'react-admin';

const Medname = ({ record }) => {
    return (
        <span>Medico {record ? `${record.name}` : ''}</span>
    );
};

const MedFilter = props => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
    </Filter>
);

export const MedList = props => (
    <List filters={<MedFilter />} {...props}>
        <Datagrid>
            <TextField label="Registro" source="id" />
            <TextField label="Nombre Medico" source="name" />
            <EmailField label="Correo" source="email" />
            <TextField sortable={false} label="Telefono" source="phone" />
            <TextField label="Ocupacin" source="Title" />
            <TextField label="Edad" source="Edad" />
            <EditButton />
        </Datagrid>
    </List>
);

export const MedEdit = props => (
    <Edit title={<Medname />} {...props}>
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

export const MedCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Nombre Medico" source="name" />
            <TextInput label="Correo" source="email" />
            <TextInput label="Telefono" source="phone" />
            <TextInput label="Ocupacin" source="Title" />
            <TextInput label="Edad" source="Edad" />
        </SimpleForm>
    </Create>
);
