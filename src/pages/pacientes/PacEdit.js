import React from 'react';
import { SimpleForm, TextInput, Edit, TopToolbar, ListButton } from 'react-admin';
import { ImageInput, DateInput, ImageField } from "react-admin";

const RegistroTitle = ({ record }) => {
    return (
        <span>Paciente Interno {record ? `"${record.name}"` : ''}</span>
    );
};

const PacActions = ({ basePath }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

export const PacEdit = props => (
    <Edit title={<RegistroTitle />} actions={<PacActions />} {...props}>
        <SimpleForm>
            <ImageInput source="pictures" label="Related pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput disabled label="Registro" source="id" />
            <TextInput label="Paciente" source="name" />
            <TextInput source="Edad" />
            <TextInput source="Sexo" />
            <TextInput label="Consulta" source="Asunto" />
            <DateInput Label="Fecha de consulta" source="Date" />
        </SimpleForm>
    </Edit>
);
