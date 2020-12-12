import React from 'react';
import { Filter, Create, SimpleForm, ReferenceInput, SelectInput, TextInput, Edit, List, Datagrid, TextField, ReferenceField, EditButton, TopToolbar, ListButton } from 'react-admin';

const RecTitle = ({ record }) => {
    return (
        <span>Receta Generada para el Paciente {record.id ? `"${record.pacienteId}"` : ''}</span>
    );
};

const RecActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

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

export const RecEdit = props => (
    <Edit title={<RecTitle />} {...props} actions={<RecActions />}>
        <SimpleForm>
            <TextInput disabled label="Registros" source="id" />
            <ReferenceInput label="Medico" source="medicoId" reference="medicos">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Paciente" source="pacienteId" reference="pacientes">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Asunto" source="pacienteId" reference="pacientes">
                <SelectInput optionText="Asunto" />
            </ReferenceInput>
            <TextInput label="Receta" source="body" />
            <TextInput label="Pago por consulta" source="costo" />
        </SimpleForm>
    </Edit>
);

export const RecCreate = props => (
    <Create {...props} actions={<RecActions />} title={<RecTitle />}>
        <SimpleForm>
            <ReferenceInput label="Medico" source="medicoId" reference="medicos">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Paciente" source="pacienteId" reference="pacientes">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Asunto" source="pacienteId" reference="pacientes">
                <SelectInput optionText="Asunto" />
            </ReferenceInput>
            <TextInput label="Receta" source="body" />
            <TextInput label="Pago por consulta" source="costo" />
        </SimpleForm>
    </Create>
);
