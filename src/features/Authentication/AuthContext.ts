import React from 'react';
import { User } from '../../types';

export const AuthContext = React.createContext<User | null>(null);
