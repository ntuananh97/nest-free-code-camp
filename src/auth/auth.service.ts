import { Injectable } from "@nestjs/common";
import {User} from '@prisma/client'

@Injectable({})
export class AuthService { 
    login () {

        return 'Login successful';
    }

    signup () {
        return 'Signup successful';
    }
}