




const weatherDatabase = [
    {
        country: "India",
        code: "IND",
        cities: [
            { name: "Bhubaneswar", code: "BBSR" },
            { name: "Puri", code: "PURI" },
            { name: "Mumbai", code: "BOM" },
            { name: "Delhi", code: "DEL" },
            { name: "Bangalore", code: "BLR" },
            { name: "Kolkata", code: "CCU" },
            { name: "Chennai", code: "MAA" }
        ]
    },
    {
        country: "United States",
        code: "USA",
        cities: [
            { name: "New York", code: "NYC" },
            { name: "Los Angeles", code: "LAX" },
            { name: "Chicago", code: "ORD" },
            { name: "San Francisco", code: "SFO" },
            { name: "Miami", code: "MIA" }
        ]
    },
    {
        country: "United Kingdom",
        code: "GBR",
        cities: [
            { name: "London", code: "LDN" },
            { name: "Manchester", code: "MAN" },
            { name: "Edinburgh", code: "EDI" },
            { name: "Birmingham", code: "BHX" }
        ]
    },
    {
        country: "Canada",
        code: "CAN",
        cities: [
            { name: "Toronto", code: "YYZ" },
            { name: "Vancouver", code: "YVR" },
            { name: "Montreal", code: "YUL" }
        ]
    },
    {
        country: "Australia",
        code: "AUS",
        cities: [
            { name: "Sydney", code: "SYD" },
            { name: "Melbourne", code: "MEL" },
            { name: "Brisbane", code: "BNE" }
        ]
    },
    {
        country: "Japan",
        code: "JPN",
        cities: [
            { name: "Tokyo", code: "TYO" },
            { name: "Osaka", code: "KIX" },
            { name: "Kyoto", code: "KYO" }
        ]
    }
];

const cityImages = {
    "Bhubaneswar": "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=1600&q=80",
    "Puri": "https://images.unsplash.com/photo-1626082896492-766af4fc6596?auto=format&fit=crop&w=1600&q=80",
    "Mumbai": "https://images.unsplash.com/photo-1570168007244-23704139443d?auto=format&fit=crop&w=1600&q=80",
    "Delhi": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80",
    "Bangalore": "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1600&q=80",
    "Kolkata": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1600&q=80",
    "Chennai": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
    "New York": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&q=80",
    "Los Angeles": "https://images.unsplash.com/photo-1422405153578-4bd676b19036?auto=format&fit=crop&w=1600&q=80",
    "Chicago": "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=1600&q=80",
    "San Francisco": "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=1600&q=80",
    "Miami": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "London": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80",
    "Manchester": "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?auto=format&fit=crop&w=1600&q=80",
    "Edinburgh": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=80",
    "Birmingham": "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?auto=format&fit=crop&w=1600&q=80",
    "Toronto": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",
    "Vancouver": "https://images.unsplash.com/photo-1560814304-4f05b62af116?auto=format&fit=crop&w=1600&q=80",
    "Montreal": "https://images.unsplash.com/photo-1519112232436-9923c6192a53?auto=format&fit=crop&w=1600&q=80",
    "Sydney": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80",
    "Melbourne": "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1600&q=80",
    "Brisbane": "https://images.unsplash.com/photo-1554797078-979089cd6482?auto=format&fit=crop&w=1600&q=80",
    "Tokyo": "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=1600&q=80",
    "Osaka": "https://images.unsplash.com/photo-1590253401934-68220934421b?auto=format&fit=crop&w=1600&q=80",
    "Kyoto": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80"
};


let currentUnit = localStorage.getItem("weather_unit") || "C";

document.addEventListener("DOMContentLoaded", () => {
    loadSavedData();
    setupCurrentDate();
    setupThemeSwitch();
    setupUnitToggle();
    setupLocationModal();
    setupLogout();

    
    const mobileThemeBtn = document.getElementById("mobile-theme-btn");
    if (mobileThemeBtn) {
        mobileThemeBtn.addEventListener("click", () => {
            if (window.toggleThemeGlobal) {
                window.toggleThemeGlobal();
            }
        });
    }
});

const API_KEY = "2f91f290552fb1f1a03f4661810dc8bd";


