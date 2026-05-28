export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { q, type } = req.query;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ cod: 500, message: "OpenWeather API Key is not configured on Vercel." });
  }

  if (!q) {
    return res.status(400).json({ cod: 400, message: "Query parameter 'q' (city name) is required." });
  }

  const apiEndpoint = type === 'forecast' ? 'forecast' : 'weather';
  const url = `https://api.openweathermap.org/data/2.5/${apiEndpoint}?q=${encodeURIComponent(q)}&units=metric&appid=${apiKey}`;

  try {
    const apiResponse = await fetch(url);
    const data = await apiResponse.json();
    return res.status(apiResponse.status).json(data);
  } catch (error) {
    console.error("Proxy fetch error:", error);
    return res.status(500).json({ cod: 500, message: "Internal server error connecting to weather API." });
  }
}
