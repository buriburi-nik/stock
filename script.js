const API_KEY = '2405f1a0ad504c44aafe625e0a93dc3b';
const API_BASE = 'https://api.twelvedata.com';

const $ = (id) => document.getElementById(id);
const cache = {};
const stocks = [];

function show(id) {
  $(id).classList.remove('hidden');
}

function hide(id) {
  $(id).classList.add('hidden');
}

function showError(msg) {
  $('errorMessage').textContent = msg;
  show('errorMessage');
  setTimeout(() => hide('errorMessage'), 3000);
}

async function loadStock() {
  const symbol = $('stockSymbol').value.trim().toUpperCase();
  if (!symbol) return showError('Enter a stock symbol');
  show('loadingIndicator');

  if (cache[symbol]) {
    displayStock(cache[symbol]);
    loadChart(symbol);
    hide('loadingIndicator');
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/quote?symbol=${symbol}&apikey=${API_KEY}`);
    const data = await res.json();

    if (data && !data.code) {
      cache[symbol] = data;
      displayStock(data);
      loadChart(symbol);
    } else {
      showError(`Symbol "${symbol}" not found.`);
    }
  } catch (err) {
    showError('Error fetching stock data.');
  }

  hide('loadingIndicator');
}

function displayStock(q) {
  const price = parseFloat(q.close);
  const change = parseFloat(q.change);
  const percent = parseFloat(q.percent_change);
  const vol = parseInt(q.volume).toLocaleString();
  const high = parseFloat(q.high);
  const low = parseFloat(q.low);
  const open = parseFloat(q.open);
  const prev = parseFloat(q.previous_close);
  const cls = change >= 0 ? 'positive' : 'negative';
  const sym = change >= 0 ? '+' : '';

  $('stockInfo').innerHTML = `
    <div class="info-item"><div class="info-label">Current Price</div><div class="info-value">$${price.toFixed(2)}</div></div>
    <div class="info-item"><div class="info-label">Change</div><div class="info-value ${cls}">${sym}$${change.toFixed(2)}</div></div>
    <div class="info-item"><div class="info-label">Change %</div><div class="info-value ${cls}">${sym}${percent.toFixed(2)}%</div></div>
    <div class="info-item"><div class="info-label">Volume</div><div class="info-value">${vol}</div></div>
    <div class="info-item"><div class="info-label">Day High</div><div class="info-value">$${high.toFixed(2)}</div></div>
    <div class="info-item"><div class="info-label">Day Low</div><div class="info-value">$${low.toFixed(2)}</div></div>
    <div class="info-item"><div class="info-label">Open</div><div class="info-value">$${open.toFixed(2)}</div></div>
    <div class="info-item"><div class="info-label">Previous Close</div><div class="info-value">$${prev.toFixed(2)}</div></div>`;
}

async function loadChart(symbol) {
  try {
    const res = await fetch(`${API_BASE}/time_series?symbol=${symbol}&interval=1day&outputsize=30&apikey=${API_KEY}`);
    const data = await res.json();

    if (data && data.values) {
      const dates = data.values.map(d => d.datetime).reverse();
      const prices = data.values.map(d => parseFloat(d.close)).reverse();
      updateChart(dates, prices, symbol);
    } else {
      throw new Error('Chart data error');
    }
  } catch {
    showError('Error loading chart');
  }
}

let chart;

function updateChart(labels, data, label) {
  const ctx = $('priceChart').getContext('2d');
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label,
        data,
        borderColor: '#4bc0c0',
        backgroundColor: 'rgba(75,192,192,0.1)',
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: { ticks: { color: "#fff" } },
        y: { ticks: { color: "#fff" } }
      },
      plugins: {
        legend: { labels: { color: "#fff" } }
      }
    }
  });
}

async function addToComparison() {
  const symbol = $('stockSymbol').value.trim().toUpperCase();
  if (!symbol) return showError('Please enter a stock symbol');
  if (stocks.find(s => s.symbol === symbol)) return showError('Already added');

  show('loadingIndicator');

  try {
    const res = await fetch(`${API_BASE}/quote?symbol=${symbol}&apikey=${API_KEY}`);
    const q = await res.json();

    if (q && !q.code) {
      stocks.push({
        symbol,
        price: parseFloat(q.close),
        change: parseFloat(q.change),
        changePercent: parseFloat(q.percent_change),
        volume: parseInt(q.volume)
      });
      updateComparison();
    } else {
      showError(`Symbol "${symbol}" not found`);
    }
  } catch {
    showError('Error fetching comparison data');
  }

  hide('loadingIndicator');
}

function updateComparison() {
  const tbody = $('comparisonBody');
  tbody.innerHTML = '';
  stocks.forEach((s, i) => {
    const cls = s.change >= 0 ? 'positive' : 'negative';
    tbody.innerHTML += `
      <tr>
        <td>${s.symbol}</td>
        <td>$${s.price.toFixed(2)}</td>
        <td class="${cls}">${s.change.toFixed(2)}</td>
        <td class="${cls}">${s.changePercent.toFixed(2)}%</td>
        <td>${s.volume.toLocaleString()}</td>
        <td><button onclick="removeStock(${i})">❌</button></td>
      </tr>
    `;
  });
}

function removeStock(index) {
  stocks.splice(index, 1);
  updateComparison();
}

function selectTrendingStock(symbol) {
  $('stockSymbol').value = symbol;
  loadStock();
}
