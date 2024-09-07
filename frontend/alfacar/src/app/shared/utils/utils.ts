export default class Utils {
  static applyPhoneMask(cellphoneNumber: string): string {
    if (!cellphoneNumber) return ""
    cellphoneNumber = cellphoneNumber.replace(/\D/g,'')
    cellphoneNumber = cellphoneNumber.replace(/(\d{2})(\d)/,"($1) $2")
    cellphoneNumber = cellphoneNumber.replace(/(\d)(\d{4})$/,"$1-$2")
    return cellphoneNumber
  }

  static applyCNPJMask(value: string): string {0
    return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
  }
}
