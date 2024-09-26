import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardHolderName: '',
        expirationDate: '',
        cvv: '',
    });

    const { cardNumber, cardHolderName, expirationDate, cvv } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/api/payment/', formData);

            alert('Payment submitted successfully');

            setFormData({
                cardNumber: '',
                cardHolderName: '',
                expirationDate: '',
                cvv: '',
            });
        } catch (error) {
            console.error('Error submitting payment:', error);
            alert('Failed to submit payment');
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputCardNumber" className="form-label">
                                Card Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="cardNumber"
                                value={cardNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputCardHolderName" className="form-label">
                                Card Holder Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="cardHolderName"
                                value={cardHolderName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputExpirationDate" className="form-label">
                                Expiration Date
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="expirationDate"
                                value={expirationDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputCVV" className="form-label">
                                CVV
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="cvv"
                                value={cvv}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Pay Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;