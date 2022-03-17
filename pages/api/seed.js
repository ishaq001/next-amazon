import nc from 'next-connect'
import { database } from '../../utils/db'
import { Product } from '../../models'
import { data } from '../../dummy-data/prodects-data'

const handler = nc()

/* This is a middleware function that will be executed on every request. */
handler.get(async (req, res) => {
  await database.connect()
  await Product.deleteMany()
  await Product.insertMany(data.products)

  console.log(Product)
  await database.disconnect()
  res.send({
    message: 'Seeded Successfully',
  })
})

export default handler
