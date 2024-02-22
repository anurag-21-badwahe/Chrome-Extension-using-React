function App() {
  function toggleGrayscale() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (tab && tab.id !== undefined) {
        chrome.tabs.sendMessage(tab.id, {
          action: "removeColorControl",
        });
      }
    });
  }

  return (
    <div className="App">
      <h1>Hello extension from react</h1>
      <button onClick={toggleGrayscale}>Remove Color</button>
    </div>
  );
}

export default App;
