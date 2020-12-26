import React from 'react';
import { SimpleForm, ReferenceInput, SelectInput, TextInput, Edit, TopToolbar, ListButton } from 'react-admin';

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

