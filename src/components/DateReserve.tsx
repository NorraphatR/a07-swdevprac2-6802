'use client';

import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BookingPage() {
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState<Dayjs | null>(dayjs());

  const handleVenueChange = (event: SelectChangeEvent) => {
    setVenue(event.target.value);
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: 'auto',
        mt: 6,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Typography variant="h4">
        Venue Booking Form
      </Typography>

      {/* Name */}
      <TextField
        variant="standard"
        name="Name-Lastname"
        label="Name-Lastname"
      />

      {/* Contact */}
      <TextField
        variant="standard"
        name="Contact-Number"
        label="Contact-Number"
      />

      {/* Select venue */}
      <FormControl variant="standard" fullWidth>
        <InputLabel id="venue-label">Venue</InputLabel>
        <Select
          id="venue"
          labelId="venue-label"
          value={venue}
          onChange={handleVenueChange}
          label="Venue"
        >
          <MenuItem value="Bloom">
            The Bloom Pavilion
          </MenuItem>

          <MenuItem value="Spark">
            Spark Space
          </MenuItem>

          <MenuItem value="GrandTable">
            The Grand Table
          </MenuItem>
        </Select>
      </FormControl>

      {/* DatePicker */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Event Date"
          value={date}
          onChange={(newValue) => setDate(newValue)}
        />
      </LocalizationProvider>
    </Box>
  );
}