function removeColorControl() {
    const styleId = "un-color-display";
    const styleContent = `
           html {
             filter: grayscale(1)!important;
           }
         `;
   
    const styleElement = document.getElementById(styleId);
   
    if (styleElement) {
     document.head.removeChild(styleElement);
    } else {
     const newStyleElement = document.createElement("style");
     newStyleElement.id = styleId;
     newStyleElement.innerHTML = styleContent;
     document.head.appendChild(newStyleElement);
    }
   }
   
   chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'removeColorControl') {
     removeColorControl();
    }
   });