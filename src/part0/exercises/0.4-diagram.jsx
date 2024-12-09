import mermaid from "mermaid";
import { useEffect, useRef } from "react";

function FirstDiagram() {
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

          Note right of browser: U write da note and click "save"

          browser->>server: POST /new_note with req.body "note"
          activate server
          Note left of server: Push a new note
          server-->>browser:  HTTP Status 302
          deactivate server

          Note right of browser: Send a GET Request to notes page
          browser->>server: GET /notes
          activate server
          server-->>browser: HTML file
          deactivate server

          browser->>server: GET /main.css
          activate server
          server-->>browser: CSS file
          deactivate server

          browser->>server: GET /main.js
          activate server
          server-->>browser: JS file
          deactivate server

          Note right of browser: Execute JS code and fetch the JSON

          browser->>server: GET /data.json
          activate server
          server-->>browser: [notes] in format data.json
          deactivate server

          Note right of browser: Renders notes
        `}
        </div>
    );
  }

export default FirstDiagram