let totalCrewTile = {

    init: function() {
        let crewPopup = document.querySelector('#crewPopup > .modal');
        crewPopup.style.display = 'block';
    
        let ourCloseButton = document.querySelector('#crewPopup .btn-close');
        ourCloseButton.addEventListener('click', this.onGalleryPopupClose);

        // we initialize the close button for the carousel popup
        let carouselCloseButton = document.querySelector(
            '#crewPopupCarousel .btn-close'
        );
        carouselCloseButton.addEventListener('click', this.onCarouselPopupClose);

        // we initialize the back button for the carousel popup
        let carouselBackButton = document.querySelector(
            '#crewPopupCarousel .carouselBack'
        );
        carouselBackButton.addEventListener('click', this.onCarouselPopupBack);
    },

    render: function() {

        let data = crewData.allCrew;

        let parentContainer = document.querySelector('#crewPopup .galleryPopup');
    
        for (let i = 0; i < data.length; i++) {
            let theCosmounaut = data[i];

            // we dynamically create a GalleryItem
            let galleryItem = document.createElement('div');
            galleryItem.classList.add('galleryItem');
            galleryItem.setAttribute('data-gallery-item-id', theCosmounaut.id);
            galleryItem.addEventListener('click', this.onGalleryItemClick);

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

        let crewCountDiv = document.querySelector('#crewTile .crewCount');
        crewCountDiv.innerHTML = crewData.allCrew.length;
    },

    onGalleryItemClick: function(event) {

        let crewId = event.currentTarget.getAttribute('data-gallery-item-id');
        crewData.selectedGalleryItemId = crewId;

        // we use the actual crewId to render the appropriate image
        let carouselImage = document.createElement('img');
        carouselImage.src = utils.getCrewMemberPhotoByCrewMemberId(crewData.allCrew, crewId);

        // we insert this JS object into the DOM
        let carouselImageParent = document.querySelector('#crewPopupCarousel .carouselImageContainer');
        // we empty the last img tag from the carousel
        carouselImageParent.innerHTML = '';
        carouselImageParent.appendChild(carouselImage);

        let carouselPopup = document.querySelector('#crewPopupCarousel > .modal');
        carouselPopup.style.display = 'block';
    },

    onGalleryPopupClose: function(event) {
        let galleryPopup = document.querySelector('#crewPopup > .modal');
        galleryPopup.style.display = 'none';
    },

    onCarouselPopupClose: function(event) {
        let carouselPopup = document.querySelector('#crewPopupCarousel > .modal');
        carouselPopup.style.display = 'none';
        
        let galleryPopup = document.querySelector('#crewPopup > .modal');
        galleryPopup.style.display = 'none';
    },

    onCarouselPopupBack: function(event) {
        let carouselPopup = document.querySelector('#crewPopupCarousel > .modal');
        carouselPopup.style.display = 'none';
    }

};