async function loadSavedData() {
    const savedName = localStorage.getItem("weather_username") || "Intern";
    const savedCity = localStorage.getItem("weather_city") || "Bhubaneswar";
    const savedCountry = localStorage.getItem("weather_country") || "India";

    
    document.getElementById("user-welcome-tag").textContent = `Hello ${savedName}`;

    
    const locationTitleEl = document.getElementById("location-name");
    locationTitleEl.textContent = `${savedCity}, ${savedCountry}`;

    try {
        
        let currentData;
        try {
            const resCurrent = await fetch(`/api/weather?q=${encodeURIComponent(savedCity)}&type=weather`);
            if (resCurrent.status === 404) throw new Error("Proxy not available");
            currentData = await resCurrent.json();
        } catch (e) {
            const resCurrent = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(savedCity)}&units=metric&appid=${API_KEY}`);
            currentData = await resCurrent.json();
        }
        
        if(currentData.cod === 200) {
            updateCurrentWeather(currentData);
        } else {
            console.warn("Could not fetch current weather, falling back.");
            fallbackMetrics(savedCity);
        }

        
        let forecastData;
        try {
            const resForecast = await fetch(`/api/weather?q=${encodeURIComponent(savedCity)}&type=forecast`);
            if (resForecast.status === 404) throw new Error("Proxy not available");
            forecastData = await resForecast.json();
        } catch (e) {
            const resForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(savedCity)}&units=metric&appid=${API_KEY}`);
            forecastData = await resForecast.json();
        }

        if(forecastData.cod == 200) {
            updateForecastRow(forecastData.list);
        } else {
            generateFallbackForecast();
        }

    } catch (err) {
        console.error("API Fetch Error:", err);
        fallbackMetrics(savedCity);
        generateFallbackForecast();
    }
}

