document.getElementById('fileInput').addEventListener('change', function(event) {
    var files = event.target.files;
    var preview = document.getElementById('preview');
    
    // Clear any existing content
    preview.innerHTML = '';

    // Loop through all selected files
    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        // Only process image files
        if (!file.type.match('image.*')) {
            continue;
        }

        var imgContainer = document.createElement('div');
        imgContainer.className = 'img-container';

        var img = document.createElement('img');
        img.src = URL.createObjectURL(file);

        var fileInfo = document.createElement('p');
        fileInfo.textContent = `File Name: ${file.name}, Type: ${file.type}, Size: ${file.size} bytes`;

        // Append the image and file info to the container
        imgContainer.appendChild(img);
        imgContainer.appendChild(fileInfo);

        // Append the container to the preview div
        preview.appendChild(imgContainer);
    }
});


