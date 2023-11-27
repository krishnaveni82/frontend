// import React from 'react';

// const CSMLChatBot = () => {
//     return (
//         <iframe
//           title="CSML Chatbot"
//           src="https://chat.csml.dev/s/reimntl1jjrc7z7h6i4ssragmkidgptl"
//           style={{
//             width: '100%',
//             height: '100%',
//             border: 'none',
//           }}
//         ></iframe>
//       );
// };
// export default CSMLChatBot;


import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const PopupChat = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleClick = () => {
    setShowIframe(!showIframe);
  };

  return (
    <div>
      <i className="fa fa-comments" style={{ fontSize: '3rem', cursor: 'pointer', color:'#228693' }} onClick={handleClick}></i>
      {showIframe && (
        <div
          style={{
            position: 'fixed',
            bottom: '0',
            right: '0',
            width: '350px',
            height: '500px',
            zIndex: '1000',
            background: '#ffffff',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)',
          }}
        >
          <iframe
            title="Chatbot"
            src="https://chat.csml.dev/s/reimntl1jjrc7z7h6i4ssragmkidgptl"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default PopupChat;
