#! /bin/bash
# dissolve
# https://imagemagick.org/script/compose.php

# sudo apt update
# sudo apt install imagemagick


inputFolder=$1
outputFolder=$2

echo $inputFolder
echo $outputFolder

# -F fs --field-separator=fs, set to /
# gravity values are: NorthWest, North, NorthEast, West, Center, East, SouthWest, South, or SouthEast
ls -1 $inputFolder/*.png \
  | awk -F "/" \
    -v inputFolder="$inputFolder" -v outputFolder="$outputFolder" \
    '{ printf "composite -dissolve 20%% -gravity NorthEast -geometry +50+70 ./watermark-logo.png %s/%s %s/%s\n", inputFolder, $NF, outputFolder, $NF }' \
  | sh
