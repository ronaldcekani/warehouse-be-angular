export interface Authenticate {
  email: string
  password: string
}

export interface PasswordReset {
  password: string
  confirmPassword: string
}
