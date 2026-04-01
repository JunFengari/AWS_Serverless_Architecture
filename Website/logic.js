async function getData() {
    try {
        const response = await fetch('YOUR_API_GATEWAY_URL/data'); // Add the full URL here
        const data = await response.json();

        const results = document.getElementById('results');
        results.innerHTML = '';

        if (data.length === 0) {
            results.textContent = 'No data available.';
            return;
        }

        // Display each greenhouse measurement in a readable format
        data.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = `${item.KasvihuoneID} | ${item.LaiteTyyppi} = ${item.Mittausarvo} | ${item.AikaLeima}`;
            results.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        const results = document.getElementById('results');
        results.textContent = 'Error fetching data.';
    }
}