function updateCurrentWeather(data) {
    const tempEl = document.getElementById("temp-display");
    tempEl.textContent = Math.round(data.main.temp);
    tempEl.setAttribute("data-celsius", data.main.temp);
    
    
    const tzOffset = data.timezone; 
    const formatTime = (timestamp) => {
        const d = new Date((timestamp + tzOffset) * 1000);
        let hours = d.getUTCHours();
        let minutes = d.getUTCMinutes();
        const ampm = hours >= 12 ? 'p.m.' : 'a.m.';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${minutes} ${ampm}`;
    };

    document.getElementById("val-sunrise").textContent = formatTime(data.sys.sunrise);
    document.getElementById("val-sunset").textContent = formatTime(data.sys.sunset);
    
    const feelsEl = document.getElementById("val-feels");
    feelsEl.textContent = Math.round(data.main.feels_like);
    feelsEl.setAttribute("data-celsius", data.main.feels_like);
    
    
    const windSpeedKm = Math.round(data.wind.speed * 3.6);
    const deg = data.wind.deg;
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const windDir = directions[Math.round(deg / 45) % 8] || '';
    document.getElementById("val-wind").textContent = `${windSpeedKm} km/h ${windDir}`;
    
    document.getElementById("val-humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("val-visibility").textContent = `${data.visibility / 1000} km`;
    
    
    document.getElementById("val-uv").textContent = "N/A";
    
    
    const pressure = data.main.pressure.toString().replace(/\B(?=(\d{3})+(\d))/g, " ");
    document.getElementById("val-pressure").textContent = `${pressure} hPa`;

    updateUnitsDisplay();
}

function fallbackMetrics(city) {
    const tempEl = document.getElementById("temp-display");
    tempEl.textContent = "--";
    tempEl.setAttribute("data-celsius", "0");
    
    document.getElementById("val-sunrise").textContent = "--:--";
    document.getElementById("val-sunset").textContent = "--:--";
    
    const feelsEl = document.getElementById("val-feels");
    feelsEl.textContent = "--";
    feelsEl.setAttribute("data-celsius", "0");
    
    document.getElementById("val-wind").textContent = "--";
    document.getElementById("val-humidity").textContent = "--";
    document.getElementById("val-visibility").textContent = "--";
    document.getElementById("val-uv").textContent = "--";
    document.getElementById("val-pressure").textContent = "--";

    updateUnitsDisplay();

    
    const container = document.getElementById("forecast-row");
    if (container) {
        container.innerHTML = `
            <div style="grid-column: span 8; padding: 40px; text-align: center; color: var(--label-color); font-family: 'Neue Montreal', 'Montserrat', sans-serif; font-style: italic; font-size: 0.95rem; letter-spacing: 0.5px;">
                no meteorological data found for this location
            </div>
        `;
    }
}


function updateForecastRow(list) {
    const container = document.getElementById("forecast-row");
    container.innerHTML = ""; 

    
    const slices = list.slice(0, 8);
    
    slices.forEach((slot, index) => {
        
        const d = new Date(slot.dt * 1000);
        let hours = d.getHours();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const timeStr = `${hours} ${ampm}`;
        
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dayStr = days[d.getDay()];

        const tempMax = Math.round(slot.main.temp_max);
        const tempMin = Math.round(slot.main.temp_min);
        
        const weatherMain = slot.weather[0].main.toLowerCase();
        let svgIcon = '';

        
        if (weatherMain.includes('clear')) {
            svgIcon = `<circle cx="16" cy="16" r="9" class="icon-sun" fill="#f59e0b" />`;
        } else if (weatherMain.includes('rain') || weatherMain.includes('drizzle') || weatherMain.includes('thunderstorm')) {
            svgIcon = `
                <path d="M11 22 C7 22 7 16 11 16 C12 12 20 12 22 16 C26 16 26 22 22 22 Z" class="icon-cloud-dark" />
                <path d="M15 22 L12 28 L17 28 L16 32" class="icon-lightning" stroke="#f59e0b" stroke-width="2" fill="none" stroke-linejoin="round" />
            `;
        } else {
            
            svgIcon = `
                <circle cx="16" cy="14" r="7" class="icon-sun" fill="#f59e0b" />
                <path d="M11 24 C7 24 7 18 11 18 C12 14 20 14 22 18 C26 18 26 24 22 24 Z" class="icon-cloud" />
            `;
        }

        const div = document.createElement("div");
        div.className = `forecast-item ${index === 0 ? 'active' : ''}`;
        
        const dispMax = currentUnit === "C" ? tempMax : Math.round((tempMax * 9/5) + 32);
        const dispMin = currentUnit === "C" ? tempMin : Math.round((tempMin * 9/5) + 32);

        div.innerHTML = `
            <span class="fc-time">${timeStr}</span>
            <span class="fc-day">${dayStr}</span>
            <svg class="fc-icon" width="32" height="32" viewBox="0 0 32 32">
                ${svgIcon}
            </svg>
            <div class="fc-temps" data-max="${tempMax}" data-min="${tempMin}">${dispMax}° <span class="fc-low">${dispMin}°</span></div>
        `;
        container.appendChild(div);
    });

    
    const dailyRow = document.getElementById("mobile-daily-row");
    if (dailyRow) {
        dailyRow.innerHTML = "";
        
        
        const dayGroups = {};
        list.forEach(slot => {
            const d = new Date(slot.dt * 1000);
            const key = d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }); 
            if (!dayGroups[key]) {
                dayGroups[key] = {
                    temps: [],
                    weather: []
                };
            }
            dayGroups[key].temps.push(slot.main.temp);
            dayGroups[key].weather.push(slot.weather[0].main);
        });

        const dayKeys = Object.keys(dayGroups).slice(0, 6); 
        dayKeys.forEach(key => {
            const temps = dayGroups[key].temps;
            const tempMax = Math.round(Math.max(...temps));
            const tempMin = Math.round(Math.min(...temps));

            const dispMax = currentUnit === "C" ? tempMax : Math.round((tempMax * 9/5) + 32);
            const dispMin = currentUnit === "C" ? tempMin : Math.round((tempMin * 9/5) + 32);

            const div = document.createElement("div");
            div.className = "forecast-item mobile-daily-item";
            div.style.flexDirection = "column";
            div.style.alignItems = "center";
            div.style.gap = "4px";
            div.innerHTML = `
                <span class="fc-time" style="font-weight: 500; font-size: 0.82rem; color: var(--label-color); white-space: nowrap;">${key}</span>
                <span class="fc-temps" data-max="${tempMax}" data-min="${tempMin}" style="font-size: 0.88rem; font-weight: 600; color: var(--text-color); white-space: nowrap;">${dispMax}°/${dispMin}°</span>
            `;
            dailyRow.appendChild(div);
        });
    }
}


function setupCurrentDate() {
    const dateEl = document.getElementById("current-date");
    const now = new Date();
    
    
    const options = { weekday: 'long', day: 'numeric', month: 'short' };
    let formattedDate = now.toLocaleDateString('en-US', options);
    
    
    formattedDate = formattedDate.replace(',', '');
    
    dateEl.textContent = formattedDate;
}


function setupThemeSwitch() {
    const body = document.body;
    const ropePath = document.getElementById("rope-path");
    const ropeTassel = document.getElementById("rope-tassel");
    
    
    const savedTheme = localStorage.getItem("dashboard_theme");
    if (savedTheme === "light") {
        body.className = "light-mode";
    } else {
        body.className = "dark-mode";
    }

    
    function toggleTheme() {
        const isCurrentlyDark = body.classList.contains("dark-mode");
        if (isCurrentlyDark) {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            localStorage.setItem("dashboard_theme", "light");
        } else {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            localStorage.setItem("dashboard_theme", "dark");
        }
    }

    
    window.toggleThemeGlobal = () => {
        toggleTheme();
    };

    if (!ropeTassel || !ropePath) return;

    
    function handlePull() {
        if (body.classList.contains("theme-pulling")) return;
        
        
        body.classList.add("theme-pulling");
        
        
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.frequency.setValueAtTime(600, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.08);
        } catch(e) {}
        
        
        setTimeout(() => {
            toggleTheme();
        }, 150);

        
        setTimeout(() => {
            body.classList.remove("theme-pulling");
        }, 400);
    }

    ropeTassel.addEventListener("click", handlePull);
}


function setupUnitToggle() {
    const btnCel = document.getElementById("btn-cel");
    const btnFah = document.getElementById("btn-fah");

    if (!btnCel || !btnFah) return;

    if (currentUnit === "F") {
        btnCel.classList.remove("active");
        btnFah.classList.add("active");
    } else {
        btnCel.classList.add("active");
        btnFah.classList.remove("active");
    }

    btnCel.addEventListener("click", () => {
        if (currentUnit !== "C") {
            currentUnit = "C";
            localStorage.setItem("weather_unit", "C");
            btnCel.classList.add("active");
            btnFah.classList.remove("active");
            updateUnitsDisplay();
        }
    });

    btnFah.addEventListener("click", () => {
        if (currentUnit !== "F") {
            currentUnit = "F";
            localStorage.setItem("weather_unit", "F");
            btnFah.classList.add("active");
            btnCel.classList.remove("active");
            updateUnitsDisplay();
        }
    });
}

function updateUnitsDisplay() {
    
    const tempEl = document.getElementById("temp-display");
    if (tempEl) {
        const tempC = parseFloat(tempEl.getAttribute("data-celsius"));
        if (!isNaN(tempC)) {
            tempEl.textContent = currentUnit === "C" ? Math.round(tempC) : Math.round((tempC * 9/5) + 32);
        }
    }

    
    const feelsEl = document.getElementById("val-feels");
    if (feelsEl) {
        const feelsC = parseFloat(feelsEl.getAttribute("data-celsius"));
        if (!isNaN(feelsC)) {
            feelsEl.textContent = currentUnit === "C" ? Math.round(feelsC) : Math.round((feelsC * 9/5) + 32);
        }
    }

    
    const forecastTemps = document.querySelectorAll(".fc-temps");
    forecastTemps.forEach(el => {
        const maxC = parseFloat(el.getAttribute("data-max"));
        const minC = parseFloat(el.getAttribute("data-min"));
        if (!isNaN(maxC) && !isNaN(minC)) {
            const maxVal = currentUnit === "C" ? Math.round(maxC) : Math.round((maxC * 9/5) + 32);
            const minVal = currentUnit === "C" ? Math.round(minC) : Math.round((minC * 9/5) + 32);
            el.innerHTML = `${maxVal}° <span class="fc-low">${minVal}°</span>`;
        }
    });
}


function setupLocationModal() {
    const modal = document.getElementById("location-modal");
    const changeBtn = document.getElementById("change-location-btn");
    const closeBtn = document.getElementById("close-modal-btn");
    const searchInput = document.getElementById("modal-search");
    const resultsContainer = document.getElementById("modal-results");

    if (!modal || !changeBtn || !closeBtn || !searchInput || !resultsContainer) return;

    
    changeBtn.addEventListener("click", () => {
        modal.classList.add("active");
        searchInput.value = "";
        searchInput.focus();
        renderModalResults("");
    });

    
    const closeModal = () => {
        modal.classList.remove("active");
    };

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    
    searchInput.addEventListener("input", (e) => {
        renderModalResults(e.target.value);
    });

    
    function renderModalResults(query) {
        resultsContainer.innerHTML = "";
        const cleanQuery = query.toLowerCase().trim();

        
        const matches = [];
        weatherDatabase.forEach(item => {
            item.cities.forEach(city => {
                if (city.name.toLowerCase().includes(cleanQuery) || item.country.toLowerCase().includes(cleanQuery)) {
                    matches.push({
                        cityName: city.name,
                        countryName: item.country
                    });
                }
            });
        });

        if (matches.length === 0) {
            if (cleanQuery.length >= 2) {
                const div = document.createElement("div");
                div.className = "modal-result-item global-search-item";
                div.style.background = "rgba(255, 255, 255, 0.02)";
                div.innerHTML = `
                    <span class="modal-result-name" style="color: #6366f1;">🔍 Search Global: "${query}"</span>
                    <span class="modal-result-country" style="color: #6366f1; font-size: 0.75rem; letter-spacing: 1px;">WORLD METEO</span>
                `;

                div.addEventListener("click", () => {
                    selectNewCity(query, "Global");
                    closeModal();
                });

                resultsContainer.appendChild(div);
            } else {
                resultsContainer.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--label-color); font-size: 0.95rem;">No matching cities found</div>`;
            }
            return;
        }

        matches.forEach(match => {
            const div = document.createElement("div");
            div.className = "modal-result-item";
            div.innerHTML = `
                <span class="modal-result-name">${match.cityName}</span>
                <span class="modal-result-country">${match.countryName}</span>
            `;

            div.addEventListener("click", () => {
                selectNewCity(match.cityName, match.countryName);
                closeModal();
            });

            resultsContainer.appendChild(div);
        });

        
        if (cleanQuery.length >= 2) {
            const div = document.createElement("div");
            div.className = "modal-result-item global-search-item";
            div.style.borderTop = "1px solid rgba(255, 255, 255, 0.08)";
            div.style.background = "rgba(255, 255, 255, 0.02)";
            div.style.marginTop = "8px";
            div.innerHTML = `
                <span class="modal-result-name" style="color: #6366f1;">🔍 Search Global: "${query}"</span>
                <span class="modal-result-country" style="color: #6366f1; font-size: 0.75rem; letter-spacing: 1px;">WORLD METEO</span>
            `;

            div.addEventListener("click", () => {
                selectNewCity(query, "Global");
                closeModal();
            });

            resultsContainer.appendChild(div);
        }
    }

    
    async function selectNewCity(cityName, countryName) {
        
        localStorage.setItem("weather_city", cityName);
        localStorage.setItem("weather_country", countryName);

        
        document.getElementById("location-name").textContent = `${cityName}, ${countryName}`;

        
        try {
            let currentData;
            try {
                const resCurrent = await fetch(`/api/weather?q=${encodeURIComponent(cityName)}&type=weather`);
                if (resCurrent.status === 404) throw new Error("Proxy not available");
                currentData = await resCurrent.json();
            } catch (e) {
                const resCurrent = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&units=metric&appid=${API_KEY}`);
                currentData = await resCurrent.json();
            }
            
            if(currentData.cod === 200) {
                updateCurrentWeather(currentData);
                
                const officialCity = currentData.name;
                const officialCountry = getCountryName ? getCountryName(currentData.sys.country) : currentData.sys.country;
                
                localStorage.setItem("weather_city", officialCity);
                localStorage.setItem("weather_country", officialCountry);
                document.getElementById("location-name").textContent = `${officialCity}, ${officialCountry}`;
            } else {
                fallbackMetrics(cityName);
            }

            let forecastData;
            try {
                const resForecast = await fetch(`/api/weather?q=${encodeURIComponent(cityName)}&type=forecast`);
                if (resForecast.status === 404) throw new Error("Proxy not available");
                forecastData = await resForecast.json();
            } catch (e) {
                const resForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(cityName)}&units=metric&appid=${API_KEY}`);
                forecastData = await resForecast.json();
            }

            if(forecastData.cod == 200) {
                updateForecastRow(forecastData.list);
            } else {
                generateFallbackForecast();
            }
        } catch (err) {
            console.error("Change Location API Fetch Error:", err);
            fallbackMetrics(cityName);
            generateFallbackForecast();
        }
    }
}


