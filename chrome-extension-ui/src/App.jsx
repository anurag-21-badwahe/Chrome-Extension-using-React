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
      <h1>Vanish Colors</h1>
      <button className = ".btn" onClick={toggleGrayscale} style = {{"backgroundColor" : "#89CFF0","marginLeft" : "55px"}}>Remove Color</button>
    </div>
  );
}

export default App;
