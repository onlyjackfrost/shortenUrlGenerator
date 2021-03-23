import express from 'express'
import { generateShortenUrl } from '../model'
import validUrl from 'valid-url';


const router = express.Router()

/* Shorten a url. */
router.post('/short/url', async(req, res, next) => {
  try {
    const { url } = req.body

    // validate url
    if(!url) return res.status(400).json({err:'bad request', message:'missing url'})
    if (!validUrl.isUri(url)) res.status(400).json({err:'bad request', message:'invalid url'})

    // get shorten url
    const shortenUrl = await generateShortenUrl(url)
    return res.json({originUrl:url, url:shortenUrl})
  } catch (err) {
    next(err)
  }
})
export default router
