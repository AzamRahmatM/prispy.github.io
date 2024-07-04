document.getElementById('sort-select').addEventListener('change', function() {
    var sortBy = this.value;
    var appBlocks = Array.from(document.querySelectorAll('.app-block'));
    var sortedBlocks;

    if (sortBy === 'rating') {
        // Sort the blocks by rating
        sortedBlocks = appBlocks.sort(function(a, b) {
            var ratingA = parseFloat(a.querySelector('.stars').getAttribute('data-rating'));
            var ratingB = parseFloat(b.querySelector('.stars').getAttribute('data-rating'));
            return ratingB - ratingA; // For descending order
        });
    } else {
        // Sort by another criterion or default order
    }

    // Append the sorted blocks back to the container
    var container = document.querySelector('.ratings-section');
    container.innerHTML = '';
    sortedBlocks.forEach(function(block) {
        container.appendChild(block);
    });
});
