import { Request, Response, Router } from "express"
import { Route } from "../interface/global.interface"
import OtpVerify from './otp'


const router = Router()

const routes: Route[] = [
  {
    path: '/otp',
    route: OtpVerify,
  },
]

routes.forEach((route) => {
  router.use(route.path, route.route)
})

router.get('/', (req: Request, res: Response) => {
  res.send({
    success: true,
    message: 'Hello World.',
  })
})

export default router
