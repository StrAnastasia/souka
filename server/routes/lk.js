const router = require('express').Router()
const mail = require('../mailer');

router.post('/invite', async (req, res) => {
  const {adminEmail, inviteEmail} = req.body
  console.log(adminEmail, inviteEmail);
  // const admin = await Admin.find({email: adminEmail})
  // mail(adminEmail, inviteEmail, admin.password)
  mail(adminEmail, inviteEmail)
})

router.post('/add', async (req, res) => {
  const {adminEmail, newAdminEmail} = req.body
  console.log(adminEmail, inviteEmail);
  // const admin = await Admin.find({email: adminEmail})
  // mail(adminEmail, inviteEmail, admin.password)
  
  // mail(adminEmail, inviteEmail)
})


module.exports = router;
