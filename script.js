
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


const countryImages = {
    "India": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    "United States": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80",
    "United Kingdom": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    "Canada": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
    "Australia": "https://images.unsplash.com/photo-1524820197278-540916411e20?auto=format&fit=crop&w=1200&q=80",
    "Japan": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80"
};

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


const state = {
    username: "",
    selectedCountry: null,
    selectedCity: null
};


let activeImgId = 1;
function updateRightPanelImage(url) {
    const nextImgId = activeImgId === 1 ? 2 : 1;
    const currentImg = document.getElementById(`city-img-${activeImgId}`);
    const nextImg = document.getElementById(`city-img-${nextImgId}`);
    
    if (nextImg) {
        nextImg.style.backgroundImage = `url('${url}')`;
        nextImg.classList.add('active');
    }
    if (currentImg) {
        currentImg.classList.remove('active');
    }
    
    activeImgId = nextImgId;
}


const usernameInput = document.getElementById("username");
const countryDropdown = document.getElementById("country-dropdown");
const countryOptionsContainer = document.getElementById("country-options");
const countrySearchInput = countryDropdown.querySelector(".dropdown-search-input");

const cityDropdown = document.getElementById("city-dropdown");
const cityOptionsContainer = document.getElementById("city-options");
const citySearchInput = cityDropdown.querySelector(".dropdown-search-input");

const proceedBtn = document.getElementById("proceed-btn");


document.addEventListener("DOMContentLoaded", () => {
    
    if (localStorage.getItem("weather_username")) {
        window.location.href = "dashboard.html";
        return;
    }

    initCountryDropdown();
    setupEventListeners();
    setupLandingTransition();
    updateSetupProgress(); 
});


function setupEventListeners() {
    
    usernameInput.addEventListener("input", (e) => {
        state.username = e.target.value.trim();
        validateForm();
    });

    
    usernameInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (state.username.length >= 2) {
                
                const span = document.createElement('span');
                span.style.fontFamily = "'Playfair Display', serif";
                span.style.fontSize = "1.8rem";
                span.style.visibility = "hidden";
                span.style.position = "absolute";
                span.style.whiteSpace = "pre";
                span.textContent = state.username;
                document.body.appendChild(span);
                
                const textWidth = span.offsetWidth;
                document.body.removeChild(span);
                
                
                const stepElement = document.getElementById("step-username");
                stepElement.querySelector('.input-wrapper').style.setProperty('--text-width', `${textWidth}px`);
                
                stepElement.classList.remove("active");
                stepElement.classList.add("completed");
                document.getElementById("step-country").classList.add("active");
                updateSetupProgress();
            }
        }
    });

    
    document.querySelectorAll('.form-step').forEach(step => {
        step.addEventListener('click', function(e) {
            if (this.classList.contains('completed')) {
                this.classList.remove('completed');
                this.classList.add('active');
                
                
                if (this.id === 'step-username') {
                    state.selectedCountry = null;
                    state.selectedCity = null;
                    
                    countryDropdown.querySelector(".trigger-text").textContent = "Choose Your Country";
                    cityDropdown.querySelector(".trigger-text").textContent = "Choose Your City";
                    cityDropdown.classList.add("disabled");
                    
                    document.getElementById("step-country").classList.remove("active", "completed");
                    document.getElementById("step-city").classList.remove("active", "completed");
                    document.getElementById("step-submit").classList.remove("active");
                    
                    validateForm();
                } else if (this.id === 'step-country') {
                    state.selectedCountry = null;
                    state.selectedCity = null;
                    
                    countryDropdown.querySelector(".trigger-text").textContent = "Choose Your Country";
                    cityDropdown.querySelector(".trigger-text").textContent = "Choose Your City";
                    cityDropdown.classList.add("disabled");
                    
                    document.getElementById("step-city").classList.remove("active", "completed");
                    document.getElementById("step-submit").classList.remove("active");
                    
                    validateForm();
                } else if (this.id === 'step-city') {
                    state.selectedCity = null;
                    cityDropdown.querySelector(".trigger-text").textContent = "Choose Your City";
                    
                    document.getElementById("step-submit").classList.remove("active");
                    
                    validateForm();
                }
                updateSetupProgress();
            }
        });
    });

    
    countryDropdown.querySelector(".dropdown-trigger").addEventListener("click", (e) => {
        e.stopPropagation();
        toggleDropdown(countryDropdown);
    });

    
    cityDropdown.querySelector(".dropdown-trigger").addEventListener("click", (e) => {
        e.stopPropagation();
        if (!cityDropdown.classList.contains("disabled")) {
            toggleDropdown(cityDropdown);
        }
    });

    
    countrySearchInput.addEventListener("input", (e) => {
        filterOptions(countryOptionsContainer, e.target.value);
    });

    citySearchInput.addEventListener("input", (e) => {
        filterOptions(cityOptionsContainer, e.target.value);
    });

    
    document.addEventListener("click", () => {
        closeAllDropdowns();
    });

    
    document.getElementById("setup-form").addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateForm()) {
            
            localStorage.setItem("weather_username", state.username);
            localStorage.setItem("weather_country", state.selectedCountry.country);
            localStorage.setItem("weather_country_code", state.selectedCountry.code);
            localStorage.setItem("weather_city", state.selectedCity.name);
            localStorage.setItem("weather_city_code", state.selectedCity.code);

            
            proceedBtn.classList.add("processing");
            proceedBtn.innerHTML = `
                <span>Entering...</span>
                <div class="loader-spinner"></div>
            `;
            
            
            if (!document.getElementById("spinner-styles")) {
                const style = document.createElement("style");
                style.id = "spinner-styles";
                style.innerHTML = `
                    .loader-spinner {
                        width: 18px;
                        height: 18px;
                        border: 2px solid rgba(255, 255, 255, 0.3);
                        border-top-color: white;
                        border-radius: 50%;
                        animation: spin 0.6s linear infinite;
                    }
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `;
                document.head.appendChild(style);
            }

            console.log("Saving state to LocalStorage:", state);

            
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000);
        }
    });
}


