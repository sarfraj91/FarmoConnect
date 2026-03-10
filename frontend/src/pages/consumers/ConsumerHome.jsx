import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './ConsumerHome.module.css';
import WhatsAppChat from '../../Components/WhatsAppChat';
import ChatBot from '../../Components/ChatBot';

const ConsumerHome = () => {
    const features = [
        {
            title: 'Good Equipment',
            description: 'Direct from local farmers to your table',
            image: 'https://images.unsplash.com/photo-1695566775904-9048725f70a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYWN0b3IlMjBpbiUyMGZpZWxkfGVufDB8fDB8fHww',
        },
        {
            title: 'Support Local',
            description: 'Help local farmers grow their business',
            image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80',
        },
        {
            title: 'Quality Assured',
            description: 'All products are quality checked',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZ2RLUkXtDN_GqqGuz1sQho42FPG29BD5ng&s',
        },
    ];

    return (
        <div>
            <div className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <Typography variant="h1" className={styles.heroTitle}>
                        Welcome to FarmoConnect
                    </Typography>
                    <Typography variant="h5" className={styles.heroSubtitle}>
                        Cost Friendly, Easy To Rent, and Sustainable Machinery Direct from Farmers
                    </Typography>
                    <Button
                        component={Link}
                        to="/consumer/products"
                        variant="contained"
                        color="primary"
                        size="large"
                        className={styles.ctaButton}
                    >
                        Rent Now
                    </Button>
                </div>
            </div>

            <section className={styles.featureSection}>
                <Container>
                    <Grid container spacing={4}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <div className={styles.featureCard}>
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className={styles.featureImage}
                                    />
                                    <Typography variant="h5" className={styles.featureTitle}>
                                        {feature.title}
                                    </Typography>
                                    <Typography className={styles.featureDescription}>
                                        {feature.description}
                                    </Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </section>

            <section className={styles.ctaSection}>
                <Container>
                    <Typography variant="h3" gutterBottom>
                        Ready to Start Shopping?
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
                        Browse our selection of fresh, local products
                    </Typography>
                    <Button
                        component={Link}
                        to="/consumer/products"
                        variant="contained"
                        color="primary"
                        size="large"
                        className={styles.ctaButton}
                    >
                        View Products
                    </Button>
                </Container>
            </section>
            <WhatsAppChat />
            <ChatBot/>
        </div>
    );
};

export default ConsumerHome;