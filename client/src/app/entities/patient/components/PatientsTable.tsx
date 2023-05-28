import Table from "app/ui/kit/Table/Table"
import DateUtils from "utils/transform/date"

import { Patient } from "../types"

interface PatientsTableProps {
  body: Patient[]
}

function PatientsTable(props: PatientsTableProps) {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Диагноз</th>
          <th>Лечащий врач</th>
          <th>Пол</th>
          <th>Возраст</th>
          <th>Дата рождения</th>
        </tr>
      </thead>
      <tbody>
        {props.body.map(patient => (
          <tr key={patient.id}>
            <td>{patient.id}</td>
            <td>{patient.diagnosis}</td>
            <td>{patient.gender === "female" ? "Женский" : "Мужской"}</td>
            <td>{patient.age} Лет</td>
            <td>{DateUtils.humanize(patient.birthDate)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default PatientsTable
