document.getElementById('search-button').addEventListener('click', function() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var appBlocks = document.querySelectorAll('.app-block');
    
    appBlocks.forEach(function(block) {
        var appName = block.querySelector('h3').textContent.toLowerCase();
        if (appName.includes(searchTerm)) {
            block.style.display = ''; // Show the app block
        } else {
            block.style.display = 'none'; // Hide the app block
        }
    });
});
