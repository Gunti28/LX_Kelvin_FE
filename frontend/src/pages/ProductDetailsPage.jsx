import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../css/ProductDetailsPage.css'; // Import your CSS file for styling
// Import all images
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import t3 from '../assets/t3.png';
import t4 from '../assets/t4.png';
import t5 from '../assets/t5.png';


const ProductDetailsPage= () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalImages = 5;

    const images = [t1, t2, t3, t4, t5];

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <Container className="product-page mt-4">
            <Row>
                {/* Left Column */}
                <Col md={6} className="left-column">
                    {/* Row 1: Main Image Preview */}
                    <div className="main-image-container">
                        <img
                            src={images[currentImageIndex]}
                            alt="Organic Tomatoes"
                            className="main-preview-image"
                        />
                        <button
                            className="carousel-control prev"
                            onClick={handlePrevImage}
                            aria-label="Previous image"
                        >
                            &#8249;
                        </button>
                        <button
                            className="carousel-control next"
                            onClick={handleNextImage}
                            aria-label="Next image"
                        >
                            &#8250;
                        </button>
                    </div>

                    {/* Row 2: Thumbnails */}
                    <div className="thumbnails-row">
                        {images.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`Thumb ${i + 1}`}
                                className={`thumbnail ${i === currentImageIndex ? 'active' : ''}`}
                                onClick={() => handleThumbnailClick(i)}
                            />
                        ))}
                    </div>

                    {/* Row 3: Product Details Section */}
                    <div className="product-info-section mt-4">
                        <h4 className="details-heading"><p>Product Details</p></h4>
                        <div className="info-item">
                            <p><strong>Product Name:</strong></p>
                            <p>Tomato</p>
                        </div>

                        <div className="info-item">
                            <p><strong>Health Benefits</strong></p>
                            <p>High Vitamin C content strengthens the immune system.</p>
                        </div>

                        <div className="info-item">
                            <p><strong>Packaging:</strong></p>
                            <p>Sold loose, in net bags, or in sealed packs for freshness</p>
                        </div>

                        <div className="info-item">
                            <p><strong>About:</strong></p>
                            <p>Tomatoes are versatile and widely used fruits (often treated as vegetables) in various cuisines worldwide. Known for their vibrant red color, juicy texture, and sweet-tangy flavor, tomatoes are a kitchen staple</p>
                        </div>
                    </div>
                </Col>

                {/* Right Column */}
                <Col md={6} className="right-column">
                    <div className="product-details-section">
                        <div className="navigation-path">
                            <span>Home</span>
                            <span>/</span>
                            <span>Fresh Vegetables</span>
                            <span>/</span>
                            <span>Organic Tomato</span>
                        </div>

                        <h2>Organic Tomato</h2>

                        <div className="quantity-price-section">
                            <div className="quantity-add-container">
                                <Form.Group className="quantity-selector">
                                    <Form.Label>Quantity: </Form.Label>
                                    <Form.Select className="quantity-dropdown">
                                        <option>500 g</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button variant="warning" className="add-button">
                                    Add
                                </Button>
                            </div>

                            <div className="price-display">
                                <span className="current-price">€46</span>
                                <span className="pmd-price">PMD €63</span>
                                <span className="discount">26% OFF</span>
                            </div>
                        </div>

                        <div className="subscription-offer">
                            <div className="offer-banner">
                                <p>Get extra <span className="off-text">(15% OFF)</span> with <span className="vip-tag">VIP</span> Subscription</p>
                            </div>
                        </div>

                        <div className="subscription-plan-section">
                            <h3>Select Your Subscription Plan</h3>
                            <Button variant="outline-warning" className="view-plans-btn">
                                View Plans
                            </Button>
                        </div>

                        {/* Row 2: Why Everyone Choose Section */}
                        <div className="why-choose-section">
                            <h4>Why Everyone Choose This App</h4>
                            <div className="benefits-container">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 6v6l4 2'/%3E%3C/svg%3E"
                                            alt="Time Saving" />
                                    </div>
                                    <div className="benefit-content">
                                        <h5>Time-Saving</h5>
                                        <p>Easily find items with search tools or reorder from your previous purchases</p>
                                    </div>
                                </div>

                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M20 12v7H4v-7'/%3E%3Cpath d='M12 3l-8 8h16l-8-8z'/%3E%3C/svg%3E"
                                            alt="Promotions" />
                                    </div>
                                    <div className="benefit-content">
                                        <h5>Promotions and Discounts</h5>
                                        <p>Many apps offer app-only discounts, coupons, and promotions</p>
                                    </div>
                                </div>

                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M12 2l2.2 6.6h7.1l-5.7 4.2 2.2 6.6-5.7-4.2-5.7 4.2 2.2-6.6-5.7-4.2h7.1z'/%3E%3C/svg%3E"
                                            alt="Price Alerts" />
                                    </div>
                                    <div className="benefit-content">
                                        <h5>Price Alerts</h5>
                                        <p>Set notifications for price drops on your favorite items</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </Col>
            </Row>
            {/* Customer Feedback Section */}
            <div className="customer-feedback">
                <h3>Customer Feedback</h3>
                <div className="feedback-container">
                    {[
                        {
                            name: 'Kristan watson',
                            date: 'March 21, 2024',
                            rating: 4,
                            content: 'Great product smooth purchase',
                            avatar: 't1.png'
                        },
                        {
                            name: 'Bessie Kooper',
                            date: 'March 21, 2024',
                            rating: 4,
                            content: 'Great product smooth purchase',
                            avatar: 't2.png'
                        },
                        {
                            name: 'John Smith',
                            date: 'March 20, 2024',
                            rating: 5,
                            content: 'Excellent quality tomatoes, very fresh!',
                            avatar: 't3.png'
                        },
                        {
                            name: 'Emma Wilson',
                            date: 'March 19, 2024',
                            rating: 4,
                            content: 'Quick delivery and good packaging',
                            avatar: 't4.png'
                        },
                        {
                            name: 'Michael Brown',
                            date: 'March 18, 2024',
                            rating: 5,
                            content: 'Best organic tomatoes I\'ve had in a while',
                            avatar: 't5.png'
                        }
                    ].map((feedback, index) => (
                        <div key={index} className="feedback-item">
                            <div className="feedback-header">
                                <div className="feedback-avatar">
                                    <img src={`/assets/${feedback.avatar}`} alt={feedback.name} />
                                </div>
                                <div className="feedback-user">
                                    <h4>{feedback.name}</h4>
                                    <div className="feedback-date">{feedback.date}</div>
                                </div>
                                <div className="feedback-rating">
                                    {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
                                </div>
                            </div>
                            <div className="feedback-content">
                                {feedback.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default ProductDetailsPage;
