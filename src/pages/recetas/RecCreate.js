import React from 'react';
import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput, TopToolbar, ListButton } from 'react-admin';

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
