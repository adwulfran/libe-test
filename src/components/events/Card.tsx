import * as React from 'react';
import { IEvent } from '@/models/eventSchema';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import { Card, CardContent, Button, Typography } from '@mui/material';


interface Props {
    event: Partial<IEvent>;
    goToDetail: () => void;
}

export default function EventCard(
    { event, goToDetail }: Props
) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{
                    color: 'text.secondary',
                    fontSize: 14,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <span>{event.date?.toString()}</span>
                    <span><Button onClick={goToDetail} ><RemoveRedEyeRoundedIcon /></Button></span>
                </Typography>
                <Typography variant="h5" component="div">
                    {event.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{event.location}</Typography>
            </CardContent>
        </Card>
    );
}