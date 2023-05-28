class DateUtils {
  static humanize(date: Date, lang = "en") {
    return date.toLocaleString(lang)
  }
}

export default DateUtils
