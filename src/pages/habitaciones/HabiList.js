import React from 'react';
import { Filter, TextInput, List, Datagrid, TextField } from 'react-admin';

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