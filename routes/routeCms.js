const express = require('express');
const controller = require('../controllers/controllerCms');
const router = express.Router();
router.get(`/list_member`, controller.listMember);
router.get(`/select_member/:id`, controller.selectMember);
router.post(`/add_member`, controller.addMember);
router.post(`/update_member`, controller.updateMember);
router.get(`/delete_member/:id`, controller.deleteMember);
module.exports = router;