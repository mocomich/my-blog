import { format } from 'date-fns'
import ja from 'date-fns/locale/ja'

export const formatDateToYYYYMMDD = (date: string) => {
  return format(new Date(date), 'yyyy-MM-dd', { locale: ja })
}
