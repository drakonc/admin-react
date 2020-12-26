import React from 'react';
import { DateInput, Create, SimpleForm, ReferenceInput, SelectInput, TopToolbar, ListButton } from 'react-admin';

const InternoActions = ({ basePath }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

export const InternoCreate = props => (
    <Create {...props} actions={<InternoActions />}>
        <SimpleForm>
            <ReferenceInput label="Habitacion asignada" source="HabitacionId" reference="habitaciones">
                <SelectInput optionText="Habitacion" />
            </ReferenceInput>
            <ReferenceInput source="PacienteId" reference="pacientes">
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
    </Create>
);