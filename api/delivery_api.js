import config from '../constants/config'
import fetchGetJSON from '../util/fetchGetJSON'


export const getDeliveries = () => {
  const url = `${config.deliveryAPIUrl}deliveries`
  return fetchGetJSON(url)
}

export const getDeliveryById = (id) => {
  const url = `${config.deliveryAPIUrl}/deliveries/${id}`
  return fetchGetJSON(url)
}