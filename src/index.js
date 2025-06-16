import Mirador from 'mirador';
import miradorDownloadPlugins from 'mirador-dl-plugin';

document.addEventListener("DOMContentLoaded", () => {
    const config = {
        id: 'mirador',
        miradorDownloadPlugin: {
            restrictDownloadOnSizeDefinition: true,
        },
        windows: [{
            loadedManifest: document.getElementById("mirador").getAttribute("data-manifestId"),
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
    Mirador.viewer(config, [...miradorDownloadPlugins]);

});
