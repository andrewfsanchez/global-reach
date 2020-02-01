
export interface UserData {
  loggedIn: boolean,
  email: string | null,
  name: string | null,
  phone: string | null,
  picture?: any
}

const LOGIN_ROUTE = '/login_user'
const REGISTER_ROUTE = '/register_user'
const GET_USER_ROUTE = '/get_user'

/*
  Login and Register could be expanded to include error handling from the server
*/

/**
 * Logs user in
 * @param email User email
 * @param password User password
 * @returns Boolean for either login was successful for not
 */
export async function Login(email: string, password: string): Promise<boolean> {
  const dataPayload = { email, password }

  const res = await fetch(LOGIN_ROUTE, {
    method: 'POST',
    mode: 'same-origin',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify(dataPayload)
  });

  // If didn't get a 200 OK back, assume it failed
  if (res.status !== 200) {
    return false
  }

  return true
}

/**
 * Registers a new user
 * @param email User email
 * @param password User password
 * @returns Object containiner boolean successful property and a token string is successful.
 */
export async function Register(user: UserData, password: string): Promise<boolean> {
  const res = await fetch(REGISTER_ROUTE, {
    method: 'POST',
    mode: 'same-origin',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify(user)
  });

  // If didn't get a 200 OK back, assume it failed
  if (res.status !== 201) {
    return false
  }

  return true
}

/**
 * Retrieves User Data
 * @returns UserData object
 */
export async function GetUser(): Promise<UserData> {
  const res = await fetch(GET_USER_ROUTE)

  // Expect a 403 Forbidden if not logged in
  if (res.status === 403) {
    return {
      loggedIn: false,
      email: null,
      name: null,
      phone: null
    }
  }

  // If not 403 probably either a 200 or some sort of cache response, parse it
  const data = await res.json()

  // Attributes are based on JSON field keys
  return {
    loggedIn: true,
    email: data.email,
    name: data.name,
    phone: data.phone
  }
}