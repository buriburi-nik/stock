# 📈 Stock Tracker Dashboard

A modern, responsive web application for tracking real-time stock data with an elegant neon-themed UI. Built with vanilla JavaScript, HTML5, and CSS3, featuring live charts, stock comparisons, and trending stock highlights.



## ✨ Features

### 🎯 Core Functionality
- **Real-time Stock Data**: Fetch live stock quotes using TwelveData API
- **Interactive Price Charts**: Visual 30-day price history with Chart.js
- **Stock Comparison**: Side-by-side comparison of multiple stocks
- **Trending Stocks**: Quick access to popular stock symbols
- **Live Clock**: Real-time date and time display
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices



## 🚀 Live Demo

Experience the dashboard live: [live demo](https://stock-nine-lemon.vercel.app/)

## 🛠️ Installation & Setup

### Prerequisites
- Modern web browser with JavaScript enabled
- Internet connection for API calls
- TwelveData API key (free tier available)

### Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/buriburi-nik/stock-tracker-dashboard
   cd stock
   ```

2. **Configure API Key**
   - Open `script.js`
   - Replace the API key on line 1:
   ```javascript
   const API_KEY = 'your_twelvedata_api_key_here';
   ```

3. **Launch the Application**
   ```bash
   # Using Python (if available)
   python -m http.server 8000
   
   # Using Node.js (if available)
   npx serve .
   
   # Or simply open index.html in your browser
   ```

4. **Access the Dashboard**
   - Open your browser
   - Navigate to `http://localhost:8000` or directly open `index.html`

## 🔧 Configuration

### API Setup (TwelveData)

1. Visit [TwelveData](https://twelvedata.com/) and create a free account
2. Generate your API key from the dashboard
3. Update the `API_KEY` constant in `script.js`

```javascript
const API_KEY = 'your_api_key_here';
```

### Customization Options

#### Adding New Trending Stocks
Edit the trending stocks list in `index.html`:
```html
<option value="SYMBOL">SYMBOL - Company Name</option>
```


## 📋 Usage Guide

### Basic Operations

1. **Search for Stocks**
   - Enter a stock symbol (e.g., AAPL, MSFT, GOOGL)
   - Click "Load Stock" to fetch data
   - View detailed information and price chart

2. **Compare Stocks**
   - Enter a stock symbol
   - Click "Add to Compare"
   - Build a comparison table with multiple stocks
   - Remove stocks using the ❌ button

3. **Quick Access**
   - Use the trending stocks dropdown
   - Click on trending stock tiles
   - Symbols are automatically loaded

### Supported Stock Symbols
- **Tech Giants**: AAPL, MSFT, GOOGL, AMZN, META
- **EV & Innovation**: TSLA, NVDA
- **Streaming**: NFLX
- **Enterprise**: CRM, AMD
- And thousands more supported by TwelveData

## 🏗️ Project Structure

```
stock-tracker-dashboard/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # Core JavaScript functionality
├── README.md           # This file

```

### File Descriptions

- **`index.html`**: Main application structure with semantic HTML5
- **`style.css`**: Modern CSS3 with responsive design and animations
- **`script.js`**: Vanilla JavaScript handling API calls, DOM manipulation, and Chart.js integration

## 🎨 Design System

### Color Palette
- **Primary**: Neon Blue (`#00f5ff`)
- **Secondary**: Neon Purple (`#8b5cf6`)
- **Accent**: Neon Pink (`#f0abfc`)
- **Background**: Dark gradients with transparency effects

### Typography
- **Primary Font**: Inter, Segoe UI, sans-serif
- **Monospace**: Courier New (for clock display)
- **Weight Range**: 300-900

### Responsive Breakpoints
- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile Landscape**: 480px - 767px
- **Mobile Portrait**: 320px - 479px
- **Small Mobile**: <320px

## 🔌 API Integration

### TwelveData API Endpoints Used

1. **Quote Endpoint**
   ```
   GET https://api.twelvedata.com/quote?symbol={SYMBOL}&apikey={API_KEY}
   ```

2. **Time Series Endpoint**
   ```
   GET https://api.twelvedata.com/time_series?symbol={SYMBOL}&interval=1day&outputsize=30&apikey={API_KEY}
   ```

### API Response Handling
- Automatic error detection and user feedback
- Response caching for improved performance
- Graceful fallbacks for API limitations

## 🚀 Performance Optimizations

- **Caching System**: Reduces redundant API calls
- **Lazy Loading**: Charts load on demand
- **Debounced Searches**: Prevents excessive API requests
- **Optimized CSS**: Hardware-accelerated animations
- **Minimal Dependencies**: Only Chart.js for visualizations

## 📱 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 80+ | ✅ Full Support |
| Firefox | 75+ | ✅ Full Support |
| Safari | 13+ | ✅ Full Support |
| Edge | 80+ | ✅ Full Support |
| Opera | 67+ | ✅ Full Support |

## 🐛 Troubleshooting

### Common Issues

**Q: Stock data not loading?**
- Check your internet connection
- Verify API key is correctly set
- Ensure the stock symbol exists
- Check browser console for errors

**Q: Charts not displaying?**
- Verify Chart.js is loading from CDN
- Check browser compatibility
- Clear browser cache

**Q: Mobile layout issues?**
- Ensure viewport meta tag is present
- Check CSS media queries
- Test on different devices

### Debug Mode
Enable console logging by uncommenting debug lines in `script.js`:
```javascript
// console.log('Debug:', data); // Uncomment for debugging
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the Repository**
2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit Your Changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to Branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow existing code style and conventions
- Add comments for complex logic
- Test on multiple devices and browsers
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **TwelveData** - For providing reliable stock market data API
- **Chart.js** - For beautiful and responsive charts
- **CSS Glassmorphism** - Inspiration for modern UI design
- **Open Source Community** - For continuous inspiration and learning

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/yourusername/stock-tracker-dashboard/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/stock-tracker-dashboard/discussions)
- **Email**: your.email@example.com

## 🔮 Future Enhancements

### Planned Features
- [ ] Portfolio tracking and management
- [ ] Real-time WebSocket data updates
- [ ] Technical indicators (RSI, MACD, etc.)
- [ ] News integration for stocks
- [ ] Dark/Light theme toggle
- [ ] Export data to CSV/PDF
- [ ] Stock alerts and notifications
- [ ] Historical data analysis
- [ ] Cryptocurrency support
- [ ] Multi-language support

### Version History
- **v1.0.0** - Initial release with core functionality
- **v1.1.0** - Added responsive design and mobile optimization
- **v1.2.0** - Enhanced UI with glassmorphism effects
- **v1.3.0** - Added stock comparison feature

---

**Built with ❤️ and ☕ by [Your Name]**

*If you find this project helpful, please consider giving it a ⭐ on GitHub!*