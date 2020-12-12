import React from 'react';
import { Filter, Create, SimpleForm, TextInput, Edit, List, Datagrid, TextField, EditButton } from 'react-admin';

const Mediname = ({ record }) => {
    return (
        <span>Medicamento {record ? `${record.medicamento}` : ''}</span>
    );
};

const MediFilter = props => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
    </Filter>
);
export const MediList = props => (
    <List filters={<MediFilter />} {...props}>
        <Datagrid>
            <TextField label="Medicamento" source="medicamento" />
            <TextField label="Caducidad" source="date" />
            <TextField label="Descripcion" source="body" />
            <TextField label="Cantidad" source="cantidad" />
            <EditButton />
        </Datagrid>
    </List>
);
export const MediEdit = props => (
    <Edit title={<Mediname />} {...props}>
        <SimpleForm>
            <TextField disable label="Registro" source="id" />
            <TextInput label="Medicamento" source="medicamento" />
            <TextInput label="Caducidad" source="date" />
            <TextInput label="Descripcion" source="body" />
            <TextInput label="Cantidad" source="cantidad" />
        </SimpleForm>
    </Edit>
);
export const MediCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Medicamento" source="medicamento" />
            <TextInput label="Caducidad" source="date" />
            <TextInput label="Descripcion" source="body" />
            <TextInput label="Cantidad" source="cantidad" />
        </SimpleForm>
    </Create>
);
