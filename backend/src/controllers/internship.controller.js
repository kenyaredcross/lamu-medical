const Internship = require('../models/Internship');

exports.getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find().populate('company', 'name email');
    res.json(internships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getInternshipById = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id).populate('company', 'name email');
    if (!internship) {
      return res.status(404).json({ message: 'Internship not found' });
    }
    res.json(internship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createInternship = async (req, res) => {
  try {
    const { title, description, location, duration, stipend, skills, requirements, category } = req.body;

    const internship = new Internship({
      title,
      description,
      location,
      duration,
      stipend,
      skills,
      requirements,
      category,
      company: req.user.userId,
    });

    await internship.save();
    res.status(201).json(internship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateInternship = async (req, res) => {
  try {
    const internship = await Internship.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!internship) {
      return res.status(404).json({ message: 'Internship not found' });
    }
    res.json(internship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteInternship = async (req, res) => {
  try {
    const internship = await Internship.findByIdAndDelete(req.params.id);
    if (!internship) {
      return res.status(404).json({ message: 'Internship not found' });
    }
    res.json({ message: 'Internship deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
