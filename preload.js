/**
 * The preload script runs before `index.html` is loaded
 * in the renderer. It has access to web APIs as well as
 * Electron's renderer process modules and some polyfilled
 * Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
// В preload.js
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    onClick: () => {
        document.getElementById('clickButton').addEventListener('click', () => {
            console.log('Кнопка нажата');
        });
    }
});
