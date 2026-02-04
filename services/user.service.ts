import { api } from '@/lib/api'
import { User } from '@/types/user'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export function getUsers() {
    return api<User[]>(`${BASE_URL}/users`)
}
