import fs from 'node:fs'
import { parse } from 'csv-parse/sync'

export default {
  watch: ['./characters.csv'],
  load(watchedFiles) {
    return parse(fs.readFileSync(watchedFiles[0], 'utf-8'), {
      columns: true,
      skip_empty_lines: true
    })
  }
}