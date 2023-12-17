# It is primary chrome extension template

# Installation

1.  Clone this repository and navigate to the extension directory:
    ```bash
    git clone https://github.com/EV-OD/extension-primary-template
    cd extension-primary-template
    ```
2.  Install npm dependencies:
    ```bash
    npm install
    npm run watch
    ```

# Usage

## Customize Popup

1. Open `popup.html` and add the following code with your own `data-feature` and label:

   ```html
   <label class="cursor-pointer label">
     <span class="label-text">Label here</span>
     <input
       data-feature="data-feature"
       type="checkbox"
       class="toggle toggle-success feature-ui"
       checked
     />
   </label>
   ```

## Update Content Script

1. Open `contentScript.js` and update the `initialState` object:

   ```js
   let initialState = {
     propertyName: true,
   };
   ```

   #### Here, `propertyName` corresponds to the `data-feature`, and its value should be `true` or `false`.

2) Update the `runStateFeature` function:
   ```js
   async function runStateFeature() {
     let feature = await getFeature();
     if (feature) {
       if (feature.propertyName) {
         youFunction();
       }
     }
   }
   ```
   #### Replace `youFunction` with the actual function that should be called when `propertyName` is `true`.

## Contributing

If you would like to contribute to the project, follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/new-feature
   ```
3. Make your changes and commit them:

   ```bash
   git commit -m 'Add new feature'
   ```

4) Push to the branch:
   ```bash
   git push origin feature/new-feature
   ```
5) Submit a pull request.
