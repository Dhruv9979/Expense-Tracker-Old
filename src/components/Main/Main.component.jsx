import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Grid,
    Divider,
} from '@material-ui/core';
import Form from './Form/Form.component';
import List from './List/List.component';
import InfoCard from '../InfoCard/InfoCard.component';

import useStyles from './Main.styles';

const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Siri" />
            <CardContent>
                <Typography align="center" variant="h5">
                    Total Balance $100
                </Typography>
                <Typography
                    variant="subtitle1"
                    style={{ lineHeight: '1.5em', marginTop: '20px' }}
                >
                    <InfoCard />
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Main;
