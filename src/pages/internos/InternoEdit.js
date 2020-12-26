import React from 'react';
import { DateInput, SimpleForm, ReferenceInput, SelectInput, TextInput, Edit, TopToolbar, ListButton } from 'react-admin';

const InternoTitle = ({ record }) => {
    return (
        <span>Paciente Interno {record ? `"${record.PacienteId}"` : ''}</span>
    );
};

const InternoActions = ({ basePath }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

export const InternoEdit = props => (
    <Edit title={<InternoTitle />} {...props} actions={<InternoActions />}>
        <SimpleForm>
            <TextInput disabled label="Registro" source="id" />
            <ReferenceInput label="Habitacion asignada" source="HabitacionId" reference="habitaciones">
                <SelectInput optionText="Habitacion" />
            </ReferenceInput>
            <ReferenceInput label="Paciente" source="PacienteId" reference="pacientes">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Edad" source="PacienteId" reference="pacientes">
                <SelectInput optionText="Edad" />
            </ReferenceInput>
            <ReferenceInput label="Motivo de Ingreso" source="PacienteId" reference="pacientes">
                <SelectInput optionText="Asunto" />
            </ReferenceInput>
            <DateInput label="Fecha de Ingreso" source="date" />
            <ReferenceInput label="Medico responsable" source="medicoId" reference="medicos">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);