function toggleDropdown(dropdown) {
    const isOpen = dropdown.classList.contains("open");
    closeAllDropdowns();

    if (!isOpen) {
        dropdown.classList.add("open");
        
        const searchInput = dropdown.querySelector(".dropdown-search-input");
        if (searchInput) {
            setTimeout(() => {
                searchInput.value = "";
                searchInput.focus();
                
                filterOptions(dropdown.querySelector(".dropdown-options"), "");
            }, 50);
        }
    }
}

function closeAllDropdowns() {
    countryDropdown.classList.remove("open");
    cityDropdown.classList.remove("open");
}


function initCountryDropdown() {
    countryOptionsContainer.innerHTML = "";
    
    weatherDatabase.forEach(item => {
        const option = document.createElement("div");
        option.className = "dropdown-option";
        option.innerHTML = `
            <span class="option-name">${item.country}</span>
            <span class="option-code">${item.code}</span>
        `;

        option.addEventListener("click", (e) => {
            e.stopPropagation();
            selectCountry(item);
        });

        countryOptionsContainer.appendChild(option);
    });
}


function selectCountry(countryObj) {
    state.selectedCountry = countryObj;
    state.selectedCity = null; 
    
    
    countryDropdown.querySelector(".trigger-text").textContent = countryObj.country;
    
    
    cityDropdown.querySelector(".trigger-text").textContent = "Choose Your City";
    cityDropdown.classList.remove("disabled");
    
    
    populateCities(countryObj.cities);
    
    closeAllDropdowns();
    validateForm();

    
    const bgUrl = countryImages[countryObj.country];
    if (bgUrl) {
        updateRightPanelImage(bgUrl);
        document.getElementById("image-credit").textContent = countryObj.country.toUpperCase() + " / REGION";
    }

    
    document.getElementById("step-country").classList.remove("active");
    document.getElementById("step-country").classList.add("completed");
    document.getElementById("step-city").classList.add("active");
    updateSetupProgress();
}


function populateCities(cities) {
    cityOptionsContainer.innerHTML = "";
    
    cities.forEach(city => {
        const option = document.createElement("div");
        option.className = "dropdown-option";
        option.innerHTML = `
            <span class="option-name">${city.name}</span>
            <span class="option-code">${city.code}</span>
        `;

        option.addEventListener("click", (e) => {
            e.stopPropagation();
            selectCity(city);
        });

        cityOptionsContainer.appendChild(option);
    });
}


function selectCity(cityObj) {
    state.selectedCity = cityObj;
    
    
    cityDropdown.querySelector(".trigger-text").textContent = cityObj.name;
    
    closeAllDropdowns();
    validateForm();

    
    const bgUrl = cityImages[cityObj.name];
    if (bgUrl) {
        updateRightPanelImage(bgUrl);
        document.getElementById("image-credit").textContent = cityObj.name.toUpperCase() + ", " + state.selectedCountry.code;
    }

    
    document.getElementById("step-city").classList.remove("active");
    document.getElementById("step-city").classList.add("completed");
    document.getElementById("step-submit").classList.add("active");
    updateSetupProgress();
}


