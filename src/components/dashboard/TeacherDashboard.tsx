import { useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { SummaryCards } from "./SummaryCards";
import { PerformanceChart } from "./PerformanceChart";
import { StudentsTable } from "./StudentsTable";
import { DifficultTopics } from "./DifficultTopics";
import { StudentDetails } from "./StudentDetails";
import { ChatPanel } from "./ChatPanel";
import { ActionButtons } from "./ActionButtons";

export function TeacherDashboard() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentClick = (student: any) => {
    setSelectedStudent(student);
  };

  const handleCloseDetails = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Fixed Header */}
      <div className="sticky top-0 z-40">
        <DashboardHeader />
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Summary Cards */}
        <SummaryCards />

        {/* Charts and Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Chart - Takes 2 columns */}
          <div className="lg:col-span-2">
            <PerformanceChart />
          </div>
          
          {/* Difficult Topics - Takes 1 column */}
          <div className="lg:col-span-1">
            <DifficultTopics />
          </div>
        </div>

        {/* Students Table */}
        <StudentsTable onStudentClick={handleStudentClick} />

        {/* Bottom Row - Chat and Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChatPanel />
          <ActionButtons />
        </div>
      </div>

      {/* Student Details Modal */}
      {selectedStudent && (
        <StudentDetails 
          student={selectedStudent} 
          onClose={handleCloseDetails} 
        />
      )}
    </div>
  );
}