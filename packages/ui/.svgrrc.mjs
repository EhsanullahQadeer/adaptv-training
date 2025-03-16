export default {
    icon: true,
    typescript: true,
    jsx: {
      babelConfig: {
        plugins: [
          function replaceFillStrokeWithCurrentColor() {
            return {
              visitor: {
                JSXAttribute(path) {
                  const { name, value } = path.node;
  
                  // Ensure it's an attribute (fill or stroke)
                  if (
                    name &&
                    (name.name === "fill" || name.name === "stroke") &&
                    value &&
                    value.type === "StringLiteral" &&
                    value.value !== "none"
                  ) {
                    path.node.value = {
                      type: "StringLiteral",
                      value: "currentColor",
                    };
                  }
                },
              },
            };
          },
        ],
      },
    },
  };
  