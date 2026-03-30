async function getData() {
    const response = await fetch('YOUR_API_GATEWAY_URL');
    const data = await response.json();

    const results = document.getElementById('results');
    results.innerHTML = '';

    data.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        results.appendChild(li);
    });
}

// examples... might not work irl
