import React from 'react';
import { Filter, ReferenceInput, SelectInput, TextInput, List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

const RecFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
        <ReferenceInput label="Medico" source="medicoId" reference="medicos" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const RecList = props => (
    <List filters={<RecFilter />} {...props}>
        <Datagrid>
            <TextField label="Registro" source="id" />
            <ReferenceField label="Medico" source="medicoId" reference="medicos">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Paciente" source="pacienteId" reference="pacientes">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Asunto" source="pacienteId" reference="pacientes">
                <TextField source="Asunto" />
            </ReferenceField>
            <TextField label="Receta" source="body" />
            <TextField label="Pago por Consulta" source="costo" />
            <EditButton />
        </Datagrid>
    </List>
);