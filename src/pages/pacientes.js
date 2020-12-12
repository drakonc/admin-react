import React from 'react';
import { Filter, Create, SimpleForm, TextInput, Edit, List, Datagrid, TextField, EditButton } from 'react-admin';
import { ImageInput, DateInput, ImageField } from "react-admin";

const RegistroTitle = ({ record }) => {
    return (
        <span>Paciente Interno {record ? `"${record.name}"` : ''}</span>
    );
};

const PacFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
        <TextInput label="Genero" source="Sexo" />
        <TextInput label="Edad" source="Edad" />
    </Filter>
);


export const PacList = (props) => (
    <List title="Registro General de Pacientes" filters={<PacFilter />} {...props}>
        <Datagrid>
            <TextField label="Registro" source="id" />
            <TextField label="Nombre" source="name" />
            <TextField label="Edad" source="Edad" />
            <TextField label="Genero" source="Sexo" />
            <TextField label="Asunto" source="Asunto" />
            <EditButton />
        </Datagrid>
    </List>
);

export const RegistroEdit = props => (
    <Edit title={<RegistroTitle />} {...props}>
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
export const RegistroCreate = props => (
    <Create {...props}>
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
