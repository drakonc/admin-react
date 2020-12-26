import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/icons/LocalHospital';

const cardStyles = {
    background: '#2CAAFF',
    color: 'black',
    textAlign: 'center'
};

const cardStyless = {
    color: 'white',
    width: 300,
    minHeight: 380,
    margin: '0.5em',
    verticalAlign: 'center'
};

export const Dashboard = () => (
    <Card style={cardStyles}>
        <CardContent>
            <h1>Hospital Admin</h1>
        </CardContent>
        <Icon style={cardStyless}>star</Icon>
        <CardContent>
            <h3>Ayudar es nuestra misión</h3>
        </CardContent>
    </Card>
);
