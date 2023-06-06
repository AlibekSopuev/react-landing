export const SNACKBAR_VARIANTS = {
  positive: 'positive',
  informative: 'informative',
  attentive: 'attentive',
  destructive: 'destructive',
} as const

export interface ISnackbarParams {
  text?: string
  variant?: keyof typeof SNACKBAR_VARIANTS
}
