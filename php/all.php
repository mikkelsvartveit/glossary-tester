<div class="menu">
   
    <div class="desktop-menu"> 
        <div class="menu-group menu-left">
            <a href="/"><img src="/images/logo-white.png" class="logo">Glossary Tester</a>
        </div>
    
        <div class="menu-group menu-center">
            <a href="/manage" class="underline"><i class="material-icons md-light">&#xE03B;</i>Manage</a>
            <a href="/practice" class="underline"><i class="material-icons md-light">&#xE150;</i>Practice</a>
            <a href="/tests" class="underline"><i class="material-icons md-light">&#xE8CE;</i>Test</a>
        </div>
        
        <div class="menu-group menu-right">
            <a href="javascript:showOverlay('importOverlay', true);"><img src="/images/import-icon.svg" class="navButton"></a>
            <a href="javascript:showOverlay('exportOverlay', true);"><img src="/images/export-icon.svg" class="navButton"></a>
            <a href="javascript:toggleDarkMode();"><img src="/images/dark-mode-icon.svg" class="navButton"></a>
        </div>
    </div>
    
    <div class="mobile-menu">
        <div class="menu-group">
            <a href="/"><img src="/images/logo-white.png" class="logo">Glossary Tester</a>
        </div>
        
        <div class="menu-group float-right">
            <i class="material-icons md-light" id="dropdown-menu-button" onclick="showDropdown();">&#xE5D2;</i>
        </div>
    </div>

</div>

<div id="dropdown-menu" class="dropdown-hide">
    <a href="/manage"><i class="material-icons md-light">playlist_add</i>Manage</a>
    <a href="/practice"><i class="material-icons md-light">create</i>Practice</a>
    <a href="/tests"><i class="material-icons md-light">spellcheck</i>Test</a>
    <div id="dropdown-buttons">
        <a href="javascript:showOverlay('importOverlay', true);"><img src="/images/import-icon.svg" class="navButton"></a>
        <a href="javascript:showOverlay('exportOverlay', true);"><img src="/images/export-icon.svg" class="navButton"></a>
        <a href="javascript:toggleDarkMode();"><img src="/images/dark-mode-icon.svg" class="navButton"></a>
    </div>
</div>

<div id="dim" class="dim">
    <!-- This dims the viewport to prepare for a dialog box -->
</div>

<div class="overlay hidden" id="importOverlay">
    <h3>Import word list</h3>
    <input type="text" id="importOverlayInput" placeholder="Word list key">
    <button type="button" id="importOverlayImportButton" class="float-left">Import</button>
    <button type="button" id="importOverlayCancelButton" class="float-right">Cancel</button>
</div>

<div class="overlay hidden" id="exportOverlay">
    <h3>Export word list</h3>
    <input type="text" id="exportOverlayInput" placeholder="Name your word list">
    <button type="button" id="exportOverlayExportButton" class="float-left">Export</button>
    <button type="button" id="exportOverlayCancelButton" class="float-right">Cancel</button>
</div>

<div class="overlay hidden" id="exportSuccessOverlay">
    <h3>Export successful</h3>
    <p>Word list "<span id="wordListName"></span>" has been exported. You can now import the word list on another device with the key <b id="wordListKey"></b> or share the link below.</p>
    <input type="text" id="exportSuccessOverlayLink" readonly>
    <button type="button" id="exportSuccessOverlayCopyButton" class="float-left">Copy link</button>
    <button type="button" id="exportSuccessOverlayOkButton" class="float-right">OK</button>
</div>