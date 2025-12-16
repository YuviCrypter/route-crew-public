#!/bin/bash

# Ask the user for the name of the React component
echo "Note: Make sure you have downloaded 16x16 icon svg"
echo "Enter the name for your icon component:"
read icon_name

# Define the path where the new TSX file will be created
icon_path="../assets/icons/${icon_name}.tsx"

# Create the directory if it doesn't exist
mkdir -p "$(dirname "$icon_path")"

# Find an SVG file in the current directory (you could modify this part to select a specific SVG)
svg_file=$(find . -maxdepth 1 -name "*.svg" | head -n 1)

# Check if an SVG file is found
if [[ -z "$svg_file" ]]; then
  echo "No SVG file found in the current directory."
  exit 1
fi

# Read the SVG file and clean it up for React
svg_content=$(cat "$svg_file")

# Remove xmlns and other unnecessary attributes
cleaned_svg=$(echo "$svg_content" | sed -E 's/xmlns="[^"]*"//g' | sed 's/clip-path="[^"]*"//g')

# Extract the path data using sed
paths=$(echo "$cleaned_svg" | sed -n 's/.*d="\([^"]*\)".*/\1/p')

# Generate the React component code
react_component=$(cat <<EOF
import Svg, { Path, SvgProps } from "react-native-svg";

export default function ${icon_name}({
  color,
  ...props
}: { color: string } & SvgProps) {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
EOF
)

# Add the path(s) to the React component
while IFS= read -r path; do
  react_component="${react_component}
    <Path
      d=\"$path\"
      stroke={color}
      strokeWidth={props.strokeWidth ?? '1.6'}
      strokeLinecap=\"round\"
      strokeLinejoin=\"round\"
    />
"
done <<< "$paths"

# Close the component with a proper closing curly bracket
react_component="${react_component}
  </Svg>
);
}

"

# Write the generated component to the file
echo "$react_component" > "$icon_path"

echo "React component for icon '$icon_name' has been created at '$icon_path'."
