# React Stripe Payment Element

A modern, secure, and beautifully designed payment processing application built with React and Stripe's Payment Element. This project demonstrates how to integrate Stripe's latest payment processing capabilities with a professional user interface.

## 🚀 Features

- **Modern UI Design**: Professional gradient-based design with smooth animations
- **Stripe Payment Element**: Latest Stripe integration for secure payment processing
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Error Handling**: Comprehensive error handling for declined cards and validation errors
- **Loading States**: Beautiful loading spinners and processing indicators
- **Type Safety**: Built with modern JavaScript and best practices

## 🛠️ Tech Stack

- **Frontend**: React 18, Stripe React SDK
- **Backend**: Node.js, Express, Stripe Node SDK
- **Styling**: CSS3 with modern features (gradients, animations, flexbox)
- **Payment Processing**: Stripe Payment Intents API

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14.0 or higher)
- npm or yarn package manager
- A Stripe account (for API keys)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/react-stripe-payment-element.git
cd react-stripe-payment-element
```

### 2. Install Dependencies

#### Install Client Dependencies
```bash
cd client
npm install
```

#### Install Server Dependencies
```bash
cd ../server
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `server` directory:

```env
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

> **Note**: Replace with your actual Stripe API keys from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys)

### 4. Run the Application

#### Start the Server (Terminal 1)
```bash
cd server
npm start
```
The server will run on `http://localhost:4242`

#### Start the Client (Terminal 2)
```bash
cd client
npm start
```
The client will run on `http://localhost:3000`

## 🎨 UI Components

### Payment Container
- **Gradient Background**: Beautiful purple gradient background
- **Centered Card Layout**: Professional card-style payment form
- **Smooth Animations**: Slide-up animation on page load

### Payment Form
- **Styled Payment Element**: Custom-styled Stripe Payment Element
- **Interactive Button**: Gradient button with hover effects and loading states
- **Success/Error Messages**: Color-coded feedback with icons

## 💳 Testing

Use Stripe's test card numbers for testing:

### Successful Payments
- **Visa**: `4242424242424242`
- **Visa (debit)**: `4000056655665556`
- **Mastercard**: `5555555555554444`

### Declined Cards
- **Generic decline**: `4000000000000002`
- **Insufficient funds**: `4000000000009995`
- **Lost card**: `4000000000009987`
- **Stolen card**: `4000000000009979`

### Test Details
- **CVC**: Any 3-digit number
- **Expiry**: Any future date
- **ZIP**: Any 5-digit number

## 📁 Project Structure

```
react-stripe-payment-element/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── App.js         # Main app component
│   │   ├── Payment.js     # Payment page component
│   │   ├── Payment.css    # Payment page styles
│   │   ├── CheckoutForm.js # Stripe checkout form
│   │   ├── CheckoutForm.css # Checkout form styles
│   │   └── Completion.js  # Payment completion page
│   └── package.json
├── server/                # Node.js backend
│   ├── server.js         # Express server with Stripe integration
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### `GET /config`
Returns the Stripe publishable key for client-side initialization.

### `POST /create-payment-intent`
Creates a new Stripe Payment Intent and returns the client secret.

## 🎯 Key Features Explained

### Error Handling
The application handles various types of payment errors:
- **Card Errors**: Declined cards, insufficient funds, etc.
- **Validation Errors**: Invalid card details, missing information
- **Network Errors**: Connection issues, server errors

### Security Features
- **PCI Compliance**: Stripe handles all sensitive card data
- **Client Secret**: Secure payment confirmation process
- **HTTPS**: All communication encrypted (in production)

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)
1. Build the client application:
   ```bash
   cd client && npm run build
   ```
2. Deploy the `build` folder to your hosting service

### Backend Deployment (Heroku/Railway)
1. Ensure environment variables are set in your hosting service
2. Deploy the `server` directory
3. Update the client's API endpoints to point to your deployed server

## 🔒 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | `pk_test_...` |
| `STRIPE_SECRET_KEY` | Stripe secret key | `sk_test_...` |

## 🐛 Troubleshooting

### Common Issues

1. **400 Error from Stripe API**
   - Ensure `elements.submit()` is called before `confirmPayment()`
   - Check that the return_url is properly formatted

2. **"Stripe not loaded" Error**
   - Verify your Stripe publishable key is correct
   - Check network connectivity

3. **Payment Intent Creation Failed**
   - Verify your Stripe secret key in server environment
   - Check server logs for detailed error messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or run into issues:

1. Check the [Stripe Documentation](https://stripe.com/docs)
2. Review the [troubleshooting section](#-troubleshooting)
3. Open an issue in this repository

## 🙏 Acknowledgments

- [Stripe](https://stripe.com) for their excellent payment processing API
- [React](https://reactjs.org) for the amazing frontend framework
- The open-source community for inspiration and best practices

---

Made with ❤️ and powered by Stripe
