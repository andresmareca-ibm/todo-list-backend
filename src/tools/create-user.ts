import { AppId } from '../env'
import * as appId from 'ibmcloud-appid'

export const createUser = async ({ access_token: token }, _body: any) => {
  const profileManager = appId.UserProfileManager
  profileManager.init(AppId)

  const userAppId = await profileManager.getUserInfo(token)
  const user = {
    id: userAppId.sub,
    mail: userAppId.email,
    name: `${userAppId.given_name} ${userAppId.family_name}`
  }
}
