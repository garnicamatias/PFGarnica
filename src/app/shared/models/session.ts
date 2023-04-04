
import { User } from './user';

export interface Session {
    isSessionActive : boolean,
    activeUser ?: User
}