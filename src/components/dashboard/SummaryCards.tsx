import { Users, Clock, Target, AlertTriangle, FileText, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const summaryData = [
  {
    title: "Total de Alunos",
    value: "32",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary-light"
  },
  {
    title: "Tempo Médio Online",
    value: "2h 45m",
    icon: Clock,
    color: "text-primary",
    bgColor: "bg-primary-light"
  },
  {
    title: "Média de Acertos",
    value: "78%",
    icon: Target,
    color: "text-success",
    bgColor: "bg-success-light"
  },
  {
    title: "Conteúdo Mais Difícil",
    value: "Ponteiros em C",
    icon: AlertTriangle,
    color: "text-warning",
    bgColor: "bg-warning-light"
  },
  {
    title: "Total de Testes",
    value: "1,247",
    icon: FileText,
    color: "text-primary",
    bgColor: "bg-primary-light"
  },
  {
    title: "Perguntas Abertas",
    value: "89",
    icon: MessageSquare,
    color: "text-primary",
    bgColor: "bg-primary-light"
  }
];

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
      {summaryData.map((item, index) => (
        <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {item.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${item.bgColor}`}>
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}