function filterOptions(container, query) {
    const q = query.trim().toLowerCase();
    const options = container.querySelectorAll(".dropdown-option");
    let visibleCount = 0;

    
    const existingNoMatch = container.querySelector(".no-match-placeholder");
    if (existingNoMatch) {
        existingNoMatch.remove();
    }

    
    const existingGlobalSearch = container.querySelectorAll(".global-search-option");
    existingGlobalSearch.forEach(el => el.remove());

    options.forEach(opt => {
        const name = opt.querySelector(".option-name").textContent.toLowerCase();
        const code = opt.querySelector(".option-code").textContent.toLowerCase();
        
        if (name.includes(q) || code.includes(q)) {
            opt.style.display = "flex";
            visibleCount++;
        } else {
            opt.style.display = "none";
        }
    });

    
    if (q.length >= 2) {
        const globalOpt = document.createElement("div");
        globalOpt.className = "dropdown-option global-search-option";
        globalOpt.style.borderTop = "1px solid rgba(255, 255, 255, 0.08)";
        globalOpt.style.marginTop = "8px";
        globalOpt.style.background = "rgba(255, 255, 255, 0.03)";
        globalOpt.innerHTML = `
            <span class="option-name" style="color: #6366f1; font-weight: 500;">🔍 Search Global: "${query}"</span>
            <span class="option-code" style="color: #6366f1; font-size: 0.75rem; letter-spacing: 1px;">WORLD</span>
        `;
        
        globalOpt.addEventListener("click", async (e) => {
            e.stopPropagation();
            await performGlobalSearch(query);
        });
        container.appendChild(globalOpt);
        visibleCount++;
    }

    
    if (visibleCount === 0) {
        const placeholder = document.createElement("div");
        placeholder.className = "no-match-placeholder";
        placeholder.style.cssText = `
            padding: 20px 24px;
            color: rgba(255, 255, 255, 0.45);
            font-family: 'Neue Montreal', 'Montserrat', sans-serif;
            font-style: italic;
            text-align: center;
            font-size: 0.95rem;
            animation: fadeIn 0.25s ease;
        `;
        placeholder.textContent = "no matches found";
        container.appendChild(placeholder);

        
        if (!document.getElementById("fade-in-style")) {
            const style = document.createElement("style");
            style.id = "fade-in-style";
            style.innerHTML = `@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`;
            document.head.appendChild(style);
        }
    }
}


function validateForm() {
    const isUsernameValid = state.username.length >= 2;
    const isCountryValid = state.selectedCountry !== null;
    const isCityValid = state.selectedCity !== null;

    const isValid = isUsernameValid && isCountryValid && isCityValid;

    if (isValid) {
        proceedBtn.removeAttribute("disabled");
    } else {
        proceedBtn.setAttribute("disabled", "true");
    }

    return isValid;
}


function setupLandingTransition() {
    const startBtn = document.getElementById("start-setup-btn");
    const landing = document.getElementById("landing-screen");
    const splitContainer = document.querySelector(".split-container");

    if (!startBtn || !landing || !splitContainer) return;

    
    history.replaceState({ stage: "landing" }, "");

    startBtn.addEventListener("click", () => {
        
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(440, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15);
            
            gainNode.gain.setValueAtTime(0.06, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
            
            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + 0.15);
        } catch (e) {
            console.log("AudioContext blocked or not supported by browser guest policy.");
        }

        
        history.pushState({ stage: "setup" }, "");
        goToSetup();
    });

    
    window.addEventListener("popstate", (event) => {
        if (event.state && event.state.stage === "setup") {
            goToSetup();
        } else {
            goToLanding();
        }
    });

    function goToSetup() {
        
        landing.classList.add("fade-out");
        setTimeout(() => {
            landing.style.display = "none";
            splitContainer.classList.add("active");
            
            const usernameInput = document.getElementById("username");
            if (usernameInput) {
                usernameInput.focus();
            }
        }, 800);
    }

    function goToLanding() {
        
        splitContainer.classList.remove("active");
        setTimeout(() => {
            landing.style.display = "flex";
            
            requestAnimationFrame(() => {
                landing.classList.remove("fade-out");
            });
        }, 450); 
    }
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

const API_KEY = "2f91f290552fb1f1a03f4661810dc8bd";


