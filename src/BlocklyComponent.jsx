import React, { useEffect, useRef } from 'react';
import * as Blockly from 'blockly';

const BlocklyComponent = () => {
  const blocklyDiv = useRef(null);
  const toolbox = useRef(null);
  const workspaceRef = useRef(null);

  useEffect(() => {
    workspaceRef.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
    });

    const xmlText = `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="controls_if" x="10" y="20"></block>
      </xml>
    `;
    const dom = Blockly.Xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(dom, workspaceRef.current);
  }, []);

  return (
    <>
      <xml
        xmlns="https://developers.google.com/blockly/xml"
        is="toolbox"
        style={{ display: 'none' }}
        ref={toolbox}
      >
        <block type="controls_if" />
      </xml>
      <div ref={blocklyDiv} style={{ height: '480px', width: '100%' }}></div>
    </>
  );
};

export default BlocklyComponent;
