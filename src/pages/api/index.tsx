import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://test.wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=bgcollection&schema_name=beasts&owner=littigkami21&page=1&limit=3&order=desc&sort=asset_id',
})
