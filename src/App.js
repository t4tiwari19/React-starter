import React, { useEffect, useState } from 'react';
import { MakeExtoleAPIRequest, SendEmail } from '@app/FakeAPI';
import extoleRes from '@app/FakeResponse/extoleRes.json';
import emailRes from '@app/FakeResponse/emailRes.json';
import './App.css';
function App() {
  let [responseData, setExtoleResponseData] = useState('');
  let [emailResData, setEmailResponseData] = useState('');

  useEffect(() => {
    MakeExtoleAPIRequest(setExtoleResponseData);
  }, [MakeExtoleAPIRequest]);

  const handleSendEmail = () => {
    SendEmail(setEmailResponseData);
  };
  console.log('DATA', { responseData, emailResData, extoleRes, emailRes });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Extole Response View</h1>
        <button type="button" onClick={handleSendEmail}>
          Send Email
        </button>
      </header>
      <main>
        {responseData && (
          <blockquote>
            <pre>
              <code>{responseData && JSON.stringify(responseData, null, 2)}</code>
            </pre>
          </blockquote>
        )}

        {emailResData && (
          <blockquote>
            <pre>
              <code>{emailResData && JSON.stringify(emailResData, null, 2)}</code>
            </pre>
          </blockquote>
        )}
      </main>
    </div>
  );
}
export default App;
