import { DashboardLayout, DashboardTab, DashboardTabs } from "app/areas/dashboard"
import PatientsTable from "app/entities/patient/components/PatientsTable"
import TabRoute from "app/ui/synthetic/TabRouter/TabRoute"
import TabRouter from "app/ui/synthetic/TabRouter/TabRouter"

enum HomeTabs { Doctors, Patients }

function HomeView() {
  return (
    <TabRouter defaultPath={HomeTabs.Doctors}>
      <div className="wrapper">
        <DashboardLayout>
          <DashboardTabs>
            <DashboardTab to={HomeTabs.Doctors}>Врачи</DashboardTab>
            <DashboardTab to={HomeTabs.Patients}>Пациенты</DashboardTab>
          </DashboardTabs>

          <TabRoute path={HomeTabs.Doctors}>

          </TabRoute>
          <TabRoute path={HomeTabs.Patients}>
            <PatientsTable body={[{
              age: 25,
              analyzes: [{
                appointment: "asdsad",
                date: new Date,
                diagnosis: "",
                ICD10Code: "",
                id: 1,
                patientId: 1,
              }],
              diagnosis: "Хронический тонзиллит",
              id: 1,
              birthDate: new Date,
              fullName: "",
              gender: "female",
              middleName: "",
              name: "",
              surname: "",
              therapist: {
                fullName: "asd",
                id: 1,
                middleName: "",
                name: "",
                surname: "",
                specialty: "asd"
              }
            }]} />
          </TabRoute>
        </DashboardLayout>
      </div>
    </TabRouter>
  )
}

export default HomeView
