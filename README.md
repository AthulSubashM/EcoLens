# Eco Lens: Your Smart Waste Disposal Assistant

*Simplifying waste disposal with AI-powered image classification.*

[**🚀 Try Eco Lens Live Here!**](https://www.eco-lens.co/)

![Eco Lens Demo](eco-lens/src/Assets/ecolens_demo.gif)
---

## Inspiration

Navigating waste disposal, especially with varied recycling streams, proved to be a common challenge (we even struggled for 5 minutes to sort a single item on campus!). This highlighted a significant opportunity for improvement. Further research revealed that current recycling processes often rely on manual sorting and expensive equipment. We saw a clear opportunity for AI-driven image classification and robotics to enhance efficiency in recycling centers, and this vision inspired the creation of Eco Lens.

## What it Does

In its current mobile web application form, Eco Lens allows users to classify objects by uploading an image or taking a picture with their camera. Our AI image detection model identifies the object, and this information is then processed by an AI text classifier to determine its disposal category (e.g., "plastic bag" falls into "non-recyclable"). Crucially, the app also provides clear instructions on how an average person can recycle or dispose of the item themselves.

## How We Built It

The application was developed using the **React.js framework**. For image identification, we integrated the powerful **`google/vit-base-patch16-224` Vision Transformer model** from Hugging Face. Text classification and generation of disposal information are powered by the **`llama3-8b-8192` model from Groq**. Our collaborative development workflow was managed on GitHub, and the web application is hosted on GitHub Pages, linked to a domain from GoDaddy.

## Challenges We Ran Into

As this was the first hackathon for all three team members, and our first time utilizing AI models, we faced several learning curves. A significant challenge was attempting to train our own AI model from scratch; consequently, we opted to leverage powerful pre-trained AI models instead.

## Accomplishments We're Proud Of

We successfully integrated AI models into our application for the first time. We also managed to establish a collaborative development environment and create a robust deployment workflow, all accomplished within a compressed 2-day timeframe.

## What We Learned

We gained valuable experience in utilizing AI models and integrating APIs into web applications. We also honed our teamwork skills, developing a fully functional prototype application within 48 hours, complete with a polished, elegant, and user-friendly UI.

## What's Next for Eco Lens

We envision two main paths for Eco Lens's future development:

### For Assisting Recycling Centers:
* Train our model to significantly increase accuracy.
* Integrate data feeds to a robotic arm to enable real-time waste sorting.
* Seek access to a recycling center to gather real-time data for generating a robust training dataset.

### For General Users (Mobile Application):
* Implement location-based services to provide relevant disposal center information:
    * **Example:** For a laptop, direct users to electronic disposal centers.
    * **Example:** For clothing, suggest local thrift stores or textile recycling centers.
