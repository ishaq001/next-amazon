import nc from 'next-connect'
import { Product } from '../../../models'
import { database } from '../../../utils/db'

const handler = nc()

handler.get(async (req, res) => {
	await database.connect()
	const products = await Product.find({})
	await database.disconnect()
	res.send(products)
})

export default handler
