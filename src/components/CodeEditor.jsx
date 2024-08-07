"use state";
import React, { useState } from "react";
import Editor, { lineNumber } from "react-prism-editor";

const codeBlock = `"use state";
import React, { useState } from "react";
import Editor, { lineNumber } from "react-prism-editor";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  return (
    <div className="px-2 lg:w-[50rem] h-auto lg:h-[50rem] overflow-y-auto overflow-x-hidden">
      <Editor
        language="jsx"
        defaultCode="print('Hello world!')"
        theme="default"
        lineNumber={lineNumber}
        readOnly={false}
        clipboard={true}
        changeCode={(newCode) => setCode(newCode)}
      />
    </div>
  );
};

export default CodeEditor;
`;
const CodeEditor = () => {
  const [code, setCode] = useState("");
  return (
    <div className="px-2 lg:w-[50rem] h-auto lg:h-[50rem] overflow-y-auto overflow-x-hidden">
      <Editor
        language="jsx"
        defaultCode={codeBlock}
        theme="default"
        lineNumber={lineNumber}
        readOnly={false}
        clipboard={true}
        changeCode={(newCode) => setCode(newCode)}
      />
    </div>
  );
};

export default CodeEditor;
