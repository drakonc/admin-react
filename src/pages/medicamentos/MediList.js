import React from 'react';
import { Filter, TextInput, List, Datagrid, TextField, EditButton } from 'react-admin';

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