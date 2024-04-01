import React from 'react';
import {
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    AppBar,
    Toolbar,
    Typography,
    Container,
    CssBaseline,
    Box,
} from '@mui/material';
import { Link } from 'react-router-dom';

const hotels = [
    { name: "Dindigul Thalappakatti", iconUrl: 'data:image/jpeg;base64,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', menu: ['Chicken Briyani', 'Mutton Briyani', 'Chicken Lollipop'] },
    { name: "Sree Annapoorna", iconUrl: 'data:image/png;base64,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', menu: ['Meals', 'Veg-Fried Rice', 'Mushroom Briyani'] },
    { name: "The London Shakes", iconUrl: 'data:image/png;base64,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', menu: ['Vanilla Milkshake', 'Mocktail(Non-Alcoholic)', 'Falooda'] },
];

class OrderNow extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedHotel: '',
            selectedFood: '',
        };
    }

    handleChangeHotel = (event) => {
        this.setState({ selectedHotel: event.target.value, selectedFood: '' });
    };

    handleChangeFood = (event) => {
        this.setState({ selectedFood: event.target.value });
    };

    handleOrderNow = () => {

        alert(`Order placed: ${this.state.selectedHotel.name} - ${this.state.selectedFood}`);
    };

    render() {
        const backgroundImage = '';
        // const backgroundImage = 'url(https://hungerbay.com/assets/images/b6.jpg)';
        const { selectedHotel, selectedFood } = this.state;

        return (
            <div style={{ backgroundImage, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <CssBaseline />
                <AppBar position="static" style={{ backgjjroundColor: '#333333' }}>
                    <Toolbar>
                        <Typography variant="h6">
                            {/* Order Now */}
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Container component="main" maxWidth="xs" style={{ textAlign: 'center', marginTop: '50px', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant='h4'>Order Here</Typography>
                    <FormControl fullWidth style={{ marginBottom: '20px' }}>
                        <InputLabel id="hotel-select-label">Select Hotel</InputLabel>
                        <Select
                            labelId="hotel-select-label"
                            id="hotel-select"
                            value={selectedHotel}
                            label="Select Hotel"
                            onChange={this.handleChangeHotel}
                            style={{ width: '100%', marginTop: '10px' }}
                            renderValue={(selected) => (
                                <Box display="flex" alignItems="center">
                                    {selected.iconUrl && <img src={selected.iconUrl} alt="Hotel Icon" style={{ width: '20px', marginRight: '10px' }} />}
                                    {selected.name}
                                </Box>
                            )}
                        >
                            {hotels.map((hotel, index) => (
                                <MenuItem key={index} value={hotel}>
                                    {hotel.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {selectedHotel && (
                        <FormControl fullWidth style={{ marginBottom: '20px' }}>
                            <InputLabel id="food-select-label">Select Food</InputLabel>
                            <Select
                                labelId="food-select-label"
                                id="food-select"
                                value={selectedFood}
                                label="Select Food"
                                onChange={this.handleChangeFood}
                                style={{ width: '100%', marginTop: '10px' }}
                            >
                                {selectedHotel.menu.map((food, index) => (
                                    <MenuItem key={index} value={food}>
                                        {food}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    {selectedFood && (
                        <Button variant="contained" color="primary" onClick={this.handleOrderNow} style={{ marginTop: '20px' }}>
                            Order Now
                        </Button>
                    )}
                    <br></br>

                    <Button variant="text" component={Link} to="/home">
                        Go to Home
                    </Button>
                </Container>

                <footer style={{ marginTop: '50px', textAlign: 'center' }}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        &copy; Developed for Fodoo By Bharath
                    </Typography>
                </footer>
            </div>
        );
    }

}
export default OrderNow;