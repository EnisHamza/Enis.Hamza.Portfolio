const express = require("express");
const router = express.Router(); // Create a new router instance

const {
  Intro,
  About,
  Experience,
  Projects,
  Contact,
} = require("../models/portfolioModel"); // Import your models

// Define your routes
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find();
    const projects = await Projects.find();
    const contacts = await Contact.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      experience: experiences,
      project: projects,
      contact: contacts[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router; // Export the router instance
