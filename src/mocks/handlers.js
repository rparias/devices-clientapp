import { rest } from 'msw'

const BASE_URL = process.env.REACT_APP_API_ENDPOINT

export const handlers = [
  rest.get(`${BASE_URL}/devices`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 'e8okoP2l5',
          system_name: 'DESKTOP-MOCK',
          type: 'WINDOWS_WORKSTATION',
          hdd_capacity: '10'
        },
        {
          id: 'Th3ngERn9',
          system_name: 'MAC-MOCK',
          type: 'MAC',
          hdd_capacity: '2048'
        },
        {
          id: 'Q1JdBnE12',
          system_name: 'MOCK-SERVER',
          type: 'WINDOWS_SERVER',
          hdd_capacity: '256'
        }
      ])
    )
  }),

  rest.post(`${BASE_URL}/devices`, (req, res, ctx) => {
    return res(ctx.status(201))
  })
]
