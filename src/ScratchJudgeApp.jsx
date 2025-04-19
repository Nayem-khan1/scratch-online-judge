import React, { useEffect, useRef, useState } from "react";
import * as Blockly from "blockly"; // ✅ Use main Blockly package
import { javascriptGenerator } from "blockly/javascript"; // ✅ Still fine

const problem = {
    title: "হ্যালো বলো",
    description: "'Hello, World!' প্রিন্ট করো।",
    input: [],
    expected_output: "Hello, World!",
  };

export default function ScratchJudgeApp() {
  const blocklyDiv = useRef(null);
  const workspaceRef = useRef(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    try {
      workspaceRef.current?.dispose();
    } catch (err) {
      console.warn("Error disposing workspace:", err);
    }

    javascriptGenerator.forBlock["text_print"] = function (block, generator) {
      const msg =
        generator.valueToCode(block, "TEXT", generator.ORDER_NONE) || "''";
      return `console.log(${msg});\n`;
    };

    const toolboxXml = `
      <xml>
        <category name="Logic" colour="210">
          <block type="controls_if" />
          <block type="logic_compare" />
          <block type="logic_operation" />
          <block type="logic_negate" />
          <block type="logic_boolean" />
          <block type="logic_null" />
          <block type="logic_ternary" />
        </category>

        <category name="Loops" colour="120">
          <block type="controls_repeat_ext">
            <value name="TIMES">
              <shadow type="math_number">
                <field name="NUM">10</field>
              </shadow>
            </value>
          </block>
          <block type="controls_whileUntil" />
          <block type="controls_for">
            <value name="FROM">
              <shadow type="math_number">
                <field name="NUM">1</field>
              </shadow>
            </value>
            <value name="TO">
              <shadow type="math_number">
                <field name="NUM">10</field>
              </shadow>
            </value>
            <value name="BY">
              <shadow type="math_number">
                <field name="NUM">1</field>
              </shadow>
            </value>
          </block>
          <block type="controls_forEach" />
          <block type="controls_flow_statements" />
        </category>

        <category name="Math" colour="230">
          <block type="math_number" />
          <block type="math_arithmetic" />
          <block type="math_single" />
          <block type="math_trig" />
          <block type="math_constant" />
          <block type="math_number_property" />
          <block type="math_round" />
          <block type="math_on_list" />
          <block type="math_modulo" />
          <block type="math_constrain" />
          <block type="math_random_int" />
          <block type="math_random_float" />
        </category>

        <category name="Text" colour="160">
          <block type="text" />
          <block type="text_join" />
          <block type="text_append" />
          <block type="text_length" />
          <block type="text_isEmpty" />
          <block type="text_indexOf" />
          <block type="text_charAt" />
          <block type="text_getSubstring" />
          <block type="text_changeCase" />
          <block type="text_trim" />
          <block type="text_print" />
          <block type="text_prompt_ext" />
        </category>

        <category name="Lists" colour="260">
          <block type="lists_create_with" />
          <block type="lists_repeat" />
          <block type="lists_length" />
          <block type="lists_isEmpty" />
          <block type="lists_indexOf" />
          <block type="lists_getIndex" />
          <block type="lists_setIndex" />
          <block type="lists_getSublist" />
          <block type="lists_split" />
          <block type="lists_sort" />
        </category>

        <category name="Colour" colour="20">
          <block type="colour_picker" />
          <block type="colour_random" />
          <block type="colour_rgb" />
          <block type="colour_blend" />
        </category>

        <category name="Variables" custom="VARIABLE" colour="330" />
        <category name="Functions" custom="PROCEDURE" colour="290" />
      </xml>
    `;

    const parser = new DOMParser();
    const toolboxDom = parser.parseFromString(
      toolboxXml,
      "text/xml"
    ).documentElement;

    const workspace = Blockly.inject(blocklyDiv.current, {
      toolbox: toolboxDom,
    });

    workspaceRef.current = workspace;

    return () => {
      try {
        workspaceRef.current?.dispose();
      } catch (err) {
        console.warn("Cleanup disposal error:", err);
      }
    };
  }, []);

  const runCode = () => {
    if (!workspaceRef.current) {
      setFeedback("❌ Blockly workspace not initialized!");
      return;
    }
  
    const code = javascriptGenerator.workspaceToCode(workspaceRef.current);
    console.log("Generated Code:", code);
  
    // Step 1: capture logs
    const logs = [];
    const customConsole = {
      log: (msg) => logs.push(msg),
    };
  
    try {
      // Step 2: inject `console` with our custom console
      const func = new Function("console", code + "\nreturn 0;");
      func(customConsole); // run user code
  
      const result = logs[0]; // get first logged value
  
      // Step 3: check result
      if (result === problem.expected_output) {
        setFeedback("✅ সঠিক! দুর্দান্ত কাজ করেছো!");
      } else {
        setFeedback(`❌ ভুল হয়েছে। তোমার আউটপুট: ${result}, প্রত্যাশিত: ${problem.expected_output}`);
      }
    } catch (error) {
      setFeedback(`❌ Error: ${error.message}`);
    }
  };
  

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Online Scratch Judge</h1>

      <div className="bg-white rounded-xl p-4 shadow">
        <h2 className="text-xl font-semibold">{problem.title}</h2>
        <p>{problem.description}</p>
        <p className="mt-2 text-sm">
          ইনপুট: [{problem.input.join(", ")}], প্রত্যাশিত আউটপুট:{" "}
          {problem.expected_output}
        </p>
      </div>

      <div className="flex gap-4">
        <div
          ref={blocklyDiv}
          style={{ height: "400px", width: "100%" }}
          className="bg-gray-100 rounded-xl"
        />
      </div>

      <button
        onClick={runCode}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow cursor-pointer"
      >
        ▶️ Run Code
      </button>

      <div className="text-lg font-medium mt-2">{feedback}</div>
    </div>
  );
}
