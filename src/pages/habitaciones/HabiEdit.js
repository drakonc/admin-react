import React from 'react';
import { SimpleForm, TextInput, Edit } from 'react-admin';


const HabiTitle = ({ record }) => {
    return (
        <span>Habitacion {record.id ? `${record.Habitacion}-${record.Pizo}` : ''}</span>
    );
};

export const HabiEdit = props => (
    <Edit title={<HabiTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled label="Registro" source="id" />
            <TextInput disabled source="Habitacion" />
            <TextInput disabled source="Pizo" />
        </SimpleForm>
    </Edit>
);