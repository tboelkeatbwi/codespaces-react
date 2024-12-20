import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>Chatbot Jeff</p>
      </header>
      <body>
        <div class="card">
          <div id="header">
            <h1>Jeff!</h1>
          </div>
          <div id="message-section">
            <div class="message" id="bot"><span id="bot-response">test</span></div>
          </div>
          <div id="input-section">
            <input id="input" type="text" placeholder="Schreibe Jeff" autocomplete="off" autofocus="autofocus" />
            <button class="send" onclick="sendMessage()">
              <div class="circle">➡️</div>
            </button>
          </div>
        </div>

      </body>

    </div>
  );
}

export default App;
