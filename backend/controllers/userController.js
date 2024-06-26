// backend/controllers/userController.js
const User = require('../models/User');
const Vacancy = require('../models/Vacancy');

const submitBranchChangeRequest = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    
    const allocatedBranch = await allocateBranch(newUser);
    newUser.allocatedBranch = allocatedBranch;
    await newUser.save();
    
    res.status(201).json({ message: 'Request submitted successfully', allocatedBranch });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const allocateBranch = async (user) => {
  const preferences = [user.preference1, user.preference2, user.preference3];
  const category = user.category;
  
  for (const preference of preferences) {
    const vacancy = await Vacancy.findOne({ branchName: preference });
    if (!vacancy) continue;

    if (vacancy[category] > 0) {
      vacancy[category]--;
      await vacancy.save();
      return preference;
    }
  }
  return "Sorry, no vacancy available.";
};

module.exports = { submitBranchChangeRequest };
