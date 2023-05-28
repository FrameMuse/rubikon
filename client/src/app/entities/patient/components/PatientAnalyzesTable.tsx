import Table from "app/ui/kit/Table/Table"
import DateUtils from "utils/transform/date"

import { PatientAnalyze } from "../types"

interface PatientAnalyzesTableProps {
  body: PatientAnalyze[]
}

function PatientAnalyzesTable(props: PatientAnalyzesTableProps) {
  return (
    <Table>
      <head>
        <tr>
          <th>ID</th>
          <th>Назначение</th>
          <th>Код МКБ-10</th>
          <th>Диагноз</th>
          <th>Пациент</th>
          <th>Дата оказания услуги</th>
        </tr>
      </head>
      <body>
        {props.body.map(analyze => (
          <tr key={analyze.id}>
            <td>{analyze.id}</td>
            <td>{analyze.appointment}</td>
            <td>{analyze.ICD10Code}</td>
            <td>{analyze.diagnosis}</td>
            <td>123</td>
            <td>{DateUtils.humanize(analyze.date)}</td>
          </tr>
        ))}
      </body>
    </Table>
  )
}

export default PatientAnalyzesTable
