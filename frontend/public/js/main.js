

function createItemDiv(item) {
  const div = document.createElement('div')
  div.className = 'item'

  const image = document.createElement('img')
  image.src = item.imageURL

  const itemName = document.createElement('h2')
  itemName.textContent = item.itemName

  const description = document.createElement('p')
  description.innerHTML = `<strong>DESCRIPTION</strong> <br> ${item.description}`


  const location = document.createElement('p');
  location.innerHTML = `<strong>LOCATION</strong> <br> ${item.location}`

  // const claimersCount = document.createElement('p')
  // claimersCount.textContent = `Claimers: ${item.claimers.length}`

  div.appendChild(image)
  div.appendChild(itemName)
  div.appendChild(description)
  div.appendChild(location)

  return div
}


//function to render items on the page;
async function renderItems() {
  const container = document.getElementById('container')

  try {
    const response = await fetch('http://192.168.49.2:30081/item/getData')
    const data = await response.json()

    data.items.forEach((item) => {
      const itemDiv = createItemDiv(item)
      container.appendChild(itemDiv)
    })
  } catch (error) {
    console.log('Error rendering items:', error)
  }
}

// Call the renderItems function to display the items
renderItems()


// fetch('http://localhost:3000/api/images')
//   .then((response) => response.json())
//   .then((data) => {
//     const imageContainer = document.getElementById('image-container')

//     data.images.forEach((filename) => {
//       const img = document.createElement('img')
//       img.src = `/images/${filename}`
//       img.alt = filename // Set alt attribute for accessibility

//       imageContainer.appendChild(img)
//     })
//   })
//   .catch((error) => {
//     console.error('Error fetching images:', error)
//   })

