import mermaid from "mermaid";
import { useEffect, useRef } from "react";

function SecondDiagram() {
  const diagramRef = useRef(null);

  useEffect(() => {
    mermaid.initialize({startOnLoad: true})
    if (diagramRef.current){
      mermaid.contentLoaded();
    }
  }, [])
  
    return (
        <div ref={diagramRef} className="mermaid">
        {`sequenceDiagram
          participant browser
          participant server

          Note right of browser: U access to SPA Web

          browser->>server: GET /spa
          activate server
          server-->>browser:  HTML file
          deactivate server

          browser->>server: GET /main.css
          activate server
          server-->>browser:  CSS file
          deactivate server

          browser->>server: GET /spa.js
          activate server
          server-->>browser:  JS file
          deactivate server

          Note right of browser: Execute JS code and fetch the JSON

          browser->>server: GET /data.json
          activate server
          server-->>browser: [notes] in format data.json
          deactivate server

          Note right of browser: Renders notes

          browser->>server: GET /favicon.ico
          activate server
          server-->>browser: HTTP 404 Status
          deactivate server
        `}
        </div>
    );
  }

export default SecondDiagram