import { User } from '@/types/user'

interface Props {
    user: User
}

export function UserCard({ user }: Props) {
    return (
        <div>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
        </div>
    )
}
