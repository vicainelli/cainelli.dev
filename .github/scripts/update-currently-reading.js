const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

async function scrapeGoodreads() {
  try {
    // Fetch the Goodreads page
    const response = await axios.get('https://www.goodreads.com/user/show/63184843-vinicius-cainelli');
    const html = response.data;

    // Load HTML into cheerio
    const $ = cheerio.load(html);

    // Find the currently reading section
    const currentlyReadingSection = $('#currentlyReadingReviews');

    // Extract book title
    const bookTitle = currentlyReadingSection.find('.bookTitle').text().trim();

    // Extract book image URL
    const imageUrl = currentlyReadingSection.find('img').attr('src');

    // Extract progress text
    let progressText = '';
    currentlyReadingSection.find('*').contents().each(function() {
      if (this.type === 'text' && this.data.includes('page')) {
        progressText = this.data.trim();
      }
    });

    // Format progress as "X/Y"
    let progress = '';
    const progressMatch = progressText.match(/\(page (\d+) of (\d+)\)/);
    if (progressMatch) {
      progress = `${progressMatch[1]}/${progressMatch[2]}`;
    }

    return {
      title: bookTitle,
      image: imageUrl,
      progress: progress
    };
  } catch (error) {
    console.error('Error scraping Goodreads:', error);
    throw error;
  }
}

async function updateJson() {
  try {
    // Scrape the data
    const bookData = await scrapeGoodreads();

    // Path to the JSON file
    const jsonFilePath = path.join(process.cwd(), 'data', 'currently-readying.json');

    // Create directory if it doesn't exist
    const dir = path.dirname(jsonFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write the data to the JSON file
    fs.writeFileSync(jsonFilePath, JSON.stringify(bookData, null, 2));

    console.log('Successfully updated currently reading data:', bookData);
  } catch (error) {
    console.error('Error updating JSON:', error);
    process.exit(1);
  }
}

// Run the update
updateJson();
