import Mirador from 'mirador/dist/es/src/index';
import downloadDialogPlugin from 'mirador-downloaddialog/es';

document.addEventListener("DOMContentLoaded", () => {
    const config = {
        id: 'mirador', windows: [{
            manifestId: document.getElementById("mirador").getAttribute("data-manifestId"),
            thumbnailNavigationPosition: 'far-right',
        }], window: {
            allowClose: false,
            allowMaximize: false,
            allowFullscreen: true,
            allowTopMenuButton: true,
            defaultSideBarPanel: 'info',
            sideBarOpenByDefault: false,
            views: [{key: 'single'}, {key: 'gallery'}]
        }, workspace: {
            showZoomControls: true, type: 'mosaic'
        }, workspaceControlPanel: {
            enabled: false
        }
    };
    Mirador.viewer(config, [...downloadDialogPlugin]);

});
