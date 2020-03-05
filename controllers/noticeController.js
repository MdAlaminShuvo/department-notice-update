const Notice = require("../model/noticeModel");

exports.getAllNotice = async (req, res) => {
  try {
    const notices = await Notice.find();

    res.status(200).json({
      status: "successfully done",
      result: notices.length,
      data: {
        notices
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "can not works successfully",
      message: err
    });
  }
};

exports.getNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);

    res.status(200).json({
      status: "successfully done",
      data: {
        notice
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "can not works successfully",
      message: err
    });
  }
};

exports.createNotice = async (req, res) => {
  try {
   
    const newnotice = await Notice.create(req.body);

    res.status(201).json({
      status: "successfully done",
      data: {
        newnotice
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "can not works successfully",
      message: err
    });
  }
};

exports.updateNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.status(200).json({
      status: "successfully done",
      data: {
        notice
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "can not works successfully",
      message: err
    });
  }
};

exports.deleteNotice = async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "successfully done",
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: "can not works successfully",
      message: err
    });
  }
};
