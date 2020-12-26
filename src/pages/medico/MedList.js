import React from 'react';
import { Filter, TextInput, List, Datagrid, TextField, EditButton, EmailField } from 'react-admin';

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