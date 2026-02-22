import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  passwordsMatch(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password === confirm ? null : { passwordsDontMatch: true };
  }

  minPasswordLength(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    return password.length >= 6 ? null : { minPasswordLengthDontMatch: true };
  }
  validEmail(group: AbstractControl): ValidationErrors | null {
    const email = group.get('email')?.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard-Mail-Regex

    return email && !emailRegex.test(email) ? { invalidEmail: true } : null;
  }
}
