import { Project } from './project';

export const PROJECTS: Project[] = [
  { id: 1, name: 'Klassik Radio: Adventskalendar', tags: ["component"], image: "url('../assets/klassik.PNG')", link: "http://www.klassikradio.de/",
  description: "If you visit Klassik Radio's website before Christmas time, you will see on their home page Adventskalendar and Geschkentipp sections. While the design of the latter had to be changed last minute due to a client request, they still turned out pretty cool. They load content dynamically depending on your geolocation."},
  { id: 2, name: 'Schlachthof', tags: ["feature","fixes"], image: "url('../assets/schlachthof.PNG')", link: "http://www.schlachthof-restaurant-bar.de/",
  description: "Yay, parallax corn! I made that on the front page, as well as tweaking various parts of the site such as content box resizing, footer layout, and cleaning up bad code."},
  { id: 3, name: 'Kern MB', tags: ["feature","fixes"], image: "url('../assets/kern.PNG')", link: "https://www.kern-mb.de/",
  description: "The header was a pain! Like most of the sites on this list, I didn't start this website myself. That made improving the animations, responsiveness, and display of the angled header so tricky. But my favorite thing I did for Kern is the image color fades on the homepage on mobile. Check it out! "},
  { id: 4, name: 'Kaiser Showtechnik', tags: ["fixes"], image: "url('../assets/kaiser.PNG')", link: "http://www.kaiser-showtechnik.de/  ",
  description: "This was a small one, just added a content box up top and reworked the newsletter section both in the code and in Joomla."},
  { id: 5, name: 'Client Feedback Tool', tags: ["tool"], image: "url('../assets/feedback.PNG')", link: "http://tanners-playground.zwetschkeserver3.de/",
  description: "I wrote this Javascript tool for webpages where the client can hit a button and fill out a short form to send an email, screenshot of the page, and browser/system info to the dev team."},
  { id: 6, name: 'Weisserhase Beamer Page', tags: ["alles"], image: "url('../assets/wh.PNG')", link: "http://weisserhase-beamer.zwetschkeserver3.de/",
  description: "A single page site that loads 50 images and cycles them randomly without repeating. It was developed for a Raspberry Pi and is currently on display in the Weisserhase resturaunt on the big screen."},
  { id: 7, name: 'ProAqua Website', tags: ["alles"], image: "url('../assets/paa.PNG')", link: "http://paa.hygiene.zwetschkeserver3.de/",
  description: "Like the project in the list before this one, I made this entire site myself. At the time of my deperature we were still waiting for content from the client, but it was tricky to make due to its odd scroll design and AJAX content."},
  { id: 8, name: 'Student Cafe Branding Project', tags: ["alles"], image: "url('../assets/sdm.PNG')", link: "https://thoisington.github.io/sdmcafe/dist/index.html",
  description: "A very simple website based on a very simple design by a friend of mine who isn't a web designer. She was however doing a cross media campaign for this cafe, and I offered to make her design into an actual webpage to practice Less, a different grid framework, and more. This is an old project."}
];
//test
