window.onload = () => {
    setTimeout(() => {
        chrome.tabs.query({highlighted: true}, async (selectedTabs) => {
            await navigator.clipboard.writeText(selectedTabs.map(tab => {
                if (tab.url.startsWith('chrome-extension://blajeahooddnggbmhkcjpclkfanjdajj/suspended.html')) {
                    let url = new URL(tab.url.replace('#', '?'));
                    return url.searchParams.get('uri');
                }
                return tab.url;
            }).join('\n'));
            window.close();
        });
    }, 0);
};