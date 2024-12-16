import mermaid from "mermaid";
import { useEffect, useRef } from "react";

function ThirdDiagram() {
    const diagramRef = useRef(null);

    useEffect(() => {
        mermaid.initialize({startOnLoad: true})
        if (diagramRef.current){
        mermaid.contentLoaded();
        }
    }, [])

    return (
        <div>
            <div ref={diagramRef} className="mermaid">
            {`sequenceDiagram
            participant browser
            participant server

            Note right of browser: U write da note and click "save"

            browser->>server: POST /new_note_spa with e.preventDefault()
            browser->>browser: Push the note to the pre-loaded data.json
            activate server
            server-->>browser:  "note created"
            deactivate server
            `}
            </div>
            <p>The browser does not fetch the notes again, so it shows a pre-loaded data.json. The server may not create the note correctly and the note may not be added correctly to the database&apos;s data.json.
            </p>
        </div>
    );
}

export default ThirdDiagram