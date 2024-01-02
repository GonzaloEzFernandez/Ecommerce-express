// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from "mercadopago"
// Agrega credenciales
const client = new MercadoPagoConfig({
  accessToken:
    "APP_USR-3591978924784632-122911-2ac09b35817998fc8cc2940c32cc9627-1615296072",
})

const preference = new Preference(client)

export const createPreference = async (req, res) => {
  const products = req.body.products

  const items = products.map(product => ({
    title: product.title,
    unit_price: Number(product.unit_price),
    quantity: Number(product.quantity),
    currency_id: "ARS",
  }))

  try {
    const body = {
      items,
      back_urls: {
        success: "http://localhost:5173",
        failure: "http://localhost:5173",
        pending: "http://localhost:5173",
      },
      auto_return: "approved",
    }
    const result = await preference.create({ body })
    res.status(200).json({
      id: result.id,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ messagge: "something goes wrong" })
  }
}