function setupLogout() {
    const logoutBtn = document.getElementById("logout-btn");
    if (!logoutBtn) return;

    logoutBtn.addEventListener("click", () => {
        
        localStorage.removeItem("weather_username");
        localStorage.removeItem("weather_city");
        localStorage.removeItem("weather_country");
        localStorage.removeItem("weather_city_code");
        localStorage.removeItem("weather_country_code");

        
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(800, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.35);
            
            gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
            
            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + 0.35);
        } catch (e) {
            console.log("AudioContext blocked or not supported by browser guest policy.");
        }

        
        setTimeout(() => {
            window.location.href = "index.html";
        }, 150);
    });
}


const countryCodeMap = {
    "IN": "India", "US": "United States", "GB": "United Kingdom", "CA": "Canada", "AU": "Australia", "JP": "Japan",
    "FR": "France", "DE": "Germany", "IT": "Italy", "ES": "Spain", "BR": "Brazil", "RU": "Russia", "CN": "China",
    "ZA": "South Africa", "SG": "Singapore", "NZ": "New Zealand", "AE": "United Arab Emirates", "CH": "Switzerland",
    "NL": "Netherlands", "SE": "Sweden", "NO": "Norway", "FI": "Finland", "DK": "Denmark", "IE": "Ireland",
    "IT": "Italy", "PT": "Portugal", "GR": "Greece", "TR": "Turkey", "EG": "Egypt", "MX": "Mexico", "AR": "Argentina"
};

