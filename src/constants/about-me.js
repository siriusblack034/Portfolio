const info =
  "<p>Hi! I'm Tuan Chien, and I am a Web Developer.</p>" +

  "<p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.<br><br>I'd Love to <u><i><b>Join/Work</b></i></u> in a company/projects and <u><i><b>Help solve their problems or create ideas</b></i></u>, that will also help me grow in knowledge and enhance my skills. I welcome challenging projects and enjoy working with all sorts of personalities.</p>" +

  "<p>Here are a few technologies I've been working with recently:</p>";

const skillList = [
  {
    icon: 'javascript',
    text: 'JavaScript (ES6+)',
    des: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
  },
  {
    icon: 'html',
    text: 'HTML & CSS',
    des: "HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices."
  },
  {
    icon: 'vue',
    text: "Vue",
    des: `Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. <a href="https://vuejs.org/" target="_blank" alt="Go To VueJS">Go To VueJS</a>`
  },
  {
    icon: 'vuetify',
    text: 'Vuetify',
    des: 'Vuetify is a complete UI framework built on top of Vue.js. The goal of the project is to provide developers with the tools they need to build rich and engaging user experiences'
  },
  {
    icon: 'node',
    text: 'Nodejs',
    des: 'Node.js is an software system is design to write the internet application has the open width, specific is a web server.'
  },
  {
    icon: 'express',
    text: 'Express',
    des: 'Web Applications Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'
  },
  {
    icon: 'mongoDB',
    text: 'MongoDB',
    des: 'MongoDB is a source-ready, cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.'
  },
  {
    icon: 'java',
    text: 'Java',
    des: 'Java is at the heart of our digital lifestyle. It\'s the platform for launching careers, exploring human-to-digital interfaces, architecting the world\'s best applications, and unlocking innovation everywhere—from garages to global organizations.'
  },



];

export default {
  info: info,
  skills: skillList
}