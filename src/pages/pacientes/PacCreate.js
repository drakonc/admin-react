import React from 'react';
import { Create, SimpleForm, TextInput, TopToolbar, ListButton } from 'react-admin';
import { ImageInput, DateInput, ImageField } from "react-admin";

const PacActions = ({ basePath }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

export const PacCreate = props => (
    <Create actions={<PacActions />} {...props}>
        <SimpleForm>
            <ImageInput source="pictures" label="Related pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput label="Paciente" source="name" />
            <TextInput source="Edad" />
            <TextInput source="Sexo" />
            <TextInput label="Consulta" source="Asunto" />
            <DateInput Label="Fecha de consulta" source="Date" />
        </SimpleForm>
    </Create>
);