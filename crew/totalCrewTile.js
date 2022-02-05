let totalCrewTile = {

    init: function() {
        let crewPopup = document.getElementById('crewPopup');
        crewPopup.style.display = 'block';
    
        let closeButtons = document.querySelectorAll('#crewPopup .headerClose');
        let ourCloseButton = closeButtons[0];
        ourCloseButton.addEventListener('click', function() {
    
            let ourPopup = document.getElementById('crewPopup');
            ourPopup.style.display = 'none';
        });
    },

    render: function() {

        let data = crewData.allCrew;

        let parentContainer = document.querySelector('#crewPopup .popupContent');
    
        for (let i = 0; i < data.length; i++) {
            let theCosmounaut = data[i];

            // we dynamically create a GalleryItem
            let galleryItem = document.createElement('div');
            galleryItem.classList.add('galleryItem');
            galleryItem.setAttribute('data-gallery-item-id', theCosmounaut.id);
            galleryItem.addEventListener('click', function(event) {
                let crewId = event.currentTarget.getAttribute('data-gallery-item-id');
                alert('Our selected crew member has the ID of: ' + crewId);
            });

            let imageContainer = document.createElement('div');
            let label = document.createElement('span');
            let image = document.createElement('img');

            imageContainer.classList.add('imageContainer');
            label.innerHTML = theCosmounaut.name;
            image.src = theCosmounaut.image;

            imageContainer.appendChild(image);

            galleryItem.appendChild(imageContainer);
            galleryItem.appendChild(label);

            parentContainer.appendChild(galleryItem);
        }
    }

};