function getCountryName(code) {
    return countryCodeMap[code.toUpperCase()] || code;
}


function generateFallbackForecast() {
    const container = document.getElementById("forecast-row");
    if (container) {
        container.innerHTML = "";
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const now = new Date();

        for (let i = 0; i < 8; i++) {
            const d = new Date(now.getTime() + (i * 3 * 60 * 60 * 1000));
            let hours = d.getHours();
            const ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            const timeStr = `${hours} ${ampm}`;
            const dayStr = days[d.getDay()];

            
            const tempMax = 27 + Math.round(Math.sin(i * 1.5) * 4);
            const tempMin = 21 + Math.round(Math.cos(i * 1.5) * 3);

            const svgIcon = `<circle cx="16" cy="16" r="9" class="icon-sun" fill="#f59e0b" />`;

            const div = document.createElement("div");
            div.className = `forecast-item ${i === 0 ? 'active' : ''}`;
            
            const dispMax = currentUnit === "C" ? tempMax : Math.round((tempMax * 9/5) + 32);
            const dispMin = currentUnit === "C" ? tempMin : Math.round((tempMin * 9/5) + 32);

            div.innerHTML = `
                <span class="fc-time">${timeStr}</span>
                <span class="fc-day">${dayStr}</span>
                <svg class="fc-icon" width="32" height="32" viewBox="0 0 32 32">
                    ${svgIcon}
                </svg>
                <div class="fc-temps" data-max="${tempMax}" data-min="${tempMin}">${dispMax}° <span class="fc-low">${dispMin}°</span></div>
            `;
            container.appendChild(div);
        }
    }

    
    const dailyRow = document.getElementById("mobile-daily-row");
    if (dailyRow) {
        dailyRow.innerHTML = "";
        const now = new Date();
        for (let i = 0; i < 6; i++) {
            const d = new Date(now.getTime() + (i * 24 * 60 * 60 * 1000));
            const key = d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
            
            const tempMax = 29 + Math.round(Math.sin(i) * 3);
            const tempMin = 22 + Math.round(Math.cos(i) * 2);

            const dispMax = currentUnit === "C" ? tempMax : Math.round((tempMax * 9/5) + 32);
            const dispMin = currentUnit === "C" ? tempMin : Math.round((tempMin * 9/5) + 32);

            const div = document.createElement("div");
            div.className = "forecast-item mobile-daily-item";
            div.style.flexDirection = "column";
            div.style.alignItems = "center";
            div.style.gap = "4px";
            div.innerHTML = `
                <span class="fc-time" style="font-weight: 500; font-size: 0.82rem; color: var(--label-color); white-space: nowrap;">${key}</span>
                <span class="fc-temps" data-max="${tempMax}" data-min="${tempMin}" style="font-size: 0.88rem; font-weight: 600; color: var(--text-color); white-space: nowrap;">${dispMax}°/${dispMin}°</span>
            `;
            dailyRow.appendChild(div);
        }
    }
}


function playTensionSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1800, audioCtx.currentTime + 0.04);
        
        gainNode.gain.setValueAtTime(0.012, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
        
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.04);
    } catch (e) {}
}
