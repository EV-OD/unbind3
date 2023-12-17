# It is primary chrome extension template

## How to use

- first clone this repository and install npm dependencies

  ```bash
  git clone https://github.com/EV-OD/extension-primary-template
  cd extension-primary-template
  npm install
  npm run watch
  ```

- add this code with own data-feature and label in popup.html
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
- Now update `contentScript.js`

  ```js
  let initialState = {
    propertyName: true,
  };
  ```

  #### Here propertyName is `data-feature` and it's value should be `true` or `false`

- Again update `contentScript.js`
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
  #### Here `youFunction` is a function which should be called when `propertyName` is `true`