async function performGlobalSearch(query) {
    
    const isActiveCity = cityDropdown.classList.contains("active") || !cityDropdown.classList.contains("disabled");
    const targetDropdown = isActiveCity ? cityDropdown : countryDropdown;
    const triggerTextEl = targetDropdown.querySelector(".trigger-text");
    const originalText = triggerTextEl.textContent;

    
    triggerTextEl.innerHTML = `<span>Validating "${query}"...</span><div class="inline-spinner"></div>`;

    if (!document.getElementById("inline-spinner-styles")) {
        const style = document.createElement("style");
        style.id = "inline-spinner-styles";
        style.innerHTML = `
            .inline-spinner {
                display: inline-block;
                width: 12px;
                height: 12px;
                border: 2px solid rgba(255, 255, 255, 0.3);
                border-top-color: white;
                border-radius: 50%;
                margin-left: 10px;
                vertical-align: middle;
                animation: inline-spin 0.6s linear infinite;
            }
            @keyframes inline-spin {
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    try {
        let data;
        try {
            const res = await fetch(`/api/weather?q=${encodeURIComponent(query)}&type=weather`);
            if (res.status === 404) throw new Error("API proxy not available locally");
            data = await res.json();
        } catch (proxyError) {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&units=metric&appid=${API_KEY}`);
            data = await res.json();
        }

        if (data.cod == 200) {
            const resolvedCountry = getCountryName(data.sys.country);
            const resolvedCity = data.name;

            
            state.selectedCountry = { country: resolvedCountry, code: data.sys.country };
            state.selectedCity = { name: resolvedCity, code: data.id.toString() };
            state.username = document.getElementById("username").value.trim() || "Intern";

            
            countryDropdown.querySelector(".trigger-text").textContent = resolvedCountry;
            cityDropdown.querySelector(".trigger-text").textContent = resolvedCity;
            cityDropdown.classList.remove("disabled");

            closeAllDropdowns();

            
            const finalImgUrl = cityImages[resolvedCity] || `https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80`;
            updateRightPanelImage(finalImgUrl);
            document.getElementById("image-credit").textContent = resolvedCity.toUpperCase() + " / GLOBAL NETWORK";

            
            document.getElementById("step-username").classList.remove("active");
            document.getElementById("step-username").classList.add("completed");

            document.getElementById("step-country").classList.remove("active");
            document.getElementById("step-country").classList.add("completed");

            document.getElementById("step-city").classList.remove("active");
            document.getElementById("step-city").classList.add("completed");

            document.getElementById("step-submit").classList.add("active");

            validateForm();
            updateSetupProgress();

            
            try {
                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); 
                osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); 
                gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
                osc.start(audioCtx.currentTime);
                osc.stop(audioCtx.currentTime + 0.25);
            } catch(e){}

        } else {
            throw new Error(data.message || "Location not found");
        }
    } catch (err) {
        console.error("Global search fetch validation error:", err);
        triggerTextEl.textContent = originalText;
        alert(`Could not calibrate "${query}". Please verify spelling or server connectivity.`);
    }
}


function updateSetupProgress() {
    const prog1 = document.getElementById("prog-1");
    const prog2 = document.getElementById("prog-2");
    const prog3 = document.getElementById("prog-3");
    
    const line1 = document.getElementById("line-1");
    const line2 = document.getElementById("line-2");

    const stepUser = document.getElementById("step-username");
    const stepCountry = document.getElementById("step-country");
    const stepCity = document.getElementById("step-city");

    if (!prog1 || !prog2 || !prog3) return;

    
    prog1.classList.remove("active-step", "completed");
    prog2.classList.remove("active-step", "completed");
    prog3.classList.remove("active-step", "completed");
    if (line1) line1.classList.remove("filled");
    if (line2) line2.classList.remove("filled");

    
    if (stepUser.classList.contains("completed")) {
        prog1.classList.add("completed");
        if (line1) line1.classList.add("filled");
    } else if (stepUser.classList.contains("active")) {
        prog1.classList.add("active-step");
    }

    
    if (stepCountry.classList.contains("completed")) {
        prog2.classList.add("completed");
        if (line2) line2.classList.add("filled");
    } else if (stepCountry.classList.contains("active")) {
        prog2.classList.add("active-step");
    }

    
    if (stepCity.classList.contains("completed")) {
        prog3.classList.add("completed");
    } else if (stepCity.classList.contains("active")) {
        prog3.classList.add("active-step");
    }
}
