import React, { useEffect, useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    Grid,
    Avatar,
    TextField,
    Tabs,
    Tab,
    CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(18),
    height: theme.spacing(18),
    margin: 'auto',
    border: '4px solid rgba(255,255,255,0.6)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
}));

const GlassCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: '20px',
    backdropFilter: 'blur(12px)',
    background: 'rgba(255,255,255,0.75)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
}));

const OrderCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.9)',
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    transition: 'transform .3s ease, box-shadow .3s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 28px rgba(0,0,0,0.2)',
    },
}));

const StyledTabs = styled(Tabs)(() => ({
    '& .MuiTabs-indicator': {
        background: 'linear-gradient(90deg, #0d6e46, #2563eb)',
        height: 4,
        borderRadius: 4,
    },
}));

const StyledTab = styled(Tab)(() => ({
    fontSize: '1.1rem',
    fontWeight: 600,
    textTransform: 'none',
    color: '#333',
}));

const ConsumerProfile = () => {
    const [tabValue, setTabValue] = useState(0);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    const consumerId = localStorage.getItem("consumerId");

    const orders = [
        {
            orderId: "ORD12345",
            product: "Fresh Tomatoes",
            quantity: 3,
            price: 150,
            date: "2025-04-10T12:34:56Z",
            paymentMethod: "UPI",
        },
        {
            orderId: "ORD12346",
            product: "Organic Spinach",
            quantity: 2,
            price: 100,
            date: "2025-04-08T10:20:00Z",
            paymentMethod: "Cash on Delivery",
        },
        {
            orderId: "ORD12347",
            product: "Carrots",
            quantity: 5,
            price: 200,
            date: "2025-04-05T09:15:30Z",
            paymentMethod: "Card",
        },
    ];

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/consumer-profile/${consumerId}`);
                if (res.data.success) {
                    setProfile(res.data.data);
                } else {
                    alert("Failed to fetch profile details.");
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
                alert("An error occurred while fetching profile.");
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    if (loading) {
        return (
            <Container sx={{ py: 8, textAlign: "center" }}>
                <CircularProgress size={60} />
                <Typography mt={3} fontSize={22}>Loading Profile...</Typography>
            </Container>
        );
    }

    if (!profile) {
        return (
            <Container sx={{ py: 8, textAlign: "center" }}>
                <Typography color="error" fontSize={22}>Profile data not available.</Typography>
            </Container>
        );
    }

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #e0ffe7, #d4e8ff)",
                py: 6,
                mt: 8
            }}
        >
            <Container>
                <Grid container spacing={4}>
                    {/* LEFT PROFILE CARD */}
                    <Grid item xs={12} md={4}>
                        <GlassCard>
                            <ProfileAvatar src={profile.profileImage || "/images/default-avatar.png"} />

                            <Typography variant="h5" sx={{ mt: 2, fontWeight: 700 }}>
                                {profile.fullName}
                            </Typography>

                            <Typography sx={{ color: "gray", fontSize: 16 }}>
                                {profile.email}
                            </Typography>
                        </GlassCard>
                    </Grid>

                    {/* RIGHT SIDE TABS */}
                    <Grid item xs={12} md={8}>
                        <GlassCard>
                            <StyledTabs
                                value={tabValue}
                                onChange={(e, newValue) => setTabValue(newValue)}
                            >
                                <StyledTab label="Profile Details" />
                                <StyledTab label="Order History" />
                            </StyledTabs>

                            {/* PROFILE DETAILS */}
                            {tabValue === 0 && (
                                <Box sx={{ mt: 3 }}>
                                    <Typography variant="h6" fontWeight={700}>
                                        Personal Information
                                    </Typography>

                                    <Grid container spacing={3} sx={{ mt: 1 }}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth label="Full Name"
                                                disabled value={profile.fullName}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth label="Email"
                                                disabled value={profile.email}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth label="Phone"
                                                disabled value={profile.phone}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth label="Address"
                                                disabled multiline rows={3} value={profile.address}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            )}

                            {/* ORDER HISTORY */}
                            {tabValue === 1 && (
                                <Box sx={{ mt: 3 }}>
                                    <Typography variant="h6" fontWeight={700}>
                                        Recent Orders
                                    </Typography>

                                    <Grid container spacing={2} sx={{ mt: 1 }}>
                                        {orders.map((order, i) => (
                                            <Grid item xs={12} key={i}>
                                                <OrderCard>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12} sm={6}>
                                                            <Typography><strong>Order ID:</strong> {order.orderId}</Typography>
                                                            <Typography><strong>Product:</strong> {order.product}</Typography>
                                                            <Typography><strong>Qty:</strong> {order.quantity}</Typography>
                                                        </Grid>

                                                        <Grid item xs={12} sm={6}>
                                                            <Typography><strong>Price:</strong> ₹{order.price}</Typography>
                                                            <Typography><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</Typography>
                                                            <Typography><strong>Payment:</strong> {order.paymentMethod}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </OrderCard>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            )}
                        </GlassCard>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ConsumerProfile;
