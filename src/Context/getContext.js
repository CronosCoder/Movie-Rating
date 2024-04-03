import { useContext } from 'react';
import { AuthContext } from './ContextApi';

export const getAuth = () => useContext(AuthContext);