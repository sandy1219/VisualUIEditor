const ipcRenderer = Electron.ipcRenderer;

function ChangeProjectFolder() {
    let newFolder = Electron.remote.dialog.showOpenDialog({properties: ['openFile', 'openDirectory']});
    if(newFolder) {
        window.projectFolder = newFolder[0];
        window.localStorage["projectFolder"] = newFolder[0];
        Editor.Ipc.sendToAll("ui:project_floder_change", {folder: newFolder[0]});
    }
}

ipcRenderer.on('ui:open-project-folder', (event, message, ...args) => {
    ChangeProjectFolder();
});
