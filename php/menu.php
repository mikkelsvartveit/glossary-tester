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
            <a href="javascript:toggleDarkMode();"><img src="/images/dark-mode-icon.svg" id="darkModeButton"></a>
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
    <a href="javascript:toggleDarkMode();"><img src="/images/dark-mode-icon.svg" id="darkModeButton"></a>
</div>
