import React from 'react';
import { Filter, ReferenceInput, SelectInput, TextInput, List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

const InternoFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Paciente" source="PacienteId" reference="pacientes" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Medico" source="medicoId" reference="medicos" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const InternoList = props => (
    <List filters={<InternoFilter />} {...props}>
        <Datagrid>
            <ReferenceField label="Habitacion" source="HabitacionId" reference="habitaciones" link={false}>
                <TextField source="Habitacion" />
            </ReferenceField>
            <ReferenceField label="Nombre del Paciente" source="PacienteId" reference="pacientes">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Edad del Paciente" source="PacienteId" reference="pacientes">
                <TextField source="Edad" />
            </ReferenceField>
            <ReferenceField label="Sexo" source="PacienteId" reference="pacientes">
                <TextField source="Sexo" />
            </ReferenceField>
            <ReferenceField label="Motivo de Ingreso" source="PacienteId" reference="pacientes">
                <TextField source="Asunto" />
            </ReferenceField>
            <TextField label="Fecha de Ingreso" source="date" />
            <ReferenceField label="Medico responsable" source="medicoId" reference="medicos">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);