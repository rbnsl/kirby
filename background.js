chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const url = tab.url || tab.pendingUrl;

  if (!url) {
    return;
  }

  chrome.storage.sync.get("sites", (data) => {
    for (const site of data.sites) {
      if (url.includes(site)) {
        chrome.tabs.update(tabId, { url: "./blah.html" });
      }
    }
  });
});
