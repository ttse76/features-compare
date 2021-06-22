# Features Compare
Simple script to compare experian feature sets from `experian-features` and `decision-engine`.

This script has no additional dependencies or packages so it can be used right out of the box.

## Usage
The script looks for two files in a folder called `templates` (which will need to be created in the main directory):
- `de-features.json`
- `python-features.json`

Create a `templates` folder and place both `.json` files in it. Then from the main directory run `npm start`. This will run the sprint and print the results to `out.txt`.
