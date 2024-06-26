const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Vacancy = mongoose.model('Vacancy');

const getAllRequests = async (req, res) => {
  try {
    const requests = await User.find();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateVacancies = async (req, res) => {
  try {
    const vacancies = req.body;
    await Vacancy.deleteMany({});
    await Vacancy.insertMany(vacancies);
    res.status(200).send('Vacancies updated successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteRequest = async (req, res) => {
  try {
    const rollNo = req.params.rollNo;
    await User.findOneAndDelete({ rollNo });
    res.status(200).send('Request deleted successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateVacancy = async (req, res) => {
  try {
    const branchName = req.params.branchName;
    const vacancyData = req.body;

    const vacancy = await Vacancy.findOne({ branchName });
    if (!vacancy) {
      return res.status(404).send('Vacancy not found');
    }

    Object.keys(vacancyData).forEach((category) => {
      vacancy[category] = vacancyData[category];
    });

    await vacancy.save();
    res.status(200).send('Vacancy data updated successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

router.get('/requests', getAllRequests);
router.post('/update-vacancies', updateVacancies);
router.delete('/delete-request/:rollNo', deleteRequest);
router.patch('/update-vacancy/:branchName', updateVacancy);

module.exports = router;