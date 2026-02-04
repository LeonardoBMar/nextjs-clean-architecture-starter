import { getUsers } from "@/services/user.service";
import { UserCard } from '@/components/UserCard'

export default async function UsersPage() {
    const users = await getUsers()

    return (
        <main>
            <h1>Users</h1>

            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </main>
    )
}
