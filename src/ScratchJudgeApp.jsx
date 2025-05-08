import React, { useEffect, useRef, useState } from "react";
import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

export default function ScratchJudgeApp({ problem }) {
  const blocklyDiv = useRef(null);
  const workspaceRef = useRef(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (workspaceRef.current) {
      workspaceRef.current.dispose();
    }

    // Custom generator override for console.log
    javascriptGenerator.forBlock["text_print"] = function (block, generator) {
      const msg =
        generator.valueToCode(block, "TEXT", generator.ORDER_NONE) || "''";
      return `console.log(${msg});\n`;
    };

    const toolbox = {
      kind: "categoryToolbox",
      contents: [
        {
          kind: "category",
          name: "Logic",
          colour: "210",
          contents: [
            { kind: "block", type: "controls_if" },
            { kind: "block", type: "logic_compare" },
            { kind: "block", type: "logic_operation" },
            { kind: "block", type: "logic_negate" },
            { kind: "block", type: "logic_boolean" },
            { kind: "block", type: "logic_null" },
            { kind: "block", type: "logic_ternary" }
          ]
        },
        {
          kind: "category",
          name: "Loops",
          colour: "120",
          contents: [
            {
              kind: "block",
              type: "controls_repeat_ext",
              inputs: {
                TIMES: {
                  shadow: {
                    type: "math_number",
                    fields: { NUM: 10 }
                  }
                }
              }
            },
            { kind: "block", type: "controls_whileUntil" },
            {
              kind: "block",
              type: "controls_for",
              inputs: {
                FROM: {
                  shadow: {
                    type: "math_number",
                    fields: { NUM: 1 }
                  }
                },
                TO: {
                  shadow: {
                    type: "math_number",
                    fields: { NUM: 10 }
                  }
                },
                BY: {
                  shadow: {
                    type: "math_number",
                    fields: { NUM: 1 }
                  }
                }
              }
            },
            { kind: "block", type: "controls_forEach" },
            { kind: "block", type: "controls_flow_statements" }
          ]
        },
        {
          kind: "category",
          name: "Math",
          colour: "230",
          contents: [
            { kind: "block", type: "math_number" },
            { kind: "block", type: "math_arithmetic" },
            { kind: "block", type: "math_single" },
            { kind: "block", type: "math_trig" },
            { kind: "block", type: "math_constant" },
            { kind: "block", type: "math_number_property" },
            { kind: "block", type: "math_round" },
            { kind: "block", type: "math_on_list" },
            { kind: "block", type: "math_modulo" },
            { kind: "block", type: "math_constrain" },
            { kind: "block", type: "math_random_int" },
            { kind: "block", type: "math_random_float" }
          ]
        },
        {
          kind: "category",
          name: "Text",
          colour: "160",
          contents: [
            { kind: "block", type: "text" },
            { kind: "block", type: "text_join" },
            { kind: "block", type: "text_append" },
            { kind: "block", type: "text_length" },
            { kind: "block", type: "text_isEmpty" },
            { kind: "block", type: "text_indexOf" },
            { kind: "block", type: "text_charAt" },
            { kind: "block", type: "text_getSubstring" },
            { kind: "block", type: "text_changeCase" },
            { kind: "block", type: "text_trim" },
            { kind: "block", type: "text_print" },
            { kind: "block", type: "text_prompt_ext" }
          ]
        },
        {
          kind: "category",
          name: "Lists",
          colour: "260",
          contents: [
            { kind: "block", type: "lists_create_with" },
            { kind: "block", type: "lists_repeat" },
            { kind: "block", type: "lists_length" },
            { kind: "block", type: "lists_isEmpty" },
            { kind: "block", type: "lists_indexOf" },
            { kind: "block", type: "lists_getIndex" },
            { kind: "block", type: "lists_setIndex" },
            { kind: "block", type: "lists_getSublist" },
            { kind: "block", type: "lists_split" },
            { kind: "block", type: "lists_sort" }
          ]
        },
        {
          kind: "category",
          name: "Colour",
          colour: "20",
          contents: [
            { kind: "block", type: "colour_picker" },
            { kind: "block", type: "colour_random" },
            { kind: "block", type: "colour_rgb" },
            { kind: "block", type: "colour_blend" }
          ]
        },
        {
          kind: "category",
          name: "Variables",
          custom: "VARIABLE",
          colour: "330"
        },
        {
          kind: "category",
          name: "Functions",
          custom: "PROCEDURE",
          colour: "290"
        }
      ]
    };

    const workspace = Blockly.inject(blocklyDiv.current, {
      toolbox,
    });

    workspaceRef.current = workspace;

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.dispose();
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

    const logs = [];
    const customConsole = {
      log: (msg) => logs.push(msg),
    };

    try {
      const func = new Function("console", code + "\nreturn 0;");
      func(customConsole);

      const result = logs[0];

      if (result === problem.expected_output) {
        setFeedback("✅ সঠিক! দুর্দান্ত কাজ করেছো!");
      } else {
        setFeedback(
          `❌ ভুল হয়েছে। তোমার আউটপুট: ${result}, প্রত্যাশিত: ${problem.expected_output}`
        );
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
          ইনপুট: [{problem.input.join(", ")}], প্রত্যাশিত আউটপুট: {problem.expected_output}
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
