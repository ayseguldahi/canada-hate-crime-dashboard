/**
 * Loads and cleans the hate crime dataset using D3.js.
 * This function filters and renames fields, then passes
 * the cleaned dataset to any callback function (e.g., for rendering charts).
 */
function loadAndCleanData(callback) {
  // Load CSV data asynchronously using D3
  d3.csv("hate_speech_dataset.csv").then(rawData => {

    // Helper function to remove bracketed codes from region names
    const cleanRegion = name => name.replace(/\s?\[\d+\]$/, "").trim();

    // Step 1: Filter out invalid or missing values
    const cleanedData = rawData
      .filter(d =>
        d.VALUE &&                    // VALUE field is present
        d.VALUE !== "x" &&           // Skip confidential suppression mark
        d.VALUE !== ".." &&          // Skip undefined data
        !isNaN(+d.VALUE) &&          // Ensure VALUE can be converted to number
        d.REF_DATE &&                // Ensure year exists
        d.GEO &&                     // Ensure region exists
        d["Type of motivation"]      // Ensure motivation field exists
      )

      // Step 2: Transform and rename the fields
      .map(d => ({
        year: +d.REF_DATE,                                 // Convert REF_DATE to number
        region: cleanRegion(d.GEO.trim()),                // Trim and clean region name
        motivation: d["Type of motivation"].trim(),       // Trim motivation string
        count: +d.VALUE                                   // Convert count to number
      }));

    // Step 3: Pass cleaned data to provided callback function
    callback(cleanedData);
  });
}
