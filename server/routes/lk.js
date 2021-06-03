const router = require('express').Router()
const mail = require('../mailer');

router.post('/invite', async (req, res) => {
  const {adminEmail, inviteEmail} = req.body
  // const admin = await Admin.find({email: adminEmail})
  // mail(adminEmail, inviteEmail, admin.password)
  mail(adminEmail, inviteEmail)
})

module.exports = router;
