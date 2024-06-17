import { Injectable, inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
 providedIn: 'root'
})
export class AuthResolver implements Resolve<boolean> {
    constructor(private authService: AuthenticationService) {}

    resolve(): boolean {
        this.authService.checkToken();
        return true;
    }
}

export function authResolver(): boolean {
    const resolver = inject(AuthResolver);
    return resolver.resolve();
}