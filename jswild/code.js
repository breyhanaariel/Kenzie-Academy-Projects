// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
// Key:
// 63de72d590d03831c1a2734265d005d7
// Secret:
// 4b0bab296f386bba

// get geolocation
// display a message and user a set lat and long if geolocation API is unavailable or user refuses
let main = document.createElement("main")
main.innerHTML = ""
document.body.append(main)

class flickrApi {
    constructor(location) {
        /** 
        if (!navigator.geolocation) {
            const message = "Geolocation is not supported by your browser";
            console.log(message);
            const defaultCoordinates = {
              latitude: "31.230416",
              longitude: "121.473701",
            };
            resolve(defaultCoordinates);
        } else {
        **/
            this.location = location
            this.currentPhotoIndex = 0
            this.photos = []
            document.getElementById("next").addEventListener("click", this.displayNextImage.bind(this))
       // }
    }

// construct the query url
// set the lat and lon values to the latitude and longitude that you got from the geolocation API.
// set the per_page count to no more than 5 
// set safe_search to 1 to avoid potentially racy images.
    createUrl() {
        return "https://shrouded-mountain-15003.herokuapp.com/" +
        "https://flickr.com/services/rest/" + 
        "?api_key=63de72d590d03831c1a2734265d005d7" +
        "&format=json" +
        "&nojsoncallback=1" +
        "&method=flickr.photos.search" +
        "&safe_search=1" +
        "&per_page=5" +
        "&lat=" + this.location.latitude +
        "&lon=" + this.location.longitude +
        "&text=landscape"
    }

// send the request to Flickr and process the response data
    processResponse(response) {
        this.photos = response.photos.photo
        let imageUrl = response.photos.photo[0]
        this.displayImage(imageUrl)
        return this.photos
    }

    fetchRequestoFlickr() {
        let url = this.createUrl()
        fetch(url)
            .then(response => response.json())
            .then(results => this.processResponse(results))
    }

// construct an image source URL
    constructImageURL(photoObj) {
            return "https://farm" + photoObj.farm +
                ".staticflickr.com/" + photoObj.server +
                 "/" + photoObj.id + "_" + photoObj.secret + ".jpg";
    }

    // const imageUrl = constructImageURL(response.photos.photo[0]);

// display the first image
    displayImage(photoObj) {
        
        let imgURL = this.constructImageURL(photoObj)
        let img = document.createElement("img")
        img.src = imgURL
        main.innerHTML = ""
        main.append(img)
    }

// show the next image
    displayNextImage() {
        if (this.currentPhotoIndex < 5) {
            this.currentPhotoIndex += 1
            
            if (this.currentPhotoIndex === 5) {
                this.currentPhotoIndex = 0 
            }
        }
        let object = this.photos[this.currentPhotoIndex]
        this.displayImage(object)
    }
}

function findingNoLocation() {
    const randomPlace = {latitude: "35.0116", longitude: "135.7681"}
    console.log(`We lost you! You must be at these coordinates: ${randomPlace}`)
    findPhotosFromLocation(randomPlace)
}

function foundUserLocation(position) {
    currentPlace = position.coords
    findPhotosFromLocation(currentPlace)
}

function findPhotosFromLocation(place) {
    let userLocation = new flickrApi(place)
    userLocation.fetchRequestoFlickr()
}

let currentPosition = navigator.geolocation.getCurrentPosition(foundUserLocation,findingNoLocation)