import Notification from '../models/Notification.js';

// Create Notification Preference
export const createNotification = async (req, res) => {
  const { fullName, email, contactNumber, flightNumber, notificationType } = req.body;

  try {
    const notification = new Notification({ fullName, email, contactNumber, flightNumber, notificationType });

    await notification.save();

    res.status(201).json({ message: 'Notification preference saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get All Notifications
export const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Notification Preference
export const updateNotification = async (req, res) => {
  const { id } = req.params;
  const { fullName, email, contactNumber, flightNumber, notificationType } = req.body;

  try {
    const notification = await Notification.findById(id);

    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }

    notification.fullName = fullName;
    notification.email = email;
    notification.contactNumber = contactNumber;
    notification.flightNumber = flightNumber;
    notification.notificationType = notificationType;

    await notification.save();

    res.json({ message: 'Notification updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
