chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
            document.body.style.transform = 
                document.body.style.transform === "rotate(180deg)" ? "" : "rotate(180deg)";
        }
    